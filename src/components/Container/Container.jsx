import { ContainerStyled } from "./ContainerStyles";

function Container({ children, justify, direction, minHeight }) {
  return (
    <ContainerStyled justify={justify} direction={direction} minHeight={minHeight}>
      {children}
    </ContainerStyled>
  );
}

export default Container;