import React from "react";
import styled from "styled-components";
import { Container } from "../GlobalStyles";
import Description from "./Description";
import SingleProject from "./SingleProject";
import Title from "./Title";

function Gallery() {
  return (
    <GalleryArea>
      <Container>
        <SectionTitle>
          <Title>Project We Have Done...</Title>
          <Description>
            Combine sections from Olla's vast component library and create
            beautiful.
          </Description>
        </SectionTitle>
        <ProjectWrapper>
          <SingleProject />
        </ProjectWrapper>
      </Container>
    </GalleryArea>
  );
}

export default Gallery;

const GalleryArea = styled.section`
  padding: 60px 0;
  position: relative;
`;
const SectionTitle = styled.div`
  padding: 0 20px;
  text-align: center;
  margin-bottom: 60px;
`;
const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 20px;
`;
