import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

const serviceOptions = [
  "Income Tax Filing",
  "GST Registration & Returns",
  "Company Registration",
  "ROC Compliance",
  "Audit & Assurance",
  "Business Advisory",
  "Startup Consulting",
  "Accounting & Bookkeeping",
  "Other",
];

const ConsultationForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="consultation" className="section-padding section-alt-bg">
      <div className="container-max max-w-3xl">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-2">Get In Touch</p>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Book a Free Consultation
          </h2>
          <p className="mt-3 text-muted-foreground">Fill in the form below and our team will get back to you within 24 hours.</p>
        </div>

        {submitted ? (
          <div className="rounded-lg border border-gold/40 bg-gold-muted p-8 text-center">
            <p className="font-heading text-xl font-semibold text-foreground">Thank you for your inquiry!</p>
            <p className="mt-2 text-muted-foreground text-sm">This is a demo form. In a live website, your inquiry would be sent to the firm.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Full Name</label>
                <input required type="text" placeholder="e.g. Rajesh Sharma" className="w-full rounded border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Phone Number</label>
                <input required type="tel" placeholder="+91 90394 30279" className="w-full rounded border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div className="md:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-foreground">Email Address</label>
                <input required type="email" placeholder="email@example.com" className="w-full rounded border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div className="md:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-foreground">Service Required</label>
                <select required className="w-full rounded border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring">
                  <option value="">Select a service</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
                <textarea rows={4} placeholder="Tell us about your requirement..." className="w-full rounded border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring resize-none" />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 flex items-center gap-2 rounded bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy-light"
            >
              <Send size={16} /> Submit Inquiry
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ConsultationForm;
