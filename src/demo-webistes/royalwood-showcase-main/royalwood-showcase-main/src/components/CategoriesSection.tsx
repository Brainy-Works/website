import catSofas from "@/assets/cat-sofas.jpg";
import catBeds from "@/assets/cat-beds.jpg";
import catDining from "@/assets/cat-dining.jpg";
import catWardrobes from "@/assets/cat-wardrobes.jpg";
import catOffice from "@/assets/cat-office.jpg";
import catCustom from "@/assets/cat-custom.jpg";

const categories = [
  { name: "Sofas", image: catSofas },
  { name: "Beds", image: catBeds },
  { name: "Dining Tables", image: catDining },
  { name: "Wardrobes", image: catWardrobes },
  { name: "Office Furniture", image: catOffice },
  { name: "Custom Furniture", image: catCustom },
];

const CategoriesSection = () => {
  return (
    <section id="categories" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-body font-semibold tracking-widest uppercase mb-3 text-accent">Our Collection</p>
          <h2 className="section-title mb-4">Browse by <span className="gold-text">Category</span></h2>
          <p className="section-subtitle mx-auto">Discover furniture that transforms your house into a home</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <div key={cat.name} className="group card-premium cursor-pointer">
              <div className="aspect-square overflow-hidden">
                <img
                  src={cat.image}
                  alt={`${cat.name} category`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 md:p-5 text-center">
                <h3 className="font-display font-semibold text-base md:text-lg text-card-foreground mb-2">{cat.name}</h3>
                <span className="text-xs font-body font-semibold text-accent hover:underline">View Products →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
