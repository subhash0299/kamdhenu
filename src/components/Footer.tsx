import React, { useState } from 'react';
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <footer className="bg-slate-800 text-white">
      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white text-slate-800 rounded-lg shadow-lg max-w-lg w-full p-6 relative">
            <button
              className="absolute top-2 right-2 text-slate-500 hover:text-orange-600 text-xl"
              onClick={() => setShowPrivacy(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Privacy Policy</h2>
            <div className="text-sm space-y-2 max-h-80 overflow-y-auto">
              <p>
                At Kamdhenu Steel Furnitures, we value your privacy. Any information you provide is used solely 
                for communication and order processing purposes. We do not share, sell, or disclose your data to 
                third parties under any circumstances.
              </p>
              <p>
                If you have any questions or concerns regarding your privacy or how your information is used, 
                please feel free to contact us at kamdhenusteel29@gmail.com.


              </p>
              {/* Add more privacy policy content as needed */}
            </div>
          </div>
        </div>
      )}

      {/* Terms & Conditions Modal */}
      {showTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white text-slate-800 rounded-lg shadow-lg max-w-lg w-full p-6 relative">
            <button
              className="absolute top-2 right-2 text-slate-500 hover:text-orange-600 text-xl"
              onClick={() => setShowTerms(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Terms & Conditions</h2>
            <div className="text-sm space-y-2 max-h-80 overflow-y-auto">
              <p>
                By using Kamdhenu Steel Furnitures' website and services, you agree to our terms and conditions. All products, prices, and services are subject to change without notice.
              </p>
              <p>
                Orders are processed upon receipt of payment. We are not responsible for delays caused by external factors. For any disputes, please contact us directly.
              </p>
              {/* Add more terms and conditions content as needed */}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/whitelogo.png"
                alt="Kamdhenu Steel Logo"
                className="h-6 sm:h-8 w-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="hidden w-8 h-8 bg-orange-600 rounded-lg items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-lg sm:text-xl font-bold">Kamdhenu Steel</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Creating premium steel furniture for modern homes and offices. 
              Quality craftsmanship with a focus on durability and design.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/kamdhenusteelfurniture?igsh=MTF1MWF1eTFtNG00NQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-700 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/YOUR_FACEBOOK_PAGE"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-700 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/YOUR_YOUTUBE_CHANNEL"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-700 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Products', path: '/products' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-orange-400" />
                <span className="text-slate-300">9916082929, 9620368553</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-orange-400" />
                <span className="text-slate-300">kamdhenusteel29@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-orange-400 mt-0.5" />
                <span className="text-slate-300">
                  No.7, 2nd Cross, 3rd Main Road, New Extension Area<br />
                  Kalasipalyam, Bengaluru - 560002
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2025 Kamdhenu Steel. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button
              type="button"
              className="text-slate-400 hover:text-orange-400 text-sm transition-colors focus:outline-none"
              onClick={() => setShowPrivacy(true)}
            >
              Privacy Policy
            </button>
            <button
              type="button"
              className="text-slate-400 hover:text-orange-400 text-sm transition-colors focus:outline-none"
              onClick={() => setShowTerms(true)}
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;