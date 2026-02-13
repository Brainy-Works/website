import { BookOpen, Clock } from "lucide-react";

const courses = [
  { title: "Class 8–10 Foundation", desc: "Strong base in Mathematics, Science & English for board success.", duration: "1–3 Years" },
  { title: "Class 11–12 Science", desc: "In-depth Physics, Chemistry, Maths & Biology coaching with lab practice.", duration: "2 Years" },
  { title: "JEE Preparation", desc: "Comprehensive JEE Main & Advanced preparation with mock tests & mentoring.", duration: "1–2 Years" },
  { title: "NEET Preparation", desc: "Focused Biology, Physics & Chemistry coaching for medical entrance exams.", duration: "1–2 Years" },
  { title: "Banking / SSC Exams", desc: "Complete preparation for Banking, SSC CGL, CHSL & other government exams.", duration: "6–12 Months" },
  { title: "Spoken English", desc: "Personality development & spoken English for students and professionals.", duration: "3–6 Months" },
];

const CoursesSection = () => (
  <section id="courses" className="section-padding bg-background">
    <div className="container mx-auto">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
        Courses <span className="text-primary">Offered</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
        Explore our comprehensive range of academic and competitive exam programs.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((c) => (
          <div
            key={c.title}
            className="rounded-xl border border-border bg-card p-6 flex flex-col hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="h-5 w-5 text-accent" />
              <h3 className="font-display text-lg font-bold text-foreground">{c.title}</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4 flex-1">{c.desc}</p>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3.5 w-3.5" /> {c.duration}
              </span>
              <a
                href="#admission"
                className="rounded-md bg-primary text-primary-foreground px-4 py-2 text-xs font-semibold hover:opacity-90 transition-opacity"
              >
                Apply Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoursesSection;
