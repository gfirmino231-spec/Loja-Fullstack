import { createContext, useContext, useState } from 'react'

interface AuthContextType {
    estaLogado: boolean
    email: string
    fazerLogin: (email: string) => void
    fazerLogout: () => void
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [estaLogado, setEstaLogado] = useState(false)
    const [email, setEmail] = useState('')

    function fazerLogin(email: string) {
        setEstaLogado(true)
        setEmail(email)
    }

    function fazerLogout() {
        setEstaLogado(false)
        setEmail('')
    }

    return (
        <AuthContext.Provider value={{ estaLogado, email, fazerLogin, fazerLogout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}