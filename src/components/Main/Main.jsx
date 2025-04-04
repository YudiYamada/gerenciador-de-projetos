import { MainContainer } from "./MainStyles";

function Main({ children, width, justify, margin, wrap, direction, minHeight }) {
  return (
    <MainContainer
      width={width}
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