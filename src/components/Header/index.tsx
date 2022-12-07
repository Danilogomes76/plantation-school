import React from "react";
import { Container } from "./styles";
import logo from "../../assets/logo.svg";

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logo}></img>
      <ul>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
        <li>
          <a href="#plans">PLANS</a>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#home">HOME</a>
        </li>
      </ul>
    </Container>
  );
};

export default Header;
