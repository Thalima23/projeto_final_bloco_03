import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ListaProduto from "./components/produto/listaproduto/ListaProduto";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/produto/" element={<ListaProduto />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
