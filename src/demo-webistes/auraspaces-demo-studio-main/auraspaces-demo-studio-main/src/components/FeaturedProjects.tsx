import { MapPin } from "lucide-react";
import feat1 from "@/assets/featured-1.jpg";
import feat2 from "@/assets/featured-2.jpg";
import feat3 from "@/assets/featured-3.jpg";

const projects = [
  {
    img: feat1,
    name: "The Ivory Penthouse",
    location: "Mumbai, Maharashtra",
    desc: "A 4,500 sq.ft. penthouse redesigned with Italian marble, gold-leaf accents, and panoramic city views. Contemporary luxury meets Indian warmth.",
    cost: "₹85 – ₹1.2 Cr",
  },
  {
    img: feat2,
    name: "Greenwood Villa",
    location: "Bangalore, Karnataka",
    desc: "Double-height living, handcrafted wood elements, and seamless indoor-outdoor flow define this sprawling family villa.",
    cost: "₹1.5 – ₹2 Cr",
  },
  {
    img: feat3,
    name: "The Grand Lobby",
    location: "New Delhi",
    desc: "A boutique hotel lobby blending Mughal-inspired patterns with contemporary minimalism, marble, and grand chandeliers.",
    cost: "₹2 – ₹3.5 Cr",
  },
];

const FeaturedProjects = () => (
  <section id="projects" className="py-20 md:py-28 bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <div className="w-12 h-0.5 bg-gold mx-auto mb-4" />
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Hand-picked signature projects that showcase our design philosophy.</p>
      </div>

      <div className="space-y-20">
        {projects.map((p, i) => (
          <div key={i} className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <img src={p.img} alt={p.name} className="w-full rounded-lg shadow-lg object-cover aspect-video" />
            </div>
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <span className="text-gold text-sm font-semibold tracking-wider uppercase">Featured Project</span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-2 mb-3">{p.name}</h3>
              <p className="flex items-center text-muted-foreground text-sm mb-4">
                <MapPin className="h-4 w-4 mr-1 text-gold" /> {p.location}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
              <p className="text-sm font-semibold text-gold">Project Range: {p.cost}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProjects;
