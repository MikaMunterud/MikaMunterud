import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Background from "./pages/Background";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./scss/App.scss";
import Footer from "./pages/Footer";

function App() {
  const [vh, setVh] = useState();

  useEffect(
    function () {
      setVh(window.innerHeight * 0.01);
      document.documentElement.style.setProperty("--vh", `${vh}px`);

      detailsOpen();
    },
    [vh]
  );

  function detailsOpen() {
    const details = document.querySelectorAll("details");
    const vw = window.innerWidth;

    if (vw > 900) {
      details.forEach(function (list) {
        list.setAttribute("open", "");
      });
    } else {
      details.forEach(function (list) {
        list.removeAttribute("open");
      });
    }
  }

  window.addEventListener("resize", function () {
    setVh(window.innerHeight * 0.01);
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    detailsOpen();
  });

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Background />
        <About />
        <Resume />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
