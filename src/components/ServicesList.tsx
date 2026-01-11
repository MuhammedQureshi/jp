import React from 'react';
import { motion } from 'motion/react';

const servicesListA = [
  'Domestic Cleaning',
  'Commercial Cleaning',
  'Shops & Factories',
  'Public Buildings',
  'Schools & Colleges',
  'Pubs & Cafes Cleaning',
  'Restaurant Cleaning',
  'Commercial Carpet Cleaning',
];

const servicesListB = [
  'Domestic Carpet Cleaning',
  'After Builders Cleaning',
  'Deep Cleaning',
  'End of Tenancy Cleaning',
  'Office Cleaning',
  'Surgery Cleaning',
  'Retail Cleaning',
];

export function ServicesList() {
  const combined = [...servicesListA, ...servicesListB];
  const leftCol = combined.filter((_, i) => i % 2 === 0);
  const rightCol = combined.filter((_, i) => i % 2 === 1);

  return (
    <section id="our-services" className="py-19 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #E0F2FE 0%, #BAE6FD 25%, #7DD3FC 50%, #38BDF8 75%, #0EA5E9 100%)' }}>
      <div className="max-w-6xl mt-20 mb-20 mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >

          <h2 className="text-5xl md:text-6xl mb-6 font-bold" style={{ color: '#0EA5E9', textShadow: '0 1px 6px rgba(14,165,233,0.08)' }}>
            Our Services
          </h2>
          {/* <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#0369A1', textShadow: '0 1px 5px rgba(255,255,255,0.6)' }}>
            Each service meticulously crafted to exceed the expectations of the most discerning clientele
          </p> */}
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-md p-6 border w-full max-w-3xl"
            style={{ borderColor: '#BAE6FD' }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ul className="space-y-3">
                {leftCol.map((s) => (
                  <li key={s} className="flex items-center gap-3">
                    <span style={{ color: '#0EA5E9', fontSize: '1.125rem', lineHeight: 1 }}>&bull;</span>
                    <span className="text-slate-700">{s}</span>
                  </li>
                ))}
              </ul>

              <ul className="space-y-3">
                {rightCol.map((s) => (
                  <li key={s} className="flex items-center gap-3">
                    <span style={{ color: '#0EA5E9', fontSize: '1.125rem', lineHeight: 1 }}>&bull;</span>
                    <span className="text-slate-700">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
