import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "₹1,499",
    period: "/month",
    features: ["Gym Access", "Cardio + Weights", "Locker Room Access", "Free WiFi"],
    popular: false,
  },
  {
    name: "Pro",
    price: "₹2,999",
    period: "/month",
    features: ["Everything in Basic", "Personal Training", "Custom Diet Plan", "Progress Tracking"],
    popular: true,
  },
  {
    name: "Elite",
    price: "₹4,999",
    period: "/month",
    features: ["Everything in Pro", "Transformation Program", "Dedicated Coach", "Priority Support"],
    popular: false,
  },
];

const PlansSection = () => {
  return (
    <section id="plans" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-accent text-sm tracking-[0.3em] uppercase font-heading mb-2">Pricing</p>
          <h2 className="text-3xl md:text-5xl text-foreground">
            Membership <span className="text-primary">Plans</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col p-8 rounded-lg border transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? "border-primary border-glow-red bg-card"
                  : "border-border bg-card hover:border-muted-foreground/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-red text-primary-foreground text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1 uppercase tracking-wider">
                  <Zap className="w-3 h-3" /> Most Popular
                </div>
              )}
              <h3 className="text-xl font-heading text-foreground mb-1">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-heading text-primary">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>
              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#trial"
                className={`text-center font-bold py-3 rounded-sm uppercase tracking-wider text-sm transition-opacity hover:opacity-90 ${
                  plan.popular
                    ? "gradient-red text-primary-foreground"
                    : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                }`}
              >
                Join Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
