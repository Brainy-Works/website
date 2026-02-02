import { motion } from "framer-motion";
import { Phone, FileText, Rocket, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Discovery Call",
    description: "Requirements deep-dive & success metrics definition",
  },
  {
    icon: FileText,
    number: "02",
    title: "Build Plan",
    description: "Scope, timeline, milestones, and clear deliverables",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Delivery",
    description: "Weekly demos, QA, security reviews, and iterations",
  },
  {
    icon: HeartHandshake,
    number: "04",
    title: "Launch & Support",
    description: "Handover, documentation, monitoring & ongoing support",
  },
];

export function HowWeWork() {
  return (
    <section className="py-28 section-gradient relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-5">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven process that delivers results, not surprises.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px z-0">
                  <div className="h-full bg-gradient-to-r from-border via-primary/30 to-transparent" />
                </div>
              )}

              <div className="relative h-full p-7 rounded-2xl glass-card border border-border/30 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 cursor-pointer hover:bg-primary/5">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-primary/10 transition-all">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-4xl font-display font-bold text-border/80 group-hover:text-primary/30 transition-colors">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Communication note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card border border-border/30">
            <span className="text-sm text-muted-foreground">
              <strong className="text-foreground font-medium">Communication:</strong> Slack/Email + weekly updates
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
