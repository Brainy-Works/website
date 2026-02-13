import { GraduationCap, Zap, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy text-navy-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="h-7 w-7 text-accent" />
            <span className="font-display text-lg font-bold">Bright Future Academy</span>
          </div>
          <p className="text-sm text-navy-foreground/70">
            Shaping futures with quality education, expert faculty and proven results since 2014.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3 text-sm">Quick Links</h4>
          <ul className="space-y-2 text-sm text-navy-foreground/70">
            <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
            <li><a href="#courses" className="hover:text-accent transition-colors">Courses</a></li>
            <li><a href="#results" className="hover:text-accent transition-colors">Results</a></li>
            <li><a href="#gallery" className="hover:text-accent transition-colors">Gallery</a></li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h4 className="font-semibold mb-3 text-sm">Courses</h4>
          <ul className="space-y-2 text-sm text-navy-foreground/70">
            <li>JEE Preparation</li>
            <li>NEET Preparation</li>
            <li>Class 8–12</li>
            <li>Banking / SSC</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3 text-sm">Contact Info</h4>
          <ul className="space-y-2 text-sm text-navy-foreground/70">
            <li>+91 90394 30279</li>
            <li>developer@brainyworks.in</li>
            <li>6, Ajmer Rd, Nirman Nagar, Brijlalpura, Jaipur, Rajasthan 302019</li>
          </ul>
          <div className="flex gap-3 mt-4">
            <Facebook className="h-5 w-5 text-navy-foreground/50 hover:text-accent cursor-pointer transition-colors" />
            <Twitter className="h-5 w-5 text-navy-foreground/50 hover:text-accent cursor-pointer transition-colors" />
            <Instagram className="h-5 w-5 text-navy-foreground/50 hover:text-accent cursor-pointer transition-colors" />
            <Youtube className="h-5 w-5 text-navy-foreground/50 hover:text-accent cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      {/* BrainyWorks Demo Banner */}
      <div className="border-t border-navy-foreground/10 pt-8">
        <div className="text-center bg-navy-foreground/5 rounded-xl p-6 mb-6">
          <p className="flex items-center justify-center gap-2 text-accent font-semibold mb-2">
            <Zap className="h-4 w-4" />
            This Website is a Demo Created by BrainyWorks.
          </p>
          <p className="text-sm text-navy-foreground/70 max-w-xl mx-auto">
            We Build Smart Coaching Institute Websites with Admission Automation &amp; Lead Tracking Systems.
            <br />
            Contact BrainyWorks to get your own professional institute website.
          </p>
        </div>
        <p className="text-center text-xs text-navy-foreground/40">
          © 2025 Bright Future Academy (Demo). All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
