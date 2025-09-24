import { Expand, Users, Handshake } from 'lucide-react';

const Mission = () => {
  const pillars = [
    {
      icon: Expand,
      title: 'Expand Access',
      description: "We're committed to making our delicious, nutritious breakfast
              options available to more families across the country, ensuring
              everyone can enjoy a great start to their day.",
    },
    {
      icon: Users,
      title: 'Support Working Families',
      description: "We understand the challenges of balancing work and family. Our
              products are designed to simplify meal prep, giving you more
              quality time with your loved ones.",
    },
    {
      icon: Handshake,
      title: 'Enable Partners',
      description: 'We collaborate with local businesses and suppliers, fostering
              strong partnerships that contribute to the growth and success of
              our communities.',
    },
  ];

  return (
    <section id="mission" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Quality Breakfast, At Scale.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div 
                key={pillar.title} 
                className="text-center space-y-4 p-8 rounded-xl hover:bg-background/50 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  {pillar.title}
                </h3>
                
                <p className="text-muted-foreground font-body">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Mission;
