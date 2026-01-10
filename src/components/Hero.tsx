import { Button } from './ui/button';
import { ArrowRight, Award, Shield, Sparkles, Star } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import React from 'react'

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #eff6ff, #ffffff, #eff6ff)' }}>
      {/* Parallax Background with Logo */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src="/1.jpeg" 
            alt="JP's Cleaning Services Logo" 
            className="w-100 h-100 object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, rgba(239,246,255,0.9), rgba(255,255,255,0.95), rgba(239,246,255,0.9))' }}></div>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at top right, rgba(59,130,246,0.08), transparent 50%)' }}></div>
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{ backgroundColor: '#60a5fa' }}
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{ 
              y: [null, Math.random() * -500],
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border"
              style={{ background: 'linear-gradient(to right, #dbeafe, #bfdbfe)', borderColor: '#93c5fd' }}
            >
              <Star className="h-4 w-4" style={{ color: '#2563eb', fill: '#2563eb' }} />
              <span className="text-sm tracking-wider uppercase" style={{ color: '#2563eb' }}>Cleaning Services</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl lg:text-8xl mb-6"
            >
              <span className="block text-gray-900">Elegance</span>
              <span className="block bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #3b82f6, #2563eb, #1d4ed8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Redefined
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 mb-12 max-w-xl leading-relaxed"
            >
              Experience the pinnacle of professional cleaning. Where meticulous attention to detail meets uncompromising luxury.
            </motion.p>

            {/* Premium Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mb-12"
            >
              {[
                { icon: Award, label: '5+ Years' },
                { icon: Shield, label: 'Insured' },
                { icon: Sparkles, label: '5-Star Rated' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="rounded-2xl p-4 backdrop-blur-sm mb-2 inline-flex border" style={{ background: 'linear-gradient(to bottom right, #dbeafe, #bfdbfe)', borderColor: '#93c5fd' }}>
                    <item.icon className="h-6 w-6" style={{ color: '#2563eb' }} />
                  </div>
                  <p className="text-gray-600 text-sm">{item.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#services">
              <Button 
                size="lg"
                className="w-full text-white shadow-2xl transition-all duration-300 group"
                style={{ background: 'linear-gradient(to right, #3b82f6, #2563eb, #1d4ed8)', boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.5)' }}
              >
                Reserve Your Service
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              </a>
              <a href="#portfolio">
              <Button 
                size="lg"
                variant="outline"
                className="w-full backdrop-blur-sm border"
                style={{ borderColor: '#3b82f6', color: '#2563eb' }}
              >
                View Portfolio
              </Button>
              </a>
            </motion.div>
          </div>

          {/* Floating Stats Cards */}
          <div className="hidden lg:block relative h-[600px]">
            {[
              { number: '5+', label: 'Years of Excellence', delay: 0.2, position: 'top-0 right-0' },
              { number: '100+', label: 'Luxury Properties', delay: 0.4, position: 'top-32 left-0' },
              { number: '98%', label: 'Client Retention', delay: 0.6, position: 'bottom-32 right-0' },
              { number: '24/7', label: 'Available', delay: 0.8, position: 'bottom-0 left-0' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: stat.delay, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`absolute ${stat.position} w-48`}
              >
                <div className="backdrop-blur-xl rounded-3xl p-6 border shadow-2xl" style={{ background: 'linear-gradient(to bottom right, #ffffff, #eff6ff)', borderColor: '#bfdbfe' }}>
                  <div className="text-5xl bg-clip-text text-transparent mb-2" style={{ backgroundImage: 'linear-gradient(to right, #3b82f6, #2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}

            {/* Center Decorative Element */}
            <motion.div
              animate={{ 
                rotate: 360,
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border rounded-full"
              style={{ borderColor: '#93c5fd' }}
            ></motion.div>
            <motion.div
              animate={{ 
                rotate: -360,
              }}
              transition={{ 
                duration: 30, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border rounded-full"
              style={{ borderColor: '#bfdbfe' }}
            ></motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 rounded-full flex items-start justify-center p-2"
          style={{ borderColor: '#3b82f6' }}
        >
          <motion.div className="w-1 h-2 rounded-full" style={{ backgroundColor: '#3b82f6' }}></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
