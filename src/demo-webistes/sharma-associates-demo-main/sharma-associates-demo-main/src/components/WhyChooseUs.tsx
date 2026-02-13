import { Award, Clock, IndianRupee, HeadphonesIcon, Lock } from "lucide-react";

const features = [
  { icon: Award, title: "Experienced Chartered Accountants", desc: "Our team comprises qualified CAs with deep expertise across diverse industries." },
  { icon: Clock, title: "Timely Compliance", desc: "Never miss a deadline — we ensure all filings and compliances are completed on time." },
  { icon: IndianRupee, title: "Transparent Pricing", desc: "No hidden fees. Clear and upfront pricing for all our services." },
  { icon: HeadphonesIcon, title: "Dedicated Client Support", desc: "A dedicated relationship manager for every client ensuring personalised service." },
  { icon: Lock, title: "Confidential & Secure", desc: "Your financial data is handled with the utmost confidentiality and security." },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding bg-card">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-2">Why Choose Us</p>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Your Trusted Financial Partners
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="flex gap-4 rounded-lg border border-border bg-background p-5">
              <div className="shrink-0 mt-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <f.icon size={20} />
                </div>
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-foreground">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
