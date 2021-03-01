import Contact from "../components/contact";
import Experience from "../components/experience";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import Portfolio from "../components/portfolio";
import Services from "../components/services";
import FullContainer from "../components/utils/fullContainer";
import api from "../services/api";

export default function Home({
  header,
  hero,
  portfolio,
  services,
  experience,
  contact,
  footer,
}) {
  return (
    <>
      <Header zIndex header={header} />
      <Hero hero={hero} />
      <Portfolio portfolio={portfolio} />
      <FullContainer background="#0B0D17">
        <Services services={services} contact={contact} />
      </FullContainer>
      <Experience experience={experience} />
      <Contact contact={contact} />
      <FullContainer background="#0B0D17">
        <Footer footer={footer} />
      </FullContainer>
    </>
  );
}

export async function getStaticProps(context) {
  const header = await api.get(`/menu`);
  const hero = await api.get(`/hero`);
  const portfolio = await api.get(`/portfolio`);
  const services = await api.get(`/services`);
  const experience = await api.get(`/experience`);
  const contact = await api.get(`/contact`);
  const footer = await api.get(`/footer`);

  if (!header.data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      header: header.data,
      hero: hero.data,
      portfolio: portfolio.data,
      services: services.data,
      experience: experience.data,
      contact: contact.data,
      footer: footer.data,
    },
  };
}
