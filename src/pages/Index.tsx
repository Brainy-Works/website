import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code, Users, Lightbulb, Brain, Shield, Clock, CheckCircle } from "lucide-react";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import heroBrainImage from "@/assets/hero-brain-network.png";

const services = [
  {
    icon: Brain,
    title: "AI & Automation",
    description: "Custom LLMs, intelligent chatbots, OCR solutions, and process automation that actually works.",
  },
  {
    icon: Code,
    title: "Software Development",
    description: "End-to-end product development with clean architecture and scalable foundations.",
  },
  {
    icon: Users,
    title: "Freelance Talent",
    description: "Vetted developers and designers matched to your project needs and culture.",
  },
  {
    icon: Lightbulb,
    title: "Consulting & Strategy",
    description: "Technical strategy, rapid prototyping, and roadmap planning for ambitious projects.",
  },
];

const whyUs = [
  {
    icon: Shield,
    title: "Reliability First",
    description: "We don't just build fast—we build to last. Quality code, thorough testing, long-term partnerships.",
  },
  {
    icon: Clock,
    title: "Responsive Partnership",
    description: "Clear communication, quick turnarounds, and no ghosting. Ever.",
  },
  {
    icon: CheckCircle,
    title: "Proven Outcomes",
    description: "80% of our clients return for new projects. Our work speaks through results, not promises.",
  },
];

const caseStudies = [
  {
    title: "Automated Document Processing",
    client: "Financial Services",
    problem: "Manual processing of 10,000+ documents monthly was creating bottlenecks and errors.",
    impact: "95% faster processing",
  },
  {
    title: "AI-Powered Customer Support",
    client: "E-commerce Platform",
    problem: "Support team overwhelmed with repetitive queries, slow response times.",
    impact: "60% reduction in tickets",
  },
  {
    title: "Custom Analytics Dashboard",
    client: "Healthcare Startup",
    problem: "Scattered data across systems made decision-making slow and unreliable.",
    impact: "Real-time insights",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <Sparkles size={16} />
                AI-First. Human-Centered.
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
              >
                We build intelligent software
                <span className="block text-gradient">that actually works</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-10"
              >
                From AI automation to custom development, we're your partner for building 
                technology that scales your business—without the complexity.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
              >
                <Button asChild size="lg" className="gradient-hero text-primary-foreground hover:opacity-90 transition-opacity text-base px-8">
                  <Link to="/contact">
                    Talk to an AI Expert <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-base px-8">
                  <Link to="/services">Explore Services</Link>
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="relative">
                <img 
                  src={heroBrainImage} 
                  alt="AI-powered brain network visualization" 
                  className="w-full h-auto rounded-2xl shadow-elevated animate-float"
                />
                <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 shadow-card border border-border/50">
                  <p className="text-2xl font-display font-bold text-foreground">50+</p>
                  <p className="text-sm text-muted-foreground">Projects Delivered</p>
                </div>
                <div className="absolute -top-4 -right-4 bg-card rounded-xl p-4 shadow-card border border-border/50">
                  <p className="text-2xl font-display font-bold text-accent">95%</p>
                  <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How We Help
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Clear solutions for complex problems. No jargon, just results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Why BrainyWorks Section */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Why teams choose BrainyWorks
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We're not just another dev shop. We're craftspeople who care about the 
                details, the outcomes, and the relationships we build along the way.
              </p>
              <div className="space-y-6">
                {whyUs.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl gradient-hero overflow-hidden shadow-elevated">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-primary-foreground p-8">
                    <p className="text-6xl font-display font-bold mb-4">80%</p>
                    <p className="text-xl opacity-80">of clients return</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-xl gradient-accent flex items-center justify-center shadow-card">
                <div className="text-center text-accent-foreground">
                  <p className="text-3xl font-display font-bold">5+</p>
                  <p className="text-xs">Years</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Concierge Intro */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-10 lg:p-14 shadow-elevated"
          >
            <div className="w-16 h-16 rounded-full gradient-accent mx-auto mb-6 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-accent-foreground" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
              Not sure where to start?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Talk to our AI assistant — it'll guide you to the right solution based on your needs. 
              No pressure, just helpful direction.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Look for the chat icon in the corner →
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4"
          >
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
                Real Work, Real Results
              </h2>
              <p className="text-muted-foreground">See how we've helped businesses like yours.</p>
            </div>
            <Button asChild variant="outline" className="border-2">
              <Link to="/case-studies">
                View All Case Studies <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={study.title} {...study} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to build something great?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's start with a conversation. No sales pressure—just a thoughtful discussion about your needs.
            </p>
            <Button asChild size="lg" className="gradient-hero text-primary-foreground text-base px-10">
              <Link to="/contact">
                Get Your Free Consultation <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
