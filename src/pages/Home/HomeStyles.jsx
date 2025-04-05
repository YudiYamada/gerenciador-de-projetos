import styled from "styled-components";

export const HomeContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2.5em;
    margin-bottom: 0.5em;

    span {
      color: ${({ theme }) => theme.colors.primary};
      padding: 0 0.2em;
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }

  p {
    margin-bottom: 1.5em;
    color: ${({ theme }) => theme.colors.tertiary};
  }

  img {
    width: 320px;
    margin: 2em 0;
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 1.5em;
    }

    p {
      margin-right: 10px;
      margin-left: 10px;
    }
  }
`;
