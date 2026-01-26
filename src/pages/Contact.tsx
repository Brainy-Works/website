import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const inquiryTypes = [
  "AI & Automation Project",
  "Software Development",
  "Need Freelance Talent",
  "Consulting & Strategy",
  "Not sure yet",
];

const budgetRanges = [
  "Under $10K",
  "$10K - $50K",
  "$50K - $100K",
  "$100K+",
  "Let's discuss",
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "",
    budget: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-24 lg:pt-32 pb-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <div className="w-20 h-20 rounded-full gradient-accent mx-auto mb-6 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-accent-foreground" />
          </div>
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">
            Thanks for reaching out!
          </h1>
          <p className="text-muted-foreground mb-8">
            We've received your message and will get back to you within 24 hours. 
            Looking forward to learning more about your project.
          </p>
          <Button onClick={() => setIsSubmitted(false)} variant="outline">
            Send another message
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-20">
      {/* Header */}
      <section className="relative pb-16">
        <div className="absolute inset-0 gradient-warm" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Let's Talk
            </h1>
            <p className="text-xl text-muted-foreground">
              No sales pressure. Just a thoughtful conversation about what you're trying to build 
              and how we might help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                Get in Touch
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href="mailto:hello@brainyworks.in" className="text-muted-foreground hover:text-accent transition-colors">
                      hello@brainyworks.in
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">India • Serving clients globally</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Response Time</p>
                    <p className="text-muted-foreground">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary/50 rounded-xl p-6">
              <h3 className="font-display font-semibold text-foreground mb-2">
                What happens next?
              </h3>
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="w-5 h-5 rounded-full gradient-hero text-primary-foreground text-xs flex items-center justify-center flex-shrink-0">1</span>
                  <span>We'll review your message and do some homework</span>
                </li>
                <li className="flex gap-2">
                  <span className="w-5 h-5 rounded-full gradient-hero text-primary-foreground text-xs flex items-center justify-center flex-shrink-0">2</span>
                  <span>Schedule a call at your convenience</span>
                </li>
                <li className="flex gap-2">
                  <span className="w-5 h-5 rounded-full gradient-hero text-primary-foreground text-xs flex items-center justify-center flex-shrink-0">3</span>
                  <span>Discuss your needs and explore solutions together</span>
                </li>
              </ol>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    className="w-full bg-secondary rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className="w-full bg-secondary rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Company (optional)
                </label>
                <input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => updateField("company", e.target.value)}
                  className="w-full bg-secondary rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Acme Inc."
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  What brings you here? *
                </label>
                <div className="flex flex-wrap gap-2">
                  {inquiryTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => updateField("inquiryType", type)}
                      className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                        formData.inquiryType === type
                          ? "gradient-hero text-primary-foreground"
                          : "bg-secondary text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Budget range (optional)
                </label>
                <div className="flex flex-wrap gap-2">
                  {budgetRanges.map((range) => (
                    <button
                      key={range}
                      type="button"
                      onClick={() => updateField("budget", range)}
                      className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                        formData.budget === range
                          ? "gradient-accent text-accent-foreground"
                          : "bg-secondary text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Tell us about your project *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  className="w-full bg-secondary rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="What are you trying to build? What problems are you facing? The more context, the better we can help."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting || !formData.inquiryType}
                className="w-full gradient-hero text-primary-foreground hover:opacity-90 disabled:opacity-50"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send className="ml-2" size={18} />
                  </>
                )}
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                We respect your privacy. No spam, ever.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
