import React from "react";
import trueImg from "../../assets/true.svg";
import falseImg from "../../assets/false.svg";

import { Container, PlanFeatures } from "./styles";

interface Props {
  PlanName: string;
  id?: string;
  support?: boolean;
  ebook?: boolean;
  contentexclusive?: boolean;
  callprivate?: boolean;
  exclusivekit?: boolean;
}

const PlanCard: React.FC<Props> = ({
  PlanName,
  id,
  support,
  ebook,
  contentexclusive,
  callprivate,
  exclusivekit,
}) => {
  return (
    <Container id={id}>
      <h1>{PlanName}</h1>
      <PlanFeatures>
        <div>
          <img src={support ? trueImg : falseImg} alt="img" />
          <p>Support</p>
        </div>
        <div>
          <img src={ebook ? trueImg : falseImg} alt="img" />
          <p>E-book</p>
        </div>
        <div>
          <img src={contentexclusive ? trueImg : falseImg} alt="img" />
          <p>Content Exclusive</p>
        </div>
        <div>
          <img src={callprivate ? trueImg : falseImg} alt="img" />
          <p>Call private</p>
        </div>
        <div>
          <img src={exclusivekit ? trueImg : falseImg} alt="img" />
          <p>Exclusive Kit</p>
        </div>
      </PlanFeatures>
      <button>Get Start</button>
    </Container>
  );
};

export default PlanCard;
