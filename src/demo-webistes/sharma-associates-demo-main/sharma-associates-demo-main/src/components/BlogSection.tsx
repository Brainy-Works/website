import { ArrowRight, Calendar } from "lucide-react";

const articles = [
  { title: "Latest GST Updates for FY 2025-26", date: "Feb 10, 2026", excerpt: "Stay updated with the latest changes in GST rules, rates and compliance requirements that impact your business." },
  { title: "Top Income Tax Saving Tips", date: "Jan 25, 2026", excerpt: "Maximize your tax savings with these expert-recommended strategies under Section 80C, 80D, HRA and more." },
  { title: "Startup Compliance Checklist", date: "Jan 15, 2026", excerpt: "A comprehensive checklist of all legal and regulatory compliances every startup must follow from day one." },
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding section-alt-bg">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-2">Knowledge Centre</p>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Insights &amp; Updates
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <article key={a.title} className="group rounded-lg border border-border bg-card overflow-hidden transition-shadow hover:shadow-md">
              <div className="h-2 bg-primary" />
              <div className="p-6">
                <div className="mb-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar size={12} /> {a.date}
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-gold">
                  Read More <ArrowRight size={14} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
