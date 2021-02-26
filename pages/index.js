import Contact from "../components/contact";
import Experience from "../components/experience";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import Portfolio from "../components/portfolio";
import Services from "../components/services";
import FullContainer from "../components/utils/fullContainer";

export default function Home() {
  return (
    <>
      <Header zIndex />
      <Hero />
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
