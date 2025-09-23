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
      value: 'sales@mahura.com',
      href: 'mailto:sales@mahura.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-XXXXXXXXXX',
      href: 'tel:+91XXXXXXXXXX',
    },
    {
      icon: MapPin,
      label: 'Service Area',
      value: 'City/Region',
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
      answer: 'Refrigerated at 2–6°C in the original packaging. Do not freeze for best taste and texture results. Always keep sealed when not in use.',
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
          <Card>
            <CardHeader>
              <CardTitle className="font-heading">
                Request a Call Back
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="font-body"
                    />
                  </div>
                  
                  <div>
                    <Input
                      name="company"
                      placeholder="Company (Optional)"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="font-body"
                    />
                  </div>
                  
                  <div>
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="font-body"
                    />
                  </div>
                  
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email (Optional)"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="font-body"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="font-body resize-none"
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full font-heading font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Request a Call Back'}
                </Button>
                
                <p className="text-xs text-muted-foreground font-body text-center">
                  By submitting this form, you agree to our privacy policy. 
                  We'll only use your information to respond to your inquiry.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;