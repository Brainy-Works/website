import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Courses", href: "#courses" },
  { label: "Results", href: "#results" },
  { label: "Faculty", href: "#faculty" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-card/90 backdrop-blur-md sticky top-[44px] z-40 border-b border-border">
      <div className="container-max flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2">
          <GraduationCap className="w-8 h-8 text-secondary" />
          <span className="font-heading font-bold text-xl text-foreground">
            Apex <span className="text-secondary">Scholars</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#inquiry" className="bg-secondary text-secondary-foreground px-5 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity">
            Enroll Now
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((l) => (
                <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  {l.label}
                </a>
              ))}
              <a href="#inquiry" onClick={() => setOpen(false)} className="bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full text-sm font-bold text-center">
                Enroll Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
