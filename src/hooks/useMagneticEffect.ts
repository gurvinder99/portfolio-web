import { useState, useEffect, useRef } from 'react';

interface MagneticProps {
  strength?: number;
}

export const useMagneticEffect = ({ strength = 0.3 }: MagneticProps = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const rect = element.getBoundingClientRect();
      
      const x = clientX - (rect.left + rect.width / 2);
      const y = clientY - (rect.top + rect.height / 2);
      
      setPosition({ 
        x: x * strength, 
        y: y * strength 
      });
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  const style = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition: 'transform 0.2s cubic-bezier(0.33, 1, 0.68, 1)',
  };

  return { ref, style };
};