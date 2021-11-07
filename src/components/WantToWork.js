import React from "react";
import styled from "styled-components";
import { Container } from "../GlobalStyles";
import { SecSubTitle } from "./Description";
import { NavButton } from "./NavBar";
import { SecTitle } from "./Title";

function WantToWork() {
  return (
    <WantToWorkWrapper>
      <ContainerBtmBorder>
        <Wrapper>
          <SectionTitle>
            <Caption>Create your amazing website with Olla</Caption>
            <Description>
              Facilisis ac eget mauris nulla enim a diam posuere vel eleifend
              augue.
            </Description>
          </SectionTitle>
          <ButtonWrapper>
            <NavButton to="">Start Free Trial</NavButton>
          </ButtonWrapper>
        </Wrapper>
      </ContainerBtmBorder>
    </WantToWorkWrapper>
  );
}

export default WantToWork;

const WantToWorkWrapper = styled.section`
  padding-top: 60px;
  background: #041735;
`;
const ContainerBtmBorder = styled(Container)`
  border-bottom: 1px solid rgba(255, 255, 255, 0.09);
  padding-bottom: 50px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SectionTitle = styled.div`
  padding: 0 3px;
`;
const Caption = styled(SecTitle)`
  font-weight: 400;
  color: #fff;
  margin-bottom: 12px;
`;
const ButtonWrapper = styled.div`
  padding: 0 3px;
`;
const Description = styled(SecSubTitle)`
  color: #dedede;
  font-size: 18px;
  margin-bottom: 0;
`;
