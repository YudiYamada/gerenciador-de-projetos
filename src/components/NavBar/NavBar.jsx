import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavbarContainer, NavList, NavLink, HamburgerButton } from "./NavBarStyles";
import { useToggleMenuHamburger } from "../../hooks/useToggleMenuHamburger";

const NavBar = () => {
  const { isOpen, toggleMenuHamburger } = useToggleMenuHamburger();

  return (
    <NavbarContainer>
      <HamburgerButton isOpen={isOpen} onClick={toggleMenuHamburger}>
        <RxHamburgerMenu />
      </HamburgerButton>
      <NavList isOpen={isOpen}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/projetos">Projetos</NavLink>
        </li>
        <li>
          <NavLink to="/empresa">Empresa</NavLink>
        </li>
        <li>
          <NavLink to="/contato">Contato</NavLink>
        </li>
      </NavList>
    </NavbarContainer>
  );
};

export default NavBar;
