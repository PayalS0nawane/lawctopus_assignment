import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyThisCourse from "./components/WhyThisCourse";
import CurriculumTimeline from "./components/CurriculumTimeline";
import FreelancingSection from "./components/FreelancingSection";
import Faculty from "./components/Faculty";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTAFooter from "./components/CTAFooter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <Hero />
      <WhyThisCourse />
      <CurriculumTimeline />
      <FreelancingSection />
      <Faculty />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTAFooter />
      <Footer />
    </div>
  );
}

export default App;