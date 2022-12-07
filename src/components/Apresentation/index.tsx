import React from "react";
import { Container, SubTitle, Texts } from "./styles";
import gardenGirl from "../../assets/girlPlant.svg";
import leaf from "../../assets/Leaf.svg";

const Apresentation: React.FC = () => {
  return (
    <Container id="home">
      <img src={gardenGirl} alt="gardenGirl" />
      <Texts>
        <h1>Plantation School</h1>
        <SubTitle>
          <div>
            <h2>Learn to plants</h2>
            <img src={leaf} alt="leaf" />
          </div>
          <button>
            <a href="#plans">Start Now</a>
          </button>
        </SubTitle>
      </Texts>
    </Container>
  );
};

export default Apresentation;
