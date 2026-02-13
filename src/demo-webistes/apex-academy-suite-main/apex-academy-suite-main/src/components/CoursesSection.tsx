import { motion } from "framer-motion";
import { Clock, Monitor, ArrowRight } from "lucide-react";

const courses = [
  { title: "JEE Main & Advanced", duration: "2 Years", mode: "Offline + Online", desc: "Comprehensive preparation for IIT aspirants with expert IITian faculty." },
  { title: "NEET Preparation", duration: "2 Years", mode: "Offline + Online", desc: "Complete medical entrance preparation with biology-focused approach." },
  { title: "CUET Preparation", duration: "6 Months", mode: "Online", desc: "Strategic prep for central university admissions across all domains." },
  { title: "Foundation (9–10)", duration: "1–2 Years", mode: "Offline", desc: "Build strong fundamentals early for competitive exam readiness." },
  { title: "Boards (11–12 Science)", duration: "1 Year", mode: "Offline + Online", desc: "Score 95%+ in boards while preparing for competitive exams." },
  { title: "Crash Courses", duration: "3–6 Months", mode: "Online", desc: "Intensive revision and practice for last-minute exam preparation." },
];

const CoursesSection = () => (
  <section id="courses" className="section-padding bg-background">
    <div className="container-max">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Programs</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Courses Offered</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="card-premium p-6 flex flex-col group"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
              <span className="font-heading font-bold text-secondary text-lg">{c.title.charAt(0)}</span>
            </div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-2">{c.title}</h3>
            <p className="text-muted-foreground text-sm mb-4 flex-1">{c.desc}</p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{c.duration}</span>
              <span className="flex items-center gap-1"><Monitor className="w-3.5 h-3.5" />{c.mode}</span>
            </div>
            <a href="#inquiry" className="flex items-center gap-1 text-secondary font-bold text-sm group-hover:gap-2 transition-all">
              Apply Now <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CoursesSection;
