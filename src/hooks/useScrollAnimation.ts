import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = () => {
  useEffect(() => {
    // Animate sections on scroll
    const sections = document.querySelectorAll('.section');
    
    sections.forEach((section) => {
      gsap.to(section, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    // Animate text elements with character splitting
    const headings = document.querySelectorAll('.animate-text');
    
    headings.forEach((heading) => {
      const splitText = new SplitType(heading as HTMLElement, { types: 'chars' });
      
      if (splitText.chars) {
        gsap.fromTo(
          splitText.chars,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.02,
            duration: 0.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: heading,
              start: 'top 90%',
              end: 'top 60%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};