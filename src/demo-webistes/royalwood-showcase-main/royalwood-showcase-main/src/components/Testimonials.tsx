import { Star } from "lucide-react";

const reviews = [
  { name: "Priya Sharma", city: "Mumbai", rating: 5, text: "The sofa set we ordered exceeded all expectations. The wood quality is outstanding and the cushions are so comfortable. Truly premium!" },
  { name: "Rajesh Kumar", city: "Delhi", rating: 5, text: "Got a custom dining table made. The craftsmanship is incredible. RoyalWood delivered on time with perfect installation." },
  { name: "Anita Desai", city: "Bangalore", rating: 4, text: "Beautiful wardrobe with amazing storage. The mirror finish is perfect. EMI option made it very affordable for us." },
  { name: "Vikram Singh", city: "Jaipur", rating: 5, text: "Furnished our entire home with RoyalWood. From beds to office desk, everything is solid wood and looks stunning." },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-body font-semibold tracking-widest uppercase mb-3 text-accent">Testimonials</p>
          <h2 className="section-title mb-4">What Our <span className="gold-text">Customers Say</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="p-6 rounded-xl bg-background border border-border hover-lift">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < r.rating ? "fill-accent text-accent" : "text-border"}`}
                  />
                ))}
              </div>
              <p className="text-sm font-body text-foreground mb-4 leading-relaxed italic">"{r.text}"</p>
              <div>
                <p className="text-sm font-body font-semibold text-foreground">{r.name}</p>
                <p className="text-xs font-body text-muted-foreground">{r.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
