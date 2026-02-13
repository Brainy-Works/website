import DemoBanner from "@/components/DemoBanner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProcessSection from "@/components/ProcessSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import ConsultationForm from "@/components/ConsultationForm";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => (
  <div className="min-h-screen">
    <DemoBanner />
    <Navbar />
    <HeroSection />
    <AboutSection />
    <PortfolioSection />
    <FeaturedProjects />
    <ProcessSection />
    <WhyChooseUs />
    <TestimonialsSection />
    <ConsultationForm />
    <ContactSection />
    <Footer />
    <FloatingCTA />
  </div>
);

export default Index;
