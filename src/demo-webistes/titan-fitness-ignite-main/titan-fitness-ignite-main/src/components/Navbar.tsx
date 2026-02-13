import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Plans", href: "#plans" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-[40px] sm:top-[40px] left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#hero" className="font-heading text-2xl tracking-wider">
          <span className="text-primary">TITAN</span>{" "}
          <span className="text-foreground">FITNESS</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#trial"
            className="gradient-red text-primary-foreground text-sm font-bold px-5 py-2 rounded-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Join Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#trial"
              onClick={() => setOpen(false)}
              className="gradient-red text-primary-foreground text-sm font-bold px-6 py-2.5 rounded-sm uppercase tracking-wider"
            >
              Join Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
