import React, { Suspense, lazy } from "react";
import Hero from "./sections/slider/hero";

const PadelExperience = lazy(() => import("./sections/experienceSect/PadelExperience"));
const VenueSessions = lazy(() => import("./sections/VenueSessions/VenueSessions"));
const CommunityHub = lazy(() => import("./sections/CommunityHub/CommunityHub"));
const ContactForm = lazy(() => import("./sections/ContactForm/ContactForm"));
const Footer = lazy(() => import("./sections/Footer/Footer"));

function App() {
  return (
    <>
      <Hero />

      <Suspense
        fallback={
          <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            Loading...
          </div>
        }
      >
        <PadelExperience />
        <VenueSessions />
        <CommunityHub />
        <ContactForm />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;