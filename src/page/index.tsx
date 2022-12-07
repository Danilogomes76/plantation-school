import { useEffect, useState } from "react";
import About from "../components/About";
import Apresentation from "../components/Apresentation";
import Boxs from "../components/Boxs";
import Plans from "../components/Plans";
import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";

import { Container } from "./styles";
import Contact from "../components/Contact";

const Home: React.FC = () => {
  const [isMobile, setMobile] = useState(window.innerWidth < 518);

  const updateMedia = (): any => {
    setMobile(window.innerWidth < 518);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <Container>
      {isMobile ? <HeaderMobile /> : <Header />}
      <Apresentation />
      <Boxs />
      <About />
      <Plans />
      <Contact />
    </Container>
  );
};

export default Home;
