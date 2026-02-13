import { motion } from "framer-motion";
import { CreditCard, FileText, Globe, AlertTriangle } from "lucide-react";
import type { ReactNode } from "react";

const facilities: { icon: ReactNode; title: string }[] = [
  { icon: <CreditCard className="w-6 h-6" />, title: "Cashless Insurance" },
  { icon: <FileText className="w-6 h-6" />, title: "Digital Reports" },
  { icon: <Globe className="w-6 h-6" />, title: "Online Payment" },
  { icon: <AlertTriangle className="w-6 h-6" />, title: "Emergency Support" },
];

const InsuranceSection = () => (
  <section className="section-padding bg-grey-warm">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs font-semibold tracking-widest uppercase text-accent">Convenience</span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2">Insurance & Facilities</h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {facilities.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="text-center p-6 rounded-2xl border border-border/60 bg-card hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              {f.icon}
            </div>
            <h3 className="font-heading text-sm font-semibold text-foreground">{f.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default InsuranceSection;
