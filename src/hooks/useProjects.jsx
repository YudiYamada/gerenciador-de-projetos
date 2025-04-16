import { useState, useEffect } from "react";
import { fetchProjects } from "../api/fetchProjects";
import { removeProject } from "../api/removeProject";

function useProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    async function loadProjects() {
      setLoading(true);

      setTimeout(async () => {
        try {
          const data = await fetchProjects();
          setProjects(data);
        } catch (err) {
          setError(`Erro ao carregar projetos: ${err.message}`);
        } finally {
          setLoading(false);
        }
      }, 1000);
    }

    loadProjects();
  }, []);

  const deleteProject = async (id) => {
    try {
      await removeProject(id);
      setProjects((prevProjects) =>
        prevProjects.filter((project) => project.id !== id)
      );
      setSuccessMessage("Projeto removido com sucesso!"); 
    } catch (err) {
      setError(`Erro ao remover projeto: ${err.message}`);
    }
  };

  return { projects, loading, error, successMessage, setSuccessMessage, deleteProject };
}

export default useProjects;