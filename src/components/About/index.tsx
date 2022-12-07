import React from "react";
import backgroundAbout from "../../assets/backgroundAbout.png";

import { Container, TextContent } from "./styles";

const About: React.FC = () => {
  return (
    <Container id="about">
      <TextContent>
        <h1>About</h1>
        <div>
          <p>
            School gardens teach students about different types of plants and
            how they got there. These lessons help students learn critical
            skills they can use every day. Students learn by doing tasks such as
            cutting plant leaves or flowers with scissors or knives.
          </p>
        </div>
      </TextContent>
      <img src={backgroundAbout} alt="backgroundImageAbout" />
    </Container>
  );
};

export default About;
