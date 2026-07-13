import React from "react";
import Header from "./myComponent/header";
import HomePage from "./myComponent/homePage";
import About from "./myComponent/About";
import Experience from "./myComponent/experience";
import Services from "./myComponent/services";
import Education from "./myComponent/education";
import Skill from "./myComponent/Skill";
import Achievements from "./myComponent/achievements";
import Footer from "./myComponent/footer";

export default function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <HomePage />
        <About />
        <Experience />
        <Services />
        <Education />
        <Skill />
        <Achievements />
      </main>
      <Footer />
    </div>
  );
}
