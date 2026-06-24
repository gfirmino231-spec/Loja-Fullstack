import { useState } from 'react'
import checkcircle from '../../assets/check-circle.png'
import iconefechar from '../../assets/icone-fechar.png'
import './Modal.css'

interface Cor {
    cor: string
    imagem: string
}

interface ModalProps {
    nome: string
    imagem: string
    valor: number
    descricao: string
    cores: Cor[]
    tamanhos: string[]
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

function Modal({ nome, imagem, valor, descricao, cores, tamanhos, onFechar }: ModalProps) {
    const [corSelecionada, setCorSelecionada] = useState(0)
    const [tamanhoSelecionado, setTamanhoSelecionado] = useState('')

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
                                        className={`cor-opcao ${corSelecionada === index ? 'selecionada' : ''}`}
                                        onClick={() => setCorSelecionada(index)}
                                        title={item.cor}
                                    >
                                        <span className='bolinha' style={{ backgroundColor: corParaHex(item.cor) }} />
                                        <span className='cor-nome'>{item.cor}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className='tamanhos'>
                            <p>Tamanho:</p>
                            <div className='tamanhos-opcoes'>
                                {tamanhos.map((tamanho) => (
                                    <button
                                        key={tamanho}
                                        className={`tamanho-btn ${tamanhoSelecionado === tamanho ? 'selecionado' : ''}`}
                                        onClick={() => setTamanhoSelecionado(tamanho)}
                                    >
                                        {tamanho}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <button className='botao-sacola'>Adicionar à sacola</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal