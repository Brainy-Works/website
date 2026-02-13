import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { demoWebsitesByCategory, getDemoIframeSrc } from "@/lib/demoWebsites";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function DemoWebsites() {
  const categories = Object.keys(demoWebsitesByCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-50" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Demo Websites
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore demo websites grouped by category. Click any demo to preview it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Sections */}
      <section className="pb-20 lg:pb-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-14">
            {categories.map((category, catIndex) => (
              <div key={category}>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.05 }}
                  className="mb-6"
                >
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
                    {category}
                  </h2>
                  <div className="mt-2 h-px bg-border" />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {demoWebsitesByCategory[category].map((demo, index) => (
                    <motion.div
                      key={demo.slug}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Card className="h-full overflow-hidden border-border/40 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
                        <div className="px-6 pt-6">
                          <div className="rounded-xl overflow-hidden border border-border/40 bg-secondary/30">
                            <AspectRatio ratio={16 / 9}>
                              <iframe
                                src={getDemoIframeSrc(demo.slug)}
                                title={`${demo.title} mini preview`}
                                className="h-full w-full border-0 pointer-events-none"
                                loading="lazy"
                                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                              />
                            </AspectRatio>
                          </div>
                        </div>

                        <CardHeader className="pb-3">
                          <CardTitle className="font-display">{demo.title}</CardTitle>
                          <CardDescription className="text-sm">{demo.description}</CardDescription>
                        </CardHeader>

                        <CardContent className="pt-0 flex items-center gap-3">
                          <Button asChild variant="default" size="sm">
                            <Link to={`/demo-websites/${demo.slug}`}>Preview</Link>
                          </Button>
                          <Button asChild variant="outline" size="sm">
                            <Link to="/contact">Get a similar site</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
