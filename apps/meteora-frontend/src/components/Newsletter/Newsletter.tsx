import './Newsletter.css'

function Newsletter(){
    return(
    <section className='secao-newsletter'>
         <h3 className='titulo-newsletter'>
            Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra?<strong>Cadastre-se!</strong> 
        </h3>
        <div className='input-grupo'>
        <input className='input-newsletter'type="text" placeholder="Digite Seu email"/>
        <button className='botao-newsletter'> Enviar</button>
        </div>
        

    </section>
    )
}

export default Newsletter