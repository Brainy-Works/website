import { Zap } from "lucide-react";

const DemoBanner = () => (
  <div className="bg-primary text-primary-foreground py-2.5 px-4 text-center text-sm font-medium sticky top-0 z-50">
    <div className="container-max flex items-center justify-center gap-2 flex-wrap">
      <Zap className="w-4 h-4 text-secondary" />
      <span>Demo Website Created by <strong>BrainyWorks</strong> – We Build Smart Coaching Websites with Admission & Lead Automation</span>
      <a
        href="/contact"
        target="_top"
        rel="noopener noreferrer"
        className="ml-2 inline-flex items-center gap-1 bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-xs font-bold hover:opacity-90 transition-opacity"
      >
        Get This Website For My Institute
      </a>
    </div>
  </div>
);

export default DemoBanner;
