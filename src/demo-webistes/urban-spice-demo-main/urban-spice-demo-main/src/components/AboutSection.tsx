import { Award, ChefHat, ShieldCheck, Clock } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";

const stats = [
  { icon: Clock, label: "Years of Experience", value: "15+" },
  { icon: ChefHat, label: "Expert Chefs", value: "8" },
  { icon: Award, label: "Awards Won", value: "12" },
  { icon: ShieldCheck, label: "Hygiene Rating", value: "5★" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
            <img src={aboutBg} alt="Urban Spice restaurant interior" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0,0%,4%,0.4)] to-transparent" />
          </div>

          {/* Content */}
          <div>
            <p className="text-gold font-body text-sm tracking-[0.25em] uppercase mb-3">Our Story</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Legacy of <span className="text-primary italic">Authentic Flavors</span>
            </h2>
            <div className="gold-divider !mx-0 mb-6" />
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Urban Spice was born from a passion for authentic Indian cuisine. For over 15 years, we've been crafting unforgettable dining experiences, blending traditional recipes with modern culinary artistry.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Our kitchen is led by award-winning chefs who bring the finest spices and freshest ingredients to every dish. From the rich, slow-cooked curries of the North to the aromatic coastal flavors of the South — every plate tells a story.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-card border border-border">
                  <stat.icon className="w-6 h-6 text-gold mx-auto mb-2" />
                  <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="font-body text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
