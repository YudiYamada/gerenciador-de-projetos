import { useState, useEffect } from "react";
import { fetchProjects } from "../api/fetchProjects";

function useProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProjects() {
      setLoading(true);

      setTimeout(async () => {
        try {
          const data = await fetchProjects();
          setProjects(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }, 1500);
    }

    loadProjects();
  }, []);

  return { projects, loading, error };
}

export default useProjects;
