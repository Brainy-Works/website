import { Zap } from "lucide-react";

const DemoBanner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary py-2 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-primary-foreground text-xs sm:text-sm font-medium text-center sm:text-left flex items-center gap-1">
          <Zap className="w-4 h-4 fill-current" />
          Demo Website Created by BrainyWorks – We Build Smart Gym Websites with Lead Automation
        </p>
        <a
          href="/contact"
          target="_top"
          rel="noopener noreferrer"
          className="bg-accent text-accent-foreground text-xs font-bold px-4 py-1.5 rounded-sm uppercase tracking-wider hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          Get This Website For My Gym
        </a>
      </div>
    </div>
  );
};

export default DemoBanner;
