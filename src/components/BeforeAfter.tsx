import { useState } from 'react';
import { Card } from './ui/card';
import { Slider } from './ui/slider';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

const comparisons = [
  {
    title: 'Living Room Transformation',
    before: 'https://images.unsplash.com/photo-1694875119129-d79757ef3780?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXJ0eSUyMG1lc3N5JTIwcm9vbXxlbnwxfHx8fDE3NjE2ODQzNTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    after: 'https://images.unsplash.com/photo-1619311731741-d82f87274198?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG9yZ2FuaXplZCUyMHJvb218ZW58MXx8fHwxNzYxNjc5NzA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'From cluttered to pristine in just 3 hours',
  },
  {
    title: 'Kitchen Deep Clean',
    before: 'https://images.unsplash.com/photo-1578177154072-bbbd429d496f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXNzeSUyMGtpdGNoZW4lMjBiZWZvcmV8ZW58MXx8fHwxNzYxNzUzNjI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    after: 'https://images.unsplash.com/photo-1609741891824-2acea53d6676?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG90bGVzcyUyMGtpdGNoZW58ZW58MXx8fHwxNzYxNzUzNjI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    after: 'https://images.unsplash.com/photo-1672757685171-190853353acb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwbHV4dXJ5JTIwaG9tZXxlbnwxfHx8fDE3NjE2NTgwMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Professional deep clean with eco-friendly products',
  },
  {
    title: 'Office Space Revival',
    before: 'https://images.unsplash.com/photo-1694875119129-d79757ef3780?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXJ0eSUyMG1lc3N5JTIwcm9vbXxlbnwxfHx8fDE3NjE2ODQzNTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    after: 'https://images.unsplash.com/photo-1758448656990-398443036eb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwb2ZmaWNlJTIwc3BhY2V8ZW58MXx8fHwxNzYxNzUzMzAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Complete office sanitization and organization',
  },
];

function BeforeAfterSlider({ before, after }: { before: string; after: string }) {
  const [sliderPosition, setSliderPosition] = useState([50]);

  return (
    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl group">
      {/* After Image (Base) */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={after}
          alt="After cleaning"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition[0]}% 0 0)` }}
      >
        <ImageWithFallback
          src={before}
          alt="Before cleaning"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Divider Line */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-10"
        style={{ left: `${sliderPosition[0]}%` }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center cursor-ew-resize group-hover:scale-110 transition-transform">
          <div className="flex gap-1">
            <div className="w-0.5 h-4 bg-gray-800"></div>
            <div className="w-0.5 h-4 bg-gray-800"></div>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg text-white text-sm">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-emerald-500/70 backdrop-blur-sm px-4 py-2 rounded-lg text-white text-sm">
        After
      </div>

      {/* Slider Control */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-64 px-4">
        <Slider
          value={sliderPosition}
          onValueChange={setSliderPosition}
          max={100}
          step={1}
          className="cursor-ew-resize"
        />
      </div>
    </div>
  );
}

export function BeforeAfter() {
  return (
    <section id="before-after" className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05),transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/30 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm tracking-wider uppercase">Transformations</span>
          </div>
          <h2 className="text-5xl md:text-6xl text-white mb-6">
            See The Difference
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Witness the remarkable transformations we deliver. Slide to compare the before and after results.
          </p>
        </motion.div>

        {/* Before/After Comparisons */}
        <div className="space-y-16">
          {comparisons.map((comparison, index) => (
            <motion.div
              key={comparison.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="overflow-hidden border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl p-8">
                <div className="grid lg:grid-cols-5 gap-8 items-center">
                  {/* Slider - Takes 3 columns */}
                  <div className="lg:col-span-3">
                    <BeforeAfterSlider before={comparison.before} after={comparison.after} />
                  </div>

                  {/* Info - Takes 2 columns */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-3xl text-white mb-4">{comparison.title}</h3>
                      <p className="text-gray-400 text-lg leading-relaxed">
                        {comparison.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-gradient-to-br from-emerald-500 to-green-500 p-2 rounded-lg flex-shrink-0 mt-1">
                          <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-white mb-1">Professional Results</h4>
                          <p className="text-gray-500 text-sm">Industry-leading techniques and equipment</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="bg-gradient-to-br from-emerald-500 to-green-500 p-2 rounded-lg flex-shrink-0 mt-1">
                          <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-white mb-1">Eco-Friendly Products</h4>
                          <p className="text-gray-500 text-sm">Safe for your family and the environment</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="bg-gradient-to-br from-emerald-500 to-green-500 p-2 rounded-lg flex-shrink-0 mt-1">
                          <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-white mb-1">Satisfaction Guaranteed</h4>
                          <p className="text-gray-500 text-sm">100% quality assurance on every service</p>
                        </div>
                      </div>
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors group/link mt-4"
                    >
                      <span>Book This Service</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-5xl mx-auto"
        >
          {[
            { value: '10K+', label: 'Transformations' },
            { value: '4.9★', label: 'Average Rating' },
            { value: '98%', label: 'Satisfaction Rate' },
            { value: '24/7', label: 'Available' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
