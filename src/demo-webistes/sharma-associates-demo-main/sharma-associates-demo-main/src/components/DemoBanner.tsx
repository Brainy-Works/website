import { Zap } from "lucide-react";

const DemoBanner = () => {
  return (
    <div className="demo-banner-bg sticky top-0 z-50 py-2.5 px-4 text-primary-foreground">
      <div className="container-max flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
        <p className="flex items-center gap-1.5 text-center sm:text-left">
          <Zap size={14} className="text-gold shrink-0" />
          <span>Demo Website Created by <strong>BrainyWorks</strong> – We Build Smart CA Firm Websites with Lead Automation</span>
        </p>
        <a
          href="/contact"
          target="_top"
          rel="noopener noreferrer"
          className="shrink-0 rounded bg-gold px-4 py-1.5 text-xs font-semibold text-accent-foreground transition-colors hover:bg-gold-light"
        >
          Get This Website For My Firm
        </a>
      </div>
    </div>
  );
};

export default DemoBanner;
