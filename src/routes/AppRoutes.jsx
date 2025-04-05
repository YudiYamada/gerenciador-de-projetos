import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import Projetos from "../pages/Projetos/Projetos";
import Empresa from "../pages/Empresa/Empresa";
import Contato from "../pages/Contato/Contato";
import NovoProjeto from "../pages/NovoProjeto/NovoProjeto"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contato" element={<Contato />} />
        <Route path="empresa" element={<Empresa />} />
        <Route path="projetos" element={<Projetos />} />
        <Route path="novoprojeto" element={<NovoProjeto />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
