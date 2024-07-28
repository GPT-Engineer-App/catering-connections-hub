import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gray-900 text-white py-32">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg')" }}></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to CaterEase Catering Services</h1>
          <p className="text-xl mb-8">Effortless catering solutions for your business events</p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;