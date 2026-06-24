import { useState } from 'react'
import { useAuth } from '../../components/Context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import './Cadastro.css'

function Cadastro() {
    const { fazerLogin } = useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')
    const [mostrarSenha, setMostrarSenha] = useState(false)
    const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false)
    const [erro, setErro] = useState('')

    function handleCadastro(e: React.FormEvent) {
        e.preventDefault()

        if (!email || !senha || !confirmarSenha) {
            setErro('Preencha todos os campos.')
            return
        }

        if (senha !== confirmarSenha) {
            setErro('As senhas não coincidem.')
            return
        }

        setErro('')
        fazerLogin(email)
        navigate('/')
    }

    return (
        <div className='auth-overlay'>
            <div className='auth-card'>
                <header className='auth-header'>
                    <div className='auth-header-titulo'>
                        <svg className='auth-icone' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="8.5" cy="7" r="4" />
                            <line x1="20" y1="8" x2="20" y2="14" />
                            <line x1="23" y1="11" x2="17" y2="11" />
                        </svg>
                        <span>Cadastro</span>
                    </div>
                    <svg className='auth-fechar' onClick={() => navigate('/')} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </header>

                <div className='auth-conteudo'>
                    <h2>Boas-vindas!</h2>
                    <p className='auth-subtitulo'>Preencha seus dados para criar sua conta.</p>

                    <form onSubmit={handleCadastro}>
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
                            <div className='auth-input-wrapper'>
                                <input
                                    id='senha'
                                    type={mostrarSenha ? 'text' : 'password'}
                                    placeholder='Digite sua senha'
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                                <button
                                    type='button'
                                    className='auth-olho'
                                    onClick={() => setMostrarSenha(!mostrarSenha)}
                                    aria-label='Mostrar senha'
                                >
                                    {mostrarSenha ? (
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                                            <line x1="1" y1="1" x2="23" y2="23" />
                                        </svg>
                                    ) : (
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className='auth-campo'>
                            <label htmlFor='confirmarSenha'>Confirme a senha</label>
                            <div className='auth-input-wrapper'>
                                <input
                                    id='confirmarSenha'
                                    type={mostrarConfirmarSenha ? 'text' : 'password'}
                                    placeholder='Digite novamente sua senha'
                                    value={confirmarSenha}
                                    onChange={(e) => setConfirmarSenha(e.target.value)}
                                />
                                <button
                                    type='button'
                                    className='auth-olho'
                                    onClick={() => setMostrarConfirmarSenha(!mostrarConfirmarSenha)}
                                    aria-label='Mostrar confirmação de senha'
                                >
                                    {mostrarConfirmarSenha ? (
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                                            <line x1="1" y1="1" x2="23" y2="23" />
                                        </svg>
                                    ) : (
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {erro && <p className='auth-erro'>{erro}</p>}

                        <button type='submit' className='auth-botao'>Cadastrar</button>
                    </form>

                    <hr className='auth-divisor' />

                    <p className='auth-rodape'>
                        Já tem conta? <Link to='/login'>Faça o login!</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Cadastro
