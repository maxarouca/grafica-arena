import styled from "styled-components";
import { up, down, between, only } from "styled-breakpoints";

export const SContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  margin-top: ${(props) => (props.id === "portfolio" ? "-50px" : "auto")};
  z-index: ${(props) => (props.id === "nav" ? 10 : 0)};

  ${down("md")} {
    margin-top: ${(props) => (props.id === "portfolio" ? "auto" : "auto")};
  }
`;
