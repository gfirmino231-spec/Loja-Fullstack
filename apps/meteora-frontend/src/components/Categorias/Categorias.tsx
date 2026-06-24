import { useQuery } from "@apollo/client";
import CategoriaCard from "./CategoriaCard";
import { GET_CATEGORIES } from "../../graphql/queries/categoria";
import { Category } from "@graphql-types/generated-types";
import './Categorias.css'

function Categorias(){
    const { data } = useQuery<{ categories: Category[] }>(GET_CATEGORIES);

    return(
    <section className="Container-Produto">
    <h2 className="Titulos-Categoria">Busque por categoria:</h2>
    {data?.categories.map((categoria)=>(
    <CategoriaCard
    key={categoria.id}
    nome = {categoria.displayName}
    imagem = {categoria.icon}
    />
))}
    </section>

    )

}
export default Categorias
