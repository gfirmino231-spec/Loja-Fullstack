import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Cadastro from './pages/Cadastro/Cadastro'
import Pagamento from './pages/Pagamento/Pagamento'
import { AuthProvider } from './components/Context/AuthContext'
import { CartProvider } from './components/Context/CartContext'

function App() {
    return (
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/cadastro" element={<Cadastro />} />
                  <Route path="/pagamento" element={<Pagamento />} />
              </Routes>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    )
}
export default App