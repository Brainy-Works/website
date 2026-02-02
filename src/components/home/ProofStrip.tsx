import { motion } from "framer-motion";
import { TrendingUp, FileText, Server, Sparkles } from "lucide-react";

const metrics = [
  { value: "50+", label: "Projects Delivered" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "24h", label: "Response Time" },
  { value: "5+", label: "Years in Market" },
];

const proofCards = [
  {
    icon: Server,
    title: "AI automation that ships",
    description: "LLM workflows, OCR pipelines, and internal copilots deployed safely",
  },
  {
    icon: FileText,
    title: "Custom software, built right",
    description: "Full-stack apps with clean architecture and long-term maintainability",
  },
  {
    icon: TrendingUp,
    title: "Teams that scale with you",
    description: "Vetted engineers and designers embedded to move faster",
  },
];

export function ProofStrip() {
  return (
    <section className="py-24 bg-surface-1 border-y border-border/30 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Metrics Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 mb-16"
        >
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl lg:text-4xl font-display font-bold gradient-text mb-1">
                {metric.value}
              </p>
              <p className="text-sm text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Proof Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {proofCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex flex-col items-center text-center p-8 rounded-2xl glass-card border border-border/30 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 cursor-pointer hover:bg-primary/5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all">
                  <card.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Studies Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-10"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 badge-glow">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Case studies available on request
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
