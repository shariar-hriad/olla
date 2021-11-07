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
import about from "../images/about.webp";

function AboutP() {
  return (
    <>
      <PageBanner caption="About Us" img={about} />
      <Category />
      <About />
      <Brand />
      <Project />
      <Pricing />
      <Testimonial />
      <Gallery />
      <WantToWork />
    </>
  );
}

export default AboutP;
