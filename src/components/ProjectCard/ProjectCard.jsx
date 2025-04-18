import {
  Container,
  CategoryText,
  Actions,
  LinkStyled,
  Button,
} from "./ProjectCardStyles";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";

function ProjectCard({ id, name, budget, category, handleRemove }) {
  return (
    <Container>
      <h4>{name}</h4>
      <p>
        <span>Orçamento:</span> R${budget}
      </p>
      <CategoryText category={category}>
        <span></span> {category}
      </CategoryText>
      <Actions>
        <LinkStyled to={`/projeto/${id}`}>
          <BsPencil /> Editar
        </LinkStyled>
        <Button onClick={handleRemove}>
          <BsFillTrashFill /> Excluir
        </Button>
      </Actions>
    </Container>
  );
}

export default ProjectCard;
