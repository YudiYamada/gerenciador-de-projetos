import { MainContainer } from "./MainStyles";

function Main({ children, justify, margin, wrap, direction, minHeight }) {
  return (
    <MainContainer
      justify={justify}
      margin={margin}
      wrap={wrap}
      direction={direction}
      minHeight={minHeight}
    >
      {children}
    </MainContainer>
  );
}

export default Main;