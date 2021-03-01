import React from "react";

import { RightArrowAlt } from "@styled-icons/boxicons-regular/RightArrowAlt";
import {
  Wrapper,
  Title,
  WrapperCards,
  Card,
  CardTitle,
  CardText,
} from "./styles";
import Button from "../utils/button";
import Container from "../utils/container";
import { API_URL } from "../../services/constants";

function Services({ services, contact }) {
  return (
    <Container id="services">
      <Wrapper>
        <Title>{services?.title}</Title>
        <WrapperCards>
          {services?.card?.map(({ title, description, icon }) => (
            <Card key={title}>
              <div>
                <img src={`${API_URL}${icon.url}`} alt={icon.name} />
              </div>
              <CardTitle>{title}</CardTitle>
              <CardText>{description}</CardText>
            </Card>
          ))}
        </WrapperCards>
        <Button
          color="#FFF"
          transparent
          href={contact?.contactUrl}
          target="_blank"
        >
          Solicite um orçamento <RightArrowAlt size={20} fill="#FFF" />
        </Button>
      </Wrapper>
    </Container>
  );
}

export default Services;
