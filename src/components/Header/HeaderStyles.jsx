import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Img = styled.img`
  &:hover {
    cursor: pointer;
  }
`