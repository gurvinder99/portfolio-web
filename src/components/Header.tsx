import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import { useMagneticEffect } from '../hooks/useMagneticEffect';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref: magneticRef, style: magneticStyle } = useMagneticEffect();
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isVisible ? 'bg-background/80 backdrop-blur-sm py-4' : 'py-6'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -20,
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['About', 'Videos', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="text-foreground hover:text-accent transition-colors duration-300 link-hover"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div ref={magneticRef} style={magneticStyle} className="magnetic-button">
          <button className="btn btn-primary rounded-full text-sm">
            Get in Touch
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;