import React from "react";
import About from "../components/About";
import Brand from "../components/Brand";
import Category from "../components/Category";
import Gallery from "../components/Gallery";
import PageBanner from "../components/PageBanner";
import Pricing from "../components/Pricing";
import Project from "../components/Project";
import Testimonial from "../components/Testimonial";
import WantToWork from "../components/WantToWork";
import portfolio from "../images/portfolio.webp";

function Portfolio() {
  return (
    <>
      <PageBanner caption="Services" img={portfolio} />
      <Gallery />
      <Project />
      <Category />
      <About />
      <Brand />
      <Pricing />
      <Testimonial />
      <WantToWork />
    </>
  );
}

export default Portfolio;
