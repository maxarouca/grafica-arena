import React from "react";
import Container from "../utils/container";
import ImageList from "../utils/imageList";
import { ImagesWrapper, Title } from "./styles";

const imageList = [
  "/images/image01.png",
  "/images/image02.png",
  "/images/image03.png",
  "/images/image04.png",
  "/images/image01.png",
  "/images/image02.png",
  "/images/image03.png",
  "/images/image04.png",
  "/images/image01.png",
  "/images/image02.png",
  "/images/image03.png",
  "/images/image04.png",
];

function Portfolio() {
  return (
    <Container id="portfolio">
      <Title>Projetos desenvolvidos</Title>
      <ImagesWrapper>
        <ImageList images={imageList} />
      </ImagesWrapper>
    </Container>
  );
}

export default Portfolio;
