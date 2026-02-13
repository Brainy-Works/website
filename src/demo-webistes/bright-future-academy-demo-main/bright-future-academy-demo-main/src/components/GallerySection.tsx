const galleryItems = [
  "Classroom with students attending a lecture",
  "Science laboratory session",
  "Library and reading area",
  "Computer lab for digital learning",
  "Annual sports day event",
  "Award ceremony for toppers",
];

const GallerySection = () => (
  <section id="gallery" className="section-padding bg-background">
    <div className="container mx-auto">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
        Campus <span className="text-primary">Gallery</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
        A glimpse into our vibrant learning environment.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryItems.map((item, i) => (
          <div
            key={i}
            className="aspect-[4/3] rounded-xl bg-secondary flex items-center justify-center border border-border overflow-hidden"
          >
            <span className="text-muted-foreground text-xs text-center px-4">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
