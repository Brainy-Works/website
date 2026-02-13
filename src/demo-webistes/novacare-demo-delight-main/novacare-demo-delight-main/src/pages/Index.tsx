import DemoBanner from "@/components/DemoBanner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SpecialitiesSection from "@/components/SpecialitiesSection";
import DoctorsSection from "@/components/DoctorsSection";
import AppointmentSection from "@/components/AppointmentSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import InsuranceSection from "@/components/InsuranceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingBookButton from "@/components/FloatingBookButton";

const Index = () => (
  <>
    <DemoBanner />
    <Navbar />
    <main>
      <HeroSection />
      <SpecialitiesSection />
      <DoctorsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <BeforeAfterSection />
      <AppointmentSection />
      <InsuranceSection />
      <ContactSection />
    </main>
    <Footer />
    <FloatingBookButton />
  </>
);

export default Index;
