import React from 'react';
import { Crown, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="pt-20 pb-10 relative overflow-hidden border-t" style={{ backgroundColor: '#ffffff', borderColor: '#e0f2fe' }}>
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(59,130,246,0.1)' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/1.jpeg" alt="" className='h-12' />
              <div>
                <span className="block text-xl" style={{ color: '#111827' }}>JP's</span>
                <span className="block text-xs tracking-widest uppercase -mt-1" style={{ color: '#2563eb' }}>Cleaning Services</span>
              </div>
            </div>
            <p className="mb-6 leading-relaxed" style={{ color: '#6b7280' }}>
              Elevating spaces with precision, care, and modern sophistication.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-lg border flex items-center justify-center transition-all duration-300"
                style={{ backgroundColor: '#f8fafc', borderColor: '#e0f2fe' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(59,130,246,0.2)';
                  e.currentTarget.style.borderColor = '#3b82f6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f8fafc';
                  e.currentTarget.style.borderColor = '#e0f2fe';
                }}
              >
                <Facebook className="h-4 w-4 transition-colors" style={{ color: '#4b5563' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'} onMouseLeave={(e) => e.currentTarget.style.color = '#4b5563'} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg border flex items-center justify-center transition-all duration-300"
                style={{ backgroundColor: '#f8fafc', borderColor: '#e0f2fe' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(59,130,246,0.2)';
                  e.currentTarget.style.borderColor = '#3b82f6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f8fafc';
                  e.currentTarget.style.borderColor = '#e0f2fe';
                }}
              >
                <Instagram className="h-4 w-4 transition-colors" style={{ color: '#4b5563' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'} onMouseLeave={(e) => e.currentTarget.style.color = '#4b5563'} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 tracking-wider" style={{ color: '#111827' }}>Services</h3>
            <ul className="space-y-3" style={{ color: '#6b7280' }}>
              <li><a href="#" className="transition-colors" style={{ color: '#6b7280' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'} onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}>General Cleaning</a></li>
              <li><a href="#" className="transition-colors" style={{ color: '#6b7280' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'} onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}>Deep Cleaning</a></li>
              <li><a href="#" className="transition-colors" style={{ color: '#6b7280' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'} onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}>End of Tenancy Cleaning</a></li>
              <li><a href="#" className="transition-colors" style={{ color: '#6b7280' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'} onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}>Carpet & Steam Cleaning</a></li>
              <li><a href="#" className="transition-colors" style={{ color: '#6b7280' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'} onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}>Window Cleaning</a></li>
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
            <h3 className="mb-6 tracking-wider" style={{ color: '#111827' }}>Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:5551234567" className="flex items-center gap-3 transition-colors group" style={{ color: '#6b7280' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'} onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}>
                  <div className="p-2 rounded-lg transition-colors" style={{ backgroundColor: '#f8fafc' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(59,130,246,0.2)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}>
                    <Phone className="h-4 w-4" />
                  </div>
                  <span>07411444292</span>
                </a>
              </li>
              <li>
                <a href="mailto:concierge@jpselite.com" className="flex items-center gap-3 transition-colors group" style={{ color: '#6b7280' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'} onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}>
                  <div className="p-2 rounded-lg transition-colors" style={{ backgroundColor: '#f8fafc' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(59,130,246,0.2)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}>
                    <Mail className="h-4 w-4" />
                  </div>
                  <span>YNaperez@aol.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3" style={{ color: '#6b7280' }}>
                  <div className="p-2 rounded-lg" style={{ backgroundColor: '#f8fafc' }}>
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span>London</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t" style={{ borderColor: '#e0f2fe' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: '#6b7280' }}>
              &copy; {new Date().getFullYear()} JP's Cleaning Service. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
