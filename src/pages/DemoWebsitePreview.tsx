import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { getDemoIframeSrc, getDemoWebsite } from "@/lib/demoWebsites";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import NotFound from "./NotFound";

export default function DemoWebsitePreview() {
  const { slug } = useParams();
  const demo = getDemoWebsite(slug);

  if (!demo) return <NotFound />;

  const iframeSrc = getDemoIframeSrc(demo.slug);
  const openUrl = `/demo-websites/${demo.slug}/index.html`;

  return (
    <Layout>
      <section className="pt-28 lg:pt-32 pb-6 bg-background border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-sm text-muted-foreground">{demo.category}</div>
              <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
                {demo.title}
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <Button asChild variant="outline">
                <Link to="/demo-websites">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Link>
              </Button>
              <Button asChild>
                <a href={openUrl} target="_blank" rel="noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="container mx-auto px-0 lg:px-8">
          <div className="w-full">
            <iframe
              key={demo.slug}
              src={iframeSrc}
              title={`${demo.title} demo preview`}
              className="w-full h-[80vh] border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
