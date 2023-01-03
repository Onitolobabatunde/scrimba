import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Newsletter from "./components/NewsLetter";
import Analytics from "./components/Analytics";
import Footer from "./components/Footer";
import Cards from "./components/Cards";

// import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}
