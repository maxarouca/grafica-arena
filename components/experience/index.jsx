import React from "react";
import { PeopleArrows } from "@styled-icons/fa-solid/PeopleArrows";
import { ProjectDiagram } from "@styled-icons/fa-solid/ProjectDiagram";
import { Wrapper, WrapperItens, LargeText, ContainerItens } from "./styles";
import Container from "../utils/container";

function Experience() {
  return (
    <Container>
      <Wrapper>
        <LargeText>Mais de 10 anos oferecendo serviços de qualidade</LargeText>
        <ContainerItens>
          <WrapperItens>
            <PeopleArrows size={30} />
            <div>
              <p>+2000</p>
              <span>clientes</span>
            </div>
          </WrapperItens>
          <WrapperItens>
            <ProjectDiagram size={30} />
            <div>
              <p>+10000</p>
              <span>projetos concluidos</span>
            </div>
          </WrapperItens>
        </ContainerItens>
      </Wrapper>
    </Container>
  );
}

export default Experience;
