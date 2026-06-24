import './Herobanner.css'
import img1 from '../../assets/img1.webp'
import img2 from '../../assets/img2.webp'
import img3 from '../../assets/img3.webp'
import { useState } from 'react'

function Herobanner() {
    const imagens = [img1, img2, img3]
    const [atual, setAtual] = useState(0)
    function proximaImagem() {
        setAtual((atual + 1) % imagens.length)
    }
    function imagemAnterior() {
        setAtual((atual - 1 + imagens.length) % imagens.length)
    }

    return (
        <section className='container-hero'>
            <img className="img-hero" src={imagens[atual]} />
            <button className='button-seta-direita' onClick={proximaImagem}></button>
            <button className='button-seta-esquerda' onClick={imagemAnterior}></button>
        </section>



    )
}
export default Herobanner