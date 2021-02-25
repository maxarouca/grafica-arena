import styled from "styled-components";
import { up, down, between, only } from "styled-breakpoints";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
  padding-top: 25px;
`;

export const Text = styled.h2`
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 64px;
  width: 60%;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 40px;
  ${down("lg")} {
    font-size: 34px;
    line-height: 44px;
    margin-bottom: 30px;
  }
  ${down("md")} {
    font-size: 28px;
    line-height: 36px;
    margin-bottom: 25px;
  }
  ${down("sm")} {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 20px;
  }
`;
