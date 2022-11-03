import React from "react";
import Navigation from "../components/Navigation";
import Nav from "../components/Navu";
import Navbars from "../Navbar/Navbar";
import HomeNavbar from "../components/HomeNavbar";
import Blog from "../components/Blog";
import ibizatoken from "../components/ibizatokenmagzine";
import Hero from "../components/HeroSection";

const IBIZAMAIN = () => {
  return (
    <div>
      <Navbars />
      <Hero />
      <Blog />
      <ibizatoken />
    </div>
  );
};

export default IBIZAMAIN;
