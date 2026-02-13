import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => (
  <section id="contact" className="py-20 md:py-28 bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <div className="w-12 h-0.5 bg-gold mx-auto mb-4" />
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Visit Our Studio</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
              <MapPin className="h-5 w-5 text-gold" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Studio Address</h4>
              <p className="text-sm text-muted-foreground">6, Ajmer Rd, Nirman Nagar, Brijlalpura,<br />Jaipur, Rajasthan 302019</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
              <Phone className="h-5 w-5 text-gold" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Phone</h4>
              <p className="text-sm text-muted-foreground">+91 90394 30279</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
              <Mail className="h-5 w-5 text-gold" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Email</h4>
              <p className="text-sm text-muted-foreground">developer@brainyworks.in</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
              <Clock className="h-5 w-5 text-gold" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
              <p className="text-sm text-muted-foreground">Mon – Sat: 10:00 AM – 7:00 PM<br />Sunday: By Appointment Only</p>
            </div>
          </div>
          <Button size="lg" className="bg-gold hover:bg-gold-light text-charcoal font-semibold mt-4">
            Schedule Your Free Design Consultation
          </Button>
        </div>

        {/* Map placeholder */}
        <div className="bg-muted rounded-lg flex items-center justify-center min-h-[350px] border border-border">
          <div className="text-center text-muted-foreground">
            <MapPin className="h-12 w-12 mx-auto mb-3 text-gold/40" />
            <p className="font-serif text-lg">Google Maps</p>
            <p className="text-sm">Map placeholder – Demo Only</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
