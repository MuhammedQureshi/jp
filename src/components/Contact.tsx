import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { Widget } from '@typeform/embed-react';
// ... (other imports)

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: '07411444292',
    subddetails: 'Available 24/7',
    link: 'tel:07411444292',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'YNaperez@aol.com',
    subddetails: 'Response within 2 hours',
    link: 'mailto:YNaperez@aol.com',
  },
  {
    icon: Clock,
    title: 'Availability',
    details: [
      'Monday: 8am - 6pm',
      'Tuesday: 8am - 6pm',
      'Wednesday: 8am - 6pm',
      'Thursday: 8am - 6pm',
      'Friday : 8am - 6pm',
    ],
    subddetails: '',
    link: '#',
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-black relative overflow-hidden">
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
            <Send className="h-4 w-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm tracking-wider uppercase">Get in Touch</span>
          </div>
          <h2 className="text-5xl md:text-6xl text-white mb-6">
            Begin Your Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Schedule a consultation with our concierge team and discover the difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <Card className="p-10 border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl">
              <Card className="p-10 border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl">
                <Widget id="f8JUClD0" style={{ width: '100%', height: '600px' }} className="rounded-xl border-none shadow-none" />
              </Card>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="block p-6 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl backdrop-blur-xl hover:border-emerald-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-emerald-500 to-green-500 p-3 rounded-xl group-hover:scale-110 transition-transform">
                      <Icon className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm mb-1">{info.title}</h4>
                      {Array.isArray(info.details) ? (
                        <ul className="text-white mb-1 text-sm">
                          {info.details.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-white mb-1">{info.details}</p>
                      )}
                      <p className="text-gray-500 text-sm">{info.subddetails}</p>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
