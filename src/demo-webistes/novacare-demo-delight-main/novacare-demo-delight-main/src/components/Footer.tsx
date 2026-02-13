import { Zap, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background/80">
    <div className="container mx-auto px-4 py-14">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-lg">N</span>
            </div>
            <div>
              <span className="font-heading font-bold text-lg text-background leading-none">NovaCare</span>
              <span className="block text-[10px] text-background/50 tracking-widest uppercase">Advanced Clinic</span>
            </div>
          </div>
          <p className="text-sm text-background/60 leading-relaxed">Premium multi-speciality healthcare delivering advanced care with a personalized touch.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold text-background mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["Home", "Specialities", "Doctors", "Appointment", "Contact"].map(l => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Specialities */}
        <div>
          <h4 className="font-heading font-semibold text-background mb-4">Specialities</h4>
          <ul className="space-y-2 text-sm">
            {["Dermatology", "Dental Care", "Psychology", "Aesthetic Care"].map(s => (
              <li key={s}><a href="#specialities" className="hover:text-primary transition-colors">{s}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold text-background mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>+91 90394 30279</li>
            <li>developer@brainyworks.in</li>
            <li>6, Ajmer Rd, Nirman Nagar, Brijlalpura, Jaipur, Rajasthan 302019</li>
          </ul>
          <div className="flex gap-3 mt-4">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a key={i} href="#contact" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Demo branding */}
      <div className="border-t border-background/10 pt-8 text-center">
        <div className="flex items-center justify-center gap-1.5 text-accent font-semibold mb-3">
          <Zap className="w-4 h-4" /> This Website is a Demo Created by BrainyWorks
        </div>
        <p className="text-sm text-background/50 max-w-2xl mx-auto leading-relaxed">
          We Build Smart AI-Enabled Clinic Websites with Appointment Automation, WhatsApp Integration & Patient Management Systems.
          <br />Contact BrainyWorks to get your own premium clinic website.
        </p>
        <p className="text-xs text-background/30 mt-6">© {new Date().getFullYear()} NovaCare Advanced Clinic (Demo Brand). All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
