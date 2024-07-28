import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import MenuSection from "./components/MenuSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <MenuSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;