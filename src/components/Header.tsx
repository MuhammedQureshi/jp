import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Crown, Phone } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import React from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      style={{ backgroundColor: headerBg }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'backdrop-blur-xl border-b border-gray-200 shadow-2xl' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute "></div>
              <a href="/">
              <div className="relative">
                <img src="/1.jpeg" alt="" className='h-12 w-12' />
              </div>
              </a>
            </div>
            <div>
              <a href="/">
              <span className="block text-2xl tracking-tight text-gray-900">JP's</span>
              <span className="block text-xs tracking-widest uppercase -mt-1" style={{ color: '#2563eb' }}>Cleaning Services</span>
              </a>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {['Services', 'Portfolio', 'Before & After', 'Testimonials'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(/ & /g, '-')}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="text-gray-700 transition-colors duration-300 relative group"
                style={{ color: '#374151' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{ background: 'linear-gradient(to right, #3b82f6, #2563eb)' }}></span>
              </motion.a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <motion.div 
            className="hidden lg:flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <a href="tel:5551234567" className="transition-colors flex items-center gap-2" style={{ color: '#374151' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'} onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}>
              <Phone className="h-4 w-4" />
              <span>07411444292</span>
            </a>
            <a href="#contact">
            <Button className="text-white shadow-lg transition-all duration-300" style={{ background: 'linear-gradient(to right, #3b82f6, #2563eb, #1d4ed8)', boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.5)' }}>
              Book Now
            </Button>
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-900"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden py-6 px-4 rounded-2xl flex flex-col gap-4 border-t border-gray-200 bg-white"
          >
            {['Services', 'Portfolio', 'Before & After', 'Testimonials'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ & /g, '-')}`}
                className="transition-colors py-2"
                style={{ color: '#374151' }}
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
              >
                {item}
              </a>
            ))}
            <a href="#contact">
            <Button className="text-white w-full" style={{ background: 'linear-gradient(to right, #3b82f6, #2563eb)' }}>
              Book Now
            </Button>
            </a>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
