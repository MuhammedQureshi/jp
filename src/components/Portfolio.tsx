import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';
import { ExternalLink } from 'lucide-react';
import React from 'react';

const portfolio = [
  {
    title: 'Chelsea Townhouse',
    category: 'General Cleaning',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    title: 'Mayfair Apartment',
    category: 'Deep Cleaning',
    image: 'https://images.unsplash.com/photo-1666282167632-c613fbeb163c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
  },
  {
    title: 'City Centre Flat',
    category: 'End of Tenancy Cleaning',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    title: 'Riverside Residence',
    category: 'Carpet & Steam Cleaning',
    image: 'https://i0.wp.com/enviro-clean.co.uk/wp-content/uploads/2025/01/clean-carpet-by-enviro-clean-14.png?fit=1024%2C1024&ssl=1',
  },
  {
    title: 'Office',
    category: 'Window Cleaning',
    image: ' https://images.unsplash.com/photo-1586634303877-05d91c3a3607?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
  },
];


export function Portfolio() {
  return (
    <section id="portfolio" className="py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0ee9a7 0%, #38BDF8 25%, #7dfce9 50%, #BAE6FD 75%, #E0F2FE 100%)' }}>
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border backdrop-blur-md shadow-lg" style={{ background: 'rgba(255,255,255,0.9)', borderColor: '#7DD3FC', boxShadow: '0 4px 20px rgba(14,165,233,0.3)' }}>
            <ExternalLink className="h-4 w-4" style={{ color: '#0EA5E9' }} />
            <span className="text-sm tracking-wider uppercase font-semibold" style={{ color: '#0284C7' }}>Our Work</span>
          </div>
          <h2 className="text-5xl md:text-6xl mb-6 font-bold drop-shadow-lg" style={{ color: '#FFFFFF' }}>
            Portfolio of Excellence
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed drop-shadow-md" style={{ color: '#E0F2FE' }}>
            A preview of the spaces that reflect our standard of excellence.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {portfolio.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <Card className="group relative overflow-hidden backdrop-blur-xl transition-all duration-500 border shadow-xl" style={{ background: 'rgba(255,255,255,0.95)', borderColor: '#7DD3FC', boxShadow: '0 10px 30px rgba(14,165,233,0.2)' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#0EA5E9'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(14,165,233,0.4)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#7DD3FC'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(14,165,233,0.2)'; }}>
                <div className="relative h-96 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3), transparent)' }}></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="inline-block px-3 py-1 border text-sm rounded-full mb-3 font-semibold" style={{ backgroundColor: 'rgba(14,165,233,0.3)', borderColor: '#7DD3FC', color: '#FFFFFF' }}>
                      {project.category}
                    </span>
                    <h3 className="text-2xl mb-2 font-bold" style={{ color: '#FFFFFF' }}>{project.title}</h3>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to top, rgba(14,165,233,0.3), transparent)' }}></div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
