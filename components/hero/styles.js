import styled from "styled-components";
import { up, down, between, only } from "styled-breakpoints";

export const HeroContentWrapper = styled.div`
  width: 60%;
  height: 100vh;
  max-height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;
  ${down("md")} {
    width: 100%;
    text-align: center;
    align-items: center;
  }
`;

export const HeroText = styled.h1`
  font-family: Manrope;
  font-style: extrabold;
  font-weight: 800;
  font-size: 72px;
  line-height: 98px;
  color: ${(props) => props.theme.colors.darkgray};
  margin-top: -80px;

  ${down("md")} {
    font-size: 44px;
    line-height: 54px;
  }
  ${down("sm")} {
    font-size: 34px;
    line-height: 44px;
  }
`;
