import React from "react";
import Button from "../utils/button";
import Container from "../utils/container";

import { Text, Wrapper } from "./styles";

function Contact() {
  return (
    <Container id="contact">
      <Wrapper>
        <Text>Entre em contato e faça seu orçamento agora mesmo!</Text>
        <Button
          color="blue"
          href="https://api.whatsapp.com/send?phone=557134092236"
          target="_blank"
        >
          Enviar mensagem
        </Button>
      </Wrapper>
    </Container>
  );
}

export default Contact;
