import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";

interface CaseStudy {
  title: string;
  client: string;
  category: string;
  problem: string;
  solution: string;
  impact: string;
  stack: string[];
  slug: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "Automated Document Processing",
    client: "Financial Services",
    category: "AI & Automation",
    problem: "Manual processing of 10,000+ documents monthly was creating bottlenecks and errors. The team spent days on repetitive data extraction tasks.",
    solution: "Built an AI-powered OCR and document classification system using LLMs and RAG pipelines to automatically extract, validate, and route documents.",
    impact: "95% faster processing, 98% accuracy, 60% cost reduction",
    stack: ["LLMs", "OCR", "Python", "FastAPI", "PostgreSQL"],
    slug: "automated-documents",
  },
  {
    title: "AI-Powered Customer Support",
    client: "E-commerce Platform",
    category: "AI & Automation",
    problem: "Support team overwhelmed with repetitive queries, slow response times, and customer frustration. Average response time was 8 hours.",
    solution: "Deployed intelligent chatbot with context-aware responses, intelligent routing to human agents, and real-time knowledge base integration.",
    impact: "60% reduction in tickets, 2-minute average response time, 92% customer satisfaction",
    stack: ["React", "Node.js", "LLMs", "Vector DB"],
    slug: "customer-support",
  },
  {
    title: "Custom Analytics Dashboard",
    client: "Healthcare Startup",
    category: "Software Development",
    problem: "Scattered data across systems made decision-making slow and unreliable. No unified view of key metrics.",
    solution: "Developed full-stack analytics platform with real-time data integration, predictive insights, and interactive dashboards.",
    impact: "Real-time insights, 40% faster decisions, 15x data accessibility improvement",
    stack: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
    slug: "analytics-dashboard",
  },
  {
    title: "Mobile App Development",
    client: "SaaS Platform",
    category: "Software Development",
    problem: "Need for cross-platform mobile presence to serve mobile-first users. Legacy web app wasn't mobile-optimized.",
    solution: "Built React Native mobile app with offline-first architecture, real-time sync, and native performance optimization.",
    impact: "40% increase in mobile users, 4.8-star rating, 1M+ downloads",
    stack: ["React Native", "Redux", "Firebase", "TypeScript"],
    slug: "mobile-app",
  },
  {
    title: "Intelligent Invoice Processing",
    client: "Accounting Firm",
    category: "AI & Automation",
    problem: "Manual invoice verification and data entry consumed 30 hours per week. High error rates and compliance issues.",
    solution: "Deployed intelligent document processing system with AI-powered field extraction, validation rules, and automated workflow routing.",
    impact: "99.2% accuracy, 25 hours saved weekly, zero compliance issues",
    stack: ["LLMs", "Document Intelligence", "Python", "AWS"],
    slug: "invoice-processing",
  },
  {
    title: "Consulting & Strategy Engagement",
    client: "Tech Startup",
    category: "Consulting & Strategy",
    problem: "Unclear technical roadmap, uncertain technology choices, scaling concerns, and team structure questions.",
    solution: "Conducted technology audit, created 12-month product roadmap, recommended architecture patterns, and guided team hiring strategy.",
    impact: "Reduced technical debt by 60%, improved deployment speed 3x, secured Series A funding",
    stack: ["Strategic Advisory", "Architecture Design", "Team Coaching"],
    slug: "consulting-strategy",
  },
];

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  const categories = ["All", ...new Set(caseStudies.map((cs) => cs.category))];
  
  const filteredStudies = 
    selectedCategory === "All"
      ? caseStudies
      : caseStudies.filter((cs) => cs.category === selectedCategory);

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
              Our Work
            </h1>
            <p className="text-xl text-muted-foreground">
              Real projects, real results. See how we've helped businesses scale and innovate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredStudies.map((study, index) => (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-8 rounded-2xl glass-card border border-border/30 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 cursor-pointer hover:bg-primary/5">
                  <div className="mb-4">
                    <span className="text-xs uppercase tracking-widest font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {study.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2 text-foreground">
                    {study.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 font-medium">
                    {study.client}
                  </p>
                  
                  <div className="mb-6 space-y-4">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-1">
                        Challenge
                      </p>
                      <p className="text-sm text-muted-foreground">{study.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-1">
                        Solution
                      </p>
                      <p className="text-sm text-muted-foreground">{study.solution}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-primary font-medium mb-1">
                        Impact
                      </p>
                      <p className="text-sm font-semibold text-foreground">{study.impact}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3">
                      Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {study.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-lg bg-secondary/50 text-xs text-muted-foreground border border-border/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button asChild variant="outline" className="w-full hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-pointer">
                    <Link to="/contact" className="group">
                      Get Similar Results
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
              Ready to become a case study?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss your project and how we can help you achieve similar results.
            </p>
            <Button asChild size="lg" className="gradient-hero text-primary-foreground">
              <Link to="/contact">
                Start Your Project <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
