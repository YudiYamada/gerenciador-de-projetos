import Main from "../../components/Main/Main";
import ProjetoForm from "../../components/Projeto/ProjetoForm";
import { Container } from "./NovoProjetoStyles";

function NovoProjeto() {
  return (
    <Main justify="space-between" direction="column">
      <Container>
        <h1>Criar Projeto</h1>
        <p>Crie seu projeto para depois adicionar os serviços</p>
        <ProjetoForm btnText="Criar Projeto"/>
      </Container>
    </Main>
  );
}

export default NovoProjeto;
