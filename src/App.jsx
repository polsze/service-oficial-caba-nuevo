import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import BenefitsBanner from "./components/BenefitsBanner";
import BrandsCarousel from "./components/BrandsCarousel";
import WhyChooseUs from "./components/WhyChooseUs";
import Coverage from "./components/Coverage";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Services from "./components/Services";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

function App() {
  return (
    <>
      <Navbar />
      <Hero />     
      <BrandsCarousel/>
      <BenefitsBanner/>
      <WhyChooseUs/>
      <Coverage/>
      <Contact/>
      <FAQ />
      <Services/>
      <CTA />
      <Footer />
      <FloatingButtons />
    </>
  );
}

export default App;