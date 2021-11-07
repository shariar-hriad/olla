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
import services from "../images/banner.webp";

function Services() {
  return (
    <>
      <PageBanner caption="Services" img={services} />
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

export default Services;
