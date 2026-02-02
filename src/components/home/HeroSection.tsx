import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Shield, Lightbulb, CheckCircle } from "lucide-react";

const trustItems = [
  { icon: Shield, text: "Production-ready" },
  { icon: Clock, text: "Quick turnarounds" },
  { icon: CheckCircle, text: "80% repeat clients" },
  { icon: Lightbulb, text: "AI-first approach" },
];

const capabilities = [
  "AI & Automation",
  "Custom Development",
  "Consulting & Strategy",
  "Freelance Talent",
];

export function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex items-center hero-gradient noise-overlay overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Animated Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[hsl(250,80%,65%)]/10 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "3s" }} />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card border border-primary/20 mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground/90">AI-First. Human-Centered.</span>
          </motion.div>

          {/* Headline - Bigger & Bolder */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-display font-bold leading-[1.1] mb-8 tracking-tight"
          >
            Intelligent software{" "}
            <span className="gradient-text">that actually works.</span>
          </motion.h1>

          {/* Subheadline - Shorter & Tighter */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            From AI automation to custom development, we're your partner for building technology that scales your business—without the complexity.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <Button asChild variant="hero" size="xl" className="btn-glow shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <Link to="/contact" className="group">
                Talk to an AI Expert
                <ArrowRight className="w-5 h-5 transition-all group-hover:translate-x-2" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl" className="hover:bg-primary/10 hover:scale-105 transition-all duration-300 cursor-pointer">
              <Link to="/services" className="group">
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          {/* Trust Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground mb-16"
          >
            {trustItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2.5 group">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Capabilities Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-10 border-t border-border/30"
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-5 font-medium">
              What we build
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {capabilities.map((cap, index) => (
                <span
                  key={index}
                  className="px-5 py-2.5 rounded-full glass-card text-sm text-muted-foreground border border-border/30 hover:border-primary/30 hover:text-foreground transition-all duration-200"
                >
                  {cap}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
