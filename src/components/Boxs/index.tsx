import React from "react";
import handPlanting from "../../assets/HandPlanting.svg";
import openBook from "../../assets/OpenBook.svg";
import powerPlant from "../../assets/PowerPlant.svg";
import snake from "../../assets/Snake.svg";

import { Container, BoxImage } from "./styles";

const Boxs: React.FC = () => {
  return (
    <Container>
      <BoxImage>
        <img src={snake} alt="snake" />
      </BoxImage>
      <BoxImage>
        <img src={handPlanting} alt="handPlanting" />
      </BoxImage>
      <BoxImage>
        <img src={openBook} alt="openBook" />
      </BoxImage>
      <BoxImage>
        <img src={powerPlant} alt="powerPlant" />
      </BoxImage>
    </Container>
  );
};

export default Boxs;
