import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Priya & Rohan Malhotra", city: "Mumbai", stars: 5, text: "AuraSpaces transformed our 3BHK into something out of Architectural Digest. Every detail was thoughtful and luxurious." },
  { name: "Ananya Krishnan", city: "Bangalore", stars: 5, text: "From the 3D renders to the final reveal, the experience was seamless. Our villa feels like a 5-star resort now." },
  { name: "Vikram Mehta", city: "Delhi", stars: 5, text: "Their understanding of modern Indian aesthetics is unmatched. Our office space now impresses every client who walks in." },
  { name: "Sneha & Aditya Sharma", city: "Pune", stars: 4, text: "Professional, creative, and always on schedule. AuraSpaces made our dream home a reality within budget." },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <div className="w-12 h-0.5 bg-gold mx-auto mb-4" />
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Client Testimonials</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Words from homeowners who trusted us with their most personal spaces.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
            <Quote className="h-8 w-8 text-gold/30 mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 italic">"{t.text}"</p>
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: 5 }).map((_, si) => (
                <Star key={si} className={`h-4 w-4 ${si < t.stars ? "text-gold fill-gold" : "text-border"}`} />
              ))}
            </div>
            <p className="font-serif font-semibold text-foreground text-sm">{t.name}</p>
            <p className="text-xs text-muted-foreground">{t.city}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
