import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutP from "./pages/About";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutP />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
