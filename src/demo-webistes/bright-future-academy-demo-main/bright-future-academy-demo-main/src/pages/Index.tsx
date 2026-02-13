import DemoBanner from "@/components/DemoBanner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import AdmissionSection from "@/components/AdmissionSection";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingEnroll from "@/components/FloatingEnroll";

const Index = () => {
  return (
    <div className="min-h-screen">
      <DemoBanner />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <WhyChooseUs />
      <AdmissionSection />
      <ResultsSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
      <FloatingEnroll />
    </div>
  );
};

export default Index;
