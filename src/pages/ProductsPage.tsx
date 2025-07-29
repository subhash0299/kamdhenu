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

  const categories = ['All', 'Steel Pillers', 'Wooden Pillers', 'Acrylic Pillers','SmallPillers'];
  const [activeCategory, setActiveCategory] = React.useState('All');

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
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-orange-600/20 to-orange-700/20 border border-orange-400/30 text-orange-300 rounded-full text-sm font-semibold mb-6 shadow-lg">
            Premium Collection
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Luxury
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Pillers Collection
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of premium pillers in steel, wood, and acrylic - each piece crafted to perfection
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-16 px-4">
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
                    {/*<div className="text-sm font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">{product.price}</div> */}
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

          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-br from-slate-900 to-black rounded-3xl p-12 shadow-2xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.3),transparent_70%)]" />
              </div>
              
              <div className="relative z-10">
                <span className="inline-block px-4 py-2 bg-orange-600/20 border border-orange-400/30 text-orange-300 rounded-full text-sm font-semibold mb-6">
                  Custom Solutions
                </span>
                <h3 className="text-3xl font-bold text-white mb-4">Need Custom Pillers?</h3>
                <p className="text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                We specialize in creating custom pillers in steel, wood, and acrylic materials tailored to your exact specifications. 
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