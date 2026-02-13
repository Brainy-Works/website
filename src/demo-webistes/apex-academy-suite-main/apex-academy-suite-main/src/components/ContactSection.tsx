import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-padding bg-primary text-primary-foreground">
    <div className="container-max">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Reach Us</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">Location & Contact</h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="rounded-2xl overflow-hidden aspect-video bg-primary-foreground/5 border border-primary-foreground/10 flex items-center justify-center mb-6">
            <div className="text-center text-primary-foreground/50">
              <MapPin className="w-12 h-12 mx-auto mb-2" />
              <p className="text-sm">Google Maps Placeholder</p>
              <p className="text-xs">(Demo Only)</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
          {[
            { icon: MapPin, label: "Address", value: "6, Ajmer Rd, Nirman Nagar, Brijlalpura, Jaipur, Rajasthan 302019" },
            { icon: Phone, label: "Phone", value: "+91 90394 30279" },
            { icon: Mail, label: "Email", value: "developer@brainyworks.in" },
            { icon: Clock, label: "Office Hours", value: "Mon – Sat: 8:00 AM – 8:00 PM" },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-xs text-primary-foreground/50 uppercase tracking-wider">{item.label}</p>
                <p className="text-sm font-medium">{item.value}</p>
              </div>
            </div>
          ))}

          <a href="#inquiry" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-7 py-3.5 rounded-full font-bold text-sm hover:opacity-90 transition-opacity btn-glow animate-pulse-glow mt-4">
            🔥 Limited Seats – Enroll Now
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
