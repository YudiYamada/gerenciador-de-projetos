export const fetchCategories = async () => {
  try {
    const response = await fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Erro ao buscar categorias: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar categorias:", error);
    throw error;
  }
};
