import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-heading font-bold">MAVURA</h3>
            <p className="text-primary-foreground/80 font-body text-sm leading-relaxed">
              Premium fresh batter for authentic South Indian cuisine. Hygienic preparation, 
              consistent quality, and cold-chain dispatch.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold">Quick Links</h3>
            <div className="space-y-2 text-sm font-body">
              <button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Products
              </button>
              <button 
                onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Process
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold">Contact</h3>
            <div className="space-y-3 text-sm font-body">
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Mail className="w-4 h-4" />
                <span>mavuraagrofoods@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Phone className="w-4 h-4" />
                <span>+91 988 476 5787</span>
              </div>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Your Location<br />1/1, 3rd Street, Main Road, Kamaraj Nagar, Avadi, Chennai-600071</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/80 text-sm font-body">
            © {currentYear} Mavura Agro Foods Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
