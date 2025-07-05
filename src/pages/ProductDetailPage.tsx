import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Shield, Truck, Award } from 'lucide-react';
import { productData } from '../data/productData';

const ProductDetailPage = () => {
  const { id } = useParams();
  
  const product = productData.find(p => p.id === parseInt(id || '1'));
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedImage, setSelectedImage] = useState(product?.colors[0].image || '');

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Product Not Found</h1>
          <Link to="/products" className="text-orange-600 hover:text-orange-700">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleColorChange = (colorIndex: number) => {
    setSelectedColor(colorIndex);
    setSelectedImage(product.colors[colorIndex].image);
  };

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-slate-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-slate-600 hover:text-orange-600">Home</Link>
            <span className="text-slate-400">/</span>
            <Link to="/products" className="text-slate-600 hover:text-orange-600">Products</Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-800 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 text-slate-600 hover:text-orange-600 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Products</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white p-6">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="w-full h-96 lg:h-[500px] object-contain"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>
              </div>

              {/* Color Selection - Simple Round Boxes */}
              <div className="flex items-center justify-center space-x-3 py-4">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => handleColorChange(index)}
                    className={`w-8 h-8 rounded-full border-4 transition-all duration-200 hover:scale-110 ${
                      selectedColor === index
                        ? 'border-orange-600 shadow-lg scale-110'
                        : 'border-white shadow-md hover:border-slate-300'
                    }`}
                    style={{ backgroundColor: color.code }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <span className="inline-block text-sm font-medium text-orange-600 bg-orange-50 px-3 py-1 rounded-full mb-3">
                  {product.category}
                </span>
                <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">{product.name}</h1>
                
                {/* Rating and Reviews */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-slate-300'
                        }`}
                      />
                    ))}
                    <span className="text-lg font-semibold text-slate-800 ml-2">{product.rating}</span>
                  </div>
                  <span className="text-slate-600">({product.reviews} reviews)</span>
                </div>

                <p className="text-lg text-slate-600 leading-relaxed mb-6">{product.fullDescription}</p>
              </div>

              {/* Specifications */}
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm font-medium text-slate-600">Dimensions</span>
                    <p className="text-slate-800">{product.dimensions}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-slate-600">Weight</span>
                    <p className="text-slate-800">{product.weight}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-slate-600">Material</span>
                    <p className="text-slate-800">{product.material}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-slate-600">Warranty</span>
                    <p className="text-slate-800">{product.warranty}</p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 py-6 border-t border-slate-200">
                <div className="text-center">
                  <Shield className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-slate-800">Quality Assured</p>
                </div>
                <div className="text-center">
                  <Truck className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-slate-800">Free Delivery</p>
                </div>
                <div className="text-center">
                  <Award className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-slate-800">{product.warranty} Warranty</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <Link
                  to="/contact"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 px-6 rounded-lg font-semibold text-center block transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Get Custom Quote
                </Link>
                <button
                  onClick={() => {
                    const message = encodeURIComponent(`Hi! I'm interested in the ${product.name} in ${product.colors[selectedColor].name} color. Can you provide more information?`);
                    window.open(`https://wa.me/919916082929?text=${message}`, '_blank');
                  }}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg font-semibold transition-colors"
                >
                  Chat on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;