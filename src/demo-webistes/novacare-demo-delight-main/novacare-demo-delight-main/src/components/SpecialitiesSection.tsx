import { motion } from "framer-motion";
import { Sparkles, SmilePlus, Brain, Syringe, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface Speciality {
  icon: ReactNode;
  title: string;
  services: string[];
  color: string;
}

const specialities: Speciality[] = [
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: "Dermatology",
    services: ["Acne Treatment", "Skin Rejuvenation", "Laser Therapy"],
    color: "from-primary/10 to-primary/5",
  },
  {
    icon: <SmilePlus className="w-7 h-7" />,
    title: "Dental Care",
    services: ["Root Canal", "Smile Design", "Teeth Whitening"],
    color: "from-accent/15 to-accent/5",
  },
  {
    icon: <Brain className="w-7 h-7" />,
    title: "Psychology",
    services: ["Stress Management", "Therapy Sessions", "Relationship Counseling"],
    color: "from-primary/10 to-primary/5",
  },
  {
    icon: <Syringe className="w-7 h-7" />,
    title: "Aesthetic Care",
    services: ["Botox", "Fillers", "Skin Glow Treatment"],
    color: "from-accent/15 to-accent/5",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SpecialitiesSection = () => (
  <section id="specialities" className="section-padding bg-grey-warm">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <span className="text-xs font-semibold tracking-widest uppercase text-accent">What We Offer</span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2">Our Specialities</h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Comprehensive healthcare services delivered by board-certified specialists using cutting-edge technology.</p>
      </div>

      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {specialities.map((s) => (
          <motion.div key={s.title} variants={item} className="group glass-card p-7 hover:shadow-xl transition-shadow">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform`}>
              {s.icon}
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{s.title}</h3>
            <ul className="space-y-1.5 mb-5">
              {s.services.map((sv) => (
                <li key={sv} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60" /> {sv}
                </li>
              ))}
            </ul>
            <a href="#appointment" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-3 transition-all">
              Learn More <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SpecialitiesSection;
