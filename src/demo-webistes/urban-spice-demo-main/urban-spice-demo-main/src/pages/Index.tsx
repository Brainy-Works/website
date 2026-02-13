import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import BookingSection from "@/components/BookingSection";
import OffersSection from "@/components/OffersSection";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <BookingSection />
        <OffersSection />
        <ReviewsSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
