import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1em;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  gap: 20px;
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.1em;
  font-weight: bold;
  transition: 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;