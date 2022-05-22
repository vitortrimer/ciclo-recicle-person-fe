import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastroEmbalagem from "./pages/cadastroEmbalagem/CadastroEmbalagem";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Pontuacao from "./pages/Pontuacao/Pontuacao";

const AppRoutes = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/embalagem" element={<CadastroEmbalagem />} />
        <Route path="/pontuacao" element={<Pontuacao />} />
      </Routes>
    </BrowserRouter>
  )
};

export default AppRoutes