import { MessageSquare, Lightbulb, Box, Hammer, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Consultation", desc: "Understanding your vision, needs, and budget." },
  { icon: Lightbulb, title: "Concept Design", desc: "Mood boards, layouts, and material palettes." },
  { icon: Box, title: "3D Visualization", desc: "Photorealistic renders of your future space." },
  { icon: Hammer, title: "Execution", desc: "Precision craftsmanship and project management." },
  { icon: CheckCircle2, title: "Final Handover", desc: "Walk-through, styling, and a perfect finish." },
];

const ProcessSection = () => (
  <section id="process" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <div className="w-12 h-0.5 bg-gold mx-auto mb-4" />
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Our Process</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">A seamless journey from your first call to your dream space.</p>
      </div>

      <div className="relative">
        {/* Desktop connector line */}
        <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-border" />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-card border-2 border-gold flex items-center justify-center mb-4 relative z-10">
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gold text-charcoal text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <s.icon className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
