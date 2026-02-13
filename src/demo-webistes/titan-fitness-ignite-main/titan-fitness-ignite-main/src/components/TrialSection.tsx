import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const TrialSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="trial" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 max-w-xl">
        <div className="text-center mb-10">
          <p className="text-accent text-sm tracking-[0.3em] uppercase font-heading mb-2">Get Started</p>
          <h2 className="text-3xl md:text-5xl text-foreground">
            Book Your <span className="text-primary">Free Trial</span>
          </h2>
          <p className="text-muted-foreground mt-3 text-sm">Experience Titan Fitness Club — no commitment required.</p>
        </div>

        {submitted ? (
          <div className="text-center bg-card border border-accent/30 rounded-lg p-10 animate-fade-in-up">
            <CheckCircle2 className="w-16 h-16 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-heading text-foreground mb-2">You're In!</h3>
            <p className="text-muted-foreground text-sm">This is a demo — but in a live version, our team would reach out to you instantly via WhatsApp!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
              <input
                type="text"
                required
                placeholder="Rahul Sharma"
                className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
              <input
                type="tel"
                required
                placeholder="+91 90394 30279"
                className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
              <input
                type="email"
                required
                placeholder="rahul@example.com"
                className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Preferred Time Slot</label>
              <select
                required
                className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">Select a time</option>
                <option>6:00 AM – 8:00 AM</option>
                <option>8:00 AM – 10:00 AM</option>
                <option>4:00 PM – 6:00 PM</option>
                <option>6:00 PM – 8:00 PM</option>
                <option>8:00 PM – 10:00 PM</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full gradient-red text-primary-foreground font-bold py-3.5 rounded-sm uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
            >
              Book My Free Trial
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default TrialSection;
