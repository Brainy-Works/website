import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const categories = [
  "AI & Automation",
  "Software Development",
  "Consulting & Strategy",
];

interface ImpactCard {
  label: string;
  value: string;
}

interface Project {
  category: string;
  name: string;
  summary: string;
  problem: string;
  solution: string;
  stack: string[];
  deliverables: string[];
  impact: ImpactCard[];
  timeline: string;
  slug: string;
}

const featuredProjects: Project[] = [
  {
    category: "AI & Automation",
    name: "Automated Document Processing",
    summary:
      "AI-powered OCR + LLM pipeline that extracts and validates critical data from 10k+ documents per month.",
    problem:
      "Manual document review created errors, delays, and high operational costs.",
    solution:
      "Built a secure ingestion pipeline with OCR, structured extraction, and human-in-the-loop validation.",
    stack: ["LLMs", "OCR", "Python", "FastAPI", "PostgreSQL"],
    deliverables: [
      "OCR + extraction engine",
      "Confidence-based validation",
      "Audit trails & compliance logs",
    ],
    impact: [
      { label: "Processing Time", value: "-95%" },
      { label: "Accuracy", value: "98%" },
      { label: "Cost Reduction", value: "-60%" },
      { label: "Time to Deploy", value: "6 weeks" },
    ],
    timeline: "6 weeks",
    slug: "automated-documents",
  },
  {
    category: "Software Development",
    name: "Custom Analytics Dashboard",
    summary:
      "Real-time analytics platform consolidating data sources into a single decision cockpit.",
    problem:
      "Leaders had fragmented data and no unified visibility on critical KPIs.",
    solution:
      "Designed a modular data layer and built a live dashboard with role-based views.",
    stack: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
    deliverables: [
      "Live KPI dashboards",
      "Role-based access control",
      "Scalable data pipelines",
    ],
    impact: [
      { label: "Decision Speed", value: "+40%" },
      { label: "Data Coverage", value: "15x" },
      { label: "Adoption", value: "92%" },
      { label: "Time to Deploy", value: "8 weeks" },
    ],
    timeline: "8 weeks",
    slug: "analytics-dashboard",
  },
  {
    category: "Consulting & Strategy",
    name: "Growth & Architecture Roadmap",
    summary:
      "12-month product roadmap with scalable architecture guidance and hiring strategy.",
    problem:
      "Unclear technical direction and concerns about scaling the current platform.",
    solution:
      "Conducted a full audit, defined the target architecture, and delivered a phased roadmap.",
    stack: ["Architecture", "Roadmapping", "Team Scaling"],
    deliverables: [
      "Architecture blueprint",
      "Delivery roadmap",
      "Hiring & tooling plan",
    ],
    impact: [
      { label: "Delivery Velocity", value: "3x" },
      { label: "Technical Debt", value: "-60%" },
      { label: "Team Clarity", value: "100%" },
      { label: "Time to Deploy", value: "4 weeks" },
    ],
    timeline: "4 weeks",
    slug: "strategy-roadmap",
  },
];

export function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const activeProject = featuredProjects.find((p) => p.category === activeCategory);

  return (
    <section className="py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-5">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hand-picked projects that show measurable impact and reliable delivery.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-14"
        >
          <div className="segmented-control border border-border/30">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`segmented-tab ${
                  activeCategory === category
                    ? "segmented-tab-active"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeProject && (
            <motion.div
              key={activeProject.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-6xl mx-auto"
            >
              <div className="rounded-3xl glass-card-strong border border-border/30 overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="p-8 lg:p-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-5">
                      <Zap className="w-3.5 h-3.5" />
                      {activeProject.category}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-display font-bold mb-4">
                      {activeProject.name}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {activeProject.summary}
                    </p>

                    <div className="grid gap-4 mb-8">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                          Challenge
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {activeProject.problem}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                          Solution
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {activeProject.solution}
                        </p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                        Deliverables
                      </h4>
                      <ul className="space-y-2">
                        {activeProject.deliverables.map((item) => (
                          <li key={item} className="text-sm text-foreground flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-10">
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-lg bg-secondary/80 border border-border/30 text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button asChild variant="hero" className="btn-glow shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                        <Link to="/work" className="group">
                          View More Work
                          <ArrowRight className="w-4 h-4 transition-all group-hover:translate-x-2" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="hover:border-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300 cursor-pointer">
                        <Link to="/contact" className="group">
                          Request Similar Build
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="bg-surface-1/50 p-8 lg:p-10 flex flex-col gap-6 border-l border-border/30">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                        Impact
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        {activeProject.impact.map((item) => (
                          <div
                            key={item.label}
                            className="p-4 rounded-xl glass-card border border-border/30"
                          >
                            <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                            <p className="text-xl font-display font-bold text-foreground">
                              {item.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl border border-border/30 bg-secondary/40">
                      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                        Timeline
                      </p>
                      <p className="text-lg font-semibold text-foreground">
                        {activeProject.timeline}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        From kickoff to production-ready delivery.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          More projects available on request. {""}
          <Link to="/contact" className="text-primary hover:underline font-medium">
            Get in touch
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
