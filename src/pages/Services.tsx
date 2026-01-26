import { motion } from "framer-motion";
import { Brain, Code, Users, Lightbulb, Bot, FileSearch, BarChart3, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const serviceCategories = [
  {
    id: "ai-automation",
    title: "AI & Automation",
    description: "Transform your operations with intelligent systems that learn, adapt, and scale.",
    icon: Brain,
    services: [
      {
        title: "Custom LLM Solutions",
        icon: Bot,
        problem: "Generic AI tools don't understand your specific business context or data.",
        approach: "We build fine-tuned language models trained on your domain, integrated seamlessly into your workflows.",
        outcome: "AI that speaks your language and delivers accurate, contextual responses.",
      },
      {
        title: "Intelligent Document Processing",
        icon: FileSearch,
        problem: "Manual data entry from invoices, contracts, and forms is slow and error-prone.",
        approach: "OCR + AI extraction pipelines that understand document structure and validate data automatically.",
        outcome: "95% faster processing with 99%+ accuracy on structured documents.",
      },
      {
        title: "Business Process Automation",
        icon: Zap,
        problem: "Repetitive tasks drain your team's time and create bottlenecks.",
        approach: "End-to-end automation workflows that handle everything from data collection to decision-making.",
        outcome: "Hours saved weekly, fewer errors, and teams focused on high-value work.",
      },
      {
        title: "Analytics & Insights",
        icon: BarChart3,
        problem: "Data is scattered, reports are manual, and insights come too late.",
        approach: "Real-time dashboards and predictive analytics powered by your actual business data.",
        outcome: "Decisions backed by data, delivered when you need them.",
      },
    ],
  },
  {
    id: "software-development",
    title: "Software Development",
    description: "From concept to launch, we build products that scale with your ambitions.",
    icon: Code,
    services: [
      {
        title: "Full-Stack Development",
        problem: "You have an idea but need a technical team to bring it to life.",
        approach: "Complete product development: architecture, frontend, backend, and deployment.",
        outcome: "A production-ready product built for growth.",
      },
      {
        title: "API & Integration",
        problem: "Your systems don't talk to each other, creating data silos.",
        approach: "Clean API design and third-party integrations that make your stack work as one.",
        outcome: "Seamless data flow across all your tools and platforms.",
      },
      {
        title: "Mobile Applications",
        problem: "Your users expect a mobile experience but you're stuck on web-only.",
        approach: "Cross-platform apps that feel native on iOS and Android.",
        outcome: "Reach users wherever they are, with a consistent experience.",
      },
    ],
  },
  {
    id: "freelance-talent",
    title: "Freelance Talent & Execution",
    description: "Access vetted professionals who integrate seamlessly with your team.",
    icon: Users,
    services: [
      {
        title: "Developer Matching",
        problem: "Hiring is slow, expensive, and often misses the mark.",
        approach: "We match you with pre-vetted developers based on skills, experience, and culture fit.",
        outcome: "The right talent, fast—without the hiring overhead.",
      },
      {
        title: "Project Execution",
        problem: "You have a project scope but no team to execute it.",
        approach: "We assemble and manage a dedicated team to deliver your project end-to-end.",
        outcome: "Delivered on time, on budget, with full transparency.",
      },
      {
        title: "Team Augmentation",
        problem: "Your internal team is stretched thin on critical projects.",
        approach: "Seamless integration of external experts who work as part of your team.",
        outcome: "Scale up quickly, scale down when done.",
      },
    ],
  },
  {
    id: "consulting",
    title: "Consulting & Strategy",
    description: "Expert guidance to navigate technology decisions with confidence.",
    icon: Lightbulb,
    services: [
      {
        title: "Technical Strategy",
        problem: "You're not sure which technology choices are right for your goals.",
        approach: "Deep-dive into your business needs to create a technology roadmap that makes sense.",
        outcome: "Clear direction, reduced risk, and confident decision-making.",
      },
      {
        title: "Rapid Prototyping",
        problem: "You need to validate an idea before committing full resources.",
        approach: "Fast, focused prototypes that test your core assumptions with real users.",
        outcome: "Learn fast, fail cheap, and build what actually works.",
      },
      {
        title: "AI Readiness Assessment",
        problem: "Everyone's talking about AI but you're not sure where to start.",
        approach: "We evaluate your data, processes, and opportunities to identify high-impact AI use cases.",
        outcome: "A practical AI roadmap tailored to your business reality.",
      },
    ],
  },
];

export default function Services() {
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
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Clear solutions for complex problems. We focus on outcomes that matter to your business—not technical jargon.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        {serviceCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.1 }}
            className="mb-20"
            id={category.id}
          >
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center">
                <category.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                  {category.title}
                </h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {category.services.map((service, serviceIndex) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: serviceIndex * 0.1 }}
                  className="bg-card rounded-xl p-6 border border-border/50 shadow-soft hover:shadow-card transition-shadow"
                >
                  <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                    {service.title}
                  </h3>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="text-xs font-medium text-accent uppercase tracking-wide">The Problem</span>
                      <p className="text-muted-foreground text-sm mt-1">{service.problem}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-primary uppercase tracking-wide">Our Approach</span>
                      <p className="text-muted-foreground text-sm mt-1">{service.approach}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-accent uppercase tracking-wide">The Outcome</span>
                      <p className="text-foreground text-sm font-medium mt-1">{service.outcome}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
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
            Not sure which service is right for you?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Let's talk. We'll help you figure out the best approach for your specific situation.
          </p>
          <Button asChild size="lg" className="gradient-accent text-accent-foreground hover:opacity-90">
            <Link to="/contact">
              Get Free Consultation <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
