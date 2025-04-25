import React, { useEffect, useState } from "react";
import Home from "./Components/sections/Home";
import Services from "./Components/sections/Services";
import Features from "./Components/sections/Features";
import CubePage from "./Components/sections/CubePage";
import Pricing from "./Components/sections/Pricing";
import FaqsPage from "./Components/sections/FaqsPage";
import Cta from "./Components/sections/Cta";
import Footer from "./Components/Footer";
import Navbar2 from "./Components/Navbar2";
import { Routes, Route } from "react-router-dom";
import MoreServices from "./Pages/MoreServices";
import ComingSoon from "./Pages/ComingSoon";
import Terms from "./Pages/Terms";
import Policy from "./Pages/Policy";
import Contact from "./Components/sections/Contact";
import CheckLoaded from "./Components/CheckLoaded";
import gsap from "gsap";

const App = () => {
  const [serviceIndex, setserviceIndex] = useState(0);
  const timeline1 = gsap.timeline();
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js";
    script.type = "module";
    script.async = true;
    script.onload = () => setScriptLoaded(true); // Set state when script loads
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main className="text-[var(--foreground)] bg-[var(--background)] relative w-full min-h-screen max-w-screen-2xl border border-[hsl(var(--border))] overflow-hidden">
      <Navbar2 timeline1={timeline1} />
      <Routes>
        <Route element={<CheckLoaded />}>
          <Route
            path="/"
            element={
              <>
                <Home />
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
        </Route>

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
      {scriptLoaded && (
        <div
          dangerouslySetInnerHTML={{
            __html: `<zapier-interfaces-chatbot-embed is-popup="true" chatbot-id="cm9wbfvpc006ccs8w4yupcchy"></zapier-interfaces-chatbot-embed>`,
          }}
        />
      )}
    </main>
  );
};

export default App;
