import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import Projetos from "../pages/Projetos";
import Empresa from "../pages/Empresa";
import Contato from "../pages/Contato";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contato" element={<Contato />} />
        <Route path="empresa" element={<Empresa />} />
        <Route path="projetos" element={<Projetos />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
