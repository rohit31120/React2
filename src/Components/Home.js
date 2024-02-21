import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Cards from "./Cards";
import Footer from "./Footer";
import "../App.css";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
