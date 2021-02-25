import React from "react";

import { RightArrowAlt } from "@styled-icons/boxicons-regular/RightArrowAlt";
import {
  Wrapper,
  Title,
  WrapperCards,
  Card,
  CardTitle,
  CardText,
} from "./styles";
import Button from "../utils/button";
import { Print } from "@styled-icons/entypo/Print";
import { PencilRuler } from "@styled-icons/fa-solid/PencilRuler";
import { Scanner } from "@styled-icons/material-outlined/Scanner";
import { BirthdayCake } from "@styled-icons/fa-solid/BirthdayCake";
import { MegaphoneFill } from "@styled-icons/bootstrap/MegaphoneFill";
import { NewsPaper } from "@styled-icons/zondicons/NewsPaper";
import Container from "../utils/container";

const services = [
  {
    icon: <Print size="40" />,
    title: "Impressão e cópia",
    text:
      "Realizamos impressão e cópia numa grande variedade de formatos e papéis.",
  },
  {
    icon: <Scanner size="40" />,
    title: "Digitalização e envio de documentos",
    text:
      "Fazemos a digitalização de todo tipo de documentos, para backup ou envio.",
  },
  {
    icon: <PencilRuler size="40" />,
    title: "Arte final",
    text:
      "Criação de arte final para qualquer material gráfico ou digital, como cartões, panfletos, posters, etc.",
  },
  {
    icon: <MegaphoneFill size="40" />,
    title: "Materiais de Divulgação",
    text:
      "Produzimos diversos materiais de divulgação, desde cartões e panfletos, a banners e faixas.",
  },
  {
    icon: <BirthdayCake size="40" />,
    title: "Personalizados",
    text:
      "Impressão de materiais personalizados para festas e eventos, como adesivos, topos para bolo e papel arroz.",
  },
  {
    icon: <NewsPaper size="40" />,
    title: "Diversos",
    text:
      "Oferecemos ainda diversos outros materiais, produzidos segundo a necessidade de cada cliente.",
  },
];

function Services() {
  return (
    <Container id="services">
      <Wrapper>
        <Title>Serviços oferecidos</Title>
        <WrapperCards>
          {services?.map(({ title, text, icon }) => (
            <Card key={title}>
              <div>{icon}</div>
              <CardTitle>{title}</CardTitle>
              <CardText>{text}</CardText>
            </Card>
          ))}
        </WrapperCards>
        <Button
          color="#FFF"
          transparent
          href="https://api.whatsapp.com/send?phone=557134092236"
          target="_blank"
        >
          Solicite um orçamento <RightArrowAlt size={20} fill="#FFF" />
        </Button>
      </Wrapper>
    </Container>
  );
}

export default Services;
