import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Palette, Shield, Truck, Award } from 'lucide-react';

const ProductDetailPage = () => {
  const { id } = useParams();
  
  // Mock product data with color variations
  const products = [
    {
      id: 1,
      name: 'Industrial Dining Table',
      category: 'Tables',
      baseImage: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Sturdy steel frame with wood top, perfect for modern dining spaces. This industrial-style dining table combines the durability of steel with the warmth of wood, creating a perfect centerpiece for your dining room.',
      fullDescription: 'Our Industrial Dining Table features a robust steel frame construction that ensures longevity and stability. The table top is crafted from premium quality wood that complements the industrial aesthetic while providing a warm, inviting surface for dining. Perfect for both residential and commercial spaces, this table can accommodate 6-8 people comfortably.',
      rating: 4.8,
      reviews: 124,
      dimensions: '180cm x 90cm x 75cm',
      weight: '45kg',
      material: 'Steel frame with solid wood top',
      warranty: '5 years',
      colors: [
        { name: 'Natural Steel', code: '#8B9DC3', image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { name: 'Black Steel', code: '#2C3E50', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { name: 'Bronze Steel', code: '#CD7F32', image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { name: 'White Steel', code: '#F8F9FA', image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800' }
      ],
      features: [
        'Heavy-duty steel construction',
        'Scratch-resistant surface',
        'Easy to clean and maintain',
        'Suitable for indoor and outdoor use',
        'Assembly required'
      ]
    },
    {
      id: 2,
      name: 'Modern Steel Chair',
      category: 'Chairs',
      baseImage: 'https://images.pexels.com/photos/1082355/pexels-photo-1082355.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Ergonomic design with cushioned seat for maximum comfort',
      fullDescription: 'Experience ultimate comfort with our Modern Steel Chair. Designed with ergonomics in mind, this chair features a contoured seat and backrest that provide excellent support for extended sitting periods.',
      rating: 4.9,
      reviews: 89,
      dimensions: '45cm x 50cm x 85cm',
      weight: '8kg',
      material: 'Steel frame with cushioned upholstery',
      warranty: '3 years',
      colors: [
        { name: 'Charcoal', code: '#36454F', image: 'https://images.pexels.com/photos/1082355/pexels-photo-1082355.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { name: 'Silver', code: '#C0C0C0', image: 'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { name: 'Copper', code: '#B87333', image: 'https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { name: 'Matte Black', code: '#28282B', image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800' }
      ],
      features: [
        'Ergonomic design',
        'Cushioned seat and backrest',
        'Stackable for easy storage',
        'Non-slip feet',
        'Easy assembly'
      ]
    },
    {
      id: 3,
      name: 'Display Rack Unit',
      category: 'Racks',
      baseImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Multi-tier storage solution for organized display',
      fullDescription: 'Maximize your storage and display capabilities with our versatile Display Rack Unit. Perfect for retail spaces, offices, or home organization.',
      rating: 4.7,
      reviews: 156,
      dimensions: '120cm x 40cm x 180cm',
      weight: '25kg',
      material: 'Powder-coated steel',
      warranty: '5 years',
      colors: [
        { name: 'Industrial Gray', code: '#71797E', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { name: 'Pure White', code: '#FFFFFF', image: 'https://images.pexels.com/photos/1571464/pexels-photo-1571464.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { name: 'Deep Black', code: '#000000', image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { name: 'Navy Blue', code: '#1B2951', image: 'https://images.pexels.com/photos/1082355/pexels-photo-1082355.jpeg?auto=compress&cs=tinysrgb&w=800' }
      ],
      features: [
        'Adjustable shelves',
        'High load capacity',
        'Powder-coated finish',
        'Modular design',
        'Tool-free assembly'
      ]
    }
  ];

  const product = products.find(p => p.id === parseInt(id || '1'));
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
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>
              </div>

              {/* Color Selection */}
              <div className="bg-slate-50 rounded-xl p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Palette className="w-5 h-5 text-orange-600" />
                  <h3 className="text-lg font-semibold text-slate-800">Available Colors</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => handleColorChange(index)}
                      className={`flex items-center space-x-3 p-3 rounded-lg border-2 transition-all ${
                        selectedColor === index
                          ? 'border-orange-600 bg-orange-50'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div
                        className="w-6 h-6 rounded-full border-2 border-white shadow-md"
                        style={{ backgroundColor: color.code }}
                      />
                      <span className="text-sm font-medium text-slate-700">{color.name}</span>
                    </button>
                  ))}
                </div>
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