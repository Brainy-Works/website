import aboutImg from "@/assets/about-studio.jpg";

const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "300+", label: "Projects Completed" },
  { value: "Res & Com", label: "Expertise" },
  { value: "Custom", label: "Design Approach" },
];

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28 bg-card">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img src={aboutImg} alt="AuraSpaces team" className="w-full rounded-lg shadow-lg object-cover aspect-square" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold rounded-lg hidden md:block" />
        </div>
        <div>
          <div className="w-12 h-0.5 bg-gold mb-4" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">About AuraSpaces</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            With over a decade of experience transforming residential and commercial spaces across India, 
            AuraSpaces Interior Studio brings together art, functionality, and timeless elegance. 
            Our team of passionate designers crafts bespoke interiors that reflect your personality and lifestyle.
          </p>
          <blockquote className="border-l-4 border-gold pl-4 italic font-serif text-lg text-foreground/80 mb-8">
            "We believe every space tells a story. We design yours beautifully."
          </blockquote>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center p-4 bg-background rounded-lg">
                <p className="font-serif text-2xl font-bold text-gold">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
