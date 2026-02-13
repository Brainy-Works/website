import transform1 from "@/assets/transform-1.jpg";
import transform3 from "@/assets/transform-3.jpg";

const transformations = [
  { img: transform1, name: "Arjun K.", result: "Lost 18kg in 6 months" },
  { img: transform3, name: "Vikram S.", result: "Gained 12kg lean muscle" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-accent text-sm tracking-[0.3em] uppercase font-heading mb-2">Results</p>
          <h2 className="text-3xl md:text-5xl text-foreground">
            Real Results. <span className="text-primary">Real Transformations.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {transformations.map((t) => (
            <div key={t.name} className="group relative overflow-hidden rounded-lg border border-border hover:border-primary/40 transition-colors">
              <img
                src={t.img}
                alt={`${t.name} transformation`}
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 to-transparent p-5">
                <p className="font-heading text-lg text-foreground">{t.name}</p>
                <p className="text-accent text-sm font-medium">{t.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
