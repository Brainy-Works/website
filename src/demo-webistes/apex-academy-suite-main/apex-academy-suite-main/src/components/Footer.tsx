import { GraduationCap, Zap } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container-max section-padding !py-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="w-7 h-7 text-secondary" />
            <span className="font-heading font-bold text-lg">Apex Scholars</span>
          </div>
          <p className="text-sm text-background/60">Where Top Ranks Begin. Premier coaching for JEE, NEET, CUET & Foundation courses.</p>
        </div>

        <div>
          <h4 className="font-heading font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-background/60">
            {[
              { label: "Home", href: "#home" },
              { label: "About Us", href: "#courses" },
              { label: "Results", href: "#results" },
              { label: "Gallery", href: "#gallery" },
              { label: "Contact", href: "#contact" },
            ].map((l) => (
              <li key={l.label}><a href={l.href} className="hover:text-secondary transition-colors">{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold mb-4">Courses</h4>
          <ul className="space-y-2 text-sm text-background/60">
            {["JEE Main & Advanced", "NEET", "CUET", "Foundation (9–10)", "Boards (11–12)", "Crash Courses"].map((l) => (
              <li key={l}><a href="#courses" className="hover:text-secondary transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li>+91 90394 30279</li>
            <li>developer@brainyworks.in</li>
            <li>6, Ajmer Rd, Nirman Nagar, Brijlalpura, Jaipur, Rajasthan 302019</li>
          </ul>
          <div className="flex gap-3 mt-4">
            {["FB", "IG", "YT", "TW"].map((s) => (
              <span key={s} className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center text-xs font-bold hover:bg-secondary hover:text-secondary-foreground transition-colors cursor-pointer">{s}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 pt-8">
        <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-5 text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Zap className="w-5 h-5 text-secondary" />
            <span className="font-heading font-bold text-secondary">This Website is a Demo Created by BrainyWorks</span>
          </div>
          <p className="text-sm text-background/60 max-w-2xl mx-auto">
            We Build Smart Coaching Institute Websites with Admission Automation, Lead Tracking & Student Management Systems.
            Contact BrainyWorks to get your own professional institute website.
          </p>
        </div>
        <p className="text-center text-xs text-background/40">© 2025 Apex Scholars Institute (Demo). All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
