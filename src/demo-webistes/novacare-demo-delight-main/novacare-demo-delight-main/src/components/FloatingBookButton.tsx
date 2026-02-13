import { CalendarCheck } from "lucide-react";

const FloatingBookButton = () => (
  <a
    href="#appointment"
    className="fixed bottom-6 right-6 z-50 md:hidden flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-xl animate-float"
  >
    <CalendarCheck className="w-5 h-5" /> Book Now
  </a>
);

export default FloatingBookButton;
