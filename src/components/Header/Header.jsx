import { Link } from "react-router-dom";
import { HeaderContainer, Img } from "./HeaderStyles";
import NavBar from "../../components/NavBar/NavBar";
import logo from "../../assets/img/costs_logo.png";

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <Img src={logo} alt="Logo" />
      </Link>
      <NavBar />
    </HeaderContainer>
  );
}

export default Header;
