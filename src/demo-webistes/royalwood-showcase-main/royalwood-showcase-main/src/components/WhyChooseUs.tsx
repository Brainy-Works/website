import { TreePine, Truck, BadgePercent, Paintbrush, Wrench } from "lucide-react";

const features = [
  { icon: TreePine, title: "Premium Quality Wood", desc: "100% solid sheesham, teak & rosewood sourced from certified forests" },
  { icon: Truck, title: "Free Home Delivery", desc: "Complimentary delivery and setup across all major Indian cities" },
  { icon: BadgePercent, title: "Easy EMI Options", desc: "0% interest EMI available with all major banks & credit cards" },
  { icon: Paintbrush, title: "Custom Design Support", desc: "Work with our designers to create your dream furniture piece" },
  { icon: Wrench, title: "Installation Included", desc: "Professional installation by trained carpenters at no extra cost" },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-body font-semibold tracking-widest uppercase mb-3 text-accent">Our Promise</p>
          <h2 className="section-title mb-4">Why Choose <span className="gold-text">RoyalWood</span></h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {features.map((f) => (
            <div key={f.title} className="text-center p-6 rounded-xl bg-card border border-border hover-lift cursor-default">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full gold-gradient flex items-center justify-center">
                <f.icon className="w-6 h-6 text-demo-banner-foreground" />
              </div>
              <h3 className="font-display font-semibold text-base text-card-foreground mb-2">{f.title}</h3>
              <p className="text-xs text-muted-foreground font-body leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
