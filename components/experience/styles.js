import styled from "styled-components";
import { up, down, between, only } from "styled-breakpoints";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 25px;
  ${down("md")} {
    flex-direction: column;
  }
`;

export const LargeText = styled.h3`
  font-size: 30px;
  width: 28%;
  ${down("md")} {
    width: 100%;
    text-align: center;
    font-size: 28px;
  }
  ${down("xs")} {
    font-size: 20px;
  }
`;

export const ContainerItens = styled.div`
  display: flex;
  justify-content: space-between;
  width: 33%;
  ${down("lg")} {
    width: 100%;
    padding: 0 200px;
  }
  ${down("md")} {
    width: 100%;
    padding: 0 100px;
  }
  ${down("sm")} {
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 0 30px;
  }
`;

export const WrapperItens = styled.div`
  display: flex;
  align-items: center;

  ${down("md")} {
    justify-content: center;
  }

  img {
    margin-right: 10px;
    margin-top: 20px;
    width: 70px;
  }

  p {
    margin-bottom: 0;
    font-size: 20px;
    font-weight: 700;
  }

  span {
    font-size: 14px;
  }
`;
