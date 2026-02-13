import { motion } from "framer-motion";

const galleryItems = [
  { title: "Modern Classrooms", desc: "State-of-the-art learning spaces" },
  { title: "Science Lab", desc: "Fully equipped practical labs" },
  { title: "Annual Seminar", desc: "Guest lectures by industry experts" },
  { title: "Award Ceremony", desc: "Celebrating student achievements" },
  { title: "Library", desc: "Extensive study resource center" },
  { title: "Sports Day", desc: "Holistic student development" },
];

const colors = [
  "from-primary/80 to-secondary/60",
  "from-secondary/80 to-primary/60",
  "from-primary/70 to-primary/40",
  "from-secondary/70 to-secondary/40",
  "from-primary/60 to-secondary/80",
  "from-secondary/60 to-primary/80",
];

const GallerySection = () => (
  <section id="gallery" className="section-padding bg-background">
    <div className="container-max">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Campus Life</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Gallery</h2>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br ${colors[i]} flex items-end p-5 group cursor-pointer`}
          >
            <div className="relative z-10">
              <h3 className="font-heading font-bold text-primary-foreground text-lg">{item.title}</h3>
              <p className="text-primary-foreground/70 text-sm">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
