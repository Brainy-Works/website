import { useEffect, useRef, useState } from "react";
import { Dumbbell, Users, Award, HeartPulse } from "lucide-react";

const features = [
  { icon: Dumbbell, label: "10+ Years Experience" },
  { icon: Users, label: "Certified Personal Trainers" },
  { icon: HeartPulse, label: "Strength & Cardio Zones" },
  { icon: Award, label: "Diet & Transformation Support" },
];

const stats = [
  { value: 2000, suffix: "+", label: "Members" },
  { value: 15, suffix: "+", label: "Trainers" },
  { value: 500, suffix: "+", label: "Transformations" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let current = 0;
          const step = Math.max(1, Math.floor(target / 40));
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(current);
            }
          }, 30);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-heading text-primary">
        {count}
        {suffix}
      </p>
    </div>
  );
}

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-accent text-sm tracking-[0.3em] uppercase font-heading mb-2">Who We Are</p>
          <h2 className="text-3xl md:text-5xl text-foreground">
            More Than A <span className="text-primary">Gym</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            At Titan Fitness Club, we don't just build bodies — we build discipline, confidence, and champions. With world-class equipment and passionate trainers, your transformation starts here.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {features.map((f) => (
            <div key={f.label} className="flex flex-col items-center gap-3 p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
              <f.icon className="w-8 h-8 text-accent" />
              <p className="text-sm text-foreground text-center font-medium">{f.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <AnimatedCounter target={s.value} suffix={s.suffix} />
              <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
