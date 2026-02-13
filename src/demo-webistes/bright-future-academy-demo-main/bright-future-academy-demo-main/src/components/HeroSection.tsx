import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
    <img
      src={heroBg}
      alt="Students studying in classroom"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-navy/75" />
    <div className="relative z-10 container mx-auto px-4 text-center">
      <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy-foreground leading-tight mb-4">
        Shaping Futures.
        <br />
        <span className="text-accent">Delivering Results.</span>
      </h1>
      <p className="text-navy-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-body">
        Expert Faculty &bull; Proven Results &bull; Structured Learning
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#admission"
          className="rounded-lg bg-accent text-accent-foreground px-8 py-3.5 font-semibold text-base hover:opacity-90 transition-opacity shadow-lg"
        >
          Enroll Now
        </a>
        <a
          href="#contact"
          className="rounded-lg bg-primary text-primary-foreground px-8 py-3.5 font-semibold text-base hover:opacity-90 transition-opacity shadow-lg"
        >
          Book Free Demo Class
        </a>
        <a
          href="#admission"
          className="rounded-lg border-2 border-navy-foreground/40 text-navy-foreground px-8 py-3.5 font-semibold text-base hover:bg-navy-foreground/10 transition-colors"
        >
          Download Brochure
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
