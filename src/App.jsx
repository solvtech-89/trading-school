import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Statistics from './components/Statistics';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import PremiumModal from './components/PremiumModal';

function App() {
  const [isPremiumModalOpen, setIsPremiumModalOpen] = useState(false);

  // Scroll animation observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar onPremiumClick={() => setIsPremiumModalOpen(true)} />
      <Hero />
      <About />
      <Features onPremiumClick={() => setIsPremiumModalOpen(true)} />
      <Statistics />
      <Testimonials />
      <Pricing />
      <Footer />
      <PremiumModal 
        isOpen={isPremiumModalOpen} 
        onClose={() => setIsPremiumModalOpen(false)} 
      />
    </div>
  );
}

export default App;
