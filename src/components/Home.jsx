import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import GetInTouch from "./GetInTouch";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <div>
      <div className="get-bg pb-48 mb-10">
        <Navbar />
        <Banner />
      </div>
      <Skills />
      <Projects />
      <GetInTouch />
      <Footer />
    </div>
  );
};
export default Home;
