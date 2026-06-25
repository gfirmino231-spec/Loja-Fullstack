import { useState } from 'react'
import './ProdutoCard.css'
import Modal from '../Modal/Modal'


interface ProdutoCardProps {
    id: string,
    nome: string,
    imagem: string,
    valor: number,
    descricao: string,
    cores: { id: string, cor: string, imagem: string }[]
    tamanhos: { id: string, tamanho: string }[]
}

function ProdutoCard({ id, nome, imagem, valor, descricao, cores, tamanhos }: ProdutoCardProps) {

    const [modalAberto, setModalAberto] = useState(false)

    return (
        <article className='card-produto'>
            <img className='img-produto' src={imagem} alt={nome} />
            <div className='card-conteudo'>
                <h3 className='nome-produto'>
                    {nome}
                </h3>
                <p className='descricao-produto'> {descricao}</p>
                <p className='valor-produto' >
                    <strong>
                        {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(valor)}
                    </strong>

                </p>
                <button onClick={() => setModalAberto(true)} className='botao-produto'>Ver Mais</button>
                {modalAberto && (
                    <Modal
                        id={id}
                        nome={nome}
                        imagem={imagem}
                        valor={valor}
                        descricao={descricao}
                        onFechar={() => setModalAberto(false)}
                        cores={cores}
                        tamanhos={tamanhos}
                    />
                )}
            </div>

        </article>
    )

}
export default ProdutoCard