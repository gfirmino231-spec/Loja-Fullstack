import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

interface Product {
  name: string;
  description: string;
  price: number;
  seller: string;
  colors: Array<{
    id: string;
    displayName: string;
    image?: string;
  }>;
  sizes: Array<{
    id: string;
    displayName: string;
  }>;
  image: string;
}

const bolsas: Product[] = [
  {
    name: 'Bolsa Coringa',
    description:
      'Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!',
    price: 120.0,
    seller: 'Riachuelo',
    colors: [
      { id: 'camel', displayName: 'Camel', image: '/destaques/bolsa-coringa-camel.jpg' },
      { id: 'black', displayName: 'Preta', image: '/destaques/bolsa-coringa-preta.png' },
      { id: 'blue', displayName: 'Azul', image: '/destaques/bolsa-coringa-azul.png' },
    ],
    sizes: [{ id: 'unique', displayName: 'Único' }],
    image: '/destaques/bolsa-coringa-camel.jpg',
  },
  
];
const calcas: Product[] = [
  {
    name: 'Calça Alfaiataria',
    description: 'Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!',
    price: 180.0,
    seller: 'Renner',
    colors: [
      { id: 'beige', displayName: 'Bege', image: '/destaques/calca-alfaiataria-bege.jpg' },
      { id: 'red', displayName: 'Vermelha', image: '/destaques/calca-alfaiataria-vermelha.png' },
      { id: 'blue', displayName: 'Azul', image: '/destaques/calca-alfaiataria-azul.png' },
    ],
    sizes: [
      { id: '36', displayName: '36' },
      { id: '38', displayName: '38' },
      { id: '40', displayName: '40' },
      { id: '42', displayName: '42' },
      { id: '44', displayName: '44' },
    ],
    image: '/destaques/calca-alfaiataria-bege.jpg',
  },

];

const camisetas: Product[] = [
  {
    name: 'Camiseta Conforto',
    description:
      'Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.',
    price: 70.0,
    seller: 'C&A',
    colors: [
      { id: 'white', displayName: 'Branca', image: '/destaques/camiseta-conforto-branca.jpg' },
      { id: 'green', displayName: 'Verde', image: '/destaques/camiseta-conforto-verde.png' },
      { id: 'brown', displayName: 'Marrom', image: '/destaques/camiseta-conforto-marrom.png' },
    ],
    sizes: [
      { id: 'p', displayName: 'P' },
      { id: 'm', displayName: 'M' },
      { id: 'g', displayName: 'G' },
      { id: 'gg', displayName: 'GG' },
    ],
    image: '/destaques/camiseta-conforto-branca.jpg',
  },
  
];

const jaquetas: Product[] = [
  {
    name: 'Jaqueta Jeans',
    description:
      'Modelo unissex oversized com gola de camurça. Atemporal e autêntica!',
    price: 150.0,
    seller: 'Riachuelo',
    colors: [
      { id: 'denim', displayName: 'Jeans', image: '/destaques/jaqueta-jeans-jeans.jpg' },
      { id: 'gray', displayName: 'Cinza', image: '/destaques/jaqueta-jeans-cinza.png' },
      { id: 'black', displayName: 'Preta', image: '/destaques/jaqueta-jeans-preta.png' },
    ],
    sizes: [
      { id: 'pp', displayName: 'PP' },
      { id: 'p', displayName: 'P' },
      { id: 'm', displayName: 'M' },
      { id: 'g', displayName: 'G' },
      { id: 'gg', displayName: 'GG' },
    ],
    image: '/destaques/jaqueta-jeans-jeans.jpg',
  },
  
];

const oculos: Product[] = [
  {
    name: 'Óculos Redondo',
    description: 'Armação metálica em grafite com lentes arredondadas. Sem erro!',
    price: 120.0,
    seller: 'Chilli Beans',
    colors: [
      { id: 'graphite', displayName: 'Grafite', image: '/destaques/oculos-redondo-grafite.jpg' },
      { id: 'black', displayName: 'Preto', image: '/destaques/oculos-redondo-preto.png' },
      { id: 'casual', displayName: 'Casual', image: '/destaques/oculos-redondo-casual.png' },
    ],
    sizes: [{ id: 'unique', displayName: 'Único' }],
    image: '/destaques/oculos-redondo-grafite.jpg',
  },
 
];

const tenis = [
  {
    name: 'Tênis Chunky',
    description:
      'Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.',
    price: 250.0,
    seller: 'Adidas',
    colors: [
      { id: 'white', displayName: 'Branco', image: '/destaques/tenis-chunky-branco.jpg' },
      { id: 'yellow', displayName: 'Amarelo', image: '/destaques/tenis-chunky-amarelo.png' },
      { id: 'red', displayName: 'Vermelho', image: '/destaques/tenis-chunky-vermelho.png' },
    ],
    sizes: [
      { id: '37', displayName: '37' },
      { id: '38', displayName: '38' },
      { id: '39', displayName: '39' },
      { id: '40', displayName: '40' },
      { id: '41', displayName: '41' },
      { id: '42', displayName: '42' },
    ],
    image: '/destaques/tenis-chunky-branco.jpg',
  },
];

const categories = [
  {
    id: 'camisetas',
    displayName: 'Camisetas',
    icon: '/categorias/camisetas.png',
  },
  {
    id: 'bolsas',
    displayName: 'Bolsas',
    icon: '/categorias/bolsas.png',
  },
  {
    id: 'calcados',
    displayName: 'Calçados',
    icon: '/categorias/calcados.png',
  },
  {
    id: 'calcas',
    displayName: 'Calças',
    icon: '/categorias/calcas.png',
  },
  {
    id: 'casacos',
    displayName: 'Casacos',
    icon: '/categorias/casacos.png',
  },
  {
    id: 'oculos',
    displayName: 'Óculos',
    icon: '/categorias/oculos.png',
  },
];

async function main() {
  const createdCategories: { id: number; displayName: string; icon: string }[] = [];
  for (const category of categories) {
    const createdCategory = await prisma.category.upsert({
      where: { displayName: category.displayName },
      update: {
        icon: category.icon,
      },
      create: {
        displayName: category.displayName,
        icon: category.icon,
      },
    });
    createdCategories.push(createdCategory);
  }

  const products = [
    { items: bolsas, category: 'Bolsas' },
    { items: calcas, category: 'Calças' },
    { items: camisetas, category: 'Camisetas' },
    { items: jaquetas, category: 'Casacos' },
    { items: oculos, category: 'Óculos' },
    { items: tenis, category: 'Calçados' },
  ];

  for (const productSet of products) {
    const category = createdCategories.find(
      (c) => c.displayName === productSet.category,
    );

    if (!category) continue; // pula se não encontrar

    for (const product of productSet.items) {
      const seller = await prisma.seller.upsert({
        where: { name: product.seller },
        update: {},
        create: { name: product.seller },
      });

      const createdProduct = await prisma.product.create({
        data: {
          name: product.name,
          description: product.description,
          price: product.price,
          sellerId: seller.id,
          image: product.image,
          categoryId: category.id,
        },
      });

      for (const color of product.colors) {
        const createdColor = await prisma.color.upsert({
          where: { displayName: color.displayName },
          update: {},
          create: {
            displayName: color.displayName,
          },
        });

        await prisma.productColor.create({
          data: {
            productId: createdProduct.id,
            colorId: createdColor.id,
            image: color.image ?? product.image,
          },
        });
      }

      for (const size of product.sizes) {
        const createdSize = await prisma.size.upsert({
          where: { displayName: size.displayName },
          update: {},
          create: {
            displayName: size.displayName,
          },
        });

        await prisma.productSize.create({
          data: {
            productId: createdProduct.id,
            sizeId: createdSize.id,
          },
        });
      }
    }
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });