import ProjetoForm from "../ProjetoForm/ProjetoForm";
import {
  ProjectsDetailsContainer,
  Button,
  ProjectInfo,
} from "../../pages/Projeto/ProjetoStyles";

function ProjectDetails({ project, isEditing, toggleEdit, editPost }) {
  return (
    <ProjectsDetailsContainer>
      <h1>{project.name}</h1>
      <Button onClick={toggleEdit}>
        {isEditing ? "Fechar Edição" : "Editar Projeto"}
      </Button>

      {!isEditing ? (
        <ProjectInfo>
          <p>
            <span>Categoria:</span>{" "}
            {project.category?.name || "Categoria desconhecida"}
          </p>
          <p>
            <span>Total de Orçamento:</span> R${project.budget}
          </p>
          <p>
            <span>Total Utilizado:</span> R${project.cost}
          </p>
        </ProjectInfo>
      ) : (
        <ProjetoForm
          handleSubmit={editPost}
          btnText="Concluir edição"
          initialProjectData={project}
        />
      )}
    </ProjectsDetailsContainer>
  );
}

export default ProjectDetails;
