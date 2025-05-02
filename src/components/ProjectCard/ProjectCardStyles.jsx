import styled from "styled-components";
import { Link } from "react-router-dom";

const categoryColors = {
  Infra: ({ theme }) => theme.categoriesColors.primary,
  Desenvolvimento: ({ theme }) => theme.categoriesColors.secondary,
  Design: ({ theme }) => theme.categoriesColors.tertiary,
  Planejamento: ({ theme }) => theme.categoriesColors.quaternary,
};

export const Container = styled.div`
  padding: 1em;
  border: 1px solid ${({ theme }) => theme.colors.quaternary};
  border-radius: 5px;
  width: 270px;
  margin: 0.5%;
  flex-wrap: wrap;

  h4 {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    padding: 0.4em;
    margin-bottom: 1.3em;
    font-size: 1.3em;
  }

  p {
    color: ${({ theme }) => theme.colors.quaternary};
    margin-bottom: 1em;
  }

  span {
    font-weight: bold;
  }
`;

export const CategoryText = styled.p`
  display: flex;
  align-items: center;

  span {
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({ category, theme }) =>
      categoryColors[category]
        ? categoryColors[category]({ theme })
        : theme.colors.quinary};
    margin-right: 5px;
  }
`;

export const Actions = styled.div`
  margin-top: 1.2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.9em;
  padding: 0.6em 1em;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const LinkStyled = styled(Link)`
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.9em;
  padding: 0.6em 1em;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
