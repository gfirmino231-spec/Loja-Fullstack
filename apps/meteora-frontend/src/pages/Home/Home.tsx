import Navbar from "../../components/Navbar/Navbar"
import Herobanner from "../../components/Herobanner/Herobanner"
import Categorias from "../../components/Categorias/Categorias"
import Produtos from "../../components/ProdutoCard/Produtos"
import Facilidades from "../../components/Facilidades/Facilidades"
import Newsletter from "../../components/Newsletter/Newsletter"
import Footer from "../../components/Footer/Footer"
function Home() {

  return (
  <>
   <Navbar />      
  <Herobanner/>
  < Categorias/>
  <Produtos/>
  <Facilidades/>
  <Newsletter/>
  <Footer/>

  </>
 
)
}

export default Home