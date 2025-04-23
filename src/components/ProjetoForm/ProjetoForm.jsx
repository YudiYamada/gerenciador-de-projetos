import { useState } from "react";
import Input from "../Inputs/Input";
import Select from "../Selects/Select";
import SubmitButton from "../SubmitButton/SubmitButton";
import { Form } from "./ProjetoFormStyles";
import useCategories from "../../hooks/useCategories";

function ProjetoForm({ handleSubmit, btnText, initialProjectData }) {
  const { categories, error } = useCategories();

  const [projectData, setProjectData] = useState(initialProjectData || {});

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(projectData);
  };

  function handleChange(e) {
    setProjectData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  function handleCategory(e) {
    setProjectData((prevData) => ({
      ...prevData,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    }));
  }

  return (
    <Form autoComplete="off" onSubmit={submit}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        value={projectData.name || ""}
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
        value={projectData.budget || ""}
        handleOnChange={handleChange}
      />
      {error ? (
        <p>Erro ao carregar categorias: {error}</p>
      ) : (
        <Select
          name="category_id"
          text="Selecione a categoria"
          options={categories}
          handleOnChange={handleCategory}
          value={projectData.category ? projectData.category.id : ""}
        />
      )}
      <SubmitButton text={btnText} />
    </Form>
  );
}

export default ProjetoForm;
