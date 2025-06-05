import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import gsap from 'gsap';

const Logo = () => {
  const logoRef = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    if (!logoRef.current) return;
    
    const paths = logoRef.current.querySelectorAll('path');
    
    gsap.fromTo(
      paths,
      { 
        strokeDasharray: '100%',
        strokeDashoffset: '100%',
        opacity: 0
      },
      { 
        strokeDashoffset: 0,
        opacity: 1,
        duration: 2,
        stagger: 0.1,
        ease: 'power3.out'
      }
    );
  }, []);

  return (
    <a href="#" className="flex items-center space-x-2 text-foreground hover:text-accent transition-colors duration-300">
      <motion.div
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <Code className="w-8 h-8 text-accent" />
      </motion.div>
      <div className="font-heading font-bold text-xl">
        Gurvinder Singh
      </div>
    </a>
  );
};

export default Logo;