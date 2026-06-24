import './FacilidadesCard.css'

interface FacilidadeCardProps{

    nome: string,
    imagem: string,
    descricao: string,
}

function FacilidadeCard ({ nome, imagem, descricao}: FacilidadeCardProps){
    return(
    <article className='container-infos'>
        <img src={imagem} alt={nome} />
        <div className='secao-infos-texto'>
        <h3 className='info-nome'>{nome}</h3>
        <p className='info-descricao'>{descricao}</p>
        </div>
        
    </article>
    )
}

export default FacilidadeCard