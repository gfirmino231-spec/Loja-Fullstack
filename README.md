# Meteora

E-commerce fictício de moda, construído como monorepo full-stack: **NestJS + GraphQL + Prisma** no
backend e **React + Vite + Apollo Client** no frontend.

## Stack

| Camada | Tecnologias |
|---|---|
| Backend | NestJS, GraphQL (Apollo Server), Prisma ORM, PostgreSQL (Supabase), bcryptjs |
| Frontend | React 19, Vite, Apollo Client, React Router |
| Banco | PostgreSQL hospedado no Supabase (região `sa-east-1`) |
| Monorepo | npm workspaces |

## Arquitetura

```
Navegador (React)
   │  Apollo Client → POST http://localhost:3000/graphql
   ▼
NestJS (Resolvers → Services → Prisma Client)
   ▼
PostgreSQL (Supabase)
```

Toda comunicação entre frontend e backend passa por um único endpoint GraphQL
(`POST /graphql`) — não há rotas REST neste projeto.

## Estrutura do repositório

```
meteora-monorepo/
├─ apps/
│  ├─ meteora-backend/      # API NestJS + GraphQL + Prisma
│  │  ├─ prisma/
│  │  │  ├─ schema.prisma   # modelos do banco
│  │  │  ├─ migrations/     # histórico versionado de alterações no schema
│  │  │  └─ seed.ts         # popula o banco com catálogo fictício
│  │  └─ src/
│  │     ├─ category/       # query categories
│  │     ├─ product/        # query products + resolve colors/sizes
│  │     ├─ user/           # mutations register/login
│  │     ├─ checkout/       # mutation finalizarCompra (baixa de estoque)
│  │     └─ prisma/         # PrismaService (conexão única injetada)
│  ├─ meteora-frontend/     # SPA React (Vite)
│  │  └─ src/
│  │     ├─ components/     # Navbar, Cart, Modal, ProdutoCard, Categorias...
│  │     ├─ pages/          # Home, Login, Cadastro, Pagamento
│  │     └─ graphql/        # queries/ e mutations/ (gql)
│  └─ libs/graphql-types/   # tipos TS gerados via graphql-codegen
└─ package.json             # workspaces raiz
```

## Funcionalidades

- **Catálogo**: categorias e produtos paginados, cada produto com múltiplas cores (imagem própria
  por cor) e tamanhos.
- **Carrinho de compras**: menu suspenso (dropdown) com controle de quantidade por item, persistido
  apenas em memória (Context API do React).
- **Cadastro e login**: validação de formato de e-mail, bloqueio de e-mail duplicado, senha com hash
  (bcrypt). Sem JWT/sessão persistente — autenticação simplificada para fins de estudo.
- **Estoque por lote**: cada combinação produto+cor e produto+tamanho tem 50 unidades fictícias.
  Finalizar a compra decrementa cor e tamanho **atomicamente** (tudo ou nada) via transação Prisma.
  Não há gateway de pagamento — é uma baixa de estoque fictícia.

## Pré-requisitos

- Node.js 20+
- Uma instância PostgreSQL acessível (este projeto usa o [Supabase](https://supabase.com) gratuito)

## Configuração

1. Clone o repositório e instale as dependências (na raiz, os workspaces resolvem tudo):

   ```bash
   npm install
   ```

2. Configure as variáveis de ambiente do backend:

   ```bash
   cp apps/meteora-backend/.env.example apps/meteora-backend/.env
   ```

   Edite `apps/meteora-backend/.env` com a connection string do seu banco. São necessárias duas
   URLs (veja por quê na seção [Banco de dados](#banco-de-dados)):

   | Variável | Porta | Uso |
   |---|---|---|
   | `DATABASE_URL` | 6543 (pooler) | Usada pela aplicação em runtime |
   | `DIRECT_URL` | 5432 (direta) | Usada pelo Prisma CLI para migrations |

3. Aplique as migrations e popule o banco:

   ```bash
   cd apps/meteora-backend
   npx prisma migrate deploy
   npx prisma db seed
   ```

4. Suba os dois servidores (em terminais separados):

   ```bash
   npm run start:backend    # http://localhost:3000/graphql
   npm run start:frontend   # http://localhost:5173
   ```

> **Windows:** prefira `npm run start:backend` (sem `--watch`). O modo watch do Nest CLI
> (`npm --workspace apps/meteora-backend run start:dev`) tem um bug conhecido com o utilitário
> `tree-kill` no Windows que pode derrubar o processo ao salvar um arquivo.

## Scripts úteis

| Comando (raiz) | O que faz |
|---|---|
| `npm run start:backend` | Sobe a API NestJS na porta 3000 |
| `npm run start:frontend` | Sobe o frontend Vite na porta 5173 |
| `npm run graphql:generate` | Regenera os tipos TS do frontend a partir do schema GraphQL |

| Comando (dentro de `apps/meteora-backend`) | O que faz |
|---|---|
| `npx prisma studio` | Interface visual para ver/editar dados do banco |
| `npx prisma migrate dev --name <nome>` | Cria e aplica uma nova migration (ambiente interativo) |
| `npx prisma migrate deploy` | Aplica migrations pendentes sem prompt interativo |
| `npx prisma db seed` | Popula o banco com o catálogo fictício |
| `npx prisma migrate reset --force` | **Apaga todos os dados** e reaplica todas as migrations — só em ambiente de desenvolvimento |
| `npx tsc --noEmit -p .` | Checa os tipos sem compilar |

## API GraphQL

| Operação | Tipo | Descrição |
|---|---|---|
| `categories` | Query | Lista todas as categorias |
| `products(page, limit)` | Query | Lista produtos paginados, com cores, tamanhos, categoria e vendedor |
| `register(email, password)` | Mutation | Cria um usuário novo (valida e-mail, bloqueia duplicados) |
| `login(email, password)` | Mutation | Autentica um usuário existente |
| `finalizarCompra(itens)` | Mutation | Decrementa o estoque de cor e tamanho de cada item, atomicamente |

O schema completo gerado automaticamente está em `apps/meteora-backend/src/schema.gql` — nunca é
editado manualmente, é regenerado a cada boot do servidor a partir dos decorators do código.

## Banco de dados

O schema (`apps/meteora-backend/prisma/schema.prisma`) tem os seguintes modelos:

```
Category 1───* Product *───1 Seller
                 │   │
                 │   └──*  ProductSize  *──1 Size
                 │              (stock: 50)
                 └──*  ProductColor  *──1 Color
                              (stock: 50, image)

User  (independente, sem relação com Product)
```

- **`ProductColor`** e **`ProductSize`** guardam o estoque por combinação produto+variação
  (`@@unique([productId, colorId])` / `@@unique([productId, sizeId])`), além da imagem específica
  de cada cor.
- **`User`** guarda apenas e-mail (único) e senha em hash — nunca é exposto via GraphQL além de
  `id`/`email`.

### Por que duas connection strings?

O Supabase oferece um *pooler* (PgBouncer, porta 6543) para conexões curtas e simultâneas — ideal
para a aplicação em runtime — e uma porta de conexão direta (5432), necessária para operações de
schema do Prisma CLI (migrations exigem locks que o pooler em modo transação não suporta bem).

### Resetando o banco

> ⚠️ `prisma migrate reset` apaga **todos os dados**. Use apenas em desenvolvimento.

```bash
npx prisma migrate reset --force
npx prisma db seed   # o seed não roda sempre automaticamente após o reset
```

O script de seed (`prisma/seed.ts`) usa `create` para os produtos — rodá-lo duas vezes sem resetar
o banco **duplica** o catálogo. Para recomeçar do zero, sempre reset + seed juntos.

## Solução de problemas

| Sintoma | Causa provável | Como verificar |
|---|---|---|
| "Failed to fetch" no front | Backend ou frontend não estão rodando | `curl -X POST http://localhost:3000/graphql -d '{"query":"{__typename}"}'` |
| Toda query trava sem erro | VPN/firewall bloqueando as portas do Postgres (5432/6543) | Testar TCP direto na porta; HTTPS (443) continua funcionando normalmente nesse caso |
| Backend cai com `EADDRINUSE` ao salvar um arquivo | Bug do `tree-kill` do Nest CLI em modo `--watch` no Windows | Rodar sem `--watch` (`npm run start`) |

## Documentação adicional

Um material de estudo mais detalhado sobre a lógica do carrinho, autenticação e banco de dados
está disponível em `Projeto-Meteora-Estudo.pdf`, na raiz do projeto (fora deste repositório).
