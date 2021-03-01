import styled from "styled-components";
import { up, down, between, only } from "styled-breakpoints";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 25px;
`;

export const Title = styled.h1`
  text-align: center;
  color: #fff;
`;

export const WrapperCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  width: 350px;
  height: 300px;
  background-color: #fff;
  border-radius: 10px;
  margin: 20px 0px;
  padding: 40px;

  ${down("sm")} {
    width: 90%;
    height: auto;
  }

  svg {
    path {
      color: ${(props) => props.theme.colors.blue};
    }
  }

  div {
    height: 50px;
    width: 50px;

    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const CardTitle = styled.h2`
  color: ${(props) => props.theme.colors.dark};
  margin-top: 10px;
`;

export const CardText = styled.p`
  color: ${(props) => props.theme.colors.dark};
  text-align: left;
  font-size: 16px;
`;
