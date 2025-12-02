import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ListaProduto from "./components/produto/listaproduto/ListaProduto";
import ListaCategorias from "./components/categoria/listacategoria/ListaCategoria";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria";
import FormProduto from "./components/produto/formproduto/FormProduto";
import DeletarProduto from "./components/produto/deletarproduto/DeletarProduto";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        
        <Route path="/" element={<Home />} />
						<Route path="/home"	element={<Home />}></Route>
						<Route path="/categorias" element={<ListaCategorias />} />
						<Route path="/cadastrarCategoria" element={<FormCategoria />} />
						<Route path="/editarCategoria/:id" element={<FormCategoria />} />
						<Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
						<Route path="/produto/" element={<ListaProduto />} />
						<Route path="/cadastrarproduto" element={<FormProduto />} />
						<Route path="/editarproduto/:id" element={<FormProduto />} />
						<Route path="/deletarproduto/:id" element={<DeletarProduto />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
