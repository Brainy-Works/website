import { getDemoIframeSrc, getDemoWebsite } from "@/lib/demoWebsites";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

export default function DemoWebsiteStandalone() {
  const { slug } = useParams();
  const demo = getDemoWebsite(slug);

  if (!demo) return <NotFound />;

  return (
    <div className="min-h-screen bg-background">
      <iframe
        key={demo.slug}
        src={getDemoIframeSrc(demo.slug)}
        title={`${demo.title} demo`}
        className="w-full h-screen border-0"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      />
    </div>
  );
}
