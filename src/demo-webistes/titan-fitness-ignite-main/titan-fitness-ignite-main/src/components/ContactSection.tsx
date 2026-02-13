import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-accent text-sm tracking-[0.3em] uppercase font-heading mb-2">Find Us</p>
          <h2 className="text-3xl md:text-5xl text-foreground">
            Location & <span className="text-primary">Contact</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Map placeholder */}
          <div className="rounded-lg overflow-hidden border border-border bg-card aspect-video flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d73.91455451541534!3d18.562061987385935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3a7%3A0x6f7fdcc8e4d6c77e!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 280 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Titan Fitness Club Location"
            />
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="text-foreground font-medium text-sm">Address</p>
                <p className="text-muted-foreground text-sm">6, Ajmer Rd, Nirman Nagar, Brijlalpura, Jaipur, Rajasthan 302019</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="text-foreground font-medium text-sm">Phone</p>
                <p className="text-muted-foreground text-sm">+91 90394 30279</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="text-foreground font-medium text-sm">Email</p>
                <p className="text-muted-foreground text-sm">developer@brainyworks.in</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="text-foreground font-medium text-sm">Opening Hours</p>
                <p className="text-muted-foreground text-sm">Mon – Sat: 5:00 AM – 10:00 PM</p>
                <p className="text-muted-foreground text-sm">Sunday: 6:00 AM – 12:00 PM</p>
              </div>
            </div>

            <a
              href="https://wa.me/919039430279?text=Hi%20Titan%20Fitness!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-accent-foreground font-bold px-8 py-3.5 rounded-sm uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
