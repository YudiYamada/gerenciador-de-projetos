export async function fetchProjects() {
  try {
    const response = await fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Erro ao buscar projetos");
    }
    return await response.json();
  } catch (err) {
    console.error("Erro ao buscar projetos:", err);
    throw err;
  }
}
