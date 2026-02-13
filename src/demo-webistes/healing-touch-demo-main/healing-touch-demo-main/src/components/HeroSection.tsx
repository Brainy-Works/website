import { Phone, Calendar, MessageCircle } from "lucide-react";
import clinicHero from "@/assets/clinic-hero.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[500px] md:min-h-[600px] flex items-center">
      <div className="absolute inset-0">
        <img src={clinicHero} alt="Healing Touch Clinic interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>
      <div className="relative container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-background mb-4 leading-tight">
          Compassionate Care<br className="hidden sm:block" /> for Your Family
        </h1>
        <p className="text-lg md:text-xl text-background/80 mb-8 max-w-2xl mx-auto">
          Trusted Healthcare with Modern Facilities
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#appointment"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            <Calendar className="h-5 w-5" />
            Book Appointment
          </a>
          <a
            href="tel:+919039430279"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-background text-foreground px-6 py-3 rounded-md font-medium hover:bg-muted transition-colors"
          >
            <Phone className="h-5 w-5" />
            Call Now
          </a>
          <a
            href="https://wa.me/919039430279"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-clinic-green text-accent-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
