import React from "react";
import { NavbarContainer, NavList, NavLink } from "./NavBarStyles";

const NavBar = () => (
  <NavbarContainer>
    <NavList>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/projetos">Projetos</NavLink></li>
      <li><NavLink to="/empresa">Empresa</NavLink></li>
      <li><NavLink to="/contato">Contato</NavLink></li>
    </NavList>
  </NavbarContainer>
);

export default NavBar;