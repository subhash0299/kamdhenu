import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, User, Box, Mail, Phone } from 'lucide-react';

const MobileBottomNav = () => {
  const [visible, setVisible] = useState(true);
  let scrollTimeout: NodeJS.Timeout;

  useEffect(() => {
    const handleScroll = () => {
      setVisible(false);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setVisible(true), 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <nav
      className={`fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 shadow-lg z-50 transition-all duration-300
        ${visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
      `}
    >
      <div className="flex justify-around items-center py-2">
        <Link to="/" className="flex flex-col items-center text-xs text-slate-700 hover:text-orange-600">
          <Home className="w-6 h-6 mb-1" />
          Home
        </Link>
        <Link to="/profile" className="flex flex-col items-center text-xs text-slate-700 hover:text-orange-600">
          <User className="w-6 h-6 mb-1" />
          Profile
        </Link>
        <Link to="/products" className="flex flex-col items-center text-xs text-slate-700 hover:text-orange-600">
          <Box className="w-6 h-6 mb-1" />
          Product
        </Link>
        <Link to="/contact" className="flex flex-col items-center text-xs text-slate-700 hover:text-orange-600">
          <Mail className="w-6 h-6 mb-1" />
          Contact
        </Link>
        <a href="tel:9916082929" className="flex flex-col items-center text-xs text-slate-700 hover:text-orange-600">
          <Phone className="w-6 h-6 mb-1" />
          Call Us
        </a>
      </div>
    </nav>
  );
};

const MobileHomePage = () => {
  return (
    <div className="bg-white min-h-screen pb-16">
      {/* Header */}
      <header className="px-4 py-3 border-b border-slate-200 flex flex-col items-center">
        <div className="text-lg font-bold text-slate-800 mb-1">KAMDHENU STEEL</div>
        <div className="text-sm text-slate-600 flex items-center gap-2">
          <span>Bangalore, Karnataka</span>
        </div>
        <div className="text-xs text-slate-400 mt-1">GST : 29AMOPB9297N1ZZ</div>
      </header>

      {/* Search Bar */}
      <div className="px-4 py-3">
        <input
          type="text"
          placeholder="Search Products"
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      {/* Main Image Section */}
      <div className="px-4">
        <div className="rounded-xl overflow-hidden shadow-lg mb-2 relative">
          <img
            src="/Steel/Steel-1.jpeg"
            alt="Stainless Steel Chequered Plate"
            className="w-full h-56 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-2 text-base font-medium">
            Stainless Steel Chequered Plate
          </div>
          {/* WhatsApp & Call Floating Buttons */}
          <a
            href="https://wa.me/919916082929"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 right-3 bg-green-500 rounded-full p-2 shadow-lg"
          >
            <img src="/whatsapp.png" alt="WhatsApp" className="w-7 h-7" />
          </a>
          <a
            href="tel:9916082929"
            className="absolute bottom-14 right-3 bg-blue-500 rounded-full p-2 shadow-lg"
          >
            <Phone className="w-7 h-7 text-white" />
          </a>
        </div>
      </div>

      {/* Product Range Title */}
      <div className="px-4 mt-4 mb-2 text-lg font-semibold text-slate-800">
        Product Range
      </div>

      {/* Example Product List */}
      <div className="px-4">
        <div className="mb-3 text-base text-slate-700">Stainless Steel Angles</div>
        <div className="mb-3 text-base text-slate-700">Stainless Steel Coils</div>
        <div className="mb-3 text-base text-slate-700">Stainless Steel Pipes</div>
        <div className="mb-3 text-base text-slate-700">Stainless Steel Sheets</div>
        {/* Add more products as needed */}
      </div>

      {/* Bottom Navigation */}
      <MobileBottomNav />
    </div>
  );
};

export default MobileHomePage;