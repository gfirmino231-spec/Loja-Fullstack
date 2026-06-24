import './CategoriaCard.css'

interface CategoriaCardProps {
    nome: string,
    imagem: string,
}
function CategoriaCard ({nome , imagem}: CategoriaCardProps){
    return (
        <article >
                <img className="Imagem-Produto" src={imagem} alt={nome} />
                <p className="Nome-Produto"> {nome} </p>
        </article>
    )
}
export default CategoriaCard