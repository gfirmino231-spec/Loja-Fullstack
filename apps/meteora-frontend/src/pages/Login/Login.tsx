import { useAuth } from "../../components/Context/AuthContext"
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useMutation } from "@apollo/client"
import { LOGIN } from "../../graphql/mutations/usuario"
import AuthHeader from "../../components/Auth/AuthHeader"
import PasswordInput from "../../components/Auth/PasswordInput"
import "../../components/Auth/Auth.css"

function Login() {
    const { fazerLogin } = useAuth()
    const navigate = useNavigate()
    const [login, { loading }] = useMutation(LOGIN)
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState('')

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault()

        if (!email || !senha) {
            setErro('Preencha email e senha.')
            return
        }

        setErro('')
        try {
            await login({ variables: { email, password: senha } })
            fazerLogin(email)
            navigate('/')
        } catch (err) {
            setErro(err instanceof Error ? err.message : 'Não foi possível entrar. Tente novamente.')
        }
    }

    return (
        <div className='auth-overlay'>
            <div className='auth-card'>
                <AuthHeader
                    titulo='Login'
                    icone={(
                        <svg className='auth-icone' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                            <polyline points="10 17 15 12 10 7" />
                            <line x1="15" y1="12" x2="3" y2="12" />
                        </svg>
                    )}
                />

                <div className='auth-conteudo'>
                    <h2>Boas-vindas de volta!</h2>
                    <p className='auth-subtitulo'>Preencha seus dados para entrar:</p>

                    <form onSubmit={handleLogin}>
                        <div className='auth-campo'>
                            <label htmlFor='email'>Email</label>
                            <input
                                id='email'
                                type='email'
                                placeholder='Digite seu email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className='auth-campo'>
                            <label htmlFor='senha'>Senha</label>
                            <PasswordInput
                                id='senha'
                                placeholder='Digite sua senha'
                                value={senha}
                                onChange={setSenha}
                                ariaLabel='Mostrar senha'
                            />
                        </div>

                        {erro && <p className='auth-erro'>{erro}</p>}

                        <button type='submit' className='auth-botao' disabled={loading}>
                            {loading ? 'Entrando...' : 'Entrar'}
                        </button>
                    </form>

                    <hr className='auth-divisor' />

                    <p className='auth-rodape'>
                        Ainda não tem conta? <Link to='/cadastro'>Faça seu cadastro!</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Login
