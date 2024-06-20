import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skill/Skills";
import Project from "./Components/Projects/Project";
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      
      </BrowserRouter>
    </>
  );
};

export default App;
