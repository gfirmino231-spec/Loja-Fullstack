import { createContext, useContext, useState } from 'react'

export interface ItemCarrinho {
    id: string
    produtoId: string
    nome: string
    imagem: string
    valor: number
    cor: string
    corId: string
    tamanho: string
    tamanhoId: string
    quantidade: number
}

interface NovoItemCarrinho {
    produtoId: string
    nome: string
    imagem: string
    valor: number
    cor: string
    corId: string
    tamanho: string
    tamanhoId: string
}

interface CartContextType {
    itens: ItemCarrinho[]
    total: number
    quantidadeTotal: number
    adicionarItem: (item: NovoItemCarrinho) => void
    removerItem: (id: string) => void
    alterarQuantidade: (id: string, quantidade: number) => void
    limparCarrinho: () => void
}

export const CartContext = createContext<CartContextType>({} as CartContextType)

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [itens, setItens] = useState<ItemCarrinho[]>([])

    function adicionarItem(item: NovoItemCarrinho) {
        const id = `${item.produtoId}-${item.cor}-${item.tamanho}`
        setItens((atual) => {
            const existente = atual.find((i) => i.id === id)
            if (existente) {
                return atual.map((i) =>
                    i.id === id ? { ...i, quantidade: i.quantidade + 1 } : i,
                )
            }
            return [...atual, { ...item, id, quantidade: 1 }]
        })
    }

    function removerItem(id: string) {
        setItens((atual) => atual.filter((i) => i.id !== id))
    }

    function alterarQuantidade(id: string, quantidade: number) {
        if (quantidade < 1) {
            removerItem(id)
            return
        }
        setItens((atual) =>
            atual.map((i) => (i.id === id ? { ...i, quantidade } : i)),
        )
    }

    function limparCarrinho() {
        setItens([])
    }

    const total = itens.reduce((soma, item) => soma + item.valor * item.quantidade, 0)
    const quantidadeTotal = itens.reduce((soma, item) => soma + item.quantidade, 0)

    return (
        <CartContext.Provider
            value={{ itens, total, quantidadeTotal, adicionarItem, removerItem, alterarQuantidade, limparCarrinho }}
        >
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext)
}
