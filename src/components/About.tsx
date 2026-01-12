import { motion } from 'motion/react';
import { Target, Eye, Award } from 'lucide-react';

const sections = [
  {
    icon: Target,
    title: 'Our Mission',
    content: 'At JPs Cleaning Services, we are dedicated to providing top-notch local cleaning solutions backed by over 30 years of experience. Our commitment to excellence ensures you receive the best value compared to larger companies without sacrificing quality or reliability.',
  },
  {
    icon: Eye,
    title: 'Our Approach',
    content: 'We showcase our work through photos and videos from various settings ensuring our abilities are transparent.',
  },
  {
    icon: Award,
    title: 'Experience',
    content: 'Our team\'s extensive background enables us to handle tasks in diverse environments, including residential, commercial, and institutional spaces.',
  },
];

export function WhoWeAre() {
  return (
    <section id="about us" className="py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #E0F2FE 0%, #BAE6FD 25%, #7DD3FC 50%, #38BDF8 75%, #0EA5E9 100%)' }}>
      {/* Background accents */}
      <div className="absolute inset-0 z-0" style={{ background: 'radial-gradient(circle at top right, rgba(14,165,233,0.04), transparent 40%), radial-gradient(circle at bottom left, rgba(125,211,252,0.03), transparent 50%)' }} />

      {/* Decorative Lights */}
      <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(14,165,233,0.06)' }}></div>
      <div className="absolute top-40 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(125,211,252,0.03)' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
                <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >

          <h2 className="text-5xl md:text-6xl mb-6 font-bold" style={{ color: '#0EA5E9', textShadow: '0 1px 6px rgba(14,165,233,0.08)' }}>
            Who We Are
          </h2>
          {/* <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#0369A1', textShadow: '0 1px 5px rgba(255,255,255,0.6)' }}>
            Each service meticulously crafted to exceed the expectations of the most discerning clientele
          </p> */}
        </motion.div>

        {/* Content Sections */}
        <div className="grid lg:grid-cols-3 gap-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative group"
              >
                <div className="h-full rounded-3xl p-8 border hover:border-sky-500/30 transition-all duration-500" style={{ background: '#ffffff', borderColor: '#E6F6FF', boxShadow: '0 6px 18px rgba(2,132,199,0.06)' }}>
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-gradient-to-br from-sky-500 to-blue-500 p-4 rounded-2xl w-12 mb-6"
                  >
                    <Icon className="h-8 w-8 text-blue-50" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl mb-4" style={{ color: '#0EA5E9' }}>
                    {section.title}
                  </h3>

                  {/* Content */}
                  <p className="text-slate-700 leading-relaxed">
                    {section.content}
                  </p>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.06), transparent)' }}></div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}