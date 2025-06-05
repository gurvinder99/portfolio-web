import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 10;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background flex flex-col items-center justify-center z-50"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="text-4xl font-heading font-bold text-accent">GS</span>
        </motion.div>
        
        <div className="w-64 h-1 bg-secondary-700 rounded-full overflow-hidden mb-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-accent"
          />
        </div>
        
        <p className="text-sm text-foreground/60">
          {progress < 100 ? 'Loading experience...' : 'Ready'}
        </p>
      </div>
    </motion.div>
  );
};

export default Loader;