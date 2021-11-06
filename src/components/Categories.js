import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { categories } from "../data";

function Categories() {
  return (
    <AllCateGory>
      {categories.map(({ id, title, description, image, alt, bg }) => {
        return (
          <CateWrapper style={{ backgroundColor: bg }} key={id}>
            <CatTitle>
              <CatLink to="">{title}</CatLink>
            </CatTitle>
            <CatImgWrapper>
              <CatImg src={image.default} alt={alt} />
            </CatImgWrapper>
            <CatCaption>{description}</CatCaption>
          </CateWrapper>
        );
      })}
    </AllCateGory>
  );
}

export default Categories;

const AllCateGory = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 20px;
`;

const CateWrapper = styled.div`
  background: #f0f3ff;
  border-radius: 5px;
  padding: 60px;
  transition: all 0.4s ease-out 0s;
  text-align: center;
  margin-bottom: 30px;
  position: relative;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 0;
    background: #e9fffd;
    transition: 0.6s;
    bottom: 0;
    left: 0;
    z-index: -1;
    border-radius: 5px;
  }

  &:hover&::before {
    height: 100%;
  }
`;

const CatTitle = styled.h5``;

const CatLink = styled(Link)`
  color: #041735;
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 21px;
  display: block;
  transition: all 0.2s ease-out;
`;

const CatImgWrapper = styled.div`
  margin-bottom: 50px;
`;

const CatImg = styled.img`
  padding: 3px 0;
`;

const CatCaption = styled.p`
  color: #5c6168;
  font-size: 18px;
  transition: all 0.2s ease-out;
  margin: 0;
`;
