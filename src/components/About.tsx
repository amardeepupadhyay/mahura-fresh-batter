const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Photos */}
          <div className="space-y-6">
            <div className="relative">
              {/* Founder Photo Placeholder */}
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-20 h-20 bg-primary/30 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-2xl font-heading font-bold text-primary">F</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-body">Founder Photo</p>
                </div>
              </div>
            </div>
            
            {/* Timeline */}
            <div className="space-y-3">
              <h4 className="text-lg font-heading font-semibold text-foreground">Our Journey</h4>
              <div className="space-y-2 text-sm font-body text-muted-foreground">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Founded 2025</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span>First 100 B2B clients</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>City-wide distribution</span>
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
                  Mahura began with a family recipe and a simple promise: better breakfasts, less effort.
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