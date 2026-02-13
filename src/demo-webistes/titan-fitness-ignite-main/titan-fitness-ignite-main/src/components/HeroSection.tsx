import { MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-gym.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <img
        src={heroImg}
        alt="Titan Fitness Club gym interior"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="hero-overlay absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-32">
        <p className="text-accent font-heading text-sm sm:text-base tracking-[0.3em] uppercase mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Titan Fitness Club
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading text-foreground leading-[0.95] mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Transform Your Body.
          <br />
          <span className="text-primary">Transform Your Life.</span>
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up font-light" style={{ animationDelay: "0.35s" }}>
          Modern Equipment &nbsp;|&nbsp; Certified Trainers &nbsp;|&nbsp; Result-Focused Training
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <a href="#plans" className="gradient-red text-primary-foreground font-bold px-8 py-3.5 rounded-sm uppercase tracking-wider text-sm hover:opacity-90 transition-opacity w-full sm:w-auto text-center">
            Join Now
          </a>
          <a href="#trial" className="border border-accent text-accent font-bold px-8 py-3.5 rounded-sm uppercase tracking-wider text-sm hover:bg-accent hover:text-accent-foreground transition-all w-full sm:w-auto text-center">
            Book Free Trial
          </a>
          <a
            href="https://wa.me/919039430279?text=Hi%20Titan%20Fitness!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-accent-foreground font-bold px-8 py-3.5 rounded-sm uppercase tracking-wider text-sm hover:opacity-90 transition-opacity w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
