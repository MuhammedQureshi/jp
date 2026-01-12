import React from 'react';
import { Crown, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="pt-20 pb-10 relative overflow-hidden border-t" style={{ background: 'linear-gradient(180deg, #0284C7 0%, #0369A1 50%, #075985 100%)', borderColor: '#7DD3FC' }}>
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/1.jpeg" alt="" className='h-12' />
              <div>
                <span className="block text-xl font-bold" style={{ color: '#FFFFFF' }}>JP's</span>
                <span className="block text-xs tracking-widest uppercase -mt-1 font-semibold" style={{ color: '#BAE6FD' }}>Cleaning Services</span>
              </div>
            </div>
            <p className="mb-6 leading-relaxed font-medium" style={{ color: '#E0F2FE' }}>
              Elevating spaces with precision, care, and modern sophistication.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-lg border flex items-center justify-center transition-all duration-300"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: '#7DD3FC' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.borderColor = '#BAE6FD';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.borderColor = '#7DD3FC';
                }}
              >
                <Facebook className="h-4 w-4 transition-colors" style={{ color: '#E0F2FE' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#E0F2FE'} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg border flex items-center justify-center transition-all duration-300"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: '#7DD3FC' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.borderColor = '#BAE6FD';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.borderColor = '#7DD3FC';
                }}
              >
                <Instagram className="h-4 w-4 transition-colors" style={{ color: '#E0F2FE' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#E0F2FE'} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 tracking-wider font-bold" style={{ color: '#FFFFFF' }}>Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="transition-colors font-medium" style={{ color: '#E0F2FE' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#E0F2FE'}>General Cleaning</a></li>
              <li><a href="#" className="transition-colors font-medium" style={{ color: '#E0F2FE' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#E0F2FE'}>Deep Cleaning</a></li>
              <li><a href="#" className="transition-colors font-medium" style={{ color: '#E0F2FE' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#E0F2FE'}>End of Tenancy Cleaning</a></li>
              <li><a href="#" className="transition-colors font-medium" style={{ color: '#E0F2FE' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#E0F2FE'}>Carpet & Steam Cleaning</a></li>
              <li><a href="#" className="transition-colors font-medium" style={{ color: '#E0F2FE' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#E0F2FE'}>Window Cleaning</a></li>
            </ul>
          </div>

          {/* Company */}
          {/* <div>
            <h3 className="text-white mb-6 tracking-wider">Quick Links</h3>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div> */}

          {/* Contact */}
          <div>
            <h3 className="mb-6 tracking-wider font-bold" style={{ color: '#FFFFFF' }}>Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:5551234567" className="flex items-center gap-3 transition-colors group font-medium" style={{ color: '#E0F2FE' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#E0F2FE'}>
                  <div className="p-2 rounded-lg transition-colors" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}>
                    <Phone className="h-4 w-4" />
                  </div>
                  <span>07411444292</span>
                </a>
              </li>
              <li>
                <a href="mailto:services.jpcleaning@outlook.com" className="flex items-center gap-3 transition-colors group font-medium" style={{ color: '#E0F2FE' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#E0F2FE'}>
                  <div className="p-2 rounded-lg transition-colors" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}>
                    <Mail className="h-4 w-4" />
                  </div>
                  <span>services.jpcleaning@outlook.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 font-medium" style={{ color: '#E0F2FE' }}>
                  <div className="p-2 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span>London</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t" style={{ borderColor: '#7DD3FC' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-medium" style={{ color: '#E0F2FE' }}>
              &copy; {new Date().getFullYear()} JP's Cleaning Service. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
