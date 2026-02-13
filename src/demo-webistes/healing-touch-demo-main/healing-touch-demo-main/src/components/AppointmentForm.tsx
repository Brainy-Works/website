import { useState } from "react";
import { Calendar, Clock, CheckCircle } from "lucide-react";

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM",
  "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM",
];

const AppointmentForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", date: "", time: "", reason: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="appointment" className="py-16 md:py-24 bg-clinic-blue-light">
        <div className="container mx-auto px-4 max-w-xl text-center">
          <CheckCircle className="h-16 w-16 text-clinic-green mx-auto mb-4" />
          <h2 className="text-2xl font-serif font-bold text-foreground mb-3">Appointment Request Received!</h2>
          <p className="text-muted-foreground mb-6">
            Our team will contact you shortly to confirm your appointment. <br />
            <span className="text-sm font-medium">(Demo Only)</span>
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", date: "", time: "", reason: "" }); }}
            className="bg-primary text-primary-foreground px-6 py-2 rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            Book Another
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="appointment" className="py-16 md:py-24 bg-clinic-blue-light">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-10">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Book Online</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
            Schedule Your Appointment
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 md:p-8 shadow-sm space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Patient Name *</label>
              <input
                type="text" name="name" required value={form.name} onChange={handleChange}
                className="w-full border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Phone Number *</label>
              <input
                type="tel" name="phone" required value={form.phone} onChange={handleChange}
                className="w-full border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="+91 90394 30279"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Email</label>
            <input
              type="email" name="email" value={form.email} onChange={handleChange}
              className="w-full border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="email@example.com"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Preferred Date *</label>
              <div className="relative">
                <input
                  type="date" name="date" required value={form.date} onChange={handleChange}
                  className="w-full border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Time Slot *</label>
              <select
                name="time" required value={form.time} onChange={handleChange}
                className="w-full border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select a time</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Reason for Visit</label>
            <textarea
              name="reason" value={form.reason} onChange={handleChange} rows={3}
              className="w-full border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              placeholder="Brief description of your concern..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-3 rounded-md font-medium text-base hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <Calendar className="h-5 w-5" />
            Submit Appointment Request
          </button>
        </form>
      </div>
    </section>
  );
};

export default AppointmentForm;
