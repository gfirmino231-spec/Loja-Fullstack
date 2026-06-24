import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Cadastro from './pages/Cadastro/Cadastro'
import { AuthProvider } from './components/Context/AuthContext'

function App() {
    return (
      <AuthProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
      </AuthProvider>
    )
}
export default App