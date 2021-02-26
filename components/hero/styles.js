import styled from "styled-components";
import { up, down, between, only } from "styled-breakpoints";

export const HeroWrapper = styled.div`
  .slick-slider {
    position: relative;
    width: 100%;
    top: -100px;
    z-index: 1;

    ${down("md")} {
      top: 0;
    }
  }

  .slick-slide {
    div {
      height: 100%;
      ${down("md")} {
        height: 400px;
      }
      ${down("sm")} {
        height: 300px;
      }
      ${down("xs")} {
        height: 180px;
      }

      img {
        object-fit: cover;
        object-position: center;

        ${down("md")} {
          height: 400px;
        }
        ${down("sm")} {
          height: 300px;
        }
        ${down("xs")} {
          height: 180px;
        }
      }
    }
  }

  .slick-prev,
  .slick-next {
    z-index: 99;
  }
  .slick-prev {
    left: 20px !important;
    &:before {
      font-size: 40px !important;
    }
  }

  .slick-next {
    right: 35px !important;
    &:before {
      font-size: 40px !important;
    }
  }
`;
