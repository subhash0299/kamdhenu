import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, User, Box, Mail, Phone } from 'lucide-react';
const images = [
  "/home/home1.jpg",
  "/home/home2.jpg",
  "/home/home3.jpg",
  "/home/home4.jpg",
  "/home/home5.jpg"
];

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
  const navigate = useNavigate();

  const handleViewDetails = (section: 'pillers' | 'pickots') => {
    navigate('/products');
    setTimeout(() => {
      const event = new CustomEvent('setProductSection', { detail: section });
      window.dispatchEvent(event);
    }, 100);
  };

  // Slideshow logic
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white min-h-screen pb-16 relative">
      {/* Header */}
      <header className="px-4 py-3 border-b border-slate-200 flex flex-col items-center">
        <div className="text-lg font-bold text-slate-800 mb-1">KAMDHENU STEEL FURNITURE</div>
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

      {/* Main Image Section (Slideshow) */}
      <div className="px-4">
        <div className="rounded-xl overflow-hidden shadow-lg mb-2 relative">
          <img
            src={images[currentImage]}
            alt={`Home Slide ${currentImage + 1}`}
            className="w-full h-56 object-cover transition-all duration-700"
          />
          {/* Dots indicator */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`inline-block w-2 h-2 rounded-full ${idx === currentImage ? 'bg-orange-600' : 'bg-slate-300'} transition-all`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Product Range Title */}
      <div className="px-4 mt-4 mb-2 text-lg font-semibold text-slate-800">
        Product Range
      </div>

    {/* 
       Example Product List 
      <div className="px-4">
        <div className="mb-3 text-base text-slate-700">Stainless Steel Angles</div>
        <div className="mb-3 text-base text-slate-700">Stainless Steel Coils</div>
        <div className="mb-3 text-base text-slate-700">Stainless Steel Pipes</div>
        <div className="mb-3 text-base text-slate-700">Stainless Steel Sheets</div>

      </div>
    */}

      {/* Product Cards Section */}
      <div className="px-4 mt-4">
        {/* Product 1 */}
        <div className="bg-white rounded-xl shadow border mb-4 p-4 flex flex-col relative">
          <div className="text-lg font-semibold text-slate-800 mb-2">Acrylic Master Piller</div>
          <div className="flex gap-3 mb-2">
            <img src="/BigAcrylic/BigAcrylic-8.jpeg" alt="Stainless Steel Valve" className="w-28 h-28 object-contain rounded" />
            <div className="text-xs text-slate-700">
              <div><span className="font-bold">Thickness :</span> 10-80mm</div>
              <div><span className="font-bold">Country of Origin :</span> India</div>
              <div><span className="font-bold">Surface Finishing :</span> Coated, Polished</div>
              <div><span className="font-bold">Specialty :</span> Corrosion Proof, High Strength</div>
              <div><span className="font-bold">Length :</span> 1-3000mm</div>
            </div>
          </div>
            <div className="flex justify-center mt-2">
              <Link to="/products"
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-semibold shadow transition-all duration-300">
              
                View More
              </Link>
            </div>
        </div>
        {/* Product 2 */}
        <div className="bg-white rounded-xl shadow border mb-4 p-4 flex flex-col relative">
          <div className="text-lg font-semibold text-slate-800 mb-2">Acrylic Pillers</div>
          <div className="flex gap-3 mb-2">
            <img src="/SmallAcrylic/blue.jpeg" alt="Stainless Steel Strips" className="w-28 h-28 object-contain rounded" />
            <div className="text-xs text-slate-700">
              <div><span className="font-bold">Thickness :</span> 0.5-3mm</div>
              <div><span className="font-bold">Country of Origin :</span> India</div>
              <div><span className="font-bold">Surface Finishing :</span> Polished</div>
              <div><span className="font-bold">Specialty :</span> High Strength</div>
              <div><span className="font-bold">Length :</span> Custom</div>
            </div>
          </div>
            <div className="flex justify-center mt-2">
              <Link to="/products"
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-semibold shadow transition-all duration-300">
              
                View More
              </Link>
            </div>
        </div>
        {/* Product 3 */}
        <div className="bg-white rounded-xl shadow border mb-4 p-4 flex flex-col relative">
          <div className="text-lg font-semibold text-slate-800 mb-2">Acrylic Pillers</div>
          <div className="flex gap-3 mb-2">
            <img src="/MiddleAcrylic/blue.jpeg" alt="Stainless Steel Coils" className="w-28 h-28 object-contain rounded" />
            <div className="text-xs text-slate-700">
              <div><span className="font-bold">Thickness :</span> 0.5-5mm</div>
              <div><span className="font-bold">Country of Origin :</span> India</div>
              <div><span className="font-bold">Surface Finishing :</span> Polished</div>
              <div><span className="font-bold">Specialty :</span> Flexible, Durable</div>
              <div><span className="font-bold">Length :</span> Custom</div>
            </div>
          </div>
            <div className="flex justify-center mt-2 w-full">
              <Link to="/products"
                className="w-full text-center bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-semibold shadow transition-all duration-300">
              
                View More
              </Link>
            </div>
        </div>
        {/* Product 4 */}
        <div className="bg-white rounded-xl shadow border mb-4 p-4 flex flex-col relative">
          <div className="text-lg font-semibold text-slate-800 mb-2">Wooden Master Pillers</div>
          <div className="flex gap-3 mb-2">
            <img src="/wooden/wood-3.jpeg" alt="Stainless Steel Pipes" className="w-28 h-28 object-contain rounded" />
            <div className="text-xs text-slate-700">
              <div><span className="font-bold">Thickness :</span> 1-10mm</div>
              <div><span className="font-bold">Country of Origin :</span> India</div>
              <div><span className="font-bold">Surface Finishing :</span> Polished</div>
              <div><span className="font-bold">Specialty :</span> High Strength</div>
              <div><span className="font-bold">Length :</span> Custom</div>
            </div>
          </div>
            <div className="flex justify-center mt-2">
              <Link to="/products"
                className="w-full text-center bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-semibold shadow transition-all duration-300">
              
                View More
              </Link>
            </div>
        </div>
        {/* Product 5 */}
          <div className="bg-white rounded-xl shadow border mb-4 p-4 flex flex-col relative">
          <div className="text-lg font-semibold text-slate-800 mb-2">Wooden Master Pillers</div>
            
            <div className="flex gap-4 mb-3">
              {/* Bigger Image */}
              <img
                src="/Steel/Steel-1.jpeg"
                alt="Stainless Steel Sheets"
                className="w-28 h-28 object-contain rounded"
              />

              {/* Bigger Text */}
            <div className="text-xs text-slate-700">
                <div><span className="font-bold">Thickness :</span> 0.5-5mm</div>
                <div><span className="font-bold">Country of Origin :</span> India</div>
                <div><span className="font-bold">Surface Finishing :</span> Polished</div>
                <div><span className="font-bold">Specialty :</span> Durable</div>
                <div><span className="font-bold">Length :</span> Custom</div>
              </div>
            </div>

            {/* Button Full Width */}
            <div className="flex justify-center mt-2">
              <Link
                to="/products"
                className="w-full text-center bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold shadow transition-all duration-300"
              >
                View More
              </Link>
            </div>
          </div>

        {/* Product 6 */}
        <div className="bg-white rounded-xl shadow border mb-4 p-4 flex flex-col relative">
          <div className="text-lg font-semibold text-slate-800 mb-2">Stainless Steel Chequered Plate</div>
          <div className="flex gap-3 mb-2">
            <img src="/BigAcrylic/BigAcrylic-1.jpeg" alt="Stainless Steel Chequered Plate" className="w-28 h-28 object-contain rounded" />
            <div className="text-xs text-slate-700">
              <div><span className="font-bold">Thickness :</span> 1-8mm</div>
              <div><span className="font-bold">Country of Origin :</span> India</div>
              <div><span className="font-bold">Surface Finishing :</span> Patterned</div>
              <div><span className="font-bold">Specialty :</span> Anti-slip, Durable</div>
              <div><span className="font-bold">Length :</span> Custom</div>
            </div>
          </div>
            <div className="flex justify-center mt-2">
              <Link to="/products"
                className="w-full text-center bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-semibold shadow transition-all duration-300">
              
                View More
              </Link>
            </div>
        </div>
      </div>

      {/* Floating Social Media Buttons */}
      <div className="fixed right-3 bottom-24 z-50 flex flex-col gap-4 items-center">
        
        {/* WhatsApp */}
        <a
          href="https://wa.me/919916082929"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full shadow-lg overflow-hidden"
        >
          <img src="/social/whatsapp.png" alt="WhatsApp" className="w-full h-full object-cover" />
        </a>

        {/* Phone */}
        <a
          href="tel:9916082929"
          className="bg-blue-500 rounded-full p-2 shadow-lg"
        >
          <Phone className="w-7 h-7 text-white" />
        </a>

        {/* Instagram */}
        <a
        href="https://instagram.com/kamdhenusteelfurniture"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full shadow-lg overflow-hidden"
        >
        <img 
            src="/social/instagram.png" 
            alt="Instagram" 
            className="w-full h-full object-cover"
        />
        </a>

        {/* Facebook */}
        <a
          href="https://facebook.com/YOUR_FACEBOOK"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full shadow-lg overflow-hidden"
        >
          <img src="/social/facebook.png" alt="Facebook" className="w-full h-full object-cover" />
        </a>
        {/* YouTube */}
        <a
          href="https://youtube.com/YOUR_YOUTUBE"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full shadow-lg overflow-hidden"
        >
          <img src="/social/youtube.png" alt="YouTube" className="w-full h-full object-cover" />
        </a>
      </div>

      {/* Bottom Navigation */}
      <MobileBottomNav />
    </div>
  );
};

export default MobileHomePage;