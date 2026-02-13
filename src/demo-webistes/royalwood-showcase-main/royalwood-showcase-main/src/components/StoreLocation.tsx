import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const StoreLocation = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-body font-semibold tracking-widest uppercase mb-3 text-accent">Visit Us</p>
          <h2 className="section-title mb-4">Store Location & <span className="gold-text">Contact</span></h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map placeholder */}
          <div className="rounded-xl overflow-hidden border border-border bg-muted aspect-video lg:aspect-auto flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-accent" />
              <p className="font-display font-semibold text-lg text-foreground mb-2">Google Maps</p>
              <p className="text-sm text-muted-foreground font-body">Interactive map will be embedded here</p>
            </div>
          </div>

          {/* Contact details */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
              <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-body font-semibold text-sm text-foreground mb-1">Address</p>
                <p className="text-sm text-muted-foreground font-body">6, Ajmer Rd, Nirman Nagar, Brijlalpura, Jaipur, Rajasthan 302019</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
              <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-body font-semibold text-sm text-foreground mb-1">Phone</p>
                <p className="text-sm text-muted-foreground font-body">+91 90394 30279</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
              <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-body font-semibold text-sm text-foreground mb-1">Email</p>
                <p className="text-sm text-muted-foreground font-body">developer@brainyworks.in</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
              <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-body font-semibold text-sm text-foreground mb-1">Business Hours</p>
                <p className="text-sm text-muted-foreground font-body">Mon–Sat: 10:00 AM – 8:00 PM<br />Sunday: 11:00 AM – 6:00 PM</p>
              </div>
            </div>

            <a href="https://wa.me/919039430279" target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full !py-3.5 text-sm justify-center">
              <MessageCircle className="w-5 h-5" />
              Chat with Us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreLocation;
