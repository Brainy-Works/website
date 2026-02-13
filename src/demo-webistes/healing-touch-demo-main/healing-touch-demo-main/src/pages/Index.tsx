import DemoBanner from "@/components/DemoBanner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutDoctor from "@/components/AboutDoctor";
import ServicesSection from "@/components/ServicesSection";
import AppointmentForm from "@/components/AppointmentForm";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ClinicInfo from "@/components/ClinicInfo";
import Footer from "@/components/Footer";
import FloatingBookButton from "@/components/FloatingBookButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DemoBanner />
      <Navbar />
      <main>
        <HeroSection />
        <AboutDoctor />
        <ServicesSection />
        <AppointmentForm />
        <WhyChooseUs />
        <Testimonials />
        <ClinicInfo />
      </main>
      <Footer />
      <FloatingBookButton />
    </div>
  );
};

export default Index;
