import React from "react";
import styled from "styled-components";
import { Container } from "../GlobalStyles";
import testimonial from "../images/aboutimg.webp";
import Description from "./Description";
import TestMoniSlider from "./TestmoniSlider";
import Title from "./Title";

function Testimonial() {
  return (
    <TestimonialArea>
      <Container>
        <Wrapper>
          <TestiImage>
            <Image src={testimonial} alt="Testimonial" />
          </TestiImage>
          <TestimonialSlider>
            <SectionTitle>
              <Title>They use Olla to create great websites.</Title>
              <Description>
                A powerful suite of features to help you build fast and
                functional layouts.
              </Description>
            </SectionTitle>
            <TestMoniSlider />
          </TestimonialSlider>
        </Wrapper>
      </Container>
    </TestimonialArea>
  );
}

export default Testimonial;

const TestimonialArea = styled.section`
  padding: 60px 0;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const TestiImage = styled.div`
  width: 50%;
  padding: 0 15px;
`;
const Image = styled.img`
  width: 100%;
`;
const TestimonialSlider = styled.div`
  width: 50%;
  padding: 0 15px;
  margin-left: 100px;
`;
const SectionTitle = styled.div`
  position: relative;
  margin-bottom: 50px;
`;
