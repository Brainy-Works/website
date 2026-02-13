import { MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-living-room.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Premium luxury living room with elegant wooden furniture"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/85 via-espresso/60 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-16 py-20">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-sm md:text-base font-body font-semibold tracking-widest uppercase mb-4 text-gold-light">
            Est. 2009 • Premium Craftsmanship
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-tight mb-6 text-primary-foreground">
            Crafting Comfort.{" "}
            <span className="gold-text">Designing Luxury.</span>
          </h1>
          <p className="text-base md:text-xl font-body mb-8 text-cream-dark leading-relaxed">
            Premium Wooden Furniture for Modern Indian Homes. Handcrafted with love, built to last generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="#categories" className="btn-gold text-sm md:text-base !py-3.5 !px-8">
              Explore Collection
            </a>
            <a href="#custom" className="btn-outline-gold text-sm md:text-base !py-3.5 !px-8 !border-cream-dark !text-cream-dark hover:!bg-cream-dark hover:!text-espresso">
              Get Custom Quote
            </a>
            <a href="https://wa.me/919039430279" target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-sm md:text-base !py-3.5 !px-8">
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
