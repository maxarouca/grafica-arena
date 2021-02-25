import React, { useState } from "react";

import Container from "../utils/container";
import {
  MenuLink,
  Logo,
  Nav,
  Wrapper,
  MenuIcon,
  MenuLinkButton,
  MenuIconClose,
} from "./styles";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container id="nav">
      <Wrapper>
        <Logo src="/images/logo.png" alt="Logo Arena" />

        <MenuIcon size="30" open={menuOpen} onClick={() => setMenuOpen(true)} />
        <MenuIconClose
          size="30"
          open={menuOpen}
          onClick={() => setMenuOpen(false)}
        />

        <Nav open={menuOpen}>
          <MenuLink
            activeClass="active"
            to=""
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </MenuLink>
          <MenuLink
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            Portfólio
          </MenuLink>
          <MenuLink
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            Serviços
          </MenuLink>
          {/* <MenuLink
                      activeClass="active"
                      to="portfolio"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >Depoimentos</MenuLink> */}
          <MenuLink
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            Contato
          </MenuLink>
          <MenuLinkButton
            color="blue"
            href="https://api.whatsapp.com/send?phone=557134092236"
            target="_blank"
            onClick={() => {
              // window.location.href =
              //   "https://api.whatsapp.com/send?phone=557134092236";
              return setMenuOpen(false);
            }}
          >
            71 3409-2246
          </MenuLinkButton>
        </Nav>
      </Wrapper>
    </Container>
  );
}

export default Header;
