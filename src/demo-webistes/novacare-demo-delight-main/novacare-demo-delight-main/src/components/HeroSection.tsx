import { motion } from "framer-motion";
import { CalendarCheck, Stethoscope, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-clinic.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-[85vh] flex items-center overflow-hidden">
    {/* BG Image */}
    <div className="absolute inset-0">
      <img src={heroImage} alt="NovaCare clinic interior" className="w-full h-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
    </div>

    <div className="container relative mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-accent text-xs font-semibold tracking-wider uppercase mb-6">
          <Stethoscope className="w-3.5 h-3.5" /> Multi-Speciality Excellence
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-background leading-tight mb-4">
          Advanced Care.{" "}
          <span className="text-gradient-gold">Personalized</span> Treatment.
        </h1>
        <p className="text-background/80 text-lg sm:text-xl mb-8 font-light leading-relaxed">
          Dermatology &nbsp;|&nbsp; Dental &nbsp;|&nbsp; Mental Wellness &nbsp;|&nbsp; Aesthetic Solutions
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#appointment" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-teal-dark transition-colors">
            <CalendarCheck className="w-5 h-5" /> Book Appointment
          </a>
          <a href="#specialities" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-background/40 text-background font-semibold hover:bg-background/10 transition-colors">
            Explore Specialities
          </a>
          <a href="https://wa.me/919039430279" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity">
            <MessageCircle className="w-5 h-5" /> WhatsApp Now
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
