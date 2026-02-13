import { Award, Truck, Hammer, IndianRupee } from "lucide-react";

const stats = [
  { number: "10,000+", label: "Happy Customers" },
  { number: "500+", label: "Unique Designs" },
  { number: "5 Year", label: "Warranty" },
];

const highlights = [
  { icon: Award, text: "15+ Years Experience" },
  { icon: Hammer, text: "Solid Wood Craftsmanship" },
  { icon: IndianRupee, text: "Custom Furniture Available" },
  { icon: Truck, text: "PAN India Delivery" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <p className="text-sm font-body font-semibold tracking-widest uppercase mb-3 text-accent">About Us</p>
            <h2 className="section-title mb-6">
              A Legacy of <span className="gold-text">Fine Craftsmanship</span>
            </h2>
            <p className="section-subtitle mb-8 leading-relaxed">
              For over 15 years, RoyalWood Furniture has been synonymous with premium quality, timeless design, and unmatched craftsmanship. Every piece we create tells a story of dedication — from selecting the finest solid wood to the final polished finish. We believe furniture is not just about function, but about creating spaces that inspire.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((h) => (
                <div key={h.text} className="flex items-center gap-3 p-3 rounded-lg bg-secondary">
                  <h.icon className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-body font-medium text-secondary-foreground">{h.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center p-6 rounded-xl bg-secondary border border-border">
                <p className="text-2xl md:text-3xl font-display font-bold gold-text mb-1">{s.number}</p>
                <p className="text-xs md:text-sm font-body text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
