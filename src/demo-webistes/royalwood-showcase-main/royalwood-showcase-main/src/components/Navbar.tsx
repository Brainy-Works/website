import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Categories", href: "#categories" },
  { label: "Products", href: "#products" },
  { label: "Custom", href: "#custom" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-[52px] z-40 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="font-display text-xl md:text-2xl font-bold text-foreground">
          Royal<span className="gold-text">Wood</span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-body font-medium text-muted-foreground hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+919039430279" className="flex items-center gap-1.5 text-sm font-body font-semibold text-foreground">
            <Phone className="w-4 h-4 text-accent" />
            +91 90394 30279
          </a>
          <a href="#custom" className="btn-gold text-xs !px-4 !py-2">Get Quote</a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-card border-b border-border px-4 pb-4 animate-fade-in">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-body font-medium text-muted-foreground hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href="tel:+919039430279" className="flex items-center gap-1.5 mt-2 text-sm font-body font-semibold text-foreground">
            <Phone className="w-4 h-4 text-accent" />
            +91 90394 30279
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
