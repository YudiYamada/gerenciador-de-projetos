import { useState, useEffect } from "react";
import { fetchCategories } from "../api/fetchCategories";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (err) {
        console.error(err);
        setError("Erro ao carregar categorias.");
      }
    };

    getCategories();
  }, []);

  return { categories, error };
};

export default useCategories;
