import React from "react";
import { API_URL } from "../../../services/constants";

import { Container } from "./styles";

function ImageList({ images }) {
  return (
    <Container>
      {images.map((item, index) => (
        <img
          key={`${API_URL}${item.url}`}
          src={`${API_URL}${item.url}`}
          alt={`${API_URL}${item.name}`}
        />
      ))}
    </Container>
  );
}

export default ImageList;
