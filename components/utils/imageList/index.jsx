import React from "react";

import { Container } from "./styles";

function ImageList({ images }) {
  return (
    <Container>
      {images.map((item, index) => (
        <img key={`${item}${index}`} src={item} alt={item} />
      ))}
    </Container>
  );
}

export default ImageList;
