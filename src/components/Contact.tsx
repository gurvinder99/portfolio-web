import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { useMagneticEffect } from '../hooks/useMagneticEffect';

const Contact = () => {
  const { ref: buttonRef, style: buttonStyle } = useMagneticEffect();
  
  return (
    <section id="contact" className="section py-24 md:py-32 bg-secondary-800/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="heading-lg mb-6 animate-text">Get In Touch</h2>
            <p className="text-lg text-foreground/80 mb-8">
              Interested in collaborating or just want to say hello? Feel free to reach out!
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-accent mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-medium">Email</h3>
                  <p className="text-foreground/70">gurvinder@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-accent mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-medium">Phone</h3>
                  <p className="text-foreground/70">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-accent mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-medium">Location</h3>
                  <p className="text-foreground/70">San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary-700 flex items-center justify-center text-foreground hover:text-accent transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary-700 flex items-center justify-center text-foreground hover:text-accent transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary-700 flex items-center justify-center text-foreground hover:text-accent transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form className="bg-secondary-800 p-8 rounded-2xl">
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 bg-secondary-700 border border-secondary-600 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Your Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-secondary-700 border border-secondary-600 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Your Message
                </label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary-700 border border-secondary-600 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>
              
              <div ref={buttonRef} style={buttonStyle}>
                <button 
                  type="submit" 
                  className="w-full btn btn-primary rounded-lg py-4"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;