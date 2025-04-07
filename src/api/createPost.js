export const createPost = async (project) => {
  try {
    const newProject = {
      ...project,
      cost: project.cost ?? 0,
      services: project.services ?? [],
    };

    const response = await fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProject),
    });

    if (!response.ok) {
      throw new Error(
        `Erro ao criar projeto: ${response.status} - ${response.statusText}`
      );
    }

    return response.json();
  } catch (error) {
    console.error("Erro ao criar projeto:", error.message);
    throw error;
  }
};

// function createPost(project) {
//   project.cost = 0;
//   project.services = [];

//   fetch("http://localhost:5000/projects", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(project),
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error("Erro:", error));
// }

// export default createPost;
