import { parse, v4 as uuidv4 } from "uuid";
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
import ServiceForm from "../../components/ServiceForm/ServiceForm";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

function Projeto() {
  const { id } = useParams();
  const { project, setProject, services, setServices, loading, error } =
    useProject(id);
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

  function editPost(updatedProject) {
    if (updatedProject.budget < updatedProject.cost) {
      setMessage("O orçamento não pode ser menor que o custo do projeto!");
      setType("error");
      return;
    }

    fetch(`http://localhost:5000/projects/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProject),
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
        setServices(data.services || []);
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

  function createService(updatedProject) {
    const lastService = {
      ...updatedProject.services[updatedProject.services.length - 1],
    };
    lastService.id = uuidv4();

    const lastServiceCost = parseFloat(lastService.cost);
    const newCost = parseFloat(updatedProject.cost) + lastServiceCost;

    if (newCost > parseFloat(updatedProject.budget)) {
      setMessage("Orçamento ultrapassado, verifique o valor do serviço");
      setType("error");
      updatedProject.services = updatedProject.services.slice(0, -1);
      return false;
    }

    updatedProject.cost = newCost;

    fetch(`http://localhost:5000/projects/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProject),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setServices([...data.services]);
        setMessage("Serviço adicionado com sucesso!");
        setType("success");
      })
      .catch((err) => {
        setMessage(err.message || "Erro ao adicionar serviço.");
        setType("error");
      });
  }

  function removeService(serviceId) {
    const updatedServices = services.filter(
      (service) => service.id !== serviceId
    );

    fetch(`http://localhost:5000/projects/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...project, services: updatedServices }),
    })
      .then((resp) => resp.json())
      .then(() => {
        setServices(updatedServices);
        setMessage("Serviço removido com sucesso!");
        setType("success");
      })
      .catch((err) => {
        setMessage(err.message || "Erro ao remover serviço.");
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
      {loading && <Loading />}
      {error && <Message msg={error} type="error" />}
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
      )}
      <ServiceFormContainer>
        <h2>Adicione um Serviço</h2>
        <Button onClick={toggleServiceForm}>
          {!showServiceForm ? "Adicionar serviço" : "Fechar"}
        </Button>
        {showServiceForm && (
          <ServiceForm
            handleSubmit={createService}
            btnText="Adicionar Serviço"
            projectData={project}
          />
        )}
      </ServiceFormContainer>
      <h2>Serviços</h2>
      <ServiceFormContainer>
        {services.length > 0 ? (
          services.map((service) => (
            <ServiceCard
              id={service.id}
              name={service.name}
              cost={service.cost}
              description={service.description}
              key={service.id}
              handleRemove={() => removeService(service.id)}
            />
          ))
        ) : (
          <p>Não há serviços cadastrados.</p>
        )}
      </ServiceFormContainer>
    </ProjectsDetails>
  );
}

export default Projeto;
