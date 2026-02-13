import { ExternalLink } from "lucide-react";

const TopBanner = () => {
  return (
    <div className="bg-dark-surface py-2.5 px-4 text-center text-sm font-body z-50 relative">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
        <span className="text-dark-surface-foreground">
          ⚡ Demo Website Created by <span className="text-gradient-gold font-semibold">BrainyWorks</span> – We Build Smart Restaurant Websites
        </span>
        <a
          href="/contact"
          target="_top"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
        >
          Get This Website For My Restaurant <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};

export default TopBanner;
