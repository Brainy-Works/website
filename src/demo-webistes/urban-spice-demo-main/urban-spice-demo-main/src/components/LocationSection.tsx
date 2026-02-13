import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="contact" className="section-padding bg-dark-surface">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold font-body text-sm tracking-[0.25em] uppercase mb-3">Find Us</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark-surface-foreground mb-4">
            Location & <span className="text-gradient-gold italic">Contact</span>
          </h2>
          <div className="gold-divider mb-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Map Placeholder */}
          <div className="rounded-2xl overflow-hidden border border-[hsl(0,0%,15%)] aspect-[4/3] bg-[hsl(0,0%,10%)] flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093!2d-122.4194154!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjciTiAxMjLCsDI1JzA5LjkiVw!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Urban Spice location"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-dark-surface-foreground mb-1">Address</h4>
                <p className="font-body text-sm text-dark-surface-foreground/60">
                  6, Ajmer Rd, Nirman Nagar, Brijlalpura,<br />Jaipur, Rajasthan 302019
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-dark-surface-foreground mb-1">Phone</h4>
                <p className="font-body text-sm text-dark-surface-foreground/60">+91 90394 30279</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-dark-surface-foreground mb-1">Email</h4>
                <p className="font-body text-sm text-dark-surface-foreground/60">developer@brainyworks.in</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-dark-surface-foreground mb-1">Opening Hours</h4>
                <p className="font-body text-sm text-dark-surface-foreground/60">
                  Mon – Fri: 11:00 AM – 11:00 PM<br />
                  Sat – Sun: 10:00 AM – 12:00 AM
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/919039430279"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[hsl(142,70%,35%)] hover:bg-[hsl(142,70%,30%)] text-primary-foreground font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 text-sm mt-4"
            >
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
