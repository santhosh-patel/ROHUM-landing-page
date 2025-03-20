import React, { useState } from "react";
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
import { Routes, Route } from "react-router-dom";
import MoreServices from "./Pages/MoreServices";
import ComingSoon from "./Pages/ComingSoon";
import Terms from "./Pages/Terms";
import Policy from "./Pages/Policy";
import Contact from "./Pages/Contact";

const App = () => {
  const [serviceIndex, setserviceIndex] = useState(0);
  return (
    <main className="text-[var(--foreground)] bg-[var(--background)] relative w-full min-h-screen max-w-screen-2xl border border-[hsl(var(--border))] overflow-hidden ">
      {/* <Navbar /> */}
      <Navbar2 />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              {/* <Carousel /> */}
              <CubePage />
              <Features />
              <Services setserviceIndex={setserviceIndex} />
              <Cta />
              <Pricing />
              <Contact />
              <FaqsPage />
            </>
          }
        />
        <Route
          path="/services/:id"
          element={<MoreServices serviceIndex={serviceIndex} />}
        />
        <Route path="/download" element={<ComingSoon />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<>404</>} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
