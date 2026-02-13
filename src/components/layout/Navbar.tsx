import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/LOGO.png";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const demoWebsitesLink = { name: "Demo Websites", href: "/demo-websites" };

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src={logo} 
              alt="Brainyworks" 
              className="h-12 lg:h-14 w-auto group-hover:shadow-lg group-hover:shadow-primary/30 transition-shadow"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Button
              asChild
              variant="secondary"
              size="sm"
              className={`border border-primary/20 bg-primary/10 text-primary hover:bg-primary/15 hover:text-primary ${
                location.pathname.startsWith(demoWebsitesLink.href)
                  ? "ring-2 ring-primary/30"
                  : ""
              }`}
            >
              <Link to={demoWebsitesLink.href}>{demoWebsitesLink.name}</Link>
            </Button>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Book a 15-min Call</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <Button
                asChild
                variant="secondary"
                className={`justify-start border border-primary/20 bg-primary/10 text-primary hover:bg-primary/15 hover:text-primary ${
                  location.pathname.startsWith(demoWebsitesLink.href)
                    ? "ring-2 ring-primary/30"
                    : ""
                }`}
              >
                <Link to={demoWebsitesLink.href} onClick={() => setIsOpen(false)}>
                  {demoWebsitesLink.name}
                </Link>
              </Button>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors hover:text-primary py-2 ${
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild variant="hero" className="mt-4">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Book a 15-min Call
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
