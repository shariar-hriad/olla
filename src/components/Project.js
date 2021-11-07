import React from "react";
import styled from "styled-components";
import { Container } from "../GlobalStyles";
import project from "../images/project.webp";
import AccorDion from "./AccorDion";
import { SecTitle } from "./Title";

function Project() {
  return (
    <ProjectArea>
      <Container>
        <ProjectWrapper>
          <AccordionWrapper>
            <Title>
              Work Fast, Create <br /> Beautifully
            </Title>
            <AccorDion />
          </AccordionWrapper>
          <ProjectImage>
            <Image src={project} alt="project" />
          </ProjectImage>
        </ProjectWrapper>
      </Container>
    </ProjectArea>
  );
}

export default Project;

const ProjectArea = styled.section`
  padding: 60px 0;
`;

const ProjectWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const AccordionWrapper = styled.div`
  flex: 1;
  padding: 0 15px;
`;

const Title = styled(SecTitle)`
  margin-bottom: 30px;
`;

const ProjectImage = styled.div`
  flex: 1;
  padding: 0 15px;
`;

const Image = styled.img`
  width: 100%;
`;
