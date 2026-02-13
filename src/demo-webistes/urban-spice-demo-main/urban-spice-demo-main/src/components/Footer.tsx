import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[hsl(0,0%,4%)] text-dark-surface-foreground">
      {/* BrainyWorks Banner */}
      <div className="bg-primary/10 border-t border-primary/20 py-6 px-4">
        <div className="container mx-auto text-center">
          <p className="font-display text-lg md:text-xl font-bold text-dark-surface-foreground mb-2">
            ⚡ This Website is a Demo Created by <span className="text-gradient-gold">BrainyWorks</span>
          </p>
          <p className="font-body text-sm text-dark-surface-foreground/60 max-w-2xl mx-auto mb-4">
            We Build AI-Powered Restaurant Websites with Automation & Direct Ordering Systems.
            Contact BrainyWorks to get your own smart website.
          </p>
          <a
            href="/contact"
            target="_top"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
          >
            Contact BrainyWorks
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              Urban<span className="text-gradient-gold"> Spice</span>
            </h3>
            <p className="font-body text-sm text-dark-surface-foreground/50 leading-relaxed">
              A premium Indian dining experience bringing authentic flavors, elegant ambience, and modern convenience under one roof.
            </p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#contact"
                  className="w-10 h-10 rounded-full bg-[hsl(0,0%,12%)] hover:bg-primary flex items-center justify-center transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {["Home", "About", "Menu", "Book a Table", "Offers", "Reviews", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/ /g, "")}`}
                    className="font-body text-sm text-dark-surface-foreground/50 hover:text-gold transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-2.5 font-body text-sm text-dark-surface-foreground/50">
              <p>6, Ajmer Rd, Nirman Nagar, Brijlalpura,</p>
              <p>Jaipur, Rajasthan 302019</p>
              <p>+91 90394 30279</p>
              <p>developer@brainyworks.in</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[hsl(0,0%,12%)] mt-10 pt-6 text-center">
          <p className="font-body text-xs text-dark-surface-foreground/30">
            © {new Date().getFullYear()} Urban Spice (Demo Brand). All rights reserved. | Built by BrainyWorks
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
