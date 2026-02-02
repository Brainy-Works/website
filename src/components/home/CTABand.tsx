import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTABand() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-[hsl(250,80%,65%)]/10" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Ready to build something{" "}
            <span className="gradient-text">exceptional?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Share your goals and we’ll propose the fastest path to measurable impact.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="glow" size="xl" className="shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer">
              <Link to="/contact" className="group">
                Book a 15-min Call
                <ArrowRight className="w-5 h-5 transition-all group-hover:translate-x-2" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl" className="hover:bg-primary/10 hover:border-primary hover:scale-105 transition-all duration-300 cursor-pointer">
              <Link to="/contact?type=quote" className="group">
                Request a Quote
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
