export async function removeProject(id) {
  try {
    const response = await fetch(`http://localhost:5000/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao remover projeto");
    }

    return await response.json();
  } catch (err) {
    console.error("Erro ao remover projeto:", err);
    throw err;
  }
}
