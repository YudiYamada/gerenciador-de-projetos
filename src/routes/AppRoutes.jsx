import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Projetos from "../pages/Projetos";
import Empresa from "../pages/Empresa";
import Contato from "../pages/Contato";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projetos" element={<Projetos />} />
    <Route path="/empresa" element={<Empresa />} />
    <Route path="/contato" element={<Contato />} />
  </Routes>
);

export default AppRoutes;