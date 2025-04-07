import { useState } from "react";
import { createPost } from "../api/createPost";
import { useNavigate } from "react-router-dom";

export const useCreatePost = () => {
  const [projectData, setProjectData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleCreatePost = async (project) => {
    setLoading(true);
    setError(null);

    try {
      const data = await createPost(project);
      setProjectData(data);
      navigate("/projetos", {
        state: { message: "Projeto criado com sucesso" },
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { projectData, setProjectData, loading, error, handleCreatePost };
};
