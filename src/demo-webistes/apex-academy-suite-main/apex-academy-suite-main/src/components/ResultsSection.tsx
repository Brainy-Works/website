import { motion } from "framer-motion";
import { Trophy, Users, Target, Star } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const toppers = [
  { name: "Arjun Sharma", rank: "AIR 125", exam: "JEE Advanced 2024", quote: "Apex Scholars transformed my preparation journey!" },
  { name: "Priya Patel", rank: "NEET Rank 54", exam: "NEET 2024", quote: "The faculty support was exceptional." },
  { name: "Rohan Verma", rank: "AIR 340", exam: "JEE Main 2024", quote: "Best coaching for structured learning." },
  { name: "Ananya Singh", rank: "NEET Rank 112", exam: "NEET 2024", quote: "Made my AIIMS dream come true!" },
  { name: "Karthik Reddy", rank: "AIR 89", exam: "JEE Advanced 2024", quote: "Their test series is unmatched." },
  { name: "Sneha Gupta", rank: "Rank 23", exam: "CUET 2024", quote: "Perfect guidance for top university admissions." },
];

const stats = [
  { icon: Target, value: 95, suffix: "%", label: "Success Rate" },
  { icon: Trophy, value: 300, suffix: "+", label: "Top Selections" },
  { icon: Users, value: 10000, suffix: "+", label: "Students Trained" },
  { icon: Star, value: 50, suffix: "+", label: "Expert Faculty" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="stat-number">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

const ResultsSection = () => (
  <section id="results" className="section-padding bg-muted">
    <div className="container-max">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Proven Track Record</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Our Achievers</h2>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-premium p-6 text-center"
          >
            <s.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
            <AnimatedCounter target={s.value} suffix={s.suffix} />
            <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Topper Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {toppers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="card-premium p-6 flex gap-4 items-start"
          >
            <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
              <span className="font-heading font-bold text-secondary text-lg">{t.name.split(" ").map(n => n[0]).join("")}</span>
            </div>
            <div>
              <h3 className="font-heading font-bold text-foreground">{t.name}</h3>
              <p className="text-secondary font-bold text-sm">{t.rank} – {t.exam}</p>
              <p className="text-muted-foreground text-sm mt-1">"{t.quote}"</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ResultsSection;
