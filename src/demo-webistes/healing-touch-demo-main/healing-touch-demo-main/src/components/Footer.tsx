import { Zap, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-3">Healing Touch Clinic</h3>
            <p className="text-sm text-background/70 leading-relaxed">
              Providing compassionate, affordable, and quality healthcare to families since 2012.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Appointment", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Services</h4>
            <ul className="space-y-2">
              {["General Consultation", "Health Checkups", "Vaccination", "Blood Tests", "Chronic Care"].map((s) => (
                <li key={s}>
                  <span className="text-sm text-background/70">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Contact</h4>
            <p className="text-sm text-background/70 mb-2">+91 90394 30279</p>
            <p className="text-sm text-background/70 mb-4">developer@brainyworks.in</p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#contact" className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                  <Icon className="h-4 w-4 text-background/80" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BrainyWorks demo footer */}
      <div className="border-t border-background/10 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="flex items-center justify-center gap-1 text-sm font-medium text-background mb-2">
            <Zap className="h-4 w-4" />
            This Website is a Demo Created by BrainyWorks.
          </p>
          <p className="text-xs text-background/60 max-w-xl mx-auto leading-relaxed">
            We Build Smart AI-Enabled Clinic Websites with Appointment Booking & WhatsApp Automation.
            Contact BrainyWorks to get your own professional healthcare website.
          </p>
          <p className="text-xs text-background/40 mt-4">© 2025 Healing Touch Clinic (Demo). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
