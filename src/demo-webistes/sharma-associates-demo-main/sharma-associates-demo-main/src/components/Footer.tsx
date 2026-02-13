import { Zap, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-max section-padding pb-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-bold">
              Sharma <span className="text-gold">&</span> Associates
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
              Trusted Chartered Accountants delivering excellence in tax, audit and business advisory services since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {["Home", "About", "Services", "Testimonials", "Blog", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="transition-colors hover:text-gold">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {["Income Tax Filing", "GST Returns", "Company Registration", "Audit & Assurance", "Business Advisory"].map((s) => (
                <li key={s}>
                  <a href="#services" className="transition-colors hover:text-gold">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>6, Ajmer Rd, Nirman Nagar, Brijlalpura, Jaipur, Rajasthan 302019</li>
              <li>+91 90394 30279</li>
              <li>developer@brainyworks.in</li>
            </ul>
            <div className="mt-4 flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#contact" className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground/70 transition-colors hover:bg-gold hover:text-accent-foreground">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-primary-foreground/15 pt-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="flex items-center gap-1.5 text-sm text-gold">
              <Zap size={14} />
              This Website is a Demo Created by BrainyWorks.
            </p>
            <p className="max-w-lg text-xs text-primary-foreground/60 leading-relaxed">
              We Build Professional CA Firm Websites with Lead Capture Automation &amp; Appointment Systems. Contact BrainyWorks to get your own corporate website.
            </p>
            <p className="text-xs text-primary-foreground/40">
              © {new Date().getFullYear()} Sharma &amp; Associates (Demo). All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
