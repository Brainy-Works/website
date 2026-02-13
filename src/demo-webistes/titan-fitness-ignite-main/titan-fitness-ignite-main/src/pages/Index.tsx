import DemoBanner from "@/components/DemoBanner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PlansSection from "@/components/PlansSection";
import ServicesSection from "@/components/ServicesSection";
import TrialSection from "@/components/TrialSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingJoinButton from "@/components/FloatingJoinButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DemoBanner />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PlansSection />
        <GallerySection />
        <TestimonialsSection />
        <TrialSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingJoinButton />
    </div>
  );
};

export default Index;
