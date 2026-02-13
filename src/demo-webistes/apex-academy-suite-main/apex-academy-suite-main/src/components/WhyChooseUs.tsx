import { motion } from "framer-motion";
import { GraduationCap, Brain, ClipboardCheck, MessageCircle, BookOpen, BarChart3 } from "lucide-react";

const features = [
  { icon: GraduationCap, title: "IIT/Medical Faculty", desc: "Learn from experienced IITians & top medical professionals." },
  { icon: Brain, title: "AI Performance Tracking", desc: "Personalized analytics to optimize your preparation strategy." },
  { icon: ClipboardCheck, title: "Weekly Test Series", desc: "Regular assessments with detailed performance reports." },
  { icon: MessageCircle, title: "Doubt Clearing Sessions", desc: "24/7 doubt resolution with dedicated mentors." },
  { icon: BookOpen, title: "Study Material & Notes", desc: "Comprehensive, exam-focused study material by experts." },
  { icon: BarChart3, title: "Parent Progress Reports", desc: "Regular updates to keep parents informed of student progress." },
];

const WhyChooseUs = () => (
  <section className="section-padding bg-primary text-primary-foreground">
    <div className="container-max">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Edge</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">Why Choose Apex Scholars</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 hover:bg-primary-foreground/10 transition-colors"
          >
            <f.icon className="w-10 h-10 text-secondary mb-4" />
            <h3 className="font-heading font-bold text-lg mb-2">{f.title}</h3>
            <p className="text-primary-foreground/70 text-sm">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
