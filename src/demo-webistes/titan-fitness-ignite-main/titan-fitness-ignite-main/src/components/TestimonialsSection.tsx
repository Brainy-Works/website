import { Star } from "lucide-react";

const testimonials = [
  { name: "Priya M.", stars: 5, text: "Titan Fitness completely changed my lifestyle. Lost 15kg in 4 months with their amazing trainers!" },
  { name: "Rohit K.", stars: 5, text: "Best gym in the city. The equipment is top-notch and the vibe is unmatched. Highly recommended!" },
  { name: "Ananya S.", stars: 5, text: "The Zumba and yoga classes are incredible. I finally found a place where I enjoy working out." },
  { name: "Deepak R.", stars: 4, text: "Professional trainers, clean facility, and great community. My go-to gym for the last 2 years." },
  { name: "Meera J.", stars: 5, text: "From a beginner to a fitness enthusiast — Titan made it happen. The personal training is world-class." },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-accent text-sm tracking-[0.3em] uppercase font-heading mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-5xl text-foreground">
            What Members <span className="text-primary">Say</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < t.stars ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"}`}
                  />
                ))}
              </div>
              <p className="text-muted-foreground text-sm mb-4 italic">"{t.text}"</p>
              <p className="font-heading text-foreground text-sm">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
