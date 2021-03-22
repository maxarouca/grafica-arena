import React, { useState } from "react";
import { API_URL } from "../../services/constants";

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

function Header({ header }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const { link, logo } = header;

  return (
    <Container id="nav">
      <Wrapper>
        <Logo
          src={`${API_URL}${logo.url}`}
          alt="Logo Arena"
          width={200}
          height={60}
          priority={true}
        />

        <MenuIcon size="30" open={menuOpen} onClick={() => setMenuOpen(true)} />
        <MenuIconClose
          size="30"
          open={menuOpen}
          onClick={() => setMenuOpen(false)}
        />

        <Nav open={menuOpen}>
          {link?.map((item) => (
            <MenuLink
              activeClass="active"
              to={item.url}
              spy={true}
              smooth={true}
              duration={500}
              key={item.id}
            >
              {item.label}
            </MenuLink>
          ))}
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
