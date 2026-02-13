import { useState } from "react";
import livingImg from "@/assets/portfolio-living.jpg";
import bedroomImg from "@/assets/portfolio-bedroom.jpg";
import kitchenImg from "@/assets/portfolio-kitchen.jpg";
import officeImg from "@/assets/portfolio-office.jpg";
import villaImg from "@/assets/portfolio-villa.jpg";

const categories = [
  { key: "all", label: "All" },
  { key: "living", label: "Living Rooms" },
  { key: "bedroom", label: "Bedrooms" },
  { key: "kitchen", label: "Modular Kitchens" },
  { key: "office", label: "Office Interiors" },
  { key: "villa", label: "Luxury Villas" },
];

const projects = [
  { img: livingImg, title: "Contemporary Living", cat: "living" },
  { img: bedroomImg, title: "Serene Bedroom Suite", cat: "bedroom" },
  { img: kitchenImg, title: "Modern Modular Kitchen", cat: "kitchen" },
  { img: officeImg, title: "Executive Office", cat: "office" },
  { img: villaImg, title: "Heritage Villa", cat: "villa" },
  { img: livingImg, title: "Minimalist Lounge", cat: "living" },
  { img: bedroomImg, title: "Master Retreat", cat: "bedroom" },
  { img: kitchenImg, title: "Chef's Paradise", cat: "kitchen" },
];

const PortfolioSection = () => {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="w-12 h-0.5 bg-gold mx-auto mb-4" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Our Portfolio</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">A curated selection of our finest interior design projects across India.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === c.key
                  ? "bg-gold text-charcoal"
                  : "bg-card text-muted-foreground hover:bg-gold/10 hover:text-gold"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((p, i) => (
            <div key={i} className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/60 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <p className="font-serif text-lg font-semibold text-warm-white mb-2">{p.title}</p>
                  <span className="inline-block px-4 py-1.5 border border-gold text-gold text-xs font-semibold rounded-full">
                    View Project
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
