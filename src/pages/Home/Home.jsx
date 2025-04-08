import savings from "../../assets/img/savings.svg";
import { HomeContainer } from "./HomeStyles";
import LinkButton from "../../components/LinkButton/LinkButton";

function Home() {
  return (
    <HomeContainer>
      <h1>
        Bem-vindo ao <span>Costs</span>
      </h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <LinkButton to="/novoprojeto" text="Criar Projeto" />
      <img src={savings} alt="Costs" />
    </HomeContainer>
  );
}

export default Home;
