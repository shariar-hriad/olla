import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
import { brandSlider } from "../data";

export default class BrandSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      arrows: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <BrandSlides>
        <Slider {...settings}>
          {brandSlider.map(({ img, id }) => {
            return (
              <SingleSlide key={id}>
                <SlideImg src={img.default} alt={id} />
              </SingleSlide>
            );
          })}
        </Slider>
      </BrandSlides>
    );
  }
}

const BrandSlides = styled.div`
  max-width: 880px;
  width: 100%;
  margin: auto;
`;

const SingleSlide = styled.div`
  padding: 0 5px;
`;

const SlideImg = styled.img``;
