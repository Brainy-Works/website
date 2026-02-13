import { useState } from "react";
import { CheckCircle } from "lucide-react";

const AdmissionSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="admission" className="section-padding bg-primary">
      <div className="container mx-auto max-w-2xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-primary-foreground mb-4">
          Admission Inquiry
        </h2>
        <p className="text-primary-foreground/80 text-center mb-10">
          Fill in the details below and our team will reach out to you.
        </p>

        {submitted ? (
          <div className="bg-card rounded-xl p-10 text-center">
            <CheckCircle className="h-14 w-14 text-success mx-auto mb-4" />
            <h3 className="font-display text-xl font-bold text-foreground mb-2">Thank You!</h3>
            <p className="text-muted-foreground">
              Our team will contact you soon. <span className="text-xs">(Demo Only)</span>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 md:p-10 space-y-5 shadow-xl">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Student Name</label>
                <input required className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Parent Name</label>
                <input required className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
                <input required type="tel" className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Class / Exam</label>
                <select required className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                  <option value="">Select</option>
                  <option>Class 8–10</option>
                  <option>Class 11–12</option>
                  <option>JEE</option>
                  <option>NEET</option>
                  <option>Banking / SSC</option>
                  <option>Spoken English</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-1.5">City</label>
                <input required className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-accent text-accent-foreground py-3 font-semibold text-base hover:opacity-90 transition-opacity"
            >
              Submit Inquiry
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default AdmissionSection;
