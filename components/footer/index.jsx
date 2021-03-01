import React from "react";
import { API_URL } from "../../services/constants";
import Container from "../utils/container";
import {
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
} from "@styled-icons/boxicons-logos";

import { Wrapper, Text, Logo, SocialMedia, Signature, SHeart } from "./styles";

function Footer({ footer }) {
  const renderSocialLinks = (item) => {
    switch (item.socialNetwork) {
      case "Instagram":
        return (
          <a href={item.url} target="_blank" key={item.url}>
            <Instagram size={30} />
          </a>
        );
      case "Facebook":
        return (
          <a href={item.url} target="_blank" key={item.url}>
            <Facebook size={30} />
          </a>
        );
      case "Linkedin":
        return (
          <a href={item.url} target="_blank" key={item.url}>
            <Linkedin size={30} />
          </a>
        );
      case "Twitter":
        return (
          <a href={item.url} target="_blank" key={item.url}>
            <Twitter size={30} />
          </a>
        );
    }
  };

  return (
    <Container>
      <Wrapper>
        <Text>{footer?.copyright}</Text>
        <Logo>
          <img
            src={`${API_URL}${footer?.logo?.url}`}
            alt={`${API_URL}${footer?.logo?.name}`}
          />
        </Logo>
        <SocialMedia>
          {footer.socialLink.map((item) => renderSocialLinks(item))}
        </SocialMedia>
      </Wrapper>
      <Wrapper>
        <Signature>
          Desenvolvido com <SHeart size={18} fill="#ED1B24" /> por Max Arouca.
        </Signature>
      </Wrapper>
    </Container>
  );
}

export default Footer;
