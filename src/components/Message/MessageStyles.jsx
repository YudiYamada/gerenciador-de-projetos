import styled from "styled-components";

export const MenssageStyled = styled.div`
  width: 100%;
  padding: 1em;
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin: 0 auto;
  text-align: center;
  margin-bottom: 2em;
  border-radius: 5px;

  color: ${({ type, theme }) =>
    type === "success" ? theme.successColors.color : theme.errorColors.color};
  background-color: ${({ type, theme }) =>
    type === "success"
      ? theme.successColors.background
      : theme.errorColors.background};
  border-color: ${({ type, theme }) =>
    type === "success" ? theme.successColors.border : theme.errorColors.border};
`;
