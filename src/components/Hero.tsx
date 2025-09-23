import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import heroProducts from '@/assets/hero-products.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                Fresh Idli & Dosa Batter,{' '}
                <span className="text-primary">Done Right.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed">
                RO-water processed, hygienic production, and consistent taste—made for homes and pro kitchens.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => scrollToSection('products')}
                className="font-heading font-semibold"
              >
                See Products
              </Button>
              <Button 
                variant="cta" 
                size="xl"
                onClick={() => scrollToSection('contact')}
                className="font-heading font-semibold"
              >
                Contact Sales
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-4 py-2 font-body">
                RO Water
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 font-body">
                FSSAI Compliant
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 font-body">
                Cold Chain Friendly
              </Badge>
            </div>
          </div>

          {/* Right Content - Product Images */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroProducts}
                alt="Mahura idli and dosa batter products with traditional clay pots and modern packaging"
                className="w-full h-auto rounded-2xl shadow-[var(--soft-shadow)]"
                loading="eager"
              />
            </div>
            
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-xl" />
              <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-br from-secondary/15 to-primary/15 rounded-full blur-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;