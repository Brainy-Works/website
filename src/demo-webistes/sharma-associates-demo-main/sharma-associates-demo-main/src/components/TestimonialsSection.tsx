import { Star } from "lucide-react";

const testimonials = [
  { name: "Amit Verma", business: "Retail Business Owner", rating: 5, review: "Sharma & Associates has been managing our taxes and compliance for over 5 years. Their professionalism and timely service have been outstanding." },
  { name: "Priya Mehta", business: "Startup Founder", rating: 5, review: "From company registration to GST filing, they handled everything seamlessly. Highly recommend their startup consulting services." },
  { name: "Rajesh Gupta", business: "Manufacturing SME", rating: 4, review: "Excellent audit services and business advisory. They helped us restructure our finances and improve profitability significantly." },
  { name: "Sunita Agarwal", business: "Salaried Professional", rating: 5, review: "I've been filing my taxes through them for years. They always find the best deductions and make the process stress-free." },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-card">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-2">Testimonials</p>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg border border-border bg-background p-6">
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className={i < t.rating ? "fill-gold text-gold" : "text-border"} />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground italic">"{t.review}"</p>
              <div className="mt-4 border-t border-border pt-3">
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
