import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  gap: 20px;

  @media (max-width: 500px) {
    flex-direction: column;
    position: absolute;
    top: 90px;
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    background: ${({ theme }) => theme.colors.secondary};
    width: 100%;
    padding: 1em;
    transition: 0.3s ease-in-out;
  }
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.1em;
  font-weight: bold;
  transition: 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`;

export const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 2em;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 500px) {
    display: block;
    transform: ${({ isOpen }) => (isOpen ? "rotate(90deg)" : "rotate(0deg)")};
  }
`;
