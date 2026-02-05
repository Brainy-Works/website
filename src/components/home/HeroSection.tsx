import { Hero3DExperience } from "@/components/home/Hero3DExperience";

export function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex items-center hero-gradient noise-overlay overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Animated Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[hsl(250,80%,65%)]/10 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "3s" }} />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <Hero3DExperience />
      </div>
    </section>
  );
}
