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
  .slick-slider {
    position: relative;
    width: 100%;
    top: -100px;
    z-index: 1;
  }

  @media (max-width: 992px) {
    .slick-slider {
      top: 0;
    }
  }

  .slick-prev, .slick-next {
    z-index: 99;
  }
  .slick-prev{
    left: 20px !important;
    &:before{
      font-size: 40px !important;
    }

  }

  .slick-next {
    right: 35px !important;
    &:before{
      font-size: 40px !important;
    }

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
