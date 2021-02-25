import styled from "styled-components";
import { up, down, between, only } from "styled-breakpoints";
import { MenuAltRight } from "@styled-icons/boxicons-regular/MenuAltRight";
import { Close } from "@styled-icons/evaicons-solid/Close";
import { Link } from "react-scroll";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 25px;
  position: relative;
`;
export const Logo = styled.img`
  height: 100%;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: all 0.3s;

  ${down("lg")} {
    display: ${(props) => (props.open ? "flex" : "none")};
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding: 10px 0px 20px 0px;
    background: rgba(11, 13, 23, 0.95);
    z-index: 0;
  }
`;

export const MenuIcon = styled(MenuAltRight)`
  ${up("xl")} {
    display: none;
    visibility: none;
    width: 0;
  }
  ${down("lg")} {
    display: ${(props) => (props.open ? "none" : "block")};
    position: absolute;
    top: 30px;
    right: 20px;
    cursor: pointer;
    z-index: 20;
  }
`;

export const MenuIconClose = styled(Close)`
  ${up("xl")} {
    display: none;
    visibility: none;
    width: 0;
  }

  ${down("lg")} {
    display: ${(props) => (props.open ? "block" : "none")};
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    z-index: 20;
    fill: ${(props) => props.theme.colors.blue};
  }
`;

export const MenuLink = styled(Link)`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  margin: 0 10px;
  padding: 10px;
  text-align: right;
  cursor: pointer;
  display: block;
  transition: all 0.1s ease;
  text-align: center;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  position: relative;
  z-index: 999;

  &:hover {
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-color: ${(props) => props.theme.colors.darkblue};
    /* font-weight: 800; */
  }

  ${down("lg")} {
    font-size: 30px;
    padding: 30px;
    color: #fff;
    width: 100%;
  }
`;

export const MenuLinkButton = styled.a`
  background-color: ${(props) => props.theme.colors.blue};
  border-radius: 10px;
  color: #fff;
  padding: 10px 15px;
  transition: all 0.2s ease;
  cursor: pointer;

  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  margin: 0 10px;
  text-align: right;
  cursor: pointer;
  display: block;
  text-align: center;
  position: relative;
  z-index: 999;
  text-decoration: none;
  &:hover {
    background-color: ${(props) => props.theme.colors.darkblue};
  }
  ${down("lg")} {
    border-radius: 0;
    font-size: 30px;
    padding: 20px;
    width: 100%;
  }
`;
