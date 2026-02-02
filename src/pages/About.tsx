import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We measure success by the outcomes we deliver, not just deliverables. Your goals are our goals.",
  },
  {
    icon: Heart,
    title: "Human-Centered",
    description: "We build solutions that serve real people. Technology should simplify life, not complicate it.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "Your team is our team. We communicate clearly, share knowledge, and grow together.",
  },
];

export default function About() {
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
              About Brainyworks
            </h1>
            <p className="text-xl text-muted-foreground">
              We're a team of craftspeople building intelligent software that scales businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Brainyworks was founded with a simple belief: technology should serve people, not complicate their lives.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We started as a small team of engineers frustrated with generic solutions. We saw businesses struggling with automation, custom development, and finding the right technical talent. We decided to build something different.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we've grown into a team of 15+ experts across AI, software development, and consulting. We've helped 50+ companies scale their operations and achieve remarkable results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="p-6 rounded-2xl glass-card border border-border/30">
                <p className="text-4xl font-display font-bold text-primary mb-2">50+</p>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </div>
              <div className="p-6 rounded-2xl glass-card border border-border/30">
                <p className="text-4xl font-display font-bold text-primary mb-2">95%</p>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
              <div className="p-6 rounded-2xl glass-card border border-border/30">
                <p className="text-4xl font-display font-bold text-primary mb-2">15+</p>
                <p className="text-sm text-muted-foreground">Team Members</p>
              </div>
              <div className="p-6 rounded-2xl glass-card border border-border/30">
                <p className="text-4xl font-display font-bold text-primary mb-2">80%</p>
                <p className="text-sm text-muted-foreground">Repeat Clients</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl glass-card border border-border/30 hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Let's build something great together
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to transform your vision into reality? Let's talk about your project.
            </p>
            <Button asChild size="lg" className="gradient-hero text-primary-foreground">
              <Link to="/contact">
                Get in Touch <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
