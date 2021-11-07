import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SecSubTitle } from "./Description";
import { SecTitle } from "./Title";

function SinglePriceCard({ toggle }) {
  return (
    <>
      <SingleCard className={toggle === 1 ? "active" : null}>
        <CardHeader>
          <Price>
            <Span>$</Span>20<Details>month</Details>
          </Price>
        </CardHeader>
        <CardFooter>
          <CardSpecs>
            <Specs>Per User, Per Year</Specs>
            <Specs>24x Customer Support</Specs>
          </CardSpecs>
          <PriceButton to="/">Start Free Trial</PriceButton>
          <FooterDesc>Free 30 day trial • No credit card required</FooterDesc>
        </CardFooter>
      </SingleCard>

      <SingleCard className={toggle === 2 ? "active" : null}>
        <CardHeader>
          <Price>
            <Span>$</Span>05<Details>month</Details>
          </Price>
        </CardHeader>
        <CardFooter>
          <CardSpecs>
            <Specs>Per User, Per Month</Specs>
          </CardSpecs>
          <PriceButton to="/">Start Free Trial</PriceButton>
          <FooterDesc>Free 30 day trial • No credit card required</FooterDesc>
        </CardFooter>
      </SingleCard>
    </>
  );
}

export default SinglePriceCard;

const SingleCard = styled.div`
  text-align: center;
  margin-bottom: 30px;
  display: none;
  transition: all 0.3s ease-out;

  &.active {
    display: block;
  }
`;

const CardHeader = styled.div``;
const Price = styled(SecTitle)`
  display: inline-block;
  position: relative;
`;

const Span = styled.span`
  color: #041735;
  font-size: 20px;
  font-weight: 700;
  position: absolute;
  top: 0;
  left: -17px;
`;

const Details = styled(SecSubTitle)`
  color: #041735;
  font-size: 20px;
  display: inline-block;
  font-weight: 500;
`;

const CardFooter = styled.div``;

const CardSpecs = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const Specs = styled.li`
  color: #5c6168;
  font-weight: 300;
  font-size: 18px;
  margin-bottom: 30px;
`;

const PriceButton = styled(Link)`
  display: inline-block;
  font-size: 15px;
  color: #fff;
  padding: 21px 18px;
  background: #2845ba;
  border: 1px solid #2845ba;
  font-weight: 600;
  text-transform: capitalize;
  line-height: 15px;
  border-radius: 4px;
  margin-bottom: 20px;
  transition: all 0.3s ease-out;
  &:hover {
    background: transparent;
    color: #2845ba;
  }
`;

const FooterDesc = styled(SecSubTitle)`
  font-size: 14px;
`;
