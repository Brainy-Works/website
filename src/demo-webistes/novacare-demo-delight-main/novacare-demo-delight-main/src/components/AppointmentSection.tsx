import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CalendarCheck, CheckCircle2 } from "lucide-react";

const specialities = ["Dermatology", "Dental Care", "Psychology & Counseling", "Aesthetic Treatments"];

const AppointmentSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="appointment" className="section-padding bg-grey-warm">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">Schedule a Visit</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2">Book Your Appointment</h2>
        </div>

        {submitted ? (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass-card p-10 text-center">
            <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Request Received!</h3>
            <p className="text-muted-foreground">Your appointment request has been received. Our team will contact you shortly. <span className="text-accent font-medium">(Demo Only)</span></p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 md:p-10 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Patient Name *</label>
                <input required type="text" placeholder="John Doe" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Phone *</label>
                <input required type="tel" placeholder="+91 90394 30279" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
              <input type="email" placeholder="john@email.com" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Select Speciality *</label>
              <select required className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                <option value="">Choose a speciality</option>
                {specialities.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Preferred Date *</label>
                <input required type="date" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Preferred Time *</label>
                <input required type="time" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
              <textarea rows={3} placeholder="Any additional information..." className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
            </div>
            <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:bg-teal-dark transition-colors">
              <CalendarCheck className="w-5 h-5" /> Submit Appointment Request
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default AppointmentSection;
