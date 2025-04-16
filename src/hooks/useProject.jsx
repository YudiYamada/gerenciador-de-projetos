import { useState, useEffect } from "react";
import fetchProject from "../api/fetchProject";

const useProject = (id) => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProject = async () => {
      const data = await fetchProject(id);
      if (data) {
        setProject(data);
      } else {
        setError("Não foi possível carregar o projeto.");
      }
      setLoading(false);
    };

    getProject();
  }, [id]);

  return { project, setProject, loading, error };
};

export default useProject;
