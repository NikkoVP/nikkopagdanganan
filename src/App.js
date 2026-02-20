import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import WorkExp from "./components/WorkExp";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Home />
        <About />
        <WorkExp />
        <Contact />
      </main>
    </>
  );
}

export default App;
