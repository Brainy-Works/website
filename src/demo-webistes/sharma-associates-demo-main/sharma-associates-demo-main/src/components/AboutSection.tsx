import { Award, Users, Globe, Briefcase } from "lucide-react";

const stats = [
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Business Clients" },
  { icon: Briefcase, value: "Expert", label: "CA Team & Consultants" },
  { icon: Globe, value: "PAN India", label: "Services" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-2">About Us</p>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            A Legacy of Trust &amp; Excellence
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Sharma &amp; Associates is a distinguished Chartered Accountancy firm committed to delivering transparent, reliable, and ethical financial solutions. With a proven track record across industries, we empower businesses and individuals to achieve their financial goals.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center rounded-lg border border-border bg-background p-6 text-center">
              <s.icon size={28} className="mb-3 text-gold" />
              <span className="font-heading text-2xl font-bold text-primary md:text-3xl">{s.value}</span>
              <span className="mt-1 text-sm text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center italic text-muted-foreground">
          "Delivering transparent, reliable and ethical financial solutions."
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
