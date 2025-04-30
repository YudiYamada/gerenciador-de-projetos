import { useState, useEffect } from "react";
import fetchProject from "../api/fetchProject";

const useProject = (id) => {
  const [project, setProject] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProject = async () => {
      const data = await fetchProject(id);
      if (data) {
        setProject(data);
        setServices(data.services || []);
      } else {
        setError("Não foi possível carregar o projeto.");
      }

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    getProject();
  }, [id]);

  return { project, setProject, services, setServices, loading, error };
};

export default useProject;