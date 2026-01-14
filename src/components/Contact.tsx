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
    details: 'services.jpcleaning@outlook.com',
    subddetails: 'Response within 2 hours',
    link: 'mailto:services.jpcleaning@outlook.com',
  },
  {
    icon: Clock,
    title: 'Availability',
    details: [
      'Mon-Fri: 8am - 9pm',
    ],
    subddetails: '',
    link: '#',
  },
    {
    icon: Clock,
    title: 'Office Hours',
    details: [
      'Mon-Fri: 8am - 6pm',
    ],
    subddetails: 'Feel free to reach out anytime',
    link: '#',
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #E0F2FE 0%, #BAE6FD 25%, #7DD3FC 50%, #38BDF8 75%, #40E0D0 100%)' }}>
      {/* Background Elements */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,0.15), transparent 70%)' }}></div>
      
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
            <Send className="h-4 w-4" style={{ color: '#0EA5E9' }} />
            <span className="text-sm tracking-wider uppercase font-semibold" style={{ color: '#0284C7' }}>Get in Touch</span>
          </div>
          <h2 className="text-5xl md:text-6xl mb-6 font-bold" style={{ color: '#0284C7', textShadow: '0 2px 10px rgba(255,255,255,0.8)' }}>
            Begin Your Experience
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#0369A1', textShadow: '0 1px 5px rgba(255,255,255,0.6)' }}>
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
            <Card className="p-10 backdrop-blur-xl border shadow-xl" style={{ background: 'rgba(255,255,255,0.95)', borderColor: '#7DD3FC', boxShadow: '0 10px 30px rgba(14,165,233,0.2)' }}>
              <form action="https://formspree.io/f/mrbolyvn" method="POST" className="space-y-6">
                {/* FormSubmit customization */}
                <input type="hidden" name="_subject" value="New JP's Cleaning enquiry" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://jps-cleaning-success.vercel.app/" />
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-3 text-sm tracking-wider uppercase font-semibold" style={{ color: '#0284C7' }}>First Name</label>
                    <Input 
                      name="firstName" 
                      placeholder="John" 
                      required 
                      className="border rounded-lg px-4 py-3 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500" 
                      style={{ backgroundColor: '#E0F2FE', borderColor: '#7DD3FC', color: '#0284C7' }} 
                    />
                  </div>
                  <div>
                    <label className="block mb-3 text-sm tracking-wider uppercase font-semibold" style={{ color: '#0284C7' }}>Last Name</label>
                    <Input 
                      name="lastName" 
                      placeholder="Sterling" 
                      required 
                      className="border rounded-lg px-4 py-3 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500" 
                      style={{ backgroundColor: '#E0F2FE', borderColor: '#7DD3FC', color: '#0284C7' }} 
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-3 text-sm tracking-wider uppercase font-semibold" style={{ color: '#0284C7' }}>Email Address</label>
                  <Input 
                    name="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                    className="border rounded-lg px-4 py-3 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500" 
                    style={{ backgroundColor: '#E0F2FE', borderColor: '#7DD3FC', color: '#0284C7' }} 
                  />
                </div>

                <div>
                  <label className="block mb-3 text-sm tracking-wider uppercase font-semibold" style={{ color: '#0284C7' }}>Phone Number</label>
                  <Input 
                    name="phone" 
                    type="tel" 
                    placeholder="(555) 123-4567" 
                    className="border rounded-lg px-4 py-3 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500" 
                    style={{ backgroundColor: '#E0F2FE', borderColor: '#7DD3FC', color: '#0284C7' }} 
                  />
                </div>

                <div>
                  <label className="block mb-3 text-sm tracking-wider uppercase font-semibold" style={{ color: '#0284C7' }}>Service Interest</label>
                  <select 
                    name="service" 
                    className="w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    style={{ backgroundColor: '#E0F2FE', borderColor: '#7DD3FC', color: '#0284C7' }}
                  >
                    <option style={{ backgroundColor: '#FFFFFF', color: '#0284C7' }}>General Cleaning</option>
                    <option style={{ backgroundColor: '#FFFFFF', color: '#0284C7' }}>Deep Cleaning</option>
                    <option style={{ backgroundColor: '#FFFFFF', color: '#0284C7' }}>End of Tenancy Cleaning</option>
                    <option style={{ backgroundColor: '#FFFFFF', color: '#0284C7' }}>Carpet & Steam Cleaning</option>
                    <option style={{ backgroundColor: '#FFFFFF', color: '#0284C7' }}>Window Cleaning</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-3 text-sm tracking-wider uppercase font-semibold" style={{ color: '#0284C7' }}>Property Details</label>
                  <Textarea 
                    name="message"
                    placeholder="Tell us about your property and specific requirements..."
                    className="border rounded-lg px-4 py-3 min-h-32 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500"
                    style={{ backgroundColor: '#E0F2FE', borderColor: '#7DD3FC', color: '#0284C7' }}
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full text-white shadow-lg group font-semibold"
                  size="lg"
                  style={{ background: 'linear-gradient(to right, #0284C7, #0EA5E9, #38BDF8)', boxShadow: '0 10px 15px -3px rgba(14,165,233,0.5)' }}
                >
                  Schedule Consultation
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-sm text-center font-medium" style={{ color: '#0EA5E9' }}>
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
                  className="block p-6 rounded-2xl backdrop-blur-xl transition-all duration-300 group border shadow-lg"
                  style={{ background: 'rgba(255,255,255,0.95)', borderColor: '#7DD3FC', boxShadow: '0 10px 30px rgba(14,165,233,0.2)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#0EA5E9'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(14,165,233,0.4)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#7DD3FC'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(14,165,233,0.2)'; }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl group-hover:scale-110 transition-transform" style={{ background: 'linear-gradient(to bottom right, #0284C7, #0EA5E9, #38BDF8)' }}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm mb-1 font-semibold" style={{ color: '#0284C7' }}>{info.title}</h4>
                      {Array.isArray(info.details) ? (
                        <ul className="mb-1 text-sm font-medium" style={{ color: '#0369A1' }}>
                          {info.details.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mb-1 font-medium" style={{ color: '#0369A1' }}>{info.details}</p>
                      )}
                      <p className="text-sm font-medium" style={{ color: '#0EA5E9' }}>{info.subddetails}</p>
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
