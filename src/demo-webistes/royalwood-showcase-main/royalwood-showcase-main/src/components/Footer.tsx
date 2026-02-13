import { Zap, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Custom Furniture", href: "#custom" },
  { label: "Contact", href: "#contact" },
];
const categories = ["Sofas", "Beds", "Dining Tables", "Wardrobes", "Office Furniture"];

const Footer = () => {
  return (
    <footer className="wood-gradient pt-16 pb-8 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">
              Royal<span className="gold-text">Wood</span>
            </h3>
            <p className="text-sm font-body text-cream-dark leading-relaxed mb-4">
              Crafting premium wooden furniture for modern Indian homes since 2009.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#contact" className="w-9 h-9 rounded-full bg-wood-light flex items-center justify-center hover:opacity-80 transition-opacity">
                  <Icon className="w-4 h-4 text-cream" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm font-body text-cream-dark hover:text-gold transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display font-semibold text-sm text-primary-foreground mb-4">Categories</h4>
            <ul className="space-y-2">
              {categories.map((c) => (
                <li key={c}>
                  <a href="#categories" className="text-sm font-body text-cream-dark hover:text-gold transition-colors">{c}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm text-primary-foreground mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm font-body text-cream-dark">
              <li>+91 90394 30279</li>
              <li>developer@brainyworks.in</li>
              <li>6, Ajmer Rd, Nirman Nagar, Brijlalpura, Jaipur, Rajasthan 302019</li>
            </ul>
          </div>
        </div>

        {/* Demo footer */}
        <div className="border-t border-wood-light pt-8 text-center">
          <p className="flex items-center justify-center gap-2 text-sm font-body font-semibold text-gold mb-2">
            <Zap className="w-4 h-4" />
            This Website is a Demo Created by BrainyWorks.
          </p>
          <p className="text-xs font-body text-cream-dark max-w-xl mx-auto leading-relaxed mb-4">
            We Build Smart AI-Enabled Furniture Store Websites with Lead Automation & WhatsApp Integration. Contact BrainyWorks to get your own professional website.
          </p>
          <p className="text-xs font-body text-wood-light">
            © 2025 RoyalWood Furniture (Demo Brand). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
