import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Hero from "./components/UI/Hero";
import Exercies from "./components/UI/Exercies";
import Start from "./components/UI/Start";
import Pricing from "./components/UI/Pricing";
import Testimonials from "./components/UI/Testimonials";
import Footer from "./components/UI/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Exercies />
      <Start />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
