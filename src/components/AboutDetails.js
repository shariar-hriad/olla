import React from "react";
import styled from "styled-components";
import { aboutTexts } from "../data";

function AboutDetails() {
  return (
    <>
      {aboutTexts.map(({ id, title, description, border }) => {
        return (
          <SingleText key={id} style={{ borderBottom: !border ? "0px" : null }}>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </SingleText>
        );
      })}
    </>
  );
}

export default AboutDetails;

const SingleText = styled.div`
  padding-bottom: 5px;
  margin-bottom: 15px;
  border-bottom: 1px solid #dbdee9;
`;

const Title = styled.h5`
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 16px;
  font-weight: 600;
  color: #041735;
`;

const Description = styled.p`
  font-size: 17px;
  margin-bottom: 15px;
  line-height: 1.4;
  color: #5c6168;
`;
