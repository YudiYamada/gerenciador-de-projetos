import { useParams } from "react-router-dom";
import useProject from "../../hooks/useProject";
import {} from "./ProjetoStyles";

function Projeto() {
    const { id } = useParams();
    const { project, loading, error } = useProject(id);
  
    if (loading) return <p>Carregando...</p>;
    if (error) return <p>{error}</p>;
    if (!project) return <p>Projeto não encontrado.</p>;
  
    return (
      <>
        <p>{project.id}</p>
        <p>{project.name}</p>
        <p>{project.budget}</p>
        <p>{project.category?.name || "Categoria desconhecida"}</p>
      </>
    );
  }
  
  export default Projeto;
  
