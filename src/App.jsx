import React, { Suspense, lazy } from "react";

const Hero = lazy(() => import("./sections/slider/hero"));
const PadelExperience = lazy(() => import("./sections/experienceSect/PadelExperience"));
const VenueSessions = lazy(() => import("./sections/VenueSessions/VenueSessions"));
const CommunityHub = lazy(() => import("./sections/CommunityHub/CommunityHub"));
const ContactForm = lazy(() => import("./sections/ContactForm/ContactForm"));
const Footer = lazy(() => import("./sections/Footer/Footer"));

function App() {
  return (
    <Suspense fallback={<div style={{ height: "100vh" }} />}>
      <Hero />
      <PadelExperience />
      <VenueSessions />
      <CommunityHub />
      <ContactForm />
      <Footer />
    </Suspense>
  );
}

export default App;