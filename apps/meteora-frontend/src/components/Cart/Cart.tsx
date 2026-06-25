import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../Context/CartContext'
import './Cart.css'

function formatarMoeda(valor: number): string {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor)
}

function Cart() {
    const [aberto, setAberto] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const { itens, total, quantidadeTotal, removerItem, alterarQuantidade } = useCart()
    const navigate = useNavigate()

    useEffect(() => {
        function lidarComCliqueFora(evento: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(evento.target as Node)) {
                setAberto(false)
            }
        }
        document.addEventListener('mousedown', lidarComCliqueFora)
        return () => document.removeEventListener('mousedown', lidarComCliqueFora)
    }, [])

    function lidarComFinalizarCompra() {
        setAberto(false)
        navigate('/pagamento')
    }

    return (
        <div className="carrinho-container" ref={containerRef}>
            <button className="botao-carrinho" onClick={() => setAberto((valor) => !valor)}>
                🛒
                {quantidadeTotal > 0 && <span className="carrinho-badge">{quantidadeTotal}</span>}
            </button>
            {aberto && (
                <div className="carrinho-dropdown">
                    <header className="carrinho-header">
                        <span>Carrinho de Compras</span>
                        <button className="carrinho-fechar" onClick={() => setAberto(false)}>×</button>
                    </header>
                    <div className="carrinho-itens">
                        {itens.length === 0 ? (
                            <p className="carrinho-vazio">Sua sacola está vazia</p>
                        ) : (
                            itens.map((item) => (
                                <div className="carrinho-item" key={item.id}>
                                    <img className="carrinho-item-imagem" src={item.imagem} alt={item.nome} />
                                    <div className="carrinho-item-info">
                                        <span className="carrinho-item-nome">{item.nome}</span>
                                        <div className="carrinho-item-quantidade">
                                            <span>Quantidade:</span>
                                            <button onClick={() => alterarQuantidade(item.id, item.quantidade - 1)}>-</button>
                                            <span>{item.quantidade}</span>
                                            <button onClick={() => alterarQuantidade(item.id, item.quantidade + 1)}>+</button>
                                        </div>
                                        <strong className="carrinho-item-valor">
                                            {formatarMoeda(item.valor * item.quantidade)}
                                        </strong>
                                    </div>
                                    <button
                                        className="carrinho-item-remover"
                                        onClick={() => removerItem(item.id)}
                                        title="Remover"
                                    >
                                        🗑
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                    {itens.length > 0 && (
                        <footer className="carrinho-footer">
                            <div className="carrinho-total">
                                <span>Total:</span>
                                <strong>{formatarMoeda(total)}</strong>
                            </div>
                            <button className="botao-finalizar" onClick={lidarComFinalizarCompra}>
                                Finalizar compra
                            </button>
                        </footer>
                    )}
                </div>
            )}
        </div>
    )
}

export default Cart
