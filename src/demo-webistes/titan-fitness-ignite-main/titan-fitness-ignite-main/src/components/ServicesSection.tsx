import { Flame, Dumbbell, User, Zap, Sparkles, Music } from "lucide-react";

const services = [
  { icon: Flame, title: "Weight Loss", desc: "Burn fat with science-backed cardio and HIIT programs." },
  { icon: Dumbbell, title: "Muscle Gain", desc: "Build strength with progressive overload training." },
  { icon: User, title: "Personal Training", desc: "1-on-1 sessions tailored to your goals." },
  { icon: Zap, title: "CrossFit", desc: "High-intensity functional training for peak performance." },
  { icon: Sparkles, title: "Yoga", desc: "Flexibility, balance, and mental wellness." },
  { icon: Music, title: "Zumba", desc: "Dance your way to fitness with energetic Zumba classes." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-accent text-sm tracking-[0.3em] uppercase font-heading mb-2">What We Offer</p>
          <h2 className="text-3xl md:text-5xl text-foreground">
            Our <span className="text-primary">Services</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
