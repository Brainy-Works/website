import { Zap, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const services = [
  { label: "Residential Interiors", href: "#consultation" },
  { label: "Commercial Design", href: "#consultation" },
  { label: "Modular Kitchens", href: "#consultation" },
  { label: "3D Visualization", href: "#consultation" },
  { label: "Turnkey Projects", href: "#consultation" },
  { label: "Furniture Design", href: "#consultation" },
];

const Footer = () => (
  <footer className="bg-charcoal text-warm-white pt-16 pb-8">
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <h3 className="font-serif text-2xl font-bold mb-4">Aura<span className="text-gold">Spaces</span></h3>
          <p className="text-sm text-warm-white/60 leading-relaxed">
            Luxury interior design studio crafting timeless spaces for discerning homeowners across India.
          </p>
          <div className="flex gap-3 mt-4">
            {[Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
              <a key={i} href="#contact" className="w-9 h-9 rounded-full border border-warm-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-warm-white/60">
            {quickLinks.map((l) => (
              <li key={l.label}><a href={l.href} className="hover:text-gold transition-colors">{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gold text-sm uppercase tracking-wider mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-warm-white/60">
            {services.map((l) => (
              <li key={l.label}><a href={l.href} className="hover:text-gold transition-colors">{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gold text-sm uppercase tracking-wider mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-warm-white/60">
            <li>6, Ajmer Rd, Nirman Nagar, Brijlalpura,</li>
            <li>Jaipur, Rajasthan 302019</li>
            <li>+91 90394 30279</li>
            <li>developer@brainyworks.in</li>
          </ul>
        </div>
      </div>

      {/* BrainyWorks Demo Disclaimer */}
      <div className="border-t border-warm-white/10 pt-8 text-center">
        <div className="bg-warm-white/5 rounded-lg p-6 mb-6 max-w-2xl mx-auto">
          <p className="flex items-center justify-center gap-2 text-gold font-semibold mb-2">
            <Zap className="h-4 w-4" /> This Website is a Demo Created by BrainyWorks
          </p>
          <p className="text-sm text-warm-white/60">
            We Build Modern Interior Design Studio Websites with Lead Capture & Consultation Automation.<br />
            <a href="/contact" target="_top" rel="noopener noreferrer" className="text-gold hover:underline">Contact BrainyWorks</a> to get your own premium website.
          </p>
        </div>
        <p className="text-xs text-warm-white/40">© 2025 AuraSpaces Interior Studio. Demo Only – Not a Real Business.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
