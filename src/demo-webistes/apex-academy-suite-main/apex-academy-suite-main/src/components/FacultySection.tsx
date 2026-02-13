import { motion } from "framer-motion";

const faculty = [
  { name: "Dr. Rajesh Kumar", subject: "Physics", qual: "Ph.D IIT Delhi", exp: "15+ Years" },
  { name: "Prof. Meera Sharma", subject: "Chemistry", qual: "M.Sc IIT Bombay", exp: "12+ Years" },
  { name: "Dr. Suresh Iyer", subject: "Mathematics", qual: "Ph.D IISc", exp: "18+ Years" },
  { name: "Dr. Anjali Verma", subject: "Biology", qual: "MBBS, AIIMS Delhi", exp: "10+ Years" },
];

const FacultySection = () => (
  <section id="faculty" className="section-padding bg-background">
    <div className="container-max">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Expert Mentors</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Our Faculty</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {faculty.map((f, i) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-premium p-6 text-center group"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/10 transition-colors">
              <span className="font-heading font-bold text-2xl text-primary group-hover:text-secondary transition-colors">
                {f.name.split(" ").slice(-1)[0][0]}{f.name.split(" ")[0][0]}
              </span>
            </div>
            <h3 className="font-heading font-bold text-foreground">{f.name}</h3>
            <p className="text-secondary font-semibold text-sm">{f.subject}</p>
            <p className="text-muted-foreground text-xs mt-1">{f.qual}</p>
            <p className="text-muted-foreground text-xs">{f.exp} Experience</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FacultySection;
