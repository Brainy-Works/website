import { motion } from "framer-motion";
import { Monitor, ShieldCheck, Lock, HeartPulse, Clipboard } from "lucide-react";
import type { ReactNode } from "react";

const features: { icon: ReactNode; title: string; desc: string }[] = [
  { icon: <Monitor className="w-6 h-6" />, title: "Modern Equipment", desc: "State-of-the-art medical devices for accurate diagnosis and treatment." },
  { icon: <ShieldCheck className="w-6 h-6" />, title: "Certified Specialists", desc: "Board-certified doctors with extensive training and experience." },
  { icon: <Lock className="w-6 h-6" />, title: "Confidential Consultations", desc: "Your privacy is paramount — all sessions are completely secure." },
  { icon: <HeartPulse className="w-6 h-6" />, title: "Hygienic & Safe Environment", desc: "International-grade hygiene protocols across all departments." },
  { icon: <Clipboard className="w-6 h-6" />, title: "Personalized Treatment Plans", desc: "Tailored care plans designed around your unique health needs." },
];

const WhyChooseUsSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <span className="text-xs font-semibold tracking-widest uppercase text-accent">Our Promise</span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2">Why Choose NovaCare</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="flex gap-4 p-6 rounded-2xl border border-border/60 hover:border-primary/30 hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              {f.icon}
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
