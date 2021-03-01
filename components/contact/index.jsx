import React from "react";
import Button from "../utils/button";
import Container from "../utils/container";

import { Text, Wrapper } from "./styles";

function Contact({ contact }) {
  return (
    <Container id="contact">
      <Wrapper>
        <Text>{contact?.contactText}</Text>
        <Button color="blue" href={contact?.contactUrl} target="_blank">
          Enviar mensagem
        </Button>
      </Wrapper>
    </Container>
  );
}

export default Contact;
