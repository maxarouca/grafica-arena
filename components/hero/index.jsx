import React from "react";
import { HeroWrapper } from "./styles";
import Slider from "react-slick";
import { API_URL } from "../../services/constants";

const banners = [
  "/images/banner-agenda.jpg",
  "/images/banner-cartoes.jpg",
  "/images/banner-apostilas.jpg",
  "/images/banner-banners.jpg",
  "/images/banner-blocos.jpg",
  "/images/banner-canetas.jpg",
  "/images/banner-crachas.jpg",
  "/images/banner-panfletos.jpg",
];

function Hero({ hero }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <HeroWrapper>
      <Slider {...settings}>
        {hero?.banner?.map((item) => (
          <img src={`${API_URL}${item.url}`} alt="" key={item} />
        ))}
      </Slider>
    </HeroWrapper>
  );
}

export default Hero;
