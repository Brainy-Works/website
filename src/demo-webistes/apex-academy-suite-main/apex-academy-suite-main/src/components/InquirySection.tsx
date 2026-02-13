import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const InquirySection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="inquiry" className="section-padding bg-muted">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Get Started</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">Admission Inquiry</h2>
            <p className="text-muted-foreground mb-6">Take the first step towards academic excellence. Fill in your details and our academic counselor will guide you through the admission process.</p>
            <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-4">
              <p className="text-sm font-semibold text-secondary">🔥 Limited Seats Available for 2025-26 Batch!</p>
              <p className="text-xs text-muted-foreground mt-1">Early bird discounts available for registrations before March 31.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            {submitted ? (
              <div className="card-premium p-10 text-center">
                <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">Thank You!</h3>
                <p className="text-muted-foreground">Our Academic Counselor will contact you shortly. <span className="text-xs">(Demo Only)</span></p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-premium p-8 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Student Name</label>
                    <input required type="text" placeholder="Enter student name" className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground text-sm focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Parent Name</label>
                    <input required type="text" placeholder="Enter parent name" className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground text-sm focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number</label>
                  <input required type="tel" placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground text-sm focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Class / Exam</label>
                    <select required className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground text-sm focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition">
                      <option value="">Select</option>
                      <option>Class 9–10 Foundation</option>
                      <option>Class 11–12 Boards</option>
                      <option>JEE Main & Advanced</option>
                      <option>NEET</option>
                      <option>CUET</option>
                      <option>Crash Course</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Preferred Batch</label>
                    <select className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground text-sm focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition">
                      <option value="">Select</option>
                      <option>Morning</option>
                      <option>Afternoon</option>
                      <option>Evening</option>
                      <option>Weekend</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="w-full bg-secondary text-secondary-foreground py-3 rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity btn-glow">
                  <Send className="w-4 h-4" /> Submit Inquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InquirySection;
