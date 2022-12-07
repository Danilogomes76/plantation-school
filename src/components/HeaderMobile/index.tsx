import React, { useState } from "react";
import { Container, StyledMenu } from "./styles";
import logoImg from "../../assets/logo.svg";
import homeImg from "../../assets/navBarIcon/home.svg";
import aboutImg from "../../assets/navBarIcon/about.svg";
import plansImg from "../../assets/navBarIcon/energyLeaf.svg";
import contactImg from "../../assets/cell.svg";
import { Squash as Hamburger } from "hamburger-react";

const HeaderMobile: React.FC = () => {
  const [menu, setMenu] = useState(false);

  function closeMenu(): void {
    setMenu(false);
  }

  function openMenu(): void {
    setMenu(true);
  }

  function handleStateChange(): void {
    setMenu(menu);
  }

  return (
    <Container>
      <StyledMenu
        className="menu"
        disableAutoFocus
        width={"80%"}
        isOpen={menu}
        onClose={closeMenu}
        onOpen={openMenu}
        onStateChange={handleStateChange}
        customBurgerIcon={false}
      >
        <div className="navImgBox" style={{ display: "flex" }}>
          <img className="navImg" src={logoImg} alt="logoImg" />
          <h1 className="navTitle">Plantation School</h1>
        </div>

        <ul>
          <li
            className="navItem"
            style={{ display: "flex" }}
            onClick={closeMenu}
          >
            <img src={homeImg} alt="homeImgIcon" />
            <a href="#home">HOME</a>
          </li>
          <li
            className="navItem"
            style={{ display: "flex" }}
            onClick={closeMenu}
          >
            <img src={aboutImg} alt="aboutImgIcon" />
            <a href="#about">ABOUT</a>
          </li>
          <li
            className="navItem"
            style={{ display: "flex" }}
            onClick={closeMenu}
          >
            <img src={plansImg} alt="plansImgIcon" />
            <a href="#plans">PLANS</a>
          </li>
          <li
            className="navItem"
            style={{ display: "flex" }}
            onClick={closeMenu}
          >
            <img src={contactImg} alt="contactImgIcon" />
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </StyledMenu>
      <div className="hamburguer">
        <Hamburger size={40} toggled={menu} toggle={setMenu} />
      </div>
    </Container>
  );
};

export default HeaderMobile;
