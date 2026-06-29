import { useNavigate } from 'react-router-dom'
import type { ReactNode } from 'react'

interface AuthHeaderProps {
    titulo: string
    icone: ReactNode
}

function AuthHeader({ titulo, icone }: AuthHeaderProps) {
    const navigate = useNavigate()

    return (
        <header className='auth-header'>
            <div className='auth-header-titulo'>
                {icone}
                <span>{titulo}</span>
            </div>
            <svg className='auth-fechar' onClick={() => navigate('/')} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
        </header>
    )
}

export default AuthHeader
