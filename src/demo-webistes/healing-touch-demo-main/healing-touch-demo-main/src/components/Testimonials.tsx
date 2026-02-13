import { Star } from "lucide-react";

const reviews = [
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Dr. Mehta is very thorough and caring. He explained everything in detail and made sure I understood my treatment plan. Highly recommended!",
  },
  {
    name: "Rajesh Kumar",
    rating: 5,
    text: "The clinic is clean and well-maintained. Appointment booking was easy and I barely had to wait. Great experience overall.",
  },
  {
    name: "Anita Patel",
    rating: 4,
    text: "Very friendly staff and excellent care for my elderly mother. The doctor was patient and kind. We are regular visitors now.",
  },
  {
    name: "Suresh Nair",
    rating: 5,
    text: "Best family doctor in the area. My entire family has been consulting Dr. Mehta for years. Trustworthy and professional.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-clinic-blue-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Patient Reviews</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
            What Our Patients Say
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map(({ name, rating, text }) => (
            <div key={name} className="bg-card border border-border rounded-lg p-5 shadow-sm">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < rating ? "text-demo-banner fill-demo-banner" : "text-border"}`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{text}"</p>
              <p className="text-sm font-semibold text-foreground">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
