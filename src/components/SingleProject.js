import React from "react";
import styled from "styled-components";
import { project } from "../data";

function SingleProject() {
  return (
    <>
      {project.map(({ image, id, title, description }) => {
        return (
          <ProjectWrapper key={id}>
            <ProjectBg style={{ background: `url(${image.default})` }} />
            <OverlayContent>
              <Title>{title}</Title>
              <Description>{description}</Description>
            </OverlayContent>
          </ProjectWrapper>
        );
      })}
    </>
  );
}

export default SingleProject;

const ProjectWrapper = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 1;
`;
const ProjectBg = styled.div`
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center center !important;
  height: 410px;
  position: relative;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: -100%;
    background: rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease-out;
    z-index: 0;
  }
  &:hover&::before {
    left: 0;
  }
`;
const OverlayContent = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50px;
  z-index: 10;
`;
const Title = styled.h3`
  color: #fff;
  font-size: 25px;
  argin-bottom: 6px;
  font-weight: 600;
`;
const Description = styled.p`
  color: #fff;
`;
