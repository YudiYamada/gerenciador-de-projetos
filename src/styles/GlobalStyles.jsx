import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Open Sans", sans-serif;
        background-color: ${({ theme }) => theme.colors.background};
        height: 100vh;
    }
    a {
        all: unset;
    }

    li {
        list-style: none;
    }
`;

export default GlobalStyles;
