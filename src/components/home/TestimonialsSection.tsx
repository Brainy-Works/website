import { motion } from "framer-motion";
import { Quote, Linkedin } from "lucide-react";

const testimonials = [
  {
    quote:
      "Brainyworks shipped a production-ready automation pipeline in weeks. Our ops team cut processing time by 95% and finally got real visibility.",
    name: "Ankit Sharma",
    role: "CTO",
    company: "FinTech Startup",
    avatar: "AS",
  },
  {
    quote:
      "From discovery to delivery, their communication was crystal clear. The dashboard they built became our single source of truth.",
    name: "Priya Mehta",
    role: "VP Engineering",
    company: "Healthcare SaaS",
    avatar: "PM",
  },
  {
    quote:
      "They helped us align architecture and hiring strategy in one engagement. The roadmap removed months of uncertainty.",
    name: "Rajesh Kumar",
    role: "Founder",
    company: "B2B SaaS",
    avatar: "RK",
  },
];

interface TestimonialsSectionProps {
  variant?: "full" | "compact";
}

export function TestimonialsSection({ variant = "full" }: TestimonialsSectionProps) {
  const isCompact = variant === "compact";

  return (
    <section className={`${isCompact ? "py-16" : "py-24"} bg-background relative overflow-hidden`}>
      {/* Background accents */}
      {!isCompact && (
        <>
          <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        </>
      )}

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-center ${isCompact ? "mb-10" : "mb-16"}`}
        >
          <h2 className={`${isCompact ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl lg:text-5xl"} font-display font-bold mb-4`}>
            Trusted by <span className="gradient-text">Builders</span>
          </h2>
          {!isCompact && (
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What our clients say about working with us.
            </p>
          )}
        </motion.div>

        {/* Testimonial Cards */}
        <div className={`grid grid-cols-1 ${isCompact ? "md:grid-cols-3 gap-4" : "md:grid-cols-3 gap-6 lg:gap-8"}`}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className={`h-full ${isCompact ? "p-5" : "p-6 lg:p-8"} rounded-2xl glass-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 cursor-pointer hover:bg-primary/5`}>
                {/* Quote Icon */}
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Quote className="w-5 h-5 text-primary" />
                </div>

                {/* Quote Text */}
                <p className={`${isCompact ? "text-sm" : "text-base"} text-muted-foreground leading-relaxed mb-6`}>
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-sm font-semibold text-primary">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                  <button className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
