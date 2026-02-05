import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ProofStrip } from "@/components/home/ProofStrip";
import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { HowWeWork } from "@/components/home/HowWeWork";
import { CTABand } from "@/components/home/CTABand";
import { motion } from "framer-motion";

export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <div id="hero-scroll-sentinel" className="hero-scroll-sentinel" />
      <ProofStrip />
      <CapabilitiesSection />
      <FeaturedProjects />
      <TestimonialsSection />
      <HowWeWork />
      
      {/* Why BrainyWorks Section */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why teams choose BrainyWorks
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We're not just another dev shop. We're craftspeople who care about the details, 
              the outcomes, and the relationships we build along the way.
            </p>
            <div className="inline-flex items-center gap-2 text-primary font-medium">
              <span className="text-2xl">80%</span>
              <span className="text-lg">of clients return for new projects</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABand />
    </Layout>
  );
}
