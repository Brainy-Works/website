import { Star, User } from "lucide-react";

const testimonials = [
  { name: "Meera Joshi", role: "Parent", rating: 5, text: "My son's grades improved dramatically after joining. The teachers are very dedicated and approachable." },
  { name: "Arjun Singh", role: "Student – JEE", rating: 5, text: "The test series and study material are top notch. I felt fully prepared on exam day." },
  { name: "Sunita Rao", role: "Parent", rating: 4, text: "Very professional institute. Regular updates and progress reports keep us informed about our daughter's performance." },
  { name: "Karan Mehta", role: "Student – NEET", rating: 5, text: "Doubt clearing sessions and mentorship made all the difference. Highly recommend Bright Future Academy!" },
  { name: "Anita Sharma", role: "Parent", rating: 5, text: "Affordable fees and excellent results. My child secured 95% in boards thanks to their guidance." },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-card">
    <div className="container mx-auto">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
        What People <span className="text-primary">Say</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
        Hear from students and parents who trust us.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="rounded-xl border border-border bg-background p-6">
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: 5 }).map((_, si) => (
                <Star
                  key={si}
                  className={`h-4 w-4 ${si < t.rating ? "text-gold fill-gold" : "text-border"}`}
                />
              ))}
            </div>
            <p className="text-muted-foreground text-sm mb-4 italic">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
                <User className="h-4 w-4 text-muted-foreground" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
