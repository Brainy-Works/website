import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-[85vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="Modern coaching institute classroom" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50" />
    </div>

    <div className="relative container-max section-padding w-full">
      <div className="max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-secondary/30">
            🏆 Ranked #1 in Student Success Rate
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6"
        >
          Where Top{" "}
          <span className="text-secondary">Ranks</span>{" "}
          Begin
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-primary-foreground/80 mb-10 max-w-lg"
        >
          Expert Faculty · Data-Driven Learning · Proven Results.
          Join 10,000+ students who trusted Apex Scholars for their competitive exam success.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <a href="#inquiry" className="btn-glow bg-secondary text-secondary-foreground px-7 py-3.5 rounded-full font-bold text-sm flex items-center gap-2 hover:opacity-90 transition-opacity animate-pulse-glow">
            Enroll Now <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#courses" className="bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 px-7 py-3.5 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-primary-foreground/20 transition-colors">
            <PlayCircle className="w-4 h-4" /> Book Free Demo
          </a>
          <a href="#inquiry" className="bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 px-7 py-3.5 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-primary-foreground/20 transition-colors">
            <Download className="w-4 h-4" /> Download Brochure
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
