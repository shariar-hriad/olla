import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../GlobalStyles";
import Description from "./Description";
import SinglePriceCard from "./SinglePriceCard";
import Tabs from "./Tabs";
import { SecTitle } from "./Title";

function Pricing() {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <PricingArea>
      <Container>
        <PricingWrapper>
          <SectionContent>
            <Title>Build beautiful, feature-complete websites.</Title>
            <Description>
              Facilisis ac eget mauris nulla enim a diam. Posuere vel eleifend
              augue laoreet non praesent ultrices.
            </Description>
            <Ul>
              <List>Brand identity and website</List>
              <List>We developed a new flexible identity</List>
            </Ul>
          </SectionContent>
          <PricingCardWrapper>
            <PriceCard>
              <Tabs click={toggleTab} toggle={toggle} />
              <SinglePriceCard toggle={toggle} />
            </PriceCard>
          </PricingCardWrapper>
        </PricingWrapper>
      </Container>
    </PricingArea>
  );
}

export default Pricing;

const PricingArea = styled.section`
  padding: 60px 0;
  position: relative;
  background: #f1f2f6;
`;

const PricingWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SectionContent = styled.div`
  flex: 1;
  padding: 15px;
`;

const PricingCardWrapper = styled.div`
  flex: 1;
`;

const Title = styled(SecTitle)``;

const Ul = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  margin-top: 40px;
`;

const List = styled.li`
  color: #041735;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  padding-bottom: 15px;
  margin-left: 18px;
  border-bottom: 1px solid #dbdee9;

  &::before {
    content: "";
    background-color: #4aa8c6;
    font-weight: bold;
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50px;
    margin-right: 1em;
  }
`;

const PriceCard = styled.div`
  background: #fff;
  padding: 45px 20px 45px 20px;
  border-radius: 6px;
  width: 450px;
  margin-left: 100px;
`;
