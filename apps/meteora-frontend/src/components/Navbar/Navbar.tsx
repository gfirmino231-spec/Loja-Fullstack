import './Navbar.css'
import logo from '../../assets/image.png'
import { useAuth } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
import Cart from '../Cart/Cart'


function Navbar() {
    const { estaLogado, email, fazerLogout } = useAuth()
    const navigate = useNavigate()

    return (
        <nav className='Nav'>
            <div className='conjunto-esquerda'>
                < img className='img' src={logo} alt="meteora" />
                <ul className='links'>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#lojas">Nossas lojas</a></li>
                    <li><a href="#novidades">Novidades</a></li>
                    <li><a href="#promoções">Promoções</a></li>
                </ul>
            </div>

            <div className='conjunto-centro'>
                <input className='search' type="text" placeholder='Digite o produto' />
                <button className='button-search'>
                    Buscar
                </button>
            </div>
            <div className='conjunto-direita'>
                <Cart />
                {estaLogado ? (
                    <>
                        <span className='usuario-email'>{email}</span>
                        <button className='button-logout' onClick={fazerLogout}>
                            Sair
                        </button>
                    </>
                ) : (
                    <>
                        <button className='button-login' onClick={() => navigate('/login')}>Login</button>
                        <button className='button-cadastro' onClick={() => navigate('/cadastro')}>Cadastro</button>

                    </>
                )}
            </div>

        </nav>
    )

}
export default Navbar


