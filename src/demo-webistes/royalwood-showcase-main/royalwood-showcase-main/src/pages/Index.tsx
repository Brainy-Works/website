import DemoBanner from "@/components/DemoBanner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import CustomFurniture from "@/components/CustomFurniture";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import StoreLocation from "@/components/StoreLocation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DemoBanner />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <CategoriesSection />
        <FeaturedProducts />
        <CustomFurniture />
        <WhyChooseUs />
        <Testimonials />
        <StoreLocation />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
