import { ArrowRight } from "lucide-react";

const FloatingEnroll = () => (
  <div className="floating-enroll">
    <a
      href="#inquiry"
      className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg animate-pulse-glow"
    >
      Enroll Now <ArrowRight className="w-4 h-4" />
    </a>
  </div>
);

export default FloatingEnroll;
