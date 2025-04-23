import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useProject from "../../hooks/useProject";
import Loading from "../../components/Loading/Loading";
import Message from "../../components/Message/Message";
import {
  ProjectsDetails,
  ProjectsDetailsContainer,
  Button,
  ProjectInfo,
  ServiceFormContainer,
} from "./ProjetoStyles";
import ProjetoForm from "../../components/ProjetoForm/ProjetoForm";

function Projeto() {
  const { id } = useParams();
  const { project, setProject, loading } = useProject(id);
  const [showProject, setShowProject] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProject(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
        setType("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  function editPost(project) {
    if (project.budget < project.cost) {
      setMessage("O orçamento não pode ser menor que o custo do projeto!");
      setType("error");
      return;
    }

    fetch(`http://localhost:5000/projects/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Erro ao atualizar o projeto.");
        }
        return resp.json();
      })
      .then((data) => {
        setIsEditing(false);
        setProject(data);
        setMessage("Projeto atualizado com sucesso!");
        setType("success");
      })
      .catch((err) => {
        setMessage(
          err.message || "Erro ao atualizar o projeto. Tente novamente."
        );
        setType("error");
      });
  }

  function toggleProjectForm() {
    setIsEditing((prev) => !prev);
  }

  function toggleServiceForm() {
    setShowServiceForm((prev) => !prev);
  }

  return (
    <ProjectsDetails>
      {loading || (!showProject && <Loading />)}
      {message && <Message msg={message} type={type} />}
      {project && showProject && (
        <ProjectsDetailsContainer>
          <h1>{project.name}</h1>
          <Button onClick={toggleProjectForm}>
            {isEditing ? "Fechar Edição" : "Editar Projeto"}
          </Button>

          {!isEditing ? (
            <ProjectInfo>
              <p>
                <span>Categoria:</span>{" "}
                {project.category?.name || "Categoria desconhecida"}
              </p>
              <p>
                <span>Total de Orçamento</span> R${project.budget}
              </p>
              <p>
                <span>Total Utilizado</span> R${project.cost}
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
      )}
      <ServiceFormContainer>
        <h2>Adicione um Serviço</h2>
        <Button onClick={toggleServiceForm}>
          {!showServiceForm ? "Adicionar serviço" : "Fechar"}
        </Button>
        <ProjectInfo>
          {showServiceForm && (
            <ServiceForm />
          )}
        </ProjectInfo>
      </ServiceFormContainer>
      <h2>Serviços</h2>
      <ServiceFormContainer>
        <p>Itens de serviço</p>
      </ServiceFormContainer>
    </ProjectsDetails>
  );
}

export default Projeto;
