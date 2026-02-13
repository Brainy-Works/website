import { Box, Gem, Clock, BadgeIndianRupee, UserCheck } from "lucide-react";

const features = [
  { icon: Box, title: "3D Visualization", desc: "See your dream space before a single nail is hammered — photorealistic 3D renders included." },
  { icon: Gem, title: "Premium Materials", desc: "We source only the finest Italian marble, hardwoods, and designer fixtures." },
  { icon: Clock, title: "On-Time Delivery", desc: "Strict project timelines with milestone tracking and transparent updates." },
  { icon: BadgeIndianRupee, title: "Transparent Pricing", desc: "No hidden costs. Detailed quotations and budget-aligned design solutions." },
  { icon: UserCheck, title: "Dedicated Manager", desc: "A single point of contact from concept to completion for a stress-free experience." },
];

const WhyChooseUs = () => (
  <section className="py-20 md:py-28 bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <div className="w-12 h-0.5 bg-gold mx-auto mb-4" />
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose AuraSpaces</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">What sets us apart in the world of luxury interiors.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <div
            key={i}
            className="group p-8 rounded-lg bg-background border border-border hover:border-gold/50 transition-all duration-300 hover:shadow-lg"
          >
            <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
              <f.icon className="h-7 w-7 text-gold" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
