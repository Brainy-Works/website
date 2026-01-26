import { motion } from "framer-motion";
import { Heart, Target, Users, Lightbulb, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Heart,
    title: "Craftsmanship Over Speed",
    description: "We take the time to build things right. Clean code, thoughtful architecture, and solutions that don't break at scale.",
  },
  {
    icon: Target,
    title: "Outcomes Over Outputs",
    description: "We measure success by your business results, not by lines of code or features shipped. Impact is what matters.",
  },
  {
    icon: Users,
    title: "Partnership Over Transaction",
    description: "We're not just vendors. We're invested in your success and build relationships that last beyond single projects.",
  },
  {
    icon: Lightbulb,
    title: "Clarity Over Complexity",
    description: "We simplify the complex. No jargon, no unnecessary complications—just solutions you can understand and trust.",
  },
];

const timeline = [
  {
    year: "2019",
    title: "Founded",
    description: "Started as a small team passionate about building quality software.",
  },
  {
    year: "2020",
    title: "AI Expertise",
    description: "Expanded into AI and machine learning solutions.",
  },
  {
    year: "2022",
    title: "Global Clients",
    description: "Grew to serve clients across US, Europe, and Asia.",
  },
  {
    year: "2024",
    title: "Today",
    description: "A trusted partner for AI-first software development.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-20">
      {/* Header */}
      <section className="relative pb-16">
        <div className="absolute inset-0 gradient-warm" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              About BrainyWorks
            </h1>
            <p className="text-xl text-muted-foreground">
              We're a collective of engineers, designers, and strategists who believe great technology 
              should feel effortless—even when the problems are complex.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Built on a simple belief
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We started BrainyWorks because we saw too many businesses stuck—either trapped 
                with expensive, bloated agencies or burned by freelancers who disappeared mid-project.
              </p>
              <p>
                There had to be a better way: a team that combined deep technical expertise with 
                genuine care for client outcomes. A partner you could trust to understand your 
                business, not just your technical requirements.
              </p>
              <p>
                That's what we've built. We're craftspeople at heart—we take pride in the quality 
                of our work and the relationships we build. We're small enough to care deeply about 
                every project, but experienced enough to handle complexity at scale.
              </p>
              <p className="text-foreground font-medium">
                Our goal isn't to be the biggest. It's to be the partner you actually want to work with.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl gradient-hero overflow-hidden shadow-elevated flex items-center justify-center">
              <div className="text-center text-primary-foreground p-8">
                <p className="text-5xl font-display font-bold mb-2">Quality</p>
                <p className="text-5xl font-display font-bold mb-2">Trust</p>
                <p className="text-5xl font-display font-bold text-accent">Results</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              What We Stand For
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These aren't just words on a wall. They're the principles we use to make decisions every day.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border/50 shadow-soft"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Our Journey
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6 mb-8 last:mb-0"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-display font-bold text-sm">
                  {item.year}
                </div>
                {index !== timeline.length - 1 && (
                  <div className="w-0.5 h-full bg-border mt-2" />
                )}
              </div>
              <div className="pb-8">
                <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-10 text-center"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
            Ready to work with a team that cares?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Let's start with a conversation about what you're trying to build.
          </p>
          <Button asChild size="lg" className="gradient-accent text-accent-foreground hover:opacity-90">
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
