import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X } from 'lucide-react';

// Placeholder YouTube video data
const videos = [
  {
    id: 'dQw4w9WgXcQ',
    title: 'Cinematic Short Film',
    thumbnail: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'filmmaking'
  },
  {
    id: 'QH2-TGUlwu4',
    title: 'Coding Time-lapse',
    thumbnail: 'https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'coding'
  },
  {
    id: 'jNQXAC9IVRw',
    title: 'Project Walkthrough',
    thumbnail: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'coding'
  },
  {
    id: 'RGOj5yH7evk',
    title: 'Behind the Scenes',
    thumbnail: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'filmmaking'
  },
];

const VideoShowcase = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [filter, setFilter] = useState<string | null>(null);
  
  const filteredVideos = filter 
    ? videos.filter(video => video.category === filter) 
    : videos;

  return (
    <section id="videos" className="section py-24 md:py-32 bg-secondary-800/30">
      <div className="container mx-auto">
        <h2 className="heading-lg mb-2 animate-text">Video Showcase</h2>
        <p className="text-lg text-foreground/70 mb-8">Selected works and experiments</p>
        
        <div className="flex space-x-4 mb-8">
          <button 
            className={`px-4 py-2 rounded-full text-sm ${filter === null ? 'bg-accent text-white' : 'bg-secondary-800 text-foreground'}`}
            onClick={() => setFilter(null)}
          >
            All
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm ${filter === 'coding' ? 'bg-accent text-white' : 'bg-secondary-800 text-foreground'}`}
            onClick={() => setFilter('coding')}
          >
            Coding
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm ${filter === 'filmmaking' ? 'bg-accent text-white' : 'bg-secondary-800 text-foreground'}`}
            onClick={() => setFilter('filmmaking')}
          >
            Filmmaking
          </button>
        </div>
        
        <div className="video-grid">
          {filteredVideos.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="video-thumbnail cursor-hover"
              onClick={() => setSelectedVideo(video.id)}
            >
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="bg-accent rounded-full p-3">
                  <Play className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-4">
                <h3 className="text-lg font-medium text-white">{video.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
            <button 
              className="absolute top-6 right-6 text-white hover:text-accent"
              onClick={() => setSelectedVideo(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="w-full max-w-4xl aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoShowcase;