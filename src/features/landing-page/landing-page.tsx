import Hero from "./components/hero";
import Amenities from "./components/amenities";
import Gallery from "./components/gallery";
import Contact from "./components/contact";

const LandingPage = () => {
  return (
    <div className="scroll-smooth">
      <Hero />
      <Amenities />
      <Gallery />
      <Contact />
    </div>
  );
};

export default LandingPage;

