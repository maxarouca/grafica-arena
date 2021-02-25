import Contact from "../components/contact";
import Experience from "../components/experience";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import Portfolio from "../components/portfolio";
import Services from "../components/services";
import FullContainer from "../components/utils/fullContainer";
import Slider from "react-slick";

const banners = ["/images/banner-agenda.jpg", "/images/banner-cartoes.jpg"];

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <>
      <Header zIndex />
      <Slider {...settings}>
        {banners.map((item) => (
          <img src={item} alt="" key={item} />
        ))}
      </Slider>
      <Portfolio />
      <FullContainer background="#0B0D17">
        <Services />
      </FullContainer>
      <Experience />
      <Contact />
      <FullContainer background="#0B0D17">
        <Footer />
      </FullContainer>
    </>
  );
}
