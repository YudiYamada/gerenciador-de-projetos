import {
  Container,
  Actions,
  Button,
} from "../ProjectCard/ProjectCardStyles";
import { BsFillTrashFill } from "react-icons/bs";

function ServiceCard({ id, name, cost, description, handleRemove }) {
  const remove = (e) => {
    e.preventDefault()
    handleRemove(id, cost)
  };

  return (
    <Container>
      <h4>{name}</h4>
      <p>
        <span>Custo total:</span> R${cost}
      </p>
      <p>{description}</p>
      <Actions>
        <Button onClick={remove}>
          <BsFillTrashFill />
          Excluir
        </Button>
      </Actions>
    </Container>
  );
}

export default ServiceCard;
