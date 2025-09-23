import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
      description: 'Soft, fluffy idlis every time.',
      image: idliBatter,
      highlights: ['Stone-ground feel', 'Consistent ferment', 'No added preservatives'],
      sizes: ['500g', '1kg', '5kg (B2B)'],
    },
    {
      name: 'Dosa Batter',
      description: 'Crisp, golden dosas with balanced tang.',
      image: dosaBatter,
      highlights: ['Spreads evenly', 'Reliable texture', 'Kitchen-friendly pack sizes'],
      sizes: ['500g', '1kg', '5kg (B2B)'],
    },
    {
      name: 'Uthappam Batter',
      description: 'Thick base that loves toppings.',
      image: uthappamBatter,
      highlights: ['Holds structure', 'Flavor-forward', 'Time-saving'],
      sizes: ['500g', '1kg', '5kg (B2B)'],
    },
  ];

  return (
    <section id="products" className="py-20 bg-muted/30">
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
          {products.map((product) => (
            <Card key={product.name} className="overflow-hidden hover:shadow-[var(--soft-shadow)] transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.name} - ${product.description}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-heading font-semibold text-foreground">
                  {product.name}
                </CardTitle>
                <p className="text-muted-foreground font-body">
                  {product.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Highlights */}
                <div className="space-y-2">
                  {product.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center text-sm font-body text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {highlight}
                    </div>
                  ))}
                </div>

                {/* Sizes */}
                <div className="space-y-2">
                  <p className="text-sm font-body font-medium text-foreground">Available Sizes:</p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <Badge key={size} variant="outline" className="text-xs">
                        {size}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-4"
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