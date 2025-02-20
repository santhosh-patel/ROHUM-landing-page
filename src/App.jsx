import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Carousel from "./Components/Carousel";
const App = () => {
  return (
    <main className="text-[var(--foreground)] bg-[var(--background)] w-full min-h-screen max-w-screen-2xl border border-[hsl(var(--border))] overflow-hidden ">
      <Navbar />
      <Home />
      <Carousel />
      <div className="min-h-[200vh]"></div>
    </main>
  );
};

export default App;
