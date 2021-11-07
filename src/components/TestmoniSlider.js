import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
import { testimonials } from "../data";
import { SecSubTitle } from "./Description";

export default class TestMoniSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      initialSlide: 0,
    };
    return (
      <Slider {...settings}>
        {testimonials.map(({ id, author, description, position, img, alt }) => {
          return (
            <SingleTestimonial key={id}>
              <SliderHeader>
                <Caption>{description}</Caption>
              </SliderHeader>
              <Founder>
                <Avatar>
                  <Image src={img.default} alt={alt} />
                </Avatar>
                <Details>
                  <Span>{author}</Span>
                  <Position>{position}</Position>
                </Details>
              </Founder>
            </SingleTestimonial>
          );
        })}
      </Slider>
    );
  }
}

const SingleTestimonial = styled.div`
  padding: 5px 0;
`;
const SliderHeader = styled.div`
  background: #f0f3ff;
  border-radius: 5px;
  padding: 30px 100px 30px 40px;
  margin-bottom: 32px;
  position: relative;
  &::before {
    position: absolute;
    content: "";
    height: 35px;
    width: 35px;
    left: 23px;
    bottom: -8px;
    background: #f0f3ff;
    transform: rotate(45deg);
  }
`;
const Caption = styled.p`
  color: #1a213d;
  font-size: 20px;
  line-height: 1.5;
  font-weight: 400;
`;
const Founder = styled.div`
  display: flex;
  align-items: center;
`;
const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 0 5px;
  border: 1px solid #041735;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
const Details = styled.div`
  text-align: left;
  margin-left: 20px;
`;
const Span = styled.span`
  font-family: "Cabin", sans-serif;
  color: #1a213d;
  font-size: 20px;
  line-height: 20px;
  font-weight: 600;
  text-align: left;
`;
const Position = styled(SecSubTitle)`
  color: #68696e;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  margin-bottom: 0;
`;
