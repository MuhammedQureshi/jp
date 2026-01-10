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
      'Friday: 8am - 6pm',
    ],
    subddetails: '',
    link: '#',
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
      {/* Background Elements */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, rgba(59,130,246,0.05), transparent 70%)' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border" style={{ background: 'linear-gradient(to right, rgba(219,234,254,0.8), rgba(191,219,254,0.8))', borderColor: '#93c5fd' }}>
            <Send className="h-4 w-4" style={{ color: '#2563eb' }} />
            <span className="text-sm tracking-wider uppercase" style={{ color: '#2563eb' }}>Get in Touch</span>
          </div>
          <h2 className="text-5xl md:text-6xl mb-6" style={{ color: '#111827' }}>
            Begin Your Experience
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#4b5563' }}>
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
            <Card className="p-10 backdrop-blur-xl border" style={{ background: 'linear-gradient(to bottom right, #ffffff, #f0f9ff)', borderColor: '#e0f2fe' }}>
              <form action="https://formspree.io/f/mrbolyvn" method="POST" className="space-y-6">
                {/* FormSubmit customization */}
                <input type="hidden" name="_subject" value="New JP's Cleaning enquiry" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://jps-cleaning-success.vercel.app/" />
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-3 text-sm tracking-wider uppercase" style={{ color: '#4b5563' }}>First Name</label>
                    <Input 
                      name="firstName" 
                      placeholder="John" 
                      required 
                      className="border rounded-lg px-4 py-3 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500" 
                      style={{ backgroundColor: '#f8fafc', borderColor: '#e0f2fe', color: '#111827' }} 
                    />
                  </div>
                  <div>
                    <label className="block mb-3 text-sm tracking-wider uppercase" style={{ color: '#4b5563' }}>Last Name</label>
                    <Input 
                      name="lastName" 
                      placeholder="Sterling" 
                      required 
                      className="border rounded-lg px-4 py-3 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500" 
                      style={{ backgroundColor: '#f8fafc', borderColor: '#e0f2fe', color: '#111827' }} 
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-3 text-sm tracking-wider uppercase" style={{ color: '#4b5563' }}>Email Address</label>
                  <Input 
                    name="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                    className="border rounded-lg px-4 py-3 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500" 
                    style={{ backgroundColor: '#f8fafc', borderColor: '#e0f2fe', color: '#111827' }} 
                  />
                </div>

                <div>
                  <label className="block mb-3 text-sm tracking-wider uppercase" style={{ color: '#4b5563' }}>Phone Number</label>
                  <Input 
                    name="phone" 
                    type="tel" 
                    placeholder="(555) 123-4567" 
                    className="border rounded-lg px-4 py-3 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500" 
                    style={{ backgroundColor: '#f8fafc', borderColor: '#e0f2fe', color: '#111827' }} 
                  />
                </div>

                <div>
                  <label className="block mb-3 text-sm tracking-wider uppercase" style={{ color: '#4b5563' }}>Service Interest</label>
                  <select 
                    name="service" 
                    className="w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    style={{ backgroundColor: '#f8fafc', borderColor: '#e0f2fe', color: '#111827' }}
                  >
                    <option style={{ backgroundColor: '#ffffff', color: '#111827' }}>General Cleaning</option>
                    <option style={{ backgroundColor: '#ffffff', color: '#111827' }}>Deep Cleaning</option>
                    <option style={{ backgroundColor: '#ffffff', color: '#111827' }}>End of Tenancy Cleaning</option>
                    <option style={{ backgroundColor: '#ffffff', color: '#111827' }}>Carpet & Steam Cleaning</option>
                    <option style={{ backgroundColor: '#ffffff', color: '#111827' }}>Window Cleaning</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-3 text-sm tracking-wider uppercase" style={{ color: '#4b5563' }}>Property Details</label>
                  <Textarea 
                    name="message"
                    placeholder="Tell us about your property and specific requirements..."
                    className="border rounded-lg px-4 py-3 min-h-32 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500"
                    style={{ backgroundColor: '#f8fafc', borderColor: '#e0f2fe', color: '#111827' }}
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full text-white shadow-lg group"
                  size="lg"
                  style={{ background: 'linear-gradient(to right, #3b82f6, #2563eb, #1d4ed8)', boxShadow: '0 10px 15px -3px rgba(59,130,246,0.5)' }}
                >
                  Schedule Consultation
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-sm text-center" style={{ color: '#6b7280' }}>
                  By submitting, you agree to our privacy policy and terms of service
                </p>
              </form>
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
                  className="block p-6 rounded-2xl backdrop-blur-xl transition-all duration-300 group border"
                  style={{ background: 'linear-gradient(to bottom right, #ffffff, #f0f9ff)', borderColor: '#e0f2fe' }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = '#3b82f6'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e0f2fe'}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl group-hover:scale-110 transition-transform" style={{ background: 'linear-gradient(to bottom right, #3b82f6, #2563eb)' }}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm mb-1" style={{ color: '#4b5563' }}>{info.title}</h4>
                      {Array.isArray(info.details) ? (
                        <ul className="mb-1 text-sm" style={{ color: '#111827' }}>
                          {info.details.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mb-1" style={{ color: '#111827' }}>{info.details}</p>
                      )}
                      <p className="text-sm" style={{ color: '#6b7280' }}>{info.subddetails}</p>
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
