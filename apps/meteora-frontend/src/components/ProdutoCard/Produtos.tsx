import { useQuery } from "@apollo/client";
import ProdutoCard from "./ProdutoCard"
import { GET_PRODUCTS } from "../../graphql/queries/produto";
import { Product } from "@graphql-types/generated-types";
import './Produtos.css'

function Produtos(){
    const { data } = useQuery<{ products: Product[] }>(GET_PRODUCTS);

    const destaques: Product[] = [];
    const categoriasVistas = new Set<string>();
    for (const produto of data?.products ?? []) {
        if (categoriasVistas.has(produto.category.id)) continue;
        categoriasVistas.add(produto.category.id);
        destaques.push(produto);
    }

    return (
        <section className="secao-produtos">
            <h2 className="Titulo-Produto">Produtos que estão bombando!</h2>
            {destaques.map((produto)=>(
                <ProdutoCard
                key={produto.id}
                id={produto.id}
                nome = {produto.name}
                valor={produto.price}
                imagem={produto.image}
                descricao={produto.description}
                cores={produto.colors.map((cor) => ({ id: cor.id, cor: cor.displayName, imagem: cor.image, estoque: cor.stock }))}
                tamanhos={produto.sizes.map((tamanho) => ({ id: tamanho.id, tamanho: tamanho.displayName, estoque: tamanho.stock }))}
                />
           ))}
        </section>
    )
}
export default Produtos