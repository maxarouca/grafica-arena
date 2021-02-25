import React from "react";
import Container from "../utils/container";

import { Wrapper, Text, Logo, SocialMedia, Signature, SHeart } from "./styles";

function Footer() {
  return (
    <Container>
      <Wrapper>
        <Text>@2021 - Todos os direitos reservados</Text>
        <Logo>
          <img src="/images/logo.png" alt="Logo Arena" />
        </Logo>
        <SocialMedia>Redes Sociais</SocialMedia>
      </Wrapper>
      <Wrapper>
        <Signature>
          Desenvolvido com <SHeart size={18} fill="#ED1B24" /> por Max Arouca.
        </Signature>
      </Wrapper>
    </Container>
  );
}

export default Footer;
