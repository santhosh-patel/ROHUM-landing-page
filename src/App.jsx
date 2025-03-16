import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Carousel from "./Components/Carousel";
import Services from "./Pages/Services";
import Features from "./Pages/Features";
import CubePage from "./Pages/CubePage";
import Pricing from "./Pages/Pricing";
import FaqsPage from "./Pages/FaqsPage";
import Cta from "./Pages/Cta";
import Footer from "./Components/Footer";
import Navbar2 from "./Components/Navbar2";

const App = () => {
  return (
    <main className="text-[var(--foreground)] bg-[var(--background)] relative w-full min-h-screen max-w-screen-2xl border border-[hsl(var(--border))] overflow-hidden ">
      {/* <Navbar /> */}
      <Navbar2 />
      <Home />
      {/* <Carousel /> */}
      <CubePage />
      <Features />
      <Services />
      <Cta />
      <Pricing />
      <FaqsPage />
      <Footer />
    </main>
  );
};

export default App;
