import { useLocation } from "react-router-dom";
import Main from "../../components/Main/Main";
import Message from "../../components/Message/Message";
import {} from "./ProjetosStyle";

function Projetos() {
  const location = useLocation();
  const message = location.state?.message || "";

  return (
    <Main justify="space-around" direction="column">
      <div>
        <h1>Meus Projetos</h1>
        <a href="#">Novo Projeto</a>
      </div>
      {message && <Message msg={message} type="success" />}
    </Main>
  );
}

export default Projetos;
