import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useMagneticEffect } from '../hooks/useMagneticEffect';

const projects = [
  {
    id: 1,
    title: 'Interactive Portfolio',
    description: 'Coming Soon',
    image: 'https://images.pexels.com/photos/12795763/pexels-photo-12795763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Development',
  },
  {
    id: 2,
    title: 'Short Film Collection',
    description: 'Coming Soon',
    image: 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Film',
  },
  {
    id: 3,
    title: 'Web Application',
    description: 'Coming Soon',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Development',
  },
  {
    id: 4,
    title: 'Motion Graphics',
    description: 'Coming Soon',
    image: 'https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Design',
  },
];

const Projects = () => {
  const { ref: magneticRef, style: magneticStyle } = useMagneticEffect();
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
  return (
    <section id="projects" className="section py-24 md:py-32">
      <div className="container mx-auto">
        <h2 className="heading-lg mb-2 animate-text">Projects</h2>
        <p className="text-lg text-foreground/70 mb-12">
          A preview of my upcoming work
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="project-card cursor-hover overflow-hidden rounded-xl"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredId === project.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-sm text-accent uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-heading font-bold mt-2">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mt-2">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div 
            ref={magneticRef}
            style={magneticStyle}
            className="inline-block"
          >
            <button className="btn btn-primary rounded-full">
              <span>View All Projects</span>
              <ArrowRight className="ml-2 w-4 h-4 inline-block" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;