import { Gift, Utensils, PartyPopper } from "lucide-react";

const offers = [
  {
    icon: Utensils,
    title: "Weekend Buffet",
    description: "All-you-can-eat premium buffet with 50+ dishes every Saturday & Sunday.",
    price: "₹799/person",
    badge: "Popular",
  },
  {
    icon: Gift,
    title: "Family Combo",
    description: "Feed a family of 4 with our specially curated combo meal at a flat price.",
    price: "₹1,499",
    badge: "Best Value",
  },
  {
    icon: PartyPopper,
    title: "Festival Discount",
    description: "Flat 20% off on all orders during festive season. Use code: FESTIVE20",
    price: "20% OFF",
    badge: "Limited",
  },
];

const OffersSection = () => {
  return (
    <section id="offers" className="section-padding bg-dark-surface">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold font-body text-sm tracking-[0.25em] uppercase mb-3">Special Offers</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark-surface-foreground mb-4">
            Deals You Can't <span className="text-gradient-gold italic">Resist</span>
          </h2>
          <div className="gold-divider mb-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="relative bg-[hsl(0,0%,10%)] rounded-2xl p-6 border border-[hsl(0,0%,15%)] hover:border-gold/30 transition-all duration-500 hover:-translate-y-1 group"
            >
              <span className="absolute top-4 right-4 text-xs font-bold bg-gold text-accent-foreground px-3 py-1 rounded-full">
                {offer.badge}
              </span>
              <offer.icon className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-display text-xl font-bold text-dark-surface-foreground mb-2">{offer.title}</h3>
              <p className="font-body text-sm text-dark-surface-foreground/50 mb-4">{offer.description}</p>
              <p className="font-display text-2xl font-bold text-primary mb-5">{offer.price}</p>
              <a
                href="https://wa.me/919039430279?text=Hi%2C%20I%20want%20to%20claim%20this%20offer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[hsl(142,70%,35%)] hover:bg-[hsl(142,70%,30%)] text-primary-foreground text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
              >
                Claim on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
