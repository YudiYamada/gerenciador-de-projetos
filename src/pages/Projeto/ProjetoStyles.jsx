import styled from "styled-components";

export const ProjectsDetails = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
  padding: 2em;

  h1,
  h2,
  p {
    margin-bottom: 0.5em;
  }

  h1 {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    padding: 0.4em;
  }

  span {
    font-weight: bold;
  }
`;

export const ProjectsDetailsContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.quartenary};
  margin-bottom: 1.2em;
  padding-bottom: 1.2em;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ServiceFormContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.quartenary};
  margin-bottom: 1.2em;
  padding-bottom: 1.2em;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5em 1em;
  transition: 0.3s ease-in-out;
  max-height: 40px;
  border: none;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ProjectInfo = styled.div`
  width: 100%;
`;
