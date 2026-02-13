import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ConsultationForm = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Thank You!",
      description: "Our Design Consultant Will Contact You Soon. (Demo Only)",
    });
  };

  return (
    <section id="consultation" className="py-20 md:py-28 bg-charcoal text-warm-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="w-12 h-0.5 bg-gold mx-auto mb-4" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Book Your Free Consultation</h2>
          <p className="text-warm-white/70">Tell us about your project and our design experts will get back to you.</p>
        </div>

        {submitted ? (
          <div className="max-w-lg mx-auto text-center py-12">
            <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-gold text-3xl">✓</span>
            </div>
            <h3 className="font-serif text-2xl font-semibold mb-2">Request Received!</h3>
            <p className="text-warm-white/70">Our Design Consultant Will Contact You Soon. (Demo Only)</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-4">
            <Input placeholder="Full Name" required className="bg-warm-white/10 border-warm-white/20 text-warm-white placeholder:text-warm-white/40" />
            <Input placeholder="Phone Number" type="tel" required className="bg-warm-white/10 border-warm-white/20 text-warm-white placeholder:text-warm-white/40" />
            <Input placeholder="Email Address" type="email" required className="bg-warm-white/10 border-warm-white/20 text-warm-white placeholder:text-warm-white/40" />
            <select required className="flex h-10 w-full rounded-md border bg-warm-white/10 border-warm-white/20 text-warm-white px-3 py-2 text-sm">
              <option value="" className="text-charcoal">Type of Property</option>
              <option value="apartment" className="text-charcoal">Apartment</option>
              <option value="villa" className="text-charcoal">Villa / Independent House</option>
              <option value="penthouse" className="text-charcoal">Penthouse</option>
              <option value="commercial" className="text-charcoal">Commercial Space</option>
              <option value="office" className="text-charcoal">Office</option>
            </select>
            <select required className="flex h-10 w-full rounded-md border bg-warm-white/10 border-warm-white/20 text-warm-white px-3 py-2 text-sm">
              <option value="" className="text-charcoal">Budget Range</option>
              <option value="10-25" className="text-charcoal">₹10 – 25 Lakhs</option>
              <option value="25-50" className="text-charcoal">₹25 – 50 Lakhs</option>
              <option value="50-100" className="text-charcoal">₹50 Lakhs – 1 Crore</option>
              <option value="100+" className="text-charcoal">₹1 Crore+</option>
            </select>
            <Input placeholder="City" className="bg-warm-white/10 border-warm-white/20 text-warm-white placeholder:text-warm-white/40" />
            <Textarea placeholder="Tell us about your project..." className="sm:col-span-2 bg-warm-white/10 border-warm-white/20 text-warm-white placeholder:text-warm-white/40 min-h-[100px]" />
            <div className="sm:col-span-2">
              <Button type="submit" size="lg" className="w-full bg-gold hover:bg-gold-light text-charcoal font-semibold text-base">
                Schedule My Free Consultation
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default ConsultationForm;
