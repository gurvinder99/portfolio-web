import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section py-24 md:py-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-lg mb-6 animate-text">About Me</h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Student exploring code and film. Currently crafting my first project 
              (surprise coming soon!). Freshly certified in Full-Stack Development 
              via Coursera.
            </p>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              My passion lies at the intersection of technology and visual storytelling. 
              I believe that great experiences are born from the perfect blend of 
              innovative code and compelling narratives.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div>
                <h3 className="text-xl font-heading font-bold mb-3 text-accent">Skills</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                    Web Development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                    Video Production
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                    UX/UI Design
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                    Motion Graphics
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold mb-3 text-accent">Interests</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                    3D Modeling
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                    Cinematic Effects
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                    Interactive Media
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                    Emerging Tech
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-accent/10 rounded-2xl p-1">
              <div className="bg-secondary-800 rounded-2xl p-8 relative z-10">
                <h3 className="text-2xl font-heading font-bold mb-4">Education & Certifications</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium mb-1">Full-Stack Web Development</h4>
                    <p className="text-sm text-foreground/70">Coursera, 2024</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Computer Science Undergraduate</h4>
                    <p className="text-sm text-foreground/70">In Progress, 2022-2026</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Digital Filmmaking</h4>
                    <p className="text-sm text-foreground/70">Online Certification, 2023</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 w-2/3 h-1/2 bg-accent/20 rounded-2xl -z-10 blur-lg"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;