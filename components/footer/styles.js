import styled from "styled-components";
import { Heart } from "@styled-icons/boxicons-solid/Heart";
import { up, down, between, only } from "styled-breakpoints";

export const SHeart = styled(Heart)``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 25px;

  ${down("sm")} {
    flex-direction: column;
  }

  &:first-child {
    padding-top: 35px;
  }
  &:last-child {
    padding-top: 0;
  }
`;

export const Text = styled.span`
  width: 33%;
  color: #fff;
  ${down("sm")} {
    width: 100%;
    text-align: center;
    margin-bottom: 40px;
  }
`;
export const Logo = styled.div`
  width: 33%;
  margin: 0 auto;
  text-align: center;
  ${down("sm")} {
    width: 100%;
    text-align: center;
    margin-bottom: 40px;
  }
`;
export const SocialMedia = styled.div`
  width: 33%;
  text-align: right;
  color: #fff;
  ${down("sm")} {
    width: 100%;
    text-align: center;
  }
`;

export const Signature = styled.p`
  color: #fff;
  text-align: center;
  width: 100%;

  border-top: 1px solid rgba(256, 256, 256, 0.2);
  padding-top: 40px;
`;
