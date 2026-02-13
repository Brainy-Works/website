import { motion } from "framer-motion";
import { CalendarCheck, Award } from "lucide-react";

const doctors = [
  { name: "Dr. Ananya Sharma", qualification: "MD Dermatology", exp: 12, speciality: "Dermatologist" },
  { name: "Dr. Rajiv Mehra", qualification: "MDS Prosthodontics", exp: 15, speciality: "Dental Surgeon" },
  { name: "Dr. Priya Nair", qualification: "PhD Clinical Psychology", exp: 10, speciality: "Psychologist" },
  { name: "Dr. Arjun Kapoor", qualification: "MBBS, Aesthetic Medicine", exp: 8, speciality: "Aesthetic Specialist" },
];

const DoctorsSection = () => (
  <section id="doctors" className="section-padding">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <span className="text-xs font-semibold tracking-widest uppercase text-accent">Our Team</span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2">Meet Our Experts</h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Compassionate specialists committed to delivering the highest quality of care.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {doctors.map((d, i) => (
          <motion.div
            key={d.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group glass-card overflow-hidden text-center"
          >
            <div className="h-52 bg-gradient-to-b from-primary/10 to-teal-light flex items-center justify-center">
              <div className="w-28 h-28 rounded-full bg-primary/20 flex items-center justify-center text-primary text-4xl font-heading font-bold">
                {d.name.split(" ").slice(1, 2).map(n => n[0])}
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-heading text-lg font-semibold text-foreground">{d.name}</h3>
              <p className="text-sm text-muted-foreground mt-0.5">{d.speciality}</p>
              <p className="text-xs text-muted-foreground mt-1">{d.qualification}</p>
              <div className="flex items-center justify-center gap-1.5 mt-2 text-xs text-accent font-medium">
                <Award className="w-3.5 h-3.5" /> {d.exp}+ Years Experience
              </div>
              <a href="#appointment" className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-teal-dark transition-colors">
                <CalendarCheck className="w-4 h-4" /> Book Appointment
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DoctorsSection;
