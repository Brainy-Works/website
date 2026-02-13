import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Specialities", href: "#specialities" },
  { label: "Doctors", href: "#doctors" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-[52px] sm:top-[44px] z-40 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-lg">N</span>
          </div>
          <div>
            <span className="font-heading font-bold text-lg text-foreground leading-none">NovaCare</span>
            <span className="block text-[10px] text-muted-foreground tracking-widest uppercase">Advanced Clinic</span>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#appointment" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-teal-dark transition-colors">
            <Phone className="w-4 h-4" /> Book Appointment
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4 animate-fade-in">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-foreground hover:text-primary border-b border-border/50">
              {l.label}
            </a>
          ))}
          <a href="#appointment" onClick={() => setOpen(false)} className="mt-3 block text-center px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
            Book Appointment
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
