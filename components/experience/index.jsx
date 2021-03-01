import React from "react";
import { Wrapper, WrapperItens, LargeText, ContainerItens } from "./styles";
import Container from "../utils/container";
import { API_URL } from "../../services/constants";

function Experience({ experience }) {
  return (
    <Container>
      <Wrapper>
        <LargeText>{experience?.title}</LargeText>
        <ContainerItens>
          {experience?.experienceItem?.map((item) => (
            <WrapperItens key={item.experienceIcon.url}>
              <img
                src={`${API_URL}${item.experienceIcon.url}`}
                alt={`${API_URL}${item.experienceIcon.name}}`}
              />
              <div>
                <p>{item.experienceNumber}</p>
                <span>{item.experienceType}</span>
              </div>
            </WrapperItens>
          ))}
        </ContainerItens>
      </Wrapper>
    </Container>
  );
}

export default Experience;
