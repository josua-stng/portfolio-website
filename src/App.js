import React from "react";
import Banner from "./components/Banner";
import GetInTouch from "./components/GetInTouch";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <div className="get-bg pb-48 mb-10">
      <Navbar/>
      <Banner/>
      </div>
      <Skills/>
      <Projects/>
      <GetInTouch/>
    </div>
  );
}

export default App;
