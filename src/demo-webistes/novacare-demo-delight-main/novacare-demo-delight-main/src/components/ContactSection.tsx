import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CalendarCheck } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-padding">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <span className="text-xs font-semibold tracking-widest uppercase text-accent">Get In Touch</span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2">Location & Contact</h2>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl overflow-hidden border border-border h-80 lg:h-auto bg-muted flex items-center justify-center"
        >
          <div className="text-center text-muted-foreground">
            <MapPin className="w-12 h-12 mx-auto mb-3 text-primary/40" />
            <p className="text-sm font-medium">Google Map Placeholder</p>
            <p className="text-xs mt-1">Interactive map will be embedded here</p>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Address</h3>
              <p className="text-sm text-muted-foreground">6, Ajmer Rd, Nirman Nagar, Brijlalpura,<br/>Jaipur, Rajasthan 302019</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Phone</h3>
              <p className="text-sm text-muted-foreground">+91 90394 30279</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Email</h3>
              <p className="text-sm text-muted-foreground">developer@brainyworks.in</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Clinic Hours</h3>
              <p className="text-sm text-muted-foreground">Mon–Sat: 9:00 AM – 8:00 PM<br/>Sunday: 10:00 AM – 2:00 PM</p>
            </div>
          </div>

          <a href="#appointment" className="mt-4 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:bg-teal-dark transition-colors">
            <CalendarCheck className="w-5 h-5" /> Book Your Consultation Today
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
