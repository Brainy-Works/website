import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Results", href: "#results" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-[44px] z-40 bg-card/95 backdrop-blur border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#home" className="flex items-center gap-2">
          <GraduationCap className="h-8 w-8 text-primary" />
          <div>
            <span className="text-lg font-display font-bold text-foreground leading-tight block">
              Bright Future Academy
            </span>
            <span className="text-[10px] text-muted-foreground tracking-wider uppercase">Demo Brand</span>
          </div>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="text-foreground/80 hover:text-primary transition-colors">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#admission"
              className="rounded-md bg-accent text-accent-foreground px-5 py-2 text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Enroll Now
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-t border-border px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-2 text-sm font-medium">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-foreground/80 hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#admission"
                onClick={() => setOpen(false)}
                className="block text-center rounded-md bg-accent text-accent-foreground px-5 py-2.5 font-semibold"
              >
                Enroll Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
