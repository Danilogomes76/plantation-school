import React from "react";
import PlanCard from "../PlanCard";

import { Container, PlansBox } from "./styles";

const Plans: React.FC = () => {
  return (
    <Container id="plans">
      <h1>Plans</h1>
      <PlansBox>
        <PlanCard PlanName="Basic - 99$/m" support ebook />
        <PlanCard
          id="start"
          PlanName="Pro - 199$/m"
          support
          ebook
          contentexclusive
        />
        <PlanCard
          PlanName="Exclusive - 249$/m"
          support
          ebook
          contentexclusive
          callprivate
          exclusivekit
        />
      </PlansBox>
    </Container>
  );
};

export default Plans;
