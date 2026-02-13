import { Trophy, User } from "lucide-react";

const toppers = [
  { name: "Aarav Sharma", rank: "AIR 156 – JEE Advanced", note: "Bright Future Academy shaped my analytical thinking. Forever grateful!" },
  { name: "Priya Patel", rank: "NEET – 680/720", note: "The structured approach and regular tests helped me achieve my dream score." },
  { name: "Rohit Verma", rank: "CBSE Topper – 98.6%", note: "Faculty support and doubt sessions were the game changer for me." },
  { name: "Sneha Gupta", rank: "SBI PO – Selected", note: "From zero banking knowledge to SBI PO in 8 months. Amazing coaching!" },
];

const ResultsSection = () => (
  <section id="results" className="section-padding bg-background">
    <div className="container mx-auto">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
        Our <span className="text-accent">Achievers</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
        Celebrating the success of our students across exams and boards.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {toppers.map((t) => (
          <div key={t.name} className="rounded-xl border border-border bg-card p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
              <User className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="font-display text-base font-bold text-foreground mb-1">{t.name}</h3>
            <div className="flex items-center justify-center gap-1 mb-3">
              <Trophy className="h-4 w-4 text-accent" />
              <span className="text-xs font-semibold text-accent">{t.rank}</span>
            </div>
            <p className="text-muted-foreground text-xs italic">"{t.note}"</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ResultsSection;
