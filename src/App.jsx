import Navbar from "./NavbarComp/Navbar";
import HeroSection from "./HeroComp/HeroSection";
import FeatureSection from "./FeaturesComp/FeatureSection";
import WorkFlow from "./WorkflowComp/WorkFlow";
import Pricing from "./PricingComp/Pricing";
import Testimonials from "./TestimonialsComp/Testimonials";
import Footer from "./FooterComp/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="Components">
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default App;
