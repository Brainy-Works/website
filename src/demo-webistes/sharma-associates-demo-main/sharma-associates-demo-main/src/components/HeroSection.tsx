import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, Briefcase, PhoneCall } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[520px] md:min-h-[600px] flex items-center">
      <img src={heroBg} alt="Professional office" className="absolute inset-0 h-full w-full object-cover" />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 container-max w-full section-padding">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">Chartered Accountants</p>
          <h1 className="font-heading text-3xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Trusted Financial &amp; Tax Advisory Services
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
            Helping Businesses Grow with Compliance, Clarity &amp; Confidence
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#consultation" className="flex items-center gap-2 rounded bg-gold px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-gold-light">
              <PhoneCall size={16} /> Book Consultation
            </a>
            <a href="#services" className="flex items-center gap-2 rounded border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10">
              <Briefcase size={16} /> Our Services
            </a>
            <a href="#contact" className="flex items-center gap-2 rounded border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10">
              Contact Us <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
