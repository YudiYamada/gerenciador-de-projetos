import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FooterContainer, SocialListUl, LinkA } from "./FooterStyles";

function Footer() {
  return (
    <FooterContainer>
      <SocialListUl>
        <li>
          <LinkA href="https://www.linkedin.com/in/yudi-yamada-0a10181b9/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </LinkA>
        </li>
        <li>
          <LinkA href="https://github.com/YudiYamada" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </LinkA>
        </li>
      </SocialListUl>
    </FooterContainer>
  );
}

export default Footer;