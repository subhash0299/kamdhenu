import React from 'react';
import { Star } from 'lucide-react';

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: 'Industrial Dining Table',
      category: 'Tables',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Sturdy steel frame with wood top, perfect for modern dining spaces',
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Modern Steel Chair',
      category: 'Chairs',
      image: 'https://images.pexels.com/photos/1082355/pexels-photo-1082355.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Ergonomic design with cushioned seat for maximum comfort',
      rating: 4.9,
    },
    {
      id: 3,
      name: 'Display Rack Unit',
      category: 'Racks',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Multi-tier storage solution for organized display',
      rating: 4.7,
    },
    {
      id: 4,
      name: 'Steel Storage Cabinet',
      category: 'Cabinets',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Lockable storage with adjustable shelves for versatile use',
      rating: 4.6,
    },
    {
      id: 5,
      name: 'Office Desk Set',
      category: 'Tables',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete workstation setup for productive office environments',
      rating: 4.8,
    },
    {
      id: 6,
      name: 'Custom Steel Frame',
      category: 'Custom Orders',
      image: 'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Tailored to your exact specifications and requirements',
      rating: 5.0,
    },
    {
      id: 7,
      name: 'Steel Bookshelf',
      category: 'Racks',
      image: 'https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Minimalist design perfect for modern libraries and offices',
      rating: 4.7,
    },
    {
      id: 8,
      name: 'Conference Table',
      category: 'Tables',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Large steel table designed for professional meeting spaces',
      rating: 4.9,
    },
    {
      id: 9,
      name: 'Steel Bar Stool',
      category: 'Chairs',
      image: 'https://images.pexels.com/photos/1571464/pexels-photo-1571464.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Industrial style bar stool with adjustable height feature',
      rating: 4.5,
    },
  ];

  const categories = ['All', 'Tables', 'Chairs', 'Racks', 'Cabinets', 'Custom Orders'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Our Products</h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto px-4">
            Discover our range of premium steel furniture designed for durability and style
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-orange-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
            >
              <div className="relative overflow-hidden bg-white p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 sm:h-56 lg:h-64 object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-6 sm:top-8 right-6 sm:right-8 bg-white/90 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 flex items-center space-x-1">
                  <Star className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-400 fill-current" />
                  <span className="text-xs sm:text-sm font-medium">{product.rating}</span>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs sm:text-sm font-medium text-orange-600 bg-orange-50 px-2 sm:px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3">{product.name}</h3>
                <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 leading-relaxed">{product.description}</p>
                
                <div className="flex justify-center">
                  <button className="bg-slate-800 hover:bg-slate-900 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">Need Something Custom?</h3>
            <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 max-w-2xl mx-auto px-4">
              We specialize in creating bespoke steel furniture tailored to your exact needs. 
              From concept to completion, we bring your vision to life.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;