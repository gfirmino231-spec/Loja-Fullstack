import { useState } from 'react'
import { useAuth } from '../../components/Context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { REGISTER } from '../../graphql/mutations/usuario'
import AuthHeader from '../../components/Auth/AuthHeader'
import PasswordInput from '../../components/Auth/PasswordInput'
import '../../components/Auth/Auth.css'

function Cadastro() {
    const { fazerLogin } = useAuth()
    const navigate = useNavigate()
    const [registrar, { loading }] = useMutation(REGISTER)
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')
    const [erro, setErro] = useState('')

    async function handleCadastro(e: React.FormEvent) {
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
        try {
            await registrar({ variables: { email, password: senha } })
            fazerLogin(email)
            navigate('/')
        } catch (err) {
            setErro(err instanceof Error ? err.message : 'Não foi possível concluir o cadastro. Tente novamente.')
        }
    }

    return (
        <div className='auth-overlay'>
            <div className='auth-card'>
                <AuthHeader
                    titulo='Cadastro'
                    icone={(
                        <svg className='auth-icone' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="8.5" cy="7" r="4" />
                            <line x1="20" y1="8" x2="20" y2="14" />
                            <line x1="23" y1="11" x2="17" y2="11" />
                        </svg>
                    )}
                />

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
                            <PasswordInput
                                id='senha'
                                placeholder='Digite sua senha'
                                value={senha}
                                onChange={setSenha}
                                ariaLabel='Mostrar senha'
                            />
                        </div>

                        <div className='auth-campo'>
                            <label htmlFor='confirmarSenha'>Confirme a senha</label>
                            <PasswordInput
                                id='confirmarSenha'
                                placeholder='Digite novamente sua senha'
                                value={confirmarSenha}
                                onChange={setConfirmarSenha}
                                ariaLabel='Mostrar confirmação de senha'
                            />
                        </div>

                        {erro && <p className='auth-erro'>{erro}</p>}

                        <button type='submit' className='auth-botao' disabled={loading}>
                            {loading ? 'Cadastrando...' : 'Cadastrar'}
                        </button>
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
