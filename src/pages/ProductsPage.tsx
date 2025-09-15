import React from 'react';
import { Link } from 'react-router-dom';
import { productData } from '../data/productData';

const ProductsPage = () => {
  // Import products from data file
  const products = productData.map(product => ({
    id: product.id,
    name: product.name,
    category: product.category,
    image: product.baseImage,
    description: product.description,
    rating: product.rating,
    price: product.price
  }));

  // Pickot images from pickot1 folder
  const pickotImages = [
    '/pickot1/Untitled-1.jpeg', '/pickot1/Untitled-2.jpeg', '/pickot1/Untitled-3.jpeg', '/pickot1/Untitled-4.jpeg',
    '/pickot1/Untitled-5.jpeg', '/pickot1/Untitled-6.jpeg', '/pickot1/Untitled-7.jpeg', '/pickot1/Untitled-8.jpeg',
    '/pickot1/Untitled-9.jpeg', '/pickot1/Untitled-10.jpeg', '/pickot1/Untitled-11.jpeg', '/pickot1/Untitled-12.jpeg',
    '/pickot1/Untitled-13.jpeg', '/pickot1/Untitled-14.jpeg', '/pickot1/Untitled-15.jpeg', '/pickot1/Untitled-16.jpeg',
    '/pickot1/Untitled-17.jpeg', '/pickot1/Untitled-18.jpeg',
    '/pickot1/p1 (1).jpeg', '/pickot1/p1 (2).jpeg', '/pickot1/p1 (3).jpeg', '/pickot1/p1 (4).jpeg',
    '/pickot1/p1 (5).jpeg', '/pickot1/p1 (6).jpeg', '/pickot1/p1 (7).jpeg', '/pickot1/p1 (8).jpeg',
    '/pickot1/p1 (9).jpeg', '/pickot1/p1 (10).jpeg', '/pickot1/p1 (11).jpeg', '/pickot1/p1 (12).jpeg',
    '/pickot1/p1 (13).jpeg', '/pickot1/p1 (14).jpeg', '/pickot1/p1 (15).jpeg', '/pickot1/p1 (16).jpeg',
    '/pickot1/p1 (17).jpeg', '/pickot1/p1 (18).jpeg', '/pickot1/p1 (19).jpeg', '/pickot1/p1 (20).jpeg',
    '/pickot1/p1 (21).jpeg', '/pickot1/p1 (22).jpeg', '/pickot1/p1 (23).jpeg', '/pickot1/p1 (24).jpeg',
    '/pickot1/p1 (25).jpeg', '/pickot1/p1 (26).jpeg', '/pickot1/p1 (27).jpeg', '/pickot1/p1 (28).jpeg',
    '/pickot1/p1 (29).jpeg'
  ];

  const pickotNames = [
    'Classic Pickot Design', 'Modern Pickot Style', 'Elegant Pickot Pattern', 'Traditional Pickot',
    'Contemporary Pickot', 'Decorative Pickot', 'Premium Pickot Design', 'Luxury Pickot Style',
    'Artistic Pickot Pattern', 'Designer Pickot', 'Custom Pickot Design', 'Handcrafted Pickot',
    'Ornamental Pickot', 'Stylish Pickot', 'Refined Pickot Design', 'Sophisticated Pickot',
    'Unique Pickot Pattern', 'Exclusive Pickot Style'
  ];

  // Generate pickot products
  const pickotProducts = pickotImages.map((image, index) => ({
    id: 1000 + index,
    name: pickotNames[index % pickotNames.length] + ` ${Math.floor(index / pickotNames.length) + 1}`,
    category: 'Pickots',
    image: image,
    description: 'Premium quality pickot with intricate design patterns for decorative applications',
    rating: (4.3 + Math.random() * 0.7).toFixed(1),
    price: `₹${(1500 + Math.floor(Math.random() * 2000)).toLocaleString()}`
  }));

  const categories = ['All', 'Steel Pillers', 'Wooden Pillers', 'Acrylic Pillers', 'SmallPillers'];
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [activeSection, setActiveSection] = React.useState('pillers'); // New state for section toggle

  // Listen for custom events from HomePage
  React.useEffect(() => {
    const handleSetSection = (event: CustomEvent) => {
      setActiveSection(event.detail);
    };

    window.addEventListener('setProductSection', handleSetSection as EventListener);
    
    return () => {
      window.removeEventListener('setProductSection', handleSetSection as EventListener);
    };
  }, []);

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="pt-20 bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(251,146,60,0.3),transparent_70%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Our Products
            <span className="block bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent mt-2">
              Pillers & Pickots
            </span>
          </h1>

        </div>
      </section>

      {/* Section Toggle */}
      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-0"> {/* changed from mb-8 to mb-2 */}
            <div className="bg-slate-100 p-2 rounded-2xl shadow-lg">
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveSection('pillers')}
                  className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                    activeSection === 'pillers'
                      ? 'bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-lg transform scale-105'
                      : 'text-slate-600 hover:text-orange-600 hover:bg-white/50'
                  }`}
                >
                  Pillers
                </button>
                <button
                  onClick={() => setActiveSection('pickots')}
                  className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                    activeSection === 'pickots'
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg transform scale-105'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-white/50'
                  }`}
                >
                  Pickots
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pillers Section */}
      {activeSection === 'pillers' && (
      <section className="py-12 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-4 -mt-5 px-4"> {/* changed mb-16 to mb-4 and added -mt-4 */}
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-orange-500/25'
                    : 'bg-white text-slate-700 hover:bg-gradient-to-r hover:from-slate-100 hover:to-slate-50 border border-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-2 border border-slate-100"
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white p-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 sm:h-48 lg:h-56 object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs sm:text-sm font-semibold text-orange-600 bg-gradient-to-r from-orange-50 to-orange-100 px-3 py-1 rounded-full shadow-sm">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors">{product.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed line-clamp-2">{product.description}</p>
                  
                  <div className="flex justify-center">
                    <Link
                      to={`/products/${product.id}`}
                      className="w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Pickots Section */}
      {activeSection === 'pickots' && (
      <section className="py-12 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


          {/* Pickots Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
            {pickotProducts.map((pickot) => (
              <div
                key={pickot.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-2 border border-slate-100"
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white p-4">
                  <img
                    src={pickot.image}
                    alt={pickot.name}
                    className="w-full h-32 sm:h-40 object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-xs font-semibold text-blue-600 bg-gradient-to-r from-blue-50 to-blue-100 px-2 py-1 rounded-full shadow-sm">
                      {pickot.category}
                    </span>
                  </div>
                  
                  <h3 className="text-sm font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors text-center line-clamp-2">{pickot.name}</h3>
                  
                  <div className="flex justify-center">
                    <button
                      onClick={() => {
                        const message = encodeURIComponent(`Hi! I'm interested in the ${pickot.name}. Can you provide more information?`);
                        window.open(`https://wa.me/919916082929?text=${message}`, '_blank');
                      }}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Inquire Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-br from-slate-900 to-black rounded-3xl p-12 shadow-2xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.3),transparent_70%)]" />
              </div>
              
              <div className="relative z-10">
                <span className="inline-block px-4 py-2 bg-orange-600/20 border border-orange-400/30 text-orange-300 rounded-full text-sm font-semibold mb-6">
                  Custom Solutions
                </span>
                <h3 className="text-3xl font-bold text-white mb-4">Need Custom Products?</h3>
                <p className="text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  We specialize in creating custom {activeSection} tailored to your exact specifications. 
                  From residential to commercial projects, we bring your vision to life.
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:-translate-y-1"
                >
                  Get Custom Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;