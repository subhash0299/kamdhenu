import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Award, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Modern Steel Furniture for Homes & Offices',
      subtitle: 'Custom-built. Durable. Stylish.',
    },
    {
      image: 'https://images.pexels.com/photos/1082355/pexels-photo-1082355.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Industrial Design Meets Comfort',
      subtitle: 'Handcrafted steel furniture for modern living.',
    },
    {
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Built to Last Generations',
      subtitle: 'Premium quality steel construction.',
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Industrial Dining Table',
      category: 'Tables',
      image: '/white.png',
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
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Image Slider */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt="Steel furniture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="hidden sm:block absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="hidden sm:block absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
        >
          <ChevronRight size={20} />
        </button>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              {slides[currentSlide].subtitle}
            </p>
            <Link
              to="/products"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Explore Our Products
            </Link>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Products</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover our most popular steel furniture pieces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
              >
                <div className="relative overflow-hidden bg-white p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <span className="text-sm font-medium text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 mt-3">{product.name}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{product.description}</p>
                  
                  <Link
                    to={`/products/${product.id}`}
                    className="block text-center bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Why Choose Kamdhenu Steel?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We deliver excellence in every piece of furniture we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, label: 'Years Experience', value: '15+', description: 'Decade of expertise' },
              { icon: Users, label: 'Happy Customers', value: '500+', description: 'Satisfied clients' },
              { icon: Clock, label: 'Projects Completed', value: '1000+', description: 'Successful deliveries' },
              { icon: Award, label: 'Warranty Years', value: '5', description: 'Quality guarantee' },
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-slate-800 mb-1">{stat.value}</div>
                  <div className="text-lg font-semibold text-slate-700 mb-2">{stat.label}</div>
                  <div className="text-sm text-slate-600">{stat.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Space?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Get in touch with us today for a custom quote on your steel furniture needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Quote
            </Link>
            <Link
              to="/gallery"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;