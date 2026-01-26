import { Link } from "react-router-dom";
import { Mail, MapPin, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/LOGO.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center overflow-hidden">
                <img src={logo} alt="BrainyWorks" className="w-full h-full object-contain" />
              </div>
              <span className="font-display font-semibold text-xl">
                BrainyWorks
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Your reliable partner for AI solutions, software development, and top-tier freelance talent.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Services", "Case Studies", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {["AI & Automation", "Software Development", "Freelance Talent", "Consulting"].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <Mail size={16} />
                <a href="mailto:hello@brainyworks.in" className="hover:text-accent transition-colors">
                  hello@brainyworks.in
                </a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <MapPin size={16} />
                <span>India • Global Reach</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} BrainyWorks. Crafted with care.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <Link to="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
