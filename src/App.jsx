import React from "react";
import Header from "./Components/Header";

import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Skill from "./Pages/Skill";
import Shop from "./Pages/Shop";
import Stories from "./Pages/Stories";
import Herosection from "./Components/Herosection";

import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Header />
        <Navbar />
        <Herosection />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
