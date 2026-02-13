import { GraduationCap, FileText, MessageCircle, BookOpen, BarChart3 } from "lucide-react";

const features = [
  { icon: GraduationCap, title: "Experienced Faculty", desc: "Highly qualified and trained educators with years of teaching experience." },
  { icon: FileText, title: "Regular Test Series", desc: "Weekly and monthly tests aligned with board and competitive exam patterns." },
  { icon: MessageCircle, title: "Doubt Clearing Sessions", desc: "One-on-one doubt resolution to ensure no student is left behind." },
  { icon: BookOpen, title: "Study Material Provided", desc: "Comprehensive study material and question banks prepared by experts." },
  { icon: BarChart3, title: "Performance Tracking", desc: "Digital progress reports and parent-teacher meetings for transparent tracking." },
];

const WhyChooseUs = () => (
  <section className="section-padding bg-card">
    <div className="container mx-auto">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
        Why <span className="text-primary">Choose Us</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
        What sets Bright Future Academy apart from the rest.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-xl border border-border bg-background p-6 hover:border-primary/40 transition-colors"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <f.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
