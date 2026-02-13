import { useState } from "react";
import { CalendarDays, Clock, Users, Phone, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BookingSection = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Table Reserved! 🎉",
      description: "We'll confirm your booking shortly. (Demo only)",
    });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="booking" className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-gold font-body text-sm tracking-[0.25em] uppercase mb-3">Reservations</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Book Your <span className="text-primary italic">Table</span>
          </h2>
          <div className="gold-divider mb-6" />
          <p className="text-muted-foreground max-w-lg mx-auto">
            Reserve your spot for an unforgettable dining experience. We recommend booking in advance for weekends.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-card rounded-2xl p-6 md:p-10 border border-border shadow-xl space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input type="text" placeholder="Your Name" required className="w-full pl-10 pr-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 text-sm font-body" />
            </div>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input type="tel" placeholder="Phone Number" required className="w-full pl-10 pr-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 text-sm font-body" />
            </div>
            <div className="relative">
              <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input type="date" required className="w-full pl-10 pr-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 text-sm font-body" />
            </div>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <select required className="w-full pl-10 pr-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 text-sm font-body appearance-none">
                <option value="">Select Time</option>
                <option>12:00 PM</option>
                <option>1:00 PM</option>
                <option>2:00 PM</option>
                <option>7:00 PM</option>
                <option>8:00 PM</option>
                <option>9:00 PM</option>
              </select>
            </div>
          </div>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <select required className="w-full pl-10 pr-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 text-sm font-body appearance-none">
              <option value="">Number of Guests</option>
              <option>1-2 Guests</option>
              <option>3-4 Guests</option>
              <option>5-6 Guests</option>
              <option>7-10 Guests</option>
              <option>10+ Guests</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={submitted}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3.5 rounded-full transition-all duration-300 hover:scale-[1.02] text-sm disabled:opacity-60"
          >
            {submitted ? "✓ Booking Confirmed (Demo)" : "Reserve My Table"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingSection;
