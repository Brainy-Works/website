import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Clock, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    id: 1,
    title: "Automated Invoice Processing for Financial Services Firm",
    client: "Mid-size Financial Services Company",
    clientType: "Financial Services",
    problem: "Processing 10,000+ invoices monthly was a bottleneck. Three full-time employees spent entire days on manual data entry, leading to delays in vendor payments and frequent errors that caused reconciliation headaches.",
    solution: "We built a custom OCR pipeline with AI-powered data extraction. The system reads invoices regardless of format, extracts key fields, validates against existing vendor data, and flags anomalies for human review.",
    impact: [
      { label: "Processing Time", value: "95% faster", icon: Clock },
      { label: "Error Rate", value: "99.2% accuracy", icon: Target },
      { label: "Cost Savings", value: "$180K/year", icon: TrendingUp },
    ],
    quote: "BrainyWorks understood our constraints and built something that just works. No fuss, no constant maintenance—it just processes invoices reliably every day.",
    quoteName: "Finance Director",
  },
  {
    id: 2,
    title: "AI-Powered Customer Support for E-commerce Platform",
    client: "Growing E-commerce Company",
    clientType: "E-commerce / Retail",
    problem: "The support team was drowning in repetitive queries—order status, returns, shipping times. Response times averaged 4+ hours, and customer satisfaction was slipping.",
    solution: "We implemented an intelligent chatbot that handles common queries with real-time order data integration. Complex issues are seamlessly escalated to human agents with full context.",
    impact: [
      { label: "Ticket Volume", value: "60% reduction", icon: TrendingUp },
      { label: "Response Time", value: "< 30 seconds", icon: Clock },
      { label: "CSAT Score", value: "+25 points", icon: Target },
    ],
    quote: "The bot handles the routine stuff perfectly. Our team now focuses on the customers who really need human attention.",
    quoteName: "Customer Experience Manager",
  },
  {
    id: 3,
    title: "Real-Time Analytics Dashboard for Healthcare Startup",
    client: "Series A Healthcare Technology Company",
    clientType: "Healthcare Tech",
    problem: "Leadership was flying blind. Data lived in separate systems—EHR integrations, billing platforms, operational tools. Monthly reports were outdated by the time they were compiled.",
    solution: "We built a unified analytics platform that pulls data from all sources in real-time. Custom dashboards for different stakeholders—clinical outcomes for medical staff, revenue metrics for finance, operational KPIs for management.",
    impact: [
      { label: "Decision Speed", value: "Real-time", icon: Clock },
      { label: "Data Sources", value: "12 unified", icon: Target },
      { label: "Report Time", value: "4 weeks → instant", icon: TrendingUp },
    ],
    quote: "For the first time, we can see what's happening across the entire organization. It's changed how we make decisions.",
    quoteName: "CEO",
  },
];

export default function CaseStudies() {
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
              Case Studies
            </h1>
            <p className="text-xl text-muted-foreground">
              Real problems. Real solutions. Real results. See how we've helped businesses transform their operations with thoughtful technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl border border-border/50 shadow-card overflow-hidden"
            >
              {/* Header */}
              <div className="gradient-hero p-8">
                <span className="text-accent text-sm font-medium">{study.clientType}</span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary-foreground mt-2">
                  {study.title}
                </h2>
              </div>

              <div className="p-8">
                {/* Content Grid */}
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Problem & Solution */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-destructive" />
                        The Challenge
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{study.problem}</p>
                    </div>

                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        Our Solution
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                    </div>

                    {/* Quote */}
                    <blockquote className="border-l-4 border-accent pl-6 py-2 italic text-foreground">
                      "{study.quote}"
                      <footer className="text-sm text-muted-foreground mt-2 not-italic">
                        — {study.quoteName}, {study.client}
                      </footer>
                    </blockquote>
                  </div>

                  {/* Impact */}
                  <div className="bg-secondary/50 rounded-xl p-6">
                    <h3 className="font-display font-semibold text-foreground mb-6">Impact</h3>
                    <div className="space-y-6">
                      {study.impact.map((item) => (
                        <div key={item.label} className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-5 h-5 text-accent" />
                          </div>
                          <div>
                            <p className="text-2xl font-display font-bold text-foreground">{item.value}</p>
                            <p className="text-sm text-muted-foreground">{item.label}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Your success story could be next
          </h2>
          <p className="text-muted-foreground mb-8">
            Let's discuss how we can help you achieve similar results for your business.
          </p>
          <Button asChild size="lg" className="gradient-hero text-primary-foreground">
            <Link to="/contact">
              Start Your Project <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
