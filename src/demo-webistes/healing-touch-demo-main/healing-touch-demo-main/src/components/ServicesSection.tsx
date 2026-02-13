import { Stethoscope, HeartPulse, Syringe, Activity, TestTube, Scissors } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "General Consultation",
    description: "Comprehensive health assessment and diagnosis for common illnesses and conditions.",
  },
  {
    icon: HeartPulse,
    title: "Health Checkups",
    description: "Routine physical examinations and preventive health screenings for all age groups.",
  },
  {
    icon: Syringe,
    title: "Vaccination",
    description: "Complete immunization services for children and adults as per national guidelines.",
  },
  {
    icon: Activity,
    title: "Chronic Disease Management",
    description: "Ongoing care and monitoring for diabetes, hypertension, and other chronic conditions.",
  },
  {
    icon: TestTube,
    title: "Blood Tests",
    description: "On-site sample collection and quick lab reports for all standard blood investigations.",
  },
  {
    icon: Scissors,
    title: "Minor Procedures",
    description: "Safe outpatient procedures including wound care, suturing, and abscess drainage.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Our Services</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
            Comprehensive Healthcare Services
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
