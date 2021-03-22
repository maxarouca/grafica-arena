import React from "react";
import Image from "next/image";

import { API_URL } from "../../../services/constants";

import { Container } from "./styles";

function ImageList({ images }) {
  return (
    <Container>
      {images.map((item, index) => (
        <Image
          key={`${API_URL}${item.url}`}
          src={`${API_URL}${item.url}`}
          alt={`${API_URL}${item.name}`}
          width={320}
          height={220}
        />
      ))}
    </Container>
  );
}

export default ImageList;
