import { Zap } from "lucide-react";

const DemoBanner = () => (
  <div className="sticky top-0 z-50 bg-primary py-2.5 px-4">
    <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-primary-foreground text-sm">
      <span className="flex items-center gap-1.5 font-medium text-center">
        <Zap className="w-4 h-4 text-accent" />
        Demo Website Created by BrainyWorks – We Build Smart AI-Enabled Clinic Websites
      </span>
      <a
        href="/contact"
        target="_top"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
      >
        Get This Website For My Clinic
      </a>
    </div>
  </div>
);

export default DemoBanner;
