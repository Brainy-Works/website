import { motion } from "framer-motion";
import { Brain, Code, Users, Lightbulb } from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "AI & Automation",
    description:
      "Custom LLMs, intelligent chatbots, OCR solutions, and process automation that actually works.",
    tags: ["LLM", "Chatbots", "OCR"],
  },
  {
    icon: Code,
    title: "Software Development",
    description:
      "End-to-end product development with clean architecture and scalable foundations.",
    tags: ["React", "Full-Stack", "APIs"],
  },
  {
    icon: Users,
    title: "Freelance Talent",
    description:
      "Vetted developers and designers matched to your project needs and culture.",
    tags: ["Developers", "Designers", "Matching"],
  },
  {
    icon: Lightbulb,
    title: "Consulting & Strategy",
    description:
      "Technical strategy, rapid prototyping, and roadmap planning for ambitious projects.",
    tags: ["Strategy", "Prototyping", "Planning"],
  },
];

export function CapabilitiesSection() {
  return (
    <section className="py-28 tech-pattern relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[hsl(250,80%,65%)]/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-5">
            How We <span className="gradient-text">Help</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Clear solutions for complex problems. No jargon, just results.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-7 rounded-2xl glass-card border border-border/30 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 cursor-pointer hover:bg-primary/5 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all">
                  <cap.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">
                  {cap.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  {cap.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cap.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1.5 rounded-lg bg-secondary/80 text-xs font-medium text-muted-foreground border border-border/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
