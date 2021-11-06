import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../GlobalStyles";
import { SecSubTitle } from "./Description";
import { SecTitle } from "./Title";

function Brand() {
  return (
    <BrandArea>
      <Container>
        <SectionTitle>
          <Title>You'll be in good company.</Title>
          <Description>
            A powerful suite of features to help you build fast and functional
            layouts. Olla is perfect for building websites of almost any kind.
          </Description>
          <Button to="">Meet Our Customers</Button>
        </SectionTitle>
        {/* <BrandSlider /> */}
      </Container>
    </BrandArea>
  );
}

export default Brand;

const BrandArea = styled.section`
  background: #041735;
  padding: 60px 0;
`;

const SectionTitle = styled.div`
  position: relative;
  margin: 0 auto 60px;
  max-width: 850px;
  text-align: center;
`;

const Title = styled(SecTitle)`
  color: #fff;
`;

const Description = styled(SecSubTitle)`
  color: #fff;
`;

const Button = styled(Link)`
  background: #2845ba;
  font-size: 15px;
  padding: 21px 18px;
  display: inline-block;
  text-transform: capitalize;
  line-height: 15px;
  border-radius: 4px;
  font-weight: 600;
  color: #fff;
  transition: all 0.3s ease-out;
  border: 1px solid transparent;
  margin-top: 10px;
  &:hover {
    background: transparent;
    border-color: #2845ba;
  }
`;
