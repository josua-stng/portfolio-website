import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import GetAllProject from "./routes/GetAllProject";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<GetAllProject/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>

      </Routes>

    </div>
  );
}

export default App;
