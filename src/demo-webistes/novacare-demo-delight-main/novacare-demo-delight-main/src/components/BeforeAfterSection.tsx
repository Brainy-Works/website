import { motion } from "framer-motion";

const cases = [
  { label: "Acne Treatment", before: "Severe acne scarring", after: "Clear, smooth skin" },
  { label: "Skin Glow Treatment", before: "Dull complexion", after: "Radiant, even tone" },
  { label: "Teeth Whitening", before: "Stained teeth", after: "Bright white smile" },
];

const BeforeAfterSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <span className="text-xs font-semibold tracking-widest uppercase text-accent">Results</span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2">Before & After Gallery</h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Real transformations powered by advanced treatments and expert care.</p>
      </div>
      <div className="grid sm:grid-cols-3 gap-6">
        {cases.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass-card overflow-hidden"
          >
            <div className="grid grid-cols-2">
              <div className="h-40 bg-gradient-to-br from-muted to-border flex flex-col items-center justify-center relative">
                <span className="absolute top-2 left-2 text-[10px] font-bold uppercase tracking-widest bg-foreground/80 text-background px-2 py-0.5 rounded">Before</span>
                <p className="text-xs text-muted-foreground mt-4 px-3 text-center">{c.before}</p>
              </div>
              <div className="h-40 bg-gradient-to-br from-primary/10 to-teal-light flex flex-col items-center justify-center relative">
                <span className="absolute top-2 right-2 text-[10px] font-bold uppercase tracking-widest bg-primary text-primary-foreground px-2 py-0.5 rounded">After</span>
                <p className="text-xs text-primary mt-4 px-3 text-center font-medium">{c.after}</p>
              </div>
            </div>
            <div className="p-4 text-center">
              <h3 className="font-heading text-sm font-semibold text-foreground">{c.label}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BeforeAfterSection;
