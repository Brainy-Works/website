import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Meera Patel", type: "Skin Patient", stars: 5, text: "My acne scars have reduced dramatically after just 4 sessions. The dermatology team is incredibly skilled and caring." },
  { name: "Arjun Singh", type: "Dental Patient", stars: 5, text: "Got my smile makeover done here and the results are stunning. Painless procedure with world-class care." },
  { name: "Sneha Reddy", type: "Counseling Patient", stars: 5, text: "Dr. Nair helped me manage my anxiety with the most compassionate approach. I feel like a new person." },
  { name: "Vikram Das", type: "Aesthetic Patient", stars: 4, text: "The skin glow treatment made a visible difference. The staff is professional and the clinic is immaculate." },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="section-padding bg-grey-warm">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <span className="text-xs font-semibold tracking-widest uppercase text-accent">Patient Stories</span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2">What Our Patients Say</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass-card p-6 flex flex-col"
          >
            <Quote className="w-8 h-8 text-primary/20 mb-3" />
            <p className="text-sm text-muted-foreground leading-relaxed flex-1 italic">"{t.text}"</p>
            <div className="flex gap-0.5 mt-4">
              {Array.from({ length: 5 }).map((_, si) => (
                <Star key={si} className={`w-4 h-4 ${si < t.stars ? "text-accent fill-accent" : "text-border"}`} />
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-border/50">
              <p className="font-semibold text-sm text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.type}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
