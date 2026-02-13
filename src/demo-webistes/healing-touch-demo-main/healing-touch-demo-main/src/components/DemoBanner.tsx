import { Zap } from "lucide-react";

const DemoBanner = () => {
  return (
    <div className="bg-demo-banner text-demo-banner-foreground py-2 px-4 text-center text-sm font-medium sticky top-0 z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
        <span className="flex items-center gap-1">
          <Zap className="h-4 w-4" />
          Demo Website Created by BrainyWorks – We Build Smart Clinic Websites with Appointment Automation
        </span>
        <a
          href="/contact"
          target="_top"
          rel="noopener noreferrer"
          className="bg-foreground text-background px-4 py-1 rounded-md text-xs font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          Get This Website For My Clinic
        </a>
      </div>
    </div>
  );
};

export default DemoBanner;
