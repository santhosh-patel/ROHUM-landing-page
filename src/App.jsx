import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Carousel from "./Components/Carousel";
import Services from "./Pages/Services";
import Features from "./Pages/Features";
import CubePage from "./Pages/CubePage";
const App = () => {
  return (
    <main className="text-[var(--foreground)] bg-[var(--background)] w-full min-h-screen max-w-screen-2xl border border-[hsl(var(--border))] overflow-hidden ">
      <Navbar />
      <Home />
      {/* <Carousel /> */}
      <CubePage />
      <Features />
      <Services />
      <div className="min-h-[200vh]"></div>
    </main>
  );
};

export default App;
