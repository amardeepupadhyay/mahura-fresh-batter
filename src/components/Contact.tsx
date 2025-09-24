import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and phone number.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Request Submitted!",
        description: "We'll get back to you within 24 hours.",
      });
      
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mavuraagrofoods@gmail.com ',
      href: 'mailto:mavuraagrofoods@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-9884765787',
      href: 'tel:+919884765787',
    },
    {
      icon: MapPin,
      label: 'Head Office',
      value: '1/1, 3rd STREET, MAIN ROAD, KAMARAJ NAGAR, AVADI, CHENNAI -600071',
      href: null,
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Mon–Sat, 9 AM–6 PM',
      href: null,
    },
  ];

  const faqs = [
    {
      question: 'What is your minimum order quantity (MOQ)?',
      answer: 'We support small pilots and scale with you. For retail, no MOQ applies. For B2B partnerships, we discuss requirements based on your specific needs.',
    },
    {
      question: 'How many delivery days per week?',
      answer: 'Typically 6 days/week with scheduled delivery slots. We work around your operational schedule to ensure fresh batter arrives when you need it.',
    },
    {
      question: 'What is the shelf life of your batter?',
      answer: '3–4 days when refrigerated properly. Keep sealed and maintained at recommended temperature for best results.',
    },
    {
      question: 'How should we store the batter?',
      answer: 'The batter must be kept refrigerated at all times (below 4°C / 40°F) to maintain freshness.',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Ready to partner with us? Contact our sales team for quotes, samples, and distribution opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid gap-6">
              {contactInfo.map((info) => {
                const IconComponent = info.icon;
                const content = (
                  <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-background/50 transition-colors">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-body font-medium text-foreground">{info.label}</p>
                      <p className="text-muted-foreground font-body">{info.value}</p>
                    </div>
                  </div>
                );

                return info.href ? (
                  <a key={info.label} href={info.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={info.label}>
                    {content}
                  </div>
                );
              })}
            </div>

            {/* FAQ Section */}
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="font-body font-medium text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="font-body text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[var(--form-gradient)] rounded-2xl" />
            <div className="absolute top-4 right-4 w-20 h-20 bg-primary/5 rounded-full blur-xl" />
            <div className="absolute bottom-6 left-6 w-16 h-16 bg-secondary/5 rounded-full blur-lg" />
            
            <Card className="relative border-2 border-primary/10 shadow-[var(--soft-shadow)] backdrop-blur-sm">
              <CardHeader className="text-center pb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/80 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="font-heading text-2xl text-foreground">
                  Request a Call Back
                </CardTitle>
                <p className="text-muted-foreground font-body">
                  Get a personalized quote within 24 hours
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-body font-medium text-foreground">
                        Your Name *
                      </label>
                      <Input
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="font-body h-12 border-2 border-border focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all duration-200"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-body font-medium text-foreground">
                        Company
                      </label>
                      <Input
                        name="company"
                        placeholder="Your business name (optional)"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="font-body h-12 border-2 border-border focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all duration-200"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-body font-medium text-foreground">
                        Phone Number *
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="font-body h-12 border-2 border-border focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all duration-200"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-body font-medium text-foreground">
                        Email Address
                      </label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="your.email@company.com (optional)"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="font-body h-12 border-2 border-border focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all duration-200"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-body font-medium text-foreground">
                        Requirements
                      </label>
                      <Textarea
                        name="message"
                        placeholder="Tell us about your quantity needs, delivery preferences, or any specific requirements..."
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="font-body resize-none border-2 border-border focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="xl" 
                      className="w-full font-heading font-bold shadow-[var(--soft-shadow)] hover:shadow-xl"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Submitting...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Phone className="w-5 h-5" />
                          Request a Call Back
                        </div>
                      )}
                    </Button>
                  </div>
                  
                  <div className="text-center pt-2">
                    <p className="text-xs text-muted-foreground font-body">
                      🔒 By submitting this form, you agree to our privacy policy.<br />
                      We'll only use your information to respond to your inquiry.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
