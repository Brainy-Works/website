import { Upload, ChevronDown, Send } from "lucide-react";

const CustomFurniture = () => {
  return (
    <section id="custom" className="section-padding wood-gradient">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-body font-semibold tracking-widest uppercase mb-3 text-gold-light">Bespoke Service</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-primary-foreground">
              Design Your <span className="gold-text">Own Furniture</span>
            </h2>
            <p className="text-base md:text-lg font-body mb-6 text-cream-dark leading-relaxed">
              We help you visualize furniture in your space. Upload a photo of your room, tell us what you need, and our expert designers will craft a custom solution just for you.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1.5 rounded-full text-xs font-body font-medium bg-wood-light text-cream">Free Design Consultation</span>
              <span className="px-3 py-1.5 rounded-full text-xs font-body font-medium bg-wood-light text-cream">3D Visualization</span>
              <span className="px-3 py-1.5 rounded-full text-xs font-body font-medium bg-wood-light text-cream">30-Day Delivery</span>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
            <h3 className="font-display font-semibold text-xl text-card-foreground mb-6">Get Your Custom Quote</h3>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-body font-medium text-foreground mb-1.5 block">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label className="text-sm font-body font-medium text-foreground mb-1.5 block">Furniture Type</label>
                <div className="relative">
                  <select className="w-full appearance-none px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-ring pr-10">
                    <option>Select furniture type</option>
                    <option>Sofa Set</option>
                    <option>Bed</option>
                    <option>Dining Table</option>
                    <option>Wardrobe</option>
                    <option>Office Furniture</option>
                    <option>Other</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="text-sm font-body font-medium text-foreground mb-1.5 block">Upload Room Photo</label>
                <div className="border-2 border-dashed border-border rounded-md p-6 text-center cursor-pointer hover:border-accent transition-colors">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground font-body">Click to upload or drag & drop</p>
                  <p className="text-xs text-muted-foreground font-body mt-1">PNG, JPG up to 5MB</p>
                </div>
              </div>

              <button className="btn-gold w-full !py-3 text-sm">
                <Send className="w-4 h-4" />
                Submit for Custom Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomFurniture;
