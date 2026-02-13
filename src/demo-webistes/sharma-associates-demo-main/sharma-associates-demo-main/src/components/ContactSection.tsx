import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-2">Contact Us</p>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Get In Touch
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Map placeholder */}
          <div className="overflow-hidden rounded-lg border border-border bg-muted flex items-center justify-center min-h-[300px]">
            <div className="text-center p-8">
              <MapPin size={40} className="mx-auto mb-3 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Google Maps would be embedded here in a live website.</p>
              <p className="mt-1 text-xs text-muted-foreground">(Demo Placeholder)</p>
            </div>
          </div>

          {/* Contact details */}
          <div className="flex flex-col justify-center gap-6">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Office Address</h4>
                <p className="text-sm text-muted-foreground">6, Ajmer Rd, Nirman Nagar, Brijlalpura,<br />Jaipur, Rajasthan 302019</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Phone</h4>
                <p className="text-sm text-muted-foreground">+91 90394 30279</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Email</h4>
                <p className="text-sm text-muted-foreground">developer@brainyworks.in</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Office Hours</h4>
                <p className="text-sm text-muted-foreground">Mon – Sat: 10:00 AM – 7:00 PM<br />Sunday: Closed</p>
              </div>
            </div>

            <a
              href="#consultation"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded bg-gold px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-gold-light"
            >
              Schedule a Consultation Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
