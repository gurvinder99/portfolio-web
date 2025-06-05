import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import Cursor from './components/Cursor';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import VideoShowcase from './components/VideoShowcase';
import Contact from './components/Contact';
import Loader from './components/Loader';
import { useScrollAnimation } from './hooks/useScrollAnimation';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Initialize smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Initialize scroll animations
  useScrollAnimation();

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" />
        ) : (
          <>
            <Cursor />
            <div className="noise-overlay" />
            <Header />
            <main>
              <Hero />
              <About />
              <VideoShowcase />
              <Projects />
              <Contact />
            </main>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;