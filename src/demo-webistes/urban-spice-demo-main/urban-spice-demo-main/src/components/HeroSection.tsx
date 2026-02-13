import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Delicious Indian cuisine spread" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0,0%,4%)] via-[hsl(0,0%,4%,0.6)] to-[hsl(0,0%,4%,0.3)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-gold font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Welcome to Urban Spice
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-dark-surface-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Experience Taste <br />
          <span className="text-gradient-gold italic">Like Never Before</span>
        </h1>
        <p className="font-body text-dark-surface-foreground/70 text-base md:text-lg mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.5s" }}>
          Authentic Flavors · Elegant Ambience · Easy Online Ordering
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.7s" }}>
          <a href="#menu" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 text-sm">
            View Menu
          </a>
          <a href="#booking" className="border border-gold/50 text-gold hover:bg-gold/10 font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 text-sm">
            Book a Table
          </a>
          <a
            href="https://wa.me/919039430279?text=Hi%2C%20I%20want%20to%20place%20an%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[hsl(142,70%,35%)] hover:bg-[hsl(142,70%,30%)] text-primary-foreground font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 text-sm"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold/40 rounded-full flex items-start justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-gold rounded-full animate-fade-in" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
