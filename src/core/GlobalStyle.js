import { createGlobalStyle } from "styled-components";
import backgroundImage from "./backgroundCash.jpg";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::before, ::after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.pickledBluewood.light};
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: local; 
    min-height: 100vh;
  }
`;