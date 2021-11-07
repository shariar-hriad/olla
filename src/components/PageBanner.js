import React from "react";
import styled from "styled-components";
import { SecTitle } from "./Title";

function PageBanner({ caption, img }) {
  return (
    <BannerArea>
      <BannerWrapper>
        <BannerCaption>
          <Caption>{caption}</Caption>
        </BannerCaption>
        <BannerImage>
          <Image src={img} alt="" />
        </BannerImage>
      </BannerWrapper>
    </BannerArea>
  );
}

export default PageBanner;

const BannerArea = styled.section`
  background: #eff2ff;
  height: 400px;
  position: relative;
`;
const BannerWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const BannerCaption = styled.div`
  position: relative;
  width: 35%;
  padding-right: 50px;
`;
const BannerImage = styled.div`
  width: 50%;
  position: relative;
  overflow: hidden;
`;
const Caption = styled(SecTitle)`
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;
`;
const Image = styled.img`
  height: 400px;
  width: 100%;
  object-fit: cover;
`;
