import React from 'react';
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4">
              <img
                src="/logo.png"
                alt="Kamdhenu Steel Logo"
                className="h-6 sm:h-8 w-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="hidden w-6 h-6 sm:w-8 sm:h-8 bg-orange-600 rounded-lg items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-lg">K</span>
              </div>
              <span className="text-lg sm:text-xl font-bold">Kamdhenu Steel</span>
            </div>
            <p className="text-slate-300 mb-4 sm:mb-6 max-w-md text-sm sm:text-base leading-relaxed">
              Creating premium steel furniture for modern homes and offices. 
              Quality craftsmanship with a focus on durability and design.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-700 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-700 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-700 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Products', id: 'products' },
                { name: 'Gallery', id: 'gallery' },
                { name: 'About', id: 'about' },
                { name: 'Contact', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-300 hover:text-orange-400 transition-colors text-sm sm:text-base"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 flex-shrink-0" />
                <span className="text-slate-300 text-xs sm:text-sm">9916082929, 9620368553</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 flex-shrink-0" />
                <span className="text-slate-300 text-xs sm:text-sm break-all">kamdhenusteel29@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  No.7, 2nd Cross, 3rd Main Road, New Extension Area<br />
                  Kalasipalyam, Bengaluru - 560002
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-xs sm:text-sm text-center md:text-left">
            © 2025 Kamdhenu Steel. All rights reserved.
          </p>
          <div className="flex space-x-4 sm:space-x-6 mt-3 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-orange-400 text-xs sm:text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-orange-400 text-xs sm:text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;