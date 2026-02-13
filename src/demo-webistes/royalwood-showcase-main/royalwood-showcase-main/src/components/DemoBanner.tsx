import { Zap } from "lucide-react";

const DemoBanner = () => {
  return (
    <div className="sticky top-0 z-50 w-full py-2.5 px-4 text-center gold-gradient">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
        <p className="text-sm font-body font-semibold text-demo-banner-foreground flex items-center gap-1.5">
          <Zap className="w-4 h-4" />
          Demo Website Created by BrainyWorks – We Build Smart Furniture Websites
        </p>
        <a
          href="/contact"
          target="_top"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-1.5 rounded-md text-xs font-bold font-body bg-espresso text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Get This Website For My Store
        </a>
      </div>
    </div>
  );
};

export default DemoBanner;
