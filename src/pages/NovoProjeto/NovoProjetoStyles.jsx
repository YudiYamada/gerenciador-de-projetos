import styled from "styled-components";

export const Container = styled.div`
  width: 450px;
  margin: 0 auto;
  padding: 3em;

  h1 {
    margin-bottom: 0.5em;
  }

  p {
    color: ${({ theme }) => theme.colors.tertiary};
  }

  @media (max-width: 500px) {
    width: 300px;
  }
`;
