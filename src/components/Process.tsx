import { Droplets, Shield, Clock, Truck, CheckCircle } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: CheckCircle,
      title: 'Sourcing',
      description: 'Only vetted, food-grade vendors & safe raw rice/urad.',
    },
    {
      icon: Droplets,
      title: 'RO-Filtered Water',
      description: 'All stages use RO-treated water.',
    },
    {
      icon: Shield,
      title: 'Hygienic Prep',
      description: 'Contact-safe surfaces & gloved handling.',
    },
    {
      icon: Clock,
      title: 'Controlled Fermentation',
      description: 'Taste-first profiles, batch consistency.',
    },
    {
      icon: Truck,
      title: 'Cold-Chain Dispatch',
      description: 'Quality holds until your kitchen.',
    },
  ];

  return (
    <section id="process" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Our Production Process
          </h2>
          <p className="text-xl font-heading font-medium text-muted-foreground mb-2">
            Clean, Safe, Consistent.
          </p>
          <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
            From vetted raw materials to RO-filtered water at every step, we keep it simple: 
            hygienic prep, controlled fermentation, and cold-chain dispatch. Your taste never has to compromise.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-32 left-0 right-0 h-0.5 bg-border" />
            
            <div className="grid grid-cols-5 gap-8">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={step.title} className="relative text-center">
                    {/* Timeline Dot */}
                    <div className="absolute top-32 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-[var(--soft-shadow)] z-10">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    
                    {/* Content - Positioned above the timeline */}
                    <div className="space-y-3 pb-20">
                      <h3 className="text-lg font-heading font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-body max-w-xs mx-auto">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Stack */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.title} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-[var(--soft-shadow)]">
                  <IconComponent className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-heading font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-body">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compliance Note */}
        <div className="mt-16 text-center">
          <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed">
            FSSAI compliance and internal QC checks at every stage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
