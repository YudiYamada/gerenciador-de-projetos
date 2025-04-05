import { Link } from "react-router-dom";
import styled from "styled-components";

export const BtnLink = styled(Link)`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5em 1em;
  transition: 0.3s ease-in-out;;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
