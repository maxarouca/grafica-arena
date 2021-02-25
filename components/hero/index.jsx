import React from "react";
import Button from "../utils/button";
import Container from "../utils/container";
import { HeroContentWrapper, HeroText } from "./styles";

function Hero() {
  return (
    <Container>
      <HeroContentWrapper>
        <HeroText>Sua melhor escolha em impressão!</HeroText>
        <Button color="blue">Entre em contato conosco</Button>
      </HeroContentWrapper>
    </Container>
  );
}

export default Hero;
