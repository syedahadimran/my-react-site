import Hero from "./sections/slider/hero";
import PadelExperience from "./sections/experienceSect/PadelExperience";
import Footer from "./sections/Footer/Footer";
import ContactForm from "./sections/ContactForm/ContactForm";
import VenueSessions from "./sections/VenueSessions/VenueSessions";

function App() {
  return (
    <>
      <Hero />
      <PadelExperience  />
      <VenueSessions />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;