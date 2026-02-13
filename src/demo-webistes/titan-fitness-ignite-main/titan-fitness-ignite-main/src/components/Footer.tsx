import { Zap, Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl mb-3">
              <span className="text-primary">TITAN</span> FITNESS
            </h3>
            <p className="text-muted-foreground text-sm">Transform Your Body. Transform Your Life. Premium fitness experience in Pune.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-foreground mb-3">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Services", "Plans", "Gallery", "Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="block text-muted-foreground text-sm hover:text-primary transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Plans */}
          <div>
            <h4 className="font-heading text-foreground mb-3">Membership</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Basic – ₹1,499/mo</p>
              <p>Pro – ₹2,999/mo</p>
              <p>Elite – ₹4,999/mo</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-foreground mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>+91 90394 30279</p>
              <p>developer@brainyworks.in</p>
              <p>6, Ajmer Rd, Nirman Nagar, Brijlalpura, Jaipur, Rajasthan 302019</p>
            </div>
            <div className="flex gap-3 mt-4">
              {[Instagram, Facebook, Youtube, Twitter].map((Icon, i) => (
                <a key={i} href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BrainyWorks banner */}
        <div className="border-t border-border pt-8 text-center">
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 max-w-3xl mx-auto mb-6">
            <p className="text-foreground font-heading text-lg flex items-center justify-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-accent fill-accent" />
              This Website is a Demo Created by BrainyWorks
            </p>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              We Build Smart AI-Powered Gym Websites with Lead Capture, WhatsApp Automation & Membership Systems.
              Contact BrainyWorks to get your own professional fitness website.
            </p>
          </div>
          <p className="text-muted-foreground text-xs">© 2025 Titan Fitness Club (Demo). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
