import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  padding: 1em;
  text-align: center;
`;

export const SocialListUl = styled.ul`
  display: flex;
  justify-content: center;
  
`;

export const LinkA = styled.a`
  margin: 0 1em;
  font-size: 1.5em;
  transition: 0.3s ease-in-out;
  

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`;
