import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    
  }
  * {
    font-family: 'Manrope', sans-serif;
    box-sizing: border-box;
    color: #0B0D17;
  }
  
`;

export const theme = {
  colors: {
    blue: "#01aef0",
    darkblue: "#0d73bb",
    yellow: "#FDDE14",
    darkyellow: "#FCB040",
    red: "#ED1B24",
    darkred: "#ED1B24",
    grey: "#58585A",
    darkgrey: "#3A3A3C",
    dark: "#0B0D17",
  },
};
