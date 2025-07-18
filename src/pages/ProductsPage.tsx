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

  const categories = ['All', 'Steel Pillers', 'Wooden Pillers', 'Acrylic Pillers'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-slate-1000 max-w-2xl mx-auto">
            Discover our comprehensive range of premium steel furniture designed for durability, style, and functionality
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 px-4">
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
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
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
                </div>
                
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs sm:text-sm font-medium text-orange-600 bg-orange-50 px-2 sm:px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                    <div className="text-sm font-bold text-slate-800">{product.price}</div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3">{product.name}</h3>
                  <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 leading-relaxed">{product.description}</p>
                  
                  <div className="flex justify-center">
                    <Link
                      to={`/products/${product.id}`}
                      className="bg-slate-800 hover:bg-slate-900 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Need Custom Pillers?</h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                We specialize in creating custom pillers in steel, wood, and acrylic materials tailored to your exact specifications. 
                From residential to commercial projects, we bring your vision to life.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;