import { Calendar } from "lucide-react";

const FloatingBookButton = () => {
  return (
    <a
      href="#appointment"
      className="fixed bottom-6 right-6 z-50 lg:hidden bg-primary text-primary-foreground px-5 py-3 rounded-full shadow-lg hover:opacity-90 transition-opacity flex items-center gap-2 font-medium text-sm"
    >
      <Calendar className="h-5 w-5" />
      Book Appointment
    </a>
  );
};

export default FloatingBookButton;
