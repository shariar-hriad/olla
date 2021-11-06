import React from "react";
import styled from "styled-components";
import { Container } from "../GlobalStyles";
import aboutimg from "../images/aboutimg.webp";
import AboutDetails from "./AboutDetails";
import { SecTitle } from "./Title";

function About() {
  return (
    <AboutArea>
      <Container>
        <AboutWrapper>
          <AboutImage>
            <AboutImg src={aboutimg} alt="About Us" />
          </AboutImage>
          <AboutContent>
            <AboutTitle>
              All the features <br /> you'd expect
            </AboutTitle>
            <AboutDetails />
          </AboutContent>
        </AboutWrapper>
      </Container>
    </AboutArea>
  );
}

export default About;

const AboutArea = styled.section`
  padding: 20px 0 60px 0;
`;

const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
`;

const AboutTitle = styled(SecTitle)`
  margin-bottom: 30px;
  color: #041735;
`;

const AboutImage = styled.div``;

const AboutImg = styled.img`
  padding: 10px 0;
`;

const AboutContent = styled.div`
  padding: 10px;
  margin-left: 110px;
`;
