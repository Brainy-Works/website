import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const DemoBanner = () => (
  <div className="sticky top-0 z-50 bg-charcoal text-primary-foreground py-2 px-4">
    <div className="container mx-auto flex items-center justify-between flex-wrap gap-2">
      <p className="text-sm flex items-center gap-1.5">
        <Zap className="h-4 w-4 text-gold" />
        <span>Demo Website Created by <strong>BrainyWorks</strong> – We Build Premium Interior Studio Websites</span>
      </p>
      <Button
        asChild
        size="sm"
        className="bg-gold hover:bg-gold-light text-charcoal font-semibold text-xs"
      >
        <a href="/contact" target="_top" rel="noopener noreferrer">
          Get This Website For My Studio
        </a>
      </Button>
    </div>
  </div>
);

export default DemoBanner;
