import styled from "styled-components";

export const ContainerStyled = styled.div`
  display: flex;
  justify-content: ${({ justify }) =>
    justify === "start" ? "flex-start" : "space-between"};
  flex-direction: ${({ direction }) =>
    direction === "column" ? "column" : "row"};
  flex-wrap: wrap;
  margin: 0 auto;
  min-height: ${({ minHeight }) => (minHeight ? "75%" : "auto")};
`;

/* 
.container {
width 1200px
display flex
justify-content space-between
margim 0 auto
flex-wrap
}

.min-height {
min-height 75%
}

.start {
justify-content space-between flex-start
}

.column {
flex-direction column
justify-content flex start
}
*/