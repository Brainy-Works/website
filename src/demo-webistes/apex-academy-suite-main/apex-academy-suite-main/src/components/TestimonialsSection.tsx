import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Vikram Malhotra", role: "Student, JEE 2024", rating: 5, text: "The structured approach and weekly tests helped me crack JEE Advanced. Forever grateful to Apex Scholars!" },
  { name: "Mrs. Sunita Devi", role: "Parent", rating: 5, text: "The progress reports kept us informed. My daughter secured AIR 540 in NEET. Highly recommended!" },
  { name: "Riya Joshi", role: "Student, NEET 2024", rating: 5, text: "The biology faculty is world-class. The doubt clearing sessions were a game-changer for my preparation." },
  { name: "Mr. Anil Gupta", role: "Parent", rating: 4, text: "Professional institute with genuine results. The counselors guided my son perfectly through the admission process." },
  { name: "Deepak Raj", role: "Student, CUET 2024", rating: 5, text: "Got into my dream university through DU. The CUET crash course was exactly what I needed." },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-muted">
    <div className="container-max">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Success Stories</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">What They Say</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="card-premium p-6"
          >
            <Quote className="w-8 h-8 text-secondary/30 mb-3" />
            <p className="text-muted-foreground text-sm mb-4">"{t.text}"</p>
            <div className="flex items-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className={`w-4 h-4 ${j < t.rating ? "text-secondary fill-secondary" : "text-border"}`} />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-heading font-bold text-primary text-sm">{t.name[0]}</span>
              </div>
              <div>
                <p className="font-semibold text-sm text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
