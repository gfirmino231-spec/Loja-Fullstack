import { useQuery } from "@apollo/client";
import ProdutoCard from "./ProdutoCard"
import { GET_PRODUCTS } from "../../graphql/queries/produto";
import { Product } from "@graphql-types/generated-types";
import './Produtos.css'

function Produtos(){
    const { data } = useQuery<{ products: Product[] }>(GET_PRODUCTS);

    return (
        <section className="secao-produtos">
            <h2 className="Titulo-Produto">Produtos que estão bombando!</h2>
            {data?.products.map((produto)=>(
                <ProdutoCard
                key={produto.id}
                nome = {produto.name}
                valor={produto.price}
                imagem={produto.image}
                descricao={produto.description}
                cores={produto.colors.map((cor) => ({ cor: cor.displayName, imagem: produto.image }))}
                tamanhos={produto.sizes.map((tamanho) => tamanho.displayName)}
                />
           ))}
        </section>
    )
}
export default Produtos