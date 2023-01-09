import React from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <div className="get-bg pb-48 mb-10">
      <Navbar/>
      <Banner/>
      </div>
      <Skills/>
    </div>
  );
}

export default App;
