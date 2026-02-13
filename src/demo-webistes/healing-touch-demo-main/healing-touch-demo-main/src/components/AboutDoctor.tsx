import { Award, Clock, Heart, Stethoscope } from "lucide-react";
import doctorPhoto from "@/assets/doctor-photo.jpg";

const highlights = [
  { icon: Award, label: "MBBS, MD – General Medicine" },
  { icon: Clock, label: "12+ Years of Experience" },
  { icon: Stethoscope, label: "Family & Preventive Care" },
  { icon: Heart, label: "Personalized Patient Care" },
];

const AboutDoctor = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-clinic-blue-light">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img
              src={doctorPhoto}
              alt="Dr. Rahul Mehta"
              className="w-64 h-80 md:w-80 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">About the Doctor</p>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Dr. Rahul Mehta <span className="text-muted-foreground text-lg font-sans font-normal">(Demo)</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With over 12 years of dedicated practice in family medicine, Dr. Rahul Mehta provides comprehensive healthcare services for patients of all ages. His approach combines modern medical practices with a compassionate, patient-first philosophy ensuring every visitor receives personalized attention and the best possible care.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 bg-background rounded-md p-3 shadow-sm">
                  <Icon className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;
