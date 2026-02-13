import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-[44px] z-40 border-b border-border bg-card shadow-sm">
      <div className="container-max flex items-center justify-between px-4 py-3 md:px-8">
        <a href="#home" className="font-heading text-xl font-bold text-primary md:text-2xl">
          Sharma <span className="text-gold">&</span> Associates
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
          <a
            href="#consultation"
            className="ml-2 flex items-center gap-1.5 rounded bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy-light"
          >
            <Phone size={14} /> Book Consultation
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground" aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-card px-4 pb-4 lg:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#consultation"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
          >
            Book Consultation
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
