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

function Portfolio({ portfolio }) {
  const { title, images } = portfolio;
  return (
    <Container id="portfolio">
      <Title>{title}</Title>
      <ImagesWrapper>
        <ImageList images={images} />
      </ImagesWrapper>
    </Container>
  );
}

export default Portfolio;
