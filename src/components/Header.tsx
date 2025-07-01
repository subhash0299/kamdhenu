import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img
              src="/logo.png"
              alt="Kamdhenu Steel Logo"
              className="h-8 sm:h-10 w-auto object-contain"
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
            <span className={`text-lg sm:text-xl font-bold transition-colors ${
              isScrolled ? 'text-slate-800' : 'text-white'
            }`}>
              Kamdhenu Steel
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {['home', 'products', 'gallery', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize font-medium transition-colors hover:text-orange-600 ${
                  isScrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm rounded-lg mb-4 shadow-lg">
            <nav className="flex flex-col py-2">
              {['home', 'products', 'gallery', 'about', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize font-medium text-slate-700 hover:text-orange-600 hover:bg-orange-50 px-4 py-3 text-left transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;