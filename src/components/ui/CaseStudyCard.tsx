import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CaseStudyCardProps {
  title: string;
  client: string;
  problem: string;
  impact: string;
  image?: string;
  delay?: number;
}

export function CaseStudyCard({ title, client, problem, impact, image, delay = 0 }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50"
    >
      <div className="aspect-video bg-secondary overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full gradient-hero opacity-20" />
        )}
      </div>
      <div className="p-6">
        <span className="text-accent text-sm font-medium">{client}</span>
        <h3 className="font-display font-semibold text-xl mt-2 mb-3 text-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {problem}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-foreground">{impact}</span>
          <Link 
            to="/case-studies" 
            className="flex items-center gap-1 text-accent text-sm font-medium hover:gap-2 transition-all"
          >
            Read more <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
