import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-[44px] z-40 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#hero" className="font-serif text-2xl font-bold tracking-tight text-foreground">
          Aura<span className="text-gold">Spaces</span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
          <Button size="sm" className="bg-gold hover:bg-gold-light text-charcoal font-semibold">
            <Phone className="h-3.5 w-3.5 mr-1" /> Book Consultation
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-card border-b border-border px-4 pb-4 space-y-3">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium text-muted-foreground hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
          <Button size="sm" className="w-full bg-gold hover:bg-gold-light text-charcoal font-semibold">
            <Phone className="h-3.5 w-3.5 mr-1" /> Book Consultation
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
