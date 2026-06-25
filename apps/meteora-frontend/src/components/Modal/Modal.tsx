import { useState } from 'react'
import checkcircle from '../../assets/check-circle.png'
import iconefechar from '../../assets/icone-fechar.png'
import { useCart } from '../Context/CartContext'
import './Modal.css'

interface Cor {
    id: string
    cor: string
    imagem: string
    estoque: number
}

interface Tamanho {
    id: string
    tamanho: string
    estoque: number
}

interface ModalProps {
    id: string
    nome: string
    imagem: string
    valor: number
    descricao: string
    cores: Cor[]
    tamanhos: Tamanho[]
    onFechar: () => void
}

const CORES_HEX: Record<string, string> = {
    camel: '#C19A6B',
    preta: '#1A1A1A',
    preto: '#1A1A1A',
    azul: '#4A6FA5',
    bege: '#E8DCC8',
    vermelha: '#C0392B',
    vermelho: '#C0392B',
    branco: '#F2F2EF',
    branca: '#F2F2EF',
    amarelo: '#F1C40F',
    jeans: '#4A6FA5',
    cinza: '#9CA3AF',
    verde: '#3F7D4F',
    marrom: '#6F4E37',
    grafite: '#3A3A3A',
}

function corParaHex(nome: string): string {
    return CORES_HEX[nome.toLowerCase()] ?? '#9CA3AF'
}

function Modal({ id, nome, imagem, valor, descricao, cores, tamanhos, onFechar }: ModalProps) {
    const [corSelecionada, setCorSelecionada] = useState(() => {
        const indiceDisponivel = cores.findIndex((item) => item.estoque > 0)
        return indiceDisponivel === -1 ? 0 : indiceDisponivel
    })
    const [tamanhoSelecionadoId, setTamanhoSelecionadoId] = useState('')
    const [erro, setErro] = useState('')
    const { adicionarItem } = useCart()

    function lidarComAdicionarSacola() {
        if (cores[corSelecionada].estoque <= 0) {
            setErro('Essa cor está esgotada.')
            return
        }

        if (!tamanhoSelecionadoId) {
            setErro('Selecione um tamanho antes de adicionar à sacola.')
            return
        }

        const tamanhoEscolhido = tamanhos.find((item) => item.id === tamanhoSelecionadoId)!

        if (tamanhoEscolhido.estoque <= 0) {
            setErro('Esse tamanho está esgotado.')
            return
        }

        adicionarItem({
            produtoId: id,
            nome,
            imagem: cores[corSelecionada].imagem,
            valor,
            cor: cores[corSelecionada].cor,
            corId: cores[corSelecionada].id,
            tamanho: tamanhoEscolhido.tamanho,
            tamanhoId: tamanhoEscolhido.id,
        })
        onFechar()
    }

    return (
        <div className='overlay'>
            <div className='Modal'>
                <header className='Modal-header'>
                    <div className='Modal-header-titulo'>
                        <img className='check-circle' src={checkcircle} alt="check" />
                        <span>Confira detalhes sobre o produto</span>
                    </div>
                    <img className='icone-fechar' src={iconefechar} onClick={onFechar} alt="fechar" />
                </header>
                <div className='Modal-conteudo'>
                    <img className='Modal-imagem' src={cores[corSelecionada].imagem} alt={nome} />
                    <div className='Modal-info'>
                        <h2>{nome}</h2>
                        <p className='Modal-descricao'>{descricao}</p>
                        <div className='Modal-preco'>
                            <strong>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(valor)}
                            </strong>
                            <span className='Modal-vendedor'>Vendido e entregue por Riachuelo</span>
                        </div>
                        <div className='cores'>
                            <p>Cores:</p>
                            <div className='cores-opcoes'>
                                {cores.map((item, index) => (
                                    <button
                                        key={item.cor}
                                        className={`cor-opcao ${corSelecionada === index ? 'selecionada' : ''} ${item.estoque <= 0 ? 'indisponivel' : ''}`}
                                        onClick={() => {
                                            setCorSelecionada(index)
                                            setErro('')
                                        }}
                                        disabled={item.estoque <= 0}
                                        title={item.estoque <= 0 ? `${item.cor} (esgotado)` : item.cor}
                                    >
                                        <span className='bolinha' style={{ backgroundColor: corParaHex(item.cor) }} />
                                        <span className='cor-nome'>{item.cor}{item.estoque <= 0 ? ' (esgotado)' : ''}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className='tamanhos'>
                            <p>Tamanho:</p>
                            <div className='tamanhos-opcoes'>
                                {tamanhos.map((item) => (
                                    <button
                                        key={item.id}
                                        className={`tamanho-btn ${tamanhoSelecionadoId === item.id ? 'selecionado' : ''} ${item.estoque <= 0 ? 'indisponivel' : ''}`}
                                        onClick={() => {
                                            setTamanhoSelecionadoId(item.id)
                                            setErro('')
                                        }}
                                        disabled={item.estoque <= 0}
                                        title={item.estoque <= 0 ? `${item.tamanho} (esgotado)` : item.tamanho}
                                    >
                                        {item.tamanho}
                                    </button>
                                ))}
                            </div>
                        </div>
                        {erro && <p className='Modal-erro'>{erro}</p>}
                        <button className='botao-sacola' onClick={lidarComAdicionarSacola}>Adicionar à sacola</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal