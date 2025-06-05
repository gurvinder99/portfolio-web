import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import ModelViewer from './ModelViewer';
import { ArrowDownCircle } from 'lucide-react';
import { useMagneticEffect } from '../hooks/useMagneticEffect';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const { ref: scrollButtonRef, style: scrollButtonStyle } = useMagneticEffect();

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current) return;

    // Split text animation using GSAP
    const title = titleRef.current;
    const chars = title.querySelectorAll('.character');

    gsap.fromTo(
      chars,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.5,
        ease: 'power3.out',
        delay: 1,
      }
    );

    // Subtitle animation
    gsap.fromTo(
      subtitleRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 2,
      }
    );
  }, []);

  useEffect(() => {
    // Initialize character splitting
    const title = titleRef.current;
    if (!title) return;

    const text = title.innerText;
    title.innerHTML = '';
    
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const span = document.createElement('span');
      span.className = 'character';
      span.innerText = char === ' ' ? '\u00A0' : char;
      title.appendChild(span);
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center">
      <ModelViewer />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 ref={titleRef} className="heading-xl mb-6">
              Gurvinder Singh
            </h1>
            
            <p ref={subtitleRef} className="text-xl md:text-2xl text-foreground/80 mb-8">
              Student exploring code and film. Currently crafting my first project.
            </p>
            
            <div 
              ref={scrollButtonRef}
              style={scrollButtonStyle}
              className="inline-block cursor-hover mt-12"
            >
              <a 
                href="#about" 
                className="flex items-center justify-center text-accent hover:text-foreground transition-colors duration-300"
              >
                <span className="mr-2">Scroll Down</span>
                <ArrowDownCircle className="w-5 h-5 animate-bounce" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;