import Input from "../Form/Inputs/Input";
import Select from "../Form/Selects/Select";
import SubmitButton from "../Form/SubmitButton/SubmitButton";
import { Form } from "./ProjetoFormStyles";

function ProjetoForm({ btnText }) {
  return (
    <Form autocomplete="off">
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
      />
      <Select name="category_id" text="Selecione a categoria" />
      <SubmitButton text={btnText}/>
    </Form>
  );
}

export default ProjetoForm;
