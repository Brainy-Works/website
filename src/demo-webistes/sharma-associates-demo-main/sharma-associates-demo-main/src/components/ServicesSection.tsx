import {
  FileText,
  Receipt,
  Building2,
  ShieldCheck,
  ClipboardCheck,
  TrendingUp,
  Rocket,
  BookOpen,
} from "lucide-react";

const services = [
  { icon: FileText, title: "Income Tax Filing", desc: "Accurate and timely filing of income tax returns for individuals, HUFs and businesses with maximum deductions." },
  { icon: Receipt, title: "GST Registration & Returns", desc: "Complete GST registration, monthly/quarterly return filing and compliance management for all business types." },
  { icon: Building2, title: "Company Registration", desc: "End-to-end company incorporation services including Private Limited, LLP, OPC and partnership firms." },
  { icon: ShieldCheck, title: "ROC Compliance", desc: "Annual ROC filings, board resolutions, statutory registers maintenance and regulatory compliance." },
  { icon: ClipboardCheck, title: "Audit & Assurance", desc: "Statutory, internal and tax audits conducted with the highest standards of professionalism and accuracy." },
  { icon: TrendingUp, title: "Business Advisory", desc: "Strategic financial planning, business restructuring and growth advisory for scaling businesses." },
  { icon: Rocket, title: "Startup Consulting", desc: "From incorporation to funding guidance — specialised advisory for startups and emerging businesses." },
  { icon: BookOpen, title: "Accounting & Bookkeeping", desc: "Comprehensive bookkeeping, ledger management and financial reporting services for hassle-free operations." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding section-alt-bg">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-2">Our Services</p>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Comprehensive Financial Solutions
          </h2>
          <p className="mt-4 text-muted-foreground">
            We offer a full spectrum of Chartered Accountancy and financial advisory services tailored to your needs.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded bg-primary/10 text-primary transition-colors group-hover:bg-gold/15 group-hover:text-gold">
                <s.icon size={22} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
