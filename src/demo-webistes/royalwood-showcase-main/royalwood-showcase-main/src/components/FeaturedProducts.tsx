import { BadgePercent } from "lucide-react";
import prod1 from "@/assets/prod-1.jpg";
import prod2 from "@/assets/prod-2.jpg";
import prod3 from "@/assets/prod-3.jpg";
import prod4 from "@/assets/prod-4.jpg";
import prod5 from "@/assets/prod-5.jpg";
import prod6 from "@/assets/prod-6.jpg";
import prod7 from "@/assets/prod-7.jpg";
import prod8 from "@/assets/prod-8.jpg";

const products = [
  { name: "Royal L-Shape Sofa Set", price: "₹78,999", desc: "Solid sheesham wood with premium upholstery", image: prod1, emi: true },
  { name: "Heritage King Size Bed", price: "₹62,500", desc: "King size with hydraulic storage", image: prod2, emi: true },
  { name: "Classic Dining Set (6 Seater)", price: "₹54,999", desc: "Teak wood with cushioned chairs", image: prod3, emi: false },
  { name: "Imperial TV Unit", price: "₹28,999", desc: "Modern design with cable management", image: prod4, emi: true },
  { name: "Grand Bookshelf", price: "₹22,500", desc: "Sheesham wood open shelf design", image: prod5, emi: false },
  { name: "Carved Coffee Table", price: "₹18,999", desc: "Hand-carved rosewood center table", image: prod6, emi: false },
  { name: "Maharaja 3-Door Wardrobe", price: "₹72,999", desc: "Full mirror with internal organizer", image: prod7, emi: true },
  { name: "Executive Office Desk", price: "₹34,500", desc: "Walnut finish with drawer storage", image: prod8, emi: true },
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-body font-semibold tracking-widest uppercase mb-3 text-accent">Bestsellers</p>
          <h2 className="section-title mb-4">Featured <span className="gold-text">Products</span></h2>
          <p className="section-subtitle mx-auto">Handpicked favorites loved by thousands of Indian homes</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((p) => (
            <div key={p.name} className="card-premium group">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {p.emi && (
                  <span className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-body font-bold gold-gradient text-demo-banner-foreground">
                    <BadgePercent className="w-3 h-3" />
                    EMI Available
                  </span>
                )}
              </div>
              <div className="p-3 md:p-4">
                <h3 className="font-display font-semibold text-sm md:text-base text-card-foreground mb-1 line-clamp-1">{p.name}</h3>
                <p className="text-xs text-muted-foreground mb-2 line-clamp-1">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-lg text-accent">{p.price}</span>
                  <button className="text-[11px] font-body font-bold btn-gold !px-3 !py-1.5 !text-xs">
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
