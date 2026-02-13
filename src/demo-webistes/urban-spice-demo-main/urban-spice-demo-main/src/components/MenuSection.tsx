import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type MenuItem = {
  name: string;
  price: string;
  description: string;
  image: string;
};

const categories: Record<string, MenuItem[]> = {
  Starters: [
    { name: "Paneer Tikka", price: "₹299", description: "Marinated cottage cheese grilled in tandoor with spices", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop" },
    { name: "Chicken Seekh Kebab", price: "₹349", description: "Minced chicken skewers with aromatic herbs", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop" },
    { name: "Crispy Samosa", price: "₹149", description: "Golden fried pastry with spiced potato filling", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop" },
    { name: "Fish Amritsari", price: "₹399", description: "Batter-fried fish with tangy spices", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop" },
  ],
  "Main Course": [
    { name: "Butter Chicken", price: "₹449", description: "Creamy tomato-based curry with tender chicken", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop" },
    { name: "Dal Makhani", price: "₹329", description: "Slow-cooked black lentils in buttery gravy", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop" },
    { name: "Mutton Rogan Josh", price: "₹549", description: "Kashmiri-style lamb in rich spice gravy", image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop" },
    { name: "Palak Paneer", price: "₹349", description: "Cottage cheese in creamy spinach gravy", image: "https://images.unsplash.com/photo-1618449840665-9ed506d73a34?w=400&h=300&fit=crop" },
  ],
  Biryani: [
    { name: "Hyderabadi Chicken Biryani", price: "₹399", description: "Dum-cooked with saffron and aromatic spices", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop" },
    { name: "Mutton Biryani", price: "₹499", description: "Tender mutton layered with fragrant basmati", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&h=300&fit=crop" },
    { name: "Veg Biryani", price: "₹299", description: "Mixed vegetables with saffron-infused rice", image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=400&h=300&fit=crop" },
    { name: "Prawn Biryani", price: "₹549", description: "Juicy prawns in coastal spice biryani", image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=400&h=300&fit=crop" },
  ],
  Desserts: [
    { name: "Gulab Jamun", price: "₹149", description: "Soft dumplings soaked in rose-scented syrup", image: "https://images.unsplash.com/photo-1666190923745-67bdd4ad8c66?w=400&h=300&fit=crop" },
    { name: "Rasmalai", price: "₹179", description: "Soft paneer discs in creamy saffron milk", image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=400&h=300&fit=crop" },
    { name: "Kulfi Falooda", price: "₹199", description: "Traditional Indian ice cream with vermicelli", image: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=400&h=300&fit=crop" },
  ],
  Beverages: [
    { name: "Masala Chai", price: "₹79", description: "Spiced Indian tea with cardamom and ginger", image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=300&fit=crop" },
    { name: "Mango Lassi", price: "₹149", description: "Chilled yogurt drink with fresh mango", image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=400&h=300&fit=crop" },
    { name: "Fresh Lime Soda", price: "₹99", description: "Refreshing lime with soda and mint", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed514?w=400&h=300&fit=crop" },
  ],
};

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("Starters");
  const { toast } = useToast();

  const handleAddToCart = (itemName: string) => {
    toast({
      title: "Added to Cart! 🛒",
      description: `${itemName} has been added. (Demo only)`,
    });
  };

  return (
    <section id="menu" className="section-padding bg-dark-surface">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold font-body text-sm tracking-[0.25em] uppercase mb-3">Our Menu</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark-surface-foreground mb-4">
            Explore Our <span className="text-gradient-gold italic">Culinary Delights</span>
          </h2>
          <div className="gold-divider mb-6" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-[hsl(0,0%,12%)] text-dark-surface-foreground/60 hover:text-gold hover:bg-[hsl(0,0%,15%)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories[activeCategory].map((item) => (
            <div
              key={item.name}
              className="group bg-[hsl(0,0%,10%)] rounded-2xl overflow-hidden border border-[hsl(0,0%,15%)] hover:border-gold/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  {item.price}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg font-semibold text-dark-surface-foreground mb-1">{item.name}</h3>
                <p className="font-body text-sm text-dark-surface-foreground/50 mb-4 line-clamp-2">{item.description}</p>
                <button
                  onClick={() => handleAddToCart(item.name)}
                  className="w-full flex items-center justify-center gap-2 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground text-sm font-semibold py-2.5 rounded-full transition-all duration-300"
                >
                  <ShoppingCart className="w-4 h-4" /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
