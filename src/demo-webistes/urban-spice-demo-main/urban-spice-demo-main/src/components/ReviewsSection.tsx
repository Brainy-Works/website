import { Star } from "lucide-react";

const reviews = [
  { name: "Priya Sharma", rating: 5, review: "The butter chicken here is to die for! Authentic taste with premium quality. Best Indian restaurant in the city." },
  { name: "Rahul Verma", rating: 5, review: "Amazing ambience, impeccable service, and the biryani is just outstanding. A must-visit for food lovers!" },
  { name: "Sneha Patel", rating: 4, review: "Loved the weekend buffet — amazing variety and fresh food. The desserts were a highlight. Will come again!" },
  { name: "Arjun Mehta", rating: 5, review: "Booked a table for anniversary dinner. The staff made it so special. Food was exceptional across the board." },
  { name: "Kavita Reddy", rating: 5, review: "Ordered on WhatsApp and food arrived hot and fresh. The packaging was premium too. Highly recommend!" },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold font-body text-sm tracking-[0.25em] uppercase mb-3">Testimonials</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our <span className="text-primary italic">Guests Say</span>
          </h2>
          <div className="gold-divider mb-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-6 border border-border hover:border-gold/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`w-4 h-4 ${j < review.rating ? "text-gold fill-gold" : "text-border"}`}
                  />
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 italic">"{review.review}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-display font-bold text-primary text-sm">{review.name[0]}</span>
                </div>
                <p className="font-body font-semibold text-sm text-foreground">{review.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
