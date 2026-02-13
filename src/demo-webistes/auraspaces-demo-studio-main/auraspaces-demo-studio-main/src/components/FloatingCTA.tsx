import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCTA = () => (
  <div className="fixed bottom-4 left-4 right-4 z-50 lg:hidden">
    <Button className="w-full bg-gold hover:bg-gold-light text-charcoal font-semibold shadow-lg text-base py-6">
      <Phone className="h-5 w-5 mr-2" /> Get Free Consultation
    </Button>
  </div>
);

export default FloatingCTA;
