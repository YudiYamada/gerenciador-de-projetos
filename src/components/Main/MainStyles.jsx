import styled from "styled-components";

export const MainContainer = styled.div`
  width: ${({ width }) => width || "1200px"};
  display: flex;
  justify-content: ${({ justify }) => justify || "space-between"};
  margin: ${({ margin }) => margin || "0 auto"};
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "nowrap")};
  flex-direction: ${({ direction }) => direction || "row"};
  min-height: ${({ minHeight }) => minHeight || "auto"};
`;

/* 
Como usar no JSX?
<Container justify="flex-start" direction="column" minHeight="75%" wrap>
  <div>Item 1</div>
  <div>Item 2</div>
</Container>

<Container width="800px" justify="center">
  <p>Texto centralizado</p>
</Container>
*/

/*
    Para não se perder
    .container{
    width:1200px
    display:flex
    justify-content:space-between
    margin: 0 auto
    flex-wrap:wrap
    }

    .min-height{
    min-height:75%
    }

    .start{
    justify-content:flex-start}

    .column{
    flex-direction:column
    justify-content:flex-start}
*/