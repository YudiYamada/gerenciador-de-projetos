import { v4 as uuidv4 } from "uuid";

const useProjectActions = (
  project,
  setProject,
  setServices,
  setMessage,
  setType
) => {
  const editPost = (updatedProject) => {
    if (updatedProject.budget < updatedProject.cost) {
      setMessage("O orçamento não pode ser menor que o custo do projeto!");
      setType("error");
      return;
    }

    fetch(`http://localhost:5000/projects/${updatedProject.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProject),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
        setServices(data.services || []);
        setMessage("Projeto atualizado com sucesso!");
        setType("success");
      })
      .catch(() => {
        setMessage("Erro ao atualizar o projeto.");
        setType("error");
      });
  };

  const createService = (updatedProject) => {
    const lastService = { ...updatedProject.services.at(-1) };
    lastService.id = uuidv4();

    const lastServiceCost = parseFloat(lastService.cost);
    const newCost = parseFloat(updatedProject.cost) + lastServiceCost;

    if (newCost > parseFloat(updatedProject.budget)) {
      setMessage("Orçamento ultrapassado, verifique o valor do serviço");
      setType("error");
      updatedProject.services.pop();
      return false;
    }

    updatedProject.cost = newCost;

    fetch(`http://localhost:5000/projects/${updatedProject.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProject),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setServices([...data.services]);
        setMessage("Serviço adicionado com sucesso!");
        setType("success");
      })
      .catch(() => {
        setMessage("Erro ao adicionar serviço.");
        setType("error");
      });
  };

  const removeService = (id, cost) => {
    const updatedServices = project.services.filter(
      (service) => service.id !== id
    );
    const updatedProject = {
      ...project,
      services: updatedServices,
      cost: project.cost - cost,
    };

    fetch(`http://localhost:5000/projects/${updatedProject.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProject),
    })
      .then((resp) => resp.json())
      .then(() => {
        setProject(updatedProject);
        setServices(updatedServices);
        setMessage("Serviço removido com sucesso!");
        setType("success");
      })
      .catch(() => {
        setMessage("Erro ao remover serviço.");
        setType("error");
      });
  };

  return { editPost, createService, removeService };
};

export default useProjectActions;
