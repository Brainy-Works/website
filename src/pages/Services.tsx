import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Code, Users, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI & Automation",
    description:
      "Custom LLMs, intelligent chatbots, OCR solutions, and process automation that actually works.",
    details: [
      "Custom language models",
      "Intelligent chatbots",
      "OCR & document processing",
      "Process automation",
      "Predictive analytics",
    ],
  },
  {
    icon: Code,
    title: "Software Development",
    description:
      "End-to-end product development with clean architecture and scalable foundations.",
    details: [
      "Full-stack development",
      "React & modern frameworks",
      "Cloud deployment",
      "API development",
      "Database design",
    ],
  },
  {
    icon: Users,
    title: "Freelance Talent",
    description:
      "Vetted developers and designers matched to your project needs and culture.",
    details: [
      "Dedicated developers",
      "UI/UX designers",
      "Project managers",
      "Quality assurance",
      "Technical writers",
    ],
  },
  {
    icon: Lightbulb,
    title: "Consulting & Strategy",
    description:
      "Technical strategy, rapid prototyping, and roadmap planning for ambitious projects.",
    details: [
      "Technical roadmapping",
      "Architecture design",
      "Rapid prototyping",
      "Technology selection",
      "Team scaling advice",
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-50" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We offer comprehensive solutions tailored to your unique needs. From AI automation to custom development, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-8 rounded-2xl glass-card border border-border/30 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 cursor-pointer hover:bg-primary/5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-primary/10 transition-all">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-base mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {service.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-pointer">
                    <Link to="/contact" className="group">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6 text-foreground">
              Ready to get started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss which service best fits your needs and how we can help you achieve your goals.
            </p>
            <Button asChild size="lg" className="gradient-hero text-primary-foreground">
              <Link to="/contact">
                Schedule a Consultation <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
