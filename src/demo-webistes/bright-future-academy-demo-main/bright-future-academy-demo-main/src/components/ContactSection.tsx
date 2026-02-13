import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-padding bg-card">
    <div className="container mx-auto">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
        Contact <span className="text-primary">Us</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
        Visit us or get in touch — we're happy to help.
      </p>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Map Placeholder */}
        <div className="rounded-xl border border-border bg-secondary aspect-video flex items-center justify-center">
          <span className="text-muted-foreground text-sm">Google Map Placeholder</span>
        </div>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div>
              <h4 className="font-semibold text-foreground text-sm">Address</h4>
              <p className="text-muted-foreground text-sm">6, Ajmer Rd, Nirman Nagar, Brijlalpura, Jaipur, Rajasthan 302019</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div>
              <h4 className="font-semibold text-foreground text-sm">Phone</h4>
              <p className="text-muted-foreground text-sm">+91 90394 30279</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div>
              <h4 className="font-semibold text-foreground text-sm">Email</h4>
              <p className="text-muted-foreground text-sm">developer@brainyworks.in</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div>
              <h4 className="font-semibold text-foreground text-sm">Office Hours</h4>
              <p className="text-muted-foreground text-sm">Mon–Sat: 8:00 AM – 8:00 PM</p>
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-accent/10 border border-accent/30 p-5 text-center">
            <p className="font-display font-bold text-foreground text-lg mb-2">Limited Seats Available</p>
            <a
              href="#admission"
              className="inline-block rounded-md bg-accent text-accent-foreground px-6 py-2.5 font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Enroll Today
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
