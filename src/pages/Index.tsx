import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Process from '@/components/Process';
import Mission from '@/components/Mission';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Navigation />
      <main className="font-body">
        <Hero />
        <Products />
        <Process />
        <Mission />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;