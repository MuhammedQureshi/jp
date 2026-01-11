import { useState } from 'react';
import { Card } from './ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';

const testimonials = [
  {
    name: 'Sophie Turner',
    role: 'Homeowner, Chelsea',
    image: 'https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?w=150&h=150&fit=crop',
    rating: 5,
    text: "JP Cleaning brought an incredible freshness to our home. Every detail was handled with precision and care — it felt like stepping into a brand-new space.",
  },
  {
    name: 'Daniel Reed',
    role: 'Managing Director, Reed & Co.',
    image: 'https://images.unsplash.com/photo-1603415526960-f7e0328b9d46?w=150&h=150&fit=crop',
    rating: 5,
    text: "We use JP Cleaning for our offices, and the results are consistently exceptional. Professional, discreet, and always on schedule — a pleasure to work with.",
  },
  {
    name: 'Amelia Hart',
    role: 'Interior Designer',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop',
    rating: 5,
    text: "Their team understands luxury interiors better than most. They treat every finish and fabric with respect — perfect for my clients’ high-end spaces.",
  },
  {
    name: 'Oliver Grant',
    role: 'Property Manager, Kensington',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
    rating: 5,
    text: "From deep cleans to regular maintenance, JP Cleaning delivers flawless results every time. They’ve quickly become my go-to for all managed properties.",
  },
];


export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #7DD3FC 0%, #38BDF8 25%, #0EA5E9 50%, #0284C7 75%, #0369A1 100%)' }}>
      {/* Background Elements */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at top left, rgba(255,255,255,0.15), transparent 50%)' }}></div>
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at bottom right, rgba(255,255,255,0.15), transparent 50%)' }}></div>

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
            <Star className="h-4 w-4" style={{ color: '#0EA5E9', fill: '#0EA5E9' }} />
            <span className="text-sm tracking-wider uppercase font-semibold" style={{ color: '#0284C7' }}>Client Testimonials</span>
          </div>
          <h2 className="text-5xl md:text-6xl mb-6 font-bold drop-shadow-lg" style={{ color: '#FFFFFF' }}>
            Trusted by the Elite
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed drop-shadow-md" style={{ color: '#E0F2FE' }}>
            Discover why the most discerning clients choose JP's Premium Cleaning
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="backdrop-blur-xl p-12 md:p-16 relative overflow-hidden border shadow-xl" style={{ background: 'rgba(255,255,255,0.95)', borderColor: '#7DD3FC', boxShadow: '0 20px 40px rgba(14,165,233,0.3)' }}>
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl" style={{ background: 'linear-gradient(to bottom right, rgba(14,165,233,0.2), transparent)' }}></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl" style={{ background: 'linear-gradient(to top right, rgba(14,165,233,0.2), transparent)' }}></div>

                  {/* Quote Mark */}
                  <div className="absolute top-8 left-8 text-9xl leading-none" style={{ color: 'rgba(14,165,233,0.15)' }}>"</div>
                  
                  <div className="relative z-10">
                    {/* Stars */}
                    <div className="flex gap-2 mb-8 justify-center">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-6 w-6" style={{ color: '#0EA5E9', fill: '#0EA5E9' }} />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-2xl md:text-3xl mb-12 text-center leading-relaxed max-w-3xl mx-auto font-medium" style={{ color: '#0284C7' }}>
                      {testimonials[currentIndex].text}
                    </p>

                    {/* Author */}
                    <div className="flex flex-col items-center gap-4">
                      <div className="text-center">
                        <h4 className="text-xl mb-1 font-bold" style={{ color: '#0284C7' }}>{testimonials[currentIndex].name}</h4>
                        <p className="font-semibold" style={{ color: '#0EA5E9' }}>{testimonials[currentIndex].role}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-12">
              <Button
                onClick={prev}
                variant="outline"
                size="icon"
                className="rounded-full backdrop-blur-sm border"
                style={{ backgroundColor: 'rgba(255,255,255,0.7)', borderColor: '#7DD3FC', color: '#0284C7' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.9)'; e.currentTarget.style.borderColor = '#0EA5E9'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.7)'; e.currentTarget.style.borderColor = '#7DD3FC'; }}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              {/* Dots */}
              <div className="flex items-center gap-2 px-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className="h-2 rounded-full transition-all duration-300"
                    style={{
                      width: index === currentIndex ? '2rem' : '0.5rem',
                      backgroundColor: index === currentIndex ? '#0EA5E9' : 'rgba(14,165,233,0.3)',
                    }}
                    onMouseEnter={(e) => {
                      if (index !== currentIndex) e.currentTarget.style.backgroundColor = 'rgba(14,165,233,0.5)';
                    }}
                    onMouseLeave={(e) => {
                      if (index !== currentIndex) e.currentTarget.style.backgroundColor = 'rgba(14,165,233,0.3)';
                    }}
                  />
                ))}
              </div>

              <Button
                onClick={next}
                variant="outline"
                size="icon"
                className="rounded-full backdrop-blur-sm border"
                style={{ backgroundColor: 'rgba(255,255,255,0.7)', borderColor: '#7DD3FC', color: '#0284C7' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.9)'; e.currentTarget.style.borderColor = '#0EA5E9'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.7)'; e.currentTarget.style.borderColor = '#7DD3FC'; }}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
        >
          {[
            { value: '4.9/5', label: 'Client Rating' },
            { value: '98%', label: 'Retention Rate' },
            { value: '100+', label: 'Properties Served' },
            { value: '5+', label: 'Years Excellence' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-2 bg-clip-text text-transparent font-bold" style={{ backgroundImage: 'linear-gradient(to right, #0284C7, #0EA5E9, #38BDF8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {stat.value}
              </div>
              <div className="text-sm font-medium" style={{ color: '#FFFFFF' }}>{stat.label}</div>
            </div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
}
