import { UserCheck, Sparkles, Cpu, SmilePlus, CalendarCheck } from "lucide-react";

const features = [
  { icon: UserCheck, title: "Experienced Doctor", description: "12+ years of trusted medical practice" },
  { icon: Sparkles, title: "Hygienic Clinic", description: "Strictly sanitized and clean environment" },
  { icon: Cpu, title: "Modern Equipment", description: "Latest diagnostic tools and technology" },
  { icon: SmilePlus, title: "Friendly Staff", description: "Warm, caring, and professional team" },
  { icon: CalendarCheck, title: "Easy Appointment", description: "Book online or via WhatsApp in seconds" },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Why Choose Us</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
            Trusted by Thousands of Patients
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center">
              <div className="w-14 h-14 rounded-full bg-clinic-green-light flex items-center justify-center mx-auto mb-3">
                <Icon className="h-7 w-7 text-clinic-green" />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1">{title}</h3>
              <p className="text-xs text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-8 border-t border-border">
          {["🔒 Secure", "🔐 Confidential", "✅ Certified"].map((badge) => (
            <span key={badge} className="text-sm font-medium text-muted-foreground bg-muted px-4 py-2 rounded-full">
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
