import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Wheat, Clock, Shield, CircleDot, CheckCircle, Package, Building, Star, Timer } from 'lucide-react';
import idliBatter from '@/assets/idli-batter.jpg';
import dosaBatter from '@/assets/dosa-batter.jpg';
import uthappamBatter from '@/assets/uthappam-batter.jpg';

const Products = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const products = [
    {
      name: 'Idli Batter',
      description: 'Our Idli Batter is crafted using a traditional recipe, ensuring a light and fluffy texture. Perfect for making soft, spongy idlis that melt in your mouth.',
      image: idliBatter,
      highlights: [
        { text: 'Stone-ground feel', icon: Wheat },
        { text: 'Consistent ferment', icon: Clock },
        { text: 'No added preservatives', icon: Shield }
      ],
      sizes: ['500g', '1kg', '5kg (B2B)'],
    },
    {
      name: 'Dosa Batter',
      description: 'Our Dosa Batter is expertly blended to achieve the ideal consistency for crispy, golden-brown dosas. Enjoy the authentic taste of South Indian cuisine at home.',
      image: dosaBatter,
      highlights: [
        { text: 'Spreads evenly', icon: CircleDot },
        { text: 'Reliable texture', icon: CheckCircle },
        { text: 'Kitchen-friendly pack sizes', icon: Package }
      ],
      sizes: ['500g', '1kg', '5kg (B2B)'],
    },
    {
      name: 'Uthappam Batter',
      description: 'Our Uthappam Batter is specially formulated to create thick, soft, and flavorful uthappams. Ideal for a hearty and satisfying meal.',
      image: uthappamBatter,
      highlights: [
        { text: 'Holds structure', icon: Building },
        { text: 'Flavor-forward', icon: Star },
        { text: 'Time-saving', icon: Timer }
      ],
      sizes: ['500g', '1kg', '5kg (B2B)'],
    },
  ];

  return (
    <section id="products" className="py-12 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Our Products
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Premium batter varieties crafted for consistent quality and authentic taste.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.name} 
              className="group overflow-hidden hover:shadow-[var(--soft-shadow)] transition-all duration-500 hover:-translate-y-2 animate-fade-in border-2 border-transparent hover:border-primary/10 flex flex-col h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={product.image}
                  alt={`${product.name} - ${product.description}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {product.name}
                </CardTitle>
                <p className="text-muted-foreground font-body">
                  {product.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6 flex-1 flex flex-col">
                <div className="flex-1 space-y-6">
                  {/* Highlights */}
                  <div className="space-y-3">
                    {product.highlights.map((highlight, idx) => {
                      const IconComponent = highlight.icon;
                      return (
                        <div 
                          key={highlight.text} 
                          className="flex items-center gap-3 text-sm font-body text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                          style={{ animationDelay: `${(index * 0.1) + (idx * 0.05)}s` }}
                        >
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                            <IconComponent className="w-4 h-4 text-primary" />
                          </div>
                          <span className="flex-1">{highlight.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Sizes */}
                  <div className="space-y-3">
                    <p className="text-sm font-body font-medium text-foreground">Available Sizes:</p>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size) => (
                        <Badge key={size} variant="outline" className="text-xs hover:bg-primary/5 transition-colors">
                          {size}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-4 group-hover:border-primary/50 group-hover:text-primary transition-all duration-300"
                  onClick={() => scrollToSection('contact')}
                >
                  Request Rate Card
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
