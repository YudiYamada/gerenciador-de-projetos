import ProjetoForm from "../../components/ProjetoForm/ProjetoForm";
import { Container } from "./NovoProjetoStyles";
import { useCreatePost } from "../../hooks/useCreatePost";

function NovoProjeto() {
  const { handleCreatePost, projectData, loading, error } = useCreatePost();

  return (
    <Container>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjetoForm
        handleSubmit={handleCreatePost}
        btnText="Criar Projeto"
        newProjectData={projectData}
      />
      {loading && <p>Enviando...</p>}
      {error && <p style={{ color: "red" }}>Erro: {error}</p>}
    </Container>
  );
}

export default NovoProjeto;
