import { ContainerStyle } from "./ContainerStyles";

function Container({ children, width, justify, margin, wrap, direction, minHeight }) {
  return (
    <ContainerStyle
      width={width}
      justify={justify}
      margin={margin}
      wrap={wrap}
      direction={direction}
      minHeight={minHeight}
    >
      {children}
    </ContainerStyle>
  );
}

export default Container;