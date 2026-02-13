import { Zap } from "lucide-react";

const DemoBanner = () => (
  <div className="sticky top-0 z-50 bg-accent text-accent-foreground py-2 px-4">
    <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm font-medium">
      <span className="flex items-center gap-1 text-center sm:text-left">
        <Zap className="h-4 w-4" />
        Demo Website Created by BrainyWorks – We Build Smart Coaching Websites with Admission Automation
      </span>
      <a
        href="/contact"
        target="_top"
        rel="noopener noreferrer"
        className="shrink-0 rounded-md bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
      >
        Get This Website For My Institute
      </a>
    </div>
  </div>
);

export default DemoBanner;
