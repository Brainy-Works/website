import { MapPin, Phone, Mail, Clock, AlertCircle, Calendar } from "lucide-react";

const ClinicInfo = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Visit Us</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
            Clinic Timings & Location
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Map placeholder */}
          <div className="rounded-lg overflow-hidden border border-border shadow-sm min-h-[300px]">
            <iframe
              title="Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d72.8777!3d19.076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNTInMzkuNyJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 300 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-sm">Address</p>
                <p className="text-sm text-muted-foreground">6, Ajmer Rd, Nirman Nagar, Brijlalpura, Jaipur, Rajasthan 302019</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-sm">Contact Number</p>
                <p className="text-sm text-muted-foreground">+91 90394 30279</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-sm">Email</p>
                <p className="text-sm text-muted-foreground">developer@brainyworks.in</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-sm">Clinic Timings</p>
                <p className="text-sm text-muted-foreground">Monday – Saturday: 9:00 AM – 8:00 PM</p>
                <p className="text-sm text-muted-foreground">Sunday: Closed</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-destructive mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-sm">Emergency</p>
                <p className="text-sm text-muted-foreground">For emergencies, call +91 90394 30279 (available 24/7)</p>
              </div>
            </div>

            <a
              href="#appointment"
              className="mt-4 w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
            >
              <Calendar className="h-5 w-5" />
              Book Your Appointment Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicInfo;
