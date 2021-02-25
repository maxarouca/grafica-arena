import styled from "styled-components";

export const SFullContainer = styled.div`
  width: 100%;
  background: ${(props) =>
    props.backgroundImage
      ? `url(${props.backgroundImage}) no-repeat top center`
      : props.background};
  background-size: cover;
`;
