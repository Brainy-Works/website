import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-interior.jpg";

const HeroSection = () => (
  <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Luxury interior living room" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-charcoal/50" />
    </div>
    <div className="relative z-10 container mx-auto px-4 text-center text-warm-white">
      <div className="w-16 h-0.5 bg-gold mx-auto mb-6 animate-fade-in" />
      <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
        Designing Spaces<br />That Inspire
      </h1>
      <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90 font-sans animate-fade-in">
        Luxury Interiors · Personalized Concepts · Timeless Elegance
      </p>
      <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
        <Button size="lg" className="bg-gold hover:bg-gold-light text-charcoal font-semibold px-8">
          View Portfolio <ArrowRight className="h-4 w-4 ml-1" />
        </Button>
        <Button size="lg" variant="outline" className="border-warm-white text-warm-white hover:bg-warm-white/10 px-8">
          <Phone className="h-4 w-4 mr-1" /> Get Free Consultation
        </Button>
        <Button size="lg" variant="outline" className="border-warm-white text-warm-white hover:bg-warm-white/10 px-8">
          <MessageCircle className="h-4 w-4 mr-1" /> WhatsApp Us
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
