import { useLocation } from "react-router-dom";
import Message from "../../components/Message/Message";
import { ProjectContainer, TitleContainer } from "./ProjetosStyle";
import Container from "../../components/Container/Container";
import LinkButton from "../../components/LinkButton/LinkButton";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import useProjects from "../../hooks/useProjects";
import Loading from "../../components/Loading/Loading";

function Projetos() {
  const location = useLocation();
  const message = location.state?.message || "";
  const {
    projects,
    loading,
    error,
    successMessage,
    setSuccessMessage,
    deleteProject,
  } = useProjects();

  return (
    <ProjectContainer>
      <TitleContainer>
        <h1>Meus Projetos</h1>
        <LinkButton to="/novoprojeto" text="Criar Projeto" />
      </TitleContainer>

      {message && <Message msg={message} type="success" />}
      {successMessage && <Message msg={successMessage} type="success" />}

      {error && <Message msg={error} type="error" />}

      <Container justify="start">
        {loading ? (
          <Loading />
        ) : projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category?.name || "Categoria desconhecida"}
              handleRemove={() => {
                deleteProject(project.id);
                setSuccessMessage("Projeto removido com sucesso!");
              }}
            />
          ))
        ) : (
          <p>Não há projetos cadastrados!</p>
        )}
      </Container>
    </ProjectContainer>
  );
}

export default Projetos;
