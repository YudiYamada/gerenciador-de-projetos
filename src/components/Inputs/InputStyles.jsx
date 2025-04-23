import styled from "styled-components";

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;

  label {
    margin-bottom: 0.6em;
    font-weight: bold;
  }

  input {
    padding: 0.7em;
    border-radius: 0;
    border: none;
  }

  input::placeholder {
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;
