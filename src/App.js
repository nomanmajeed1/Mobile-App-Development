/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Error from "./Error";
import Navbar from "./Navbar";
import Project from "./Project";
import Service from "./Service";
import Team from "./Team";
import News from "./News";
// import Search from "./Search";
import Footer from "./Footer";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/project" element={<Project />} />
        <Route path="/team" element={<Team />} />
        <Route path="/news" element={<News />} />
        {/* <Route path="/search" element={<Search />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
