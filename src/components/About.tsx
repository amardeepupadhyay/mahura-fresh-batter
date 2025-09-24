const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Founders & Timeline */}
          <div className="space-y-8">
            {/* Founders Photos */}
            <div className="space-y-6">
              <h4 className="text-lg font-heading font-semibold text-foreground">Meet Our Founders</h4>
              <div className="grid grid-cols-2 gap-4">
                {/* Founder 1 */}
                <div className="relative group">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-primary/30 rounded-full mx-auto flex items-center justify-center">
                        <span className="text-xl font-heading font-bold text-primary">A</span>
                      </div>
                      <p className="text-xs text-muted-foreground font-body">Co-Founder</p>
                    </div>
                  </div>
                </div>
                
                {/* Founder 2 */}
                <div className="relative group">
                  <div className="aspect-square bg-gradient-to-br from-secondary/20 to-primary/20 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-secondary/30 rounded-full mx-auto flex items-center justify-center">
                        <span className="text-xl font-heading font-bold text-secondary">B</span>
                      </div>
                      <p className="text-xs text-muted-foreground font-body">Co-Founder</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Beautiful Vertical Timeline */}
            <div className="space-y-4">
              <h4 className="text-lg font-heading font-semibold text-foreground">Our Journey</h4>
              <div className="relative pl-8">
                {/* Timeline line */}
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary opacity-30"></div>
                
                {/* Timeline items */}
                <div className="space-y-6">
                  <div className="relative">
                    <div className="absolute -left-[1.375rem] w-3 h-3 bg-primary rounded-full border-2 border-background shadow-sm"></div>
                    <div className="space-y-1">
                      <div className="text-sm font-heading font-semibold text-foreground">Founded 2025</div>
                      <div className="text-xs text-muted-foreground font-body">Started with a vision for better breakfast solutions</div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-[1.375rem] w-3 h-3 bg-secondary rounded-full border-2 border-background shadow-sm"></div>
                    <div className="space-y-1">
                      <div className="text-sm font-heading font-semibold text-foreground">First 100 B2B clients</div>
                      <div className="text-xs text-muted-foreground font-body">Built trust with local restaurants and retailers</div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-[1.375rem] w-3 h-3 bg-primary rounded-full border-2 border-background shadow-sm"></div>
                    <div className="space-y-1">
                      <div className="text-sm font-heading font-semibold text-foreground">City-wide distribution</div>
                      <div className="text-xs text-muted-foreground font-body">Expanding reach across the entire metropolitan area</div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-[1.375rem] w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full border-2 border-background shadow-sm animate-pulse"></div>
                    <div className="space-y-1">
                      <div className="text-sm font-heading font-semibold text-foreground">What's Next</div>
                      <div className="text-xs text-muted-foreground font-body">Regional expansion and new product lines</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Story */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Our Story
              </h2>
              
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>
                  MAVURA began with a family recipe and a simple promise: better breakfasts, less effort.
                </p>
                
                <p>
                  Our founder learned the craft alongside their father, keeping hygiene and flavor non-negotiable. 
                  What started as a small family operation has grown into a trusted name in fresh batter production.
                </p>
                
                <p>
                  Today, we bring the same standards to every batch—so your idlis and dosas taste like they should, every day. 
                  From our kitchen to yours, we're committed to maintaining the authentic taste that families have loved for generations.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="space-y-2">
                <h4 className="font-heading font-semibold text-foreground">Quality First</h4>
                <p className="text-sm text-muted-foreground font-body">
                  Never compromising on ingredients or process.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-heading font-semibold text-foreground">Family Values</h4>
                <p className="text-sm text-muted-foreground font-body">
                  Treating every customer like family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;