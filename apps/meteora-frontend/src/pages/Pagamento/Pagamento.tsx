import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import Navbar from '../../components/Navbar/Navbar'
import { useCart } from '../../components/Context/CartContext'
import { FINALIZAR_COMPRA } from '../../graphql/mutations/checkout'
import './Pagamento.css'

function formatarMoeda(valor: number): string {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor)
}

function Pagamento() {
    const { itens, total, limparCarrinho } = useCart()
    const navigate = useNavigate()
    const [finalizarCompra, { loading }] = useMutation(FINALIZAR_COMPRA)
    const [erro, setErro] = useState('')
    const [compraFinalizada, setCompraFinalizada] = useState(false)

    async function handleFinalizarCompra() {
        setErro('')
        try {
            await finalizarCompra({
                variables: {
                    itens: itens.map((item) => ({
                        productId: Number(item.produtoId),
                        colorId: Number(item.corId),
                        sizeId: Number(item.tamanhoId),
                        quantidade: item.quantidade,
                    })),
                },
            })
            limparCarrinho()
            setCompraFinalizada(true)
        } catch (err) {
            setErro(err instanceof Error ? err.message : 'Não foi possível finalizar a compra. Tente novamente.')
        }
    }

    if (compraFinalizada) {
        return (
            <>
                <Navbar />
                <section className="pagamento-vazio">
                    <p>Compra finalizada com sucesso!</p>
                    <button className="botao-voltar-loja" onClick={() => navigate('/')}>
                        Voltar para a loja
                    </button>
                </section>
            </>
        )
    }

    if (itens.length === 0) {
        return (
            <>
                <Navbar />
                <section className="pagamento-vazio">
                    <p>Sua sacola está vazia.</p>
                    <button className="botao-voltar-loja" onClick={() => navigate('/')}>
                        Voltar para a loja
                    </button>
                </section>
            </>
        )
    }

    return (
        <>
            <Navbar />
            <section className="pagamento">
                <h1 className="pagamento-titulo">Finalizar compra</h1>
                <div className="pagamento-itens">
                    {itens.map((item) => (
                        <div className="pagamento-item" key={item.id}>
                            <img className="pagamento-item-imagem" src={item.imagem} alt={item.nome} />
                            <div className="pagamento-item-info">
                                <span className="pagamento-item-nome">{item.nome}</span>
                                <span className="pagamento-item-detalhe">
                                    Cor: {item.cor} • Tamanho: {item.tamanho}
                                </span>
                                <span className="pagamento-item-detalhe">Quantidade: {item.quantidade}</span>
                            </div>
                            <strong className="pagamento-item-valor">
                                {formatarMoeda(item.valor * item.quantidade)}
                            </strong>
                        </div>
                    ))}
                </div>
                <div className="pagamento-total">
                    <span>Total</span>
                    <strong>{formatarMoeda(total)}</strong>
                </div>
                {erro && <p className="pagamento-erro">{erro}</p>}
                <button className="botao-finalizar-pagamento" onClick={handleFinalizarCompra} disabled={loading}>
                    {loading ? 'Finalizando...' : 'Finalizar compra'}
                </button>
            </section>
        </>
    )
}

export default Pagamento
