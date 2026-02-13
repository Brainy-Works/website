import { Award, Users, BookOpen, Target } from "lucide-react";

const features = [
  { icon: Award, text: "10+ Years of Experience" },
  { icon: Users, text: "5000+ Students Trained" },
  { icon: BookOpen, text: "Expert Faculty Team" },
  { icon: Target, text: "Focus on Concept Clarity" },
];

const stats = [
  { value: "95%", label: "Success Rate" },
  { value: "200+", label: "Selections" },
  { value: "50+", label: "Faculty Members" },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-card">
    <div className="container mx-auto">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
        About <span className="text-primary">Bright Future Academy</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        For over a decade, we have been shaping academic excellence with a commitment to quality education, structured curriculum, and student-centric approach.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {features.map((f) => (
          <div
            key={f.text}
            className="flex flex-col items-center text-center gap-3 p-6 rounded-xl bg-secondary/50 border border-border"
          >
            <f.icon className="h-8 w-8 text-primary" />
            <span className="text-sm font-semibold text-foreground">{f.text}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center p-6 rounded-xl bg-primary text-primary-foreground">
            <div className="text-3xl md:text-5xl font-display font-bold mb-1">{s.value}</div>
            <div className="text-sm opacity-90">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
