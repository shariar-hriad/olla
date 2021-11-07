import React from "react";
import About from "../components/About";
import Banner from "../components/Banner";
import Brand from "../components/Brand";
import Category from "../components/Category";
import Gallery from "../components/Gallery";
import Pricing from "../components/Pricing";
import Project from "../components/Project";
import Testimonial from "../components/Testimonial";
import WantToWork from "../components/WantToWork";

function Home() {
  return (
    <>
      <Banner />
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

export default Home;
