import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Award, Users, Clock, ArrowRight, Play, CheckCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Luxury Steel Furniture',
      subtitle: 'Where Craftsmanship Meets Innovation',
      description: 'Handcrafted excellence for discerning clients',
    },
    {
      image: 'https://images.pexels.com/photos/1082355/pexels-photo-1082355.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Bespoke Design Solutions',
      subtitle: 'Tailored to Your Vision',
      description: 'Custom creations that define luxury living',
    },
    {
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Timeless Elegance',
      subtitle: 'Built for Generations',
      description: 'Investment pieces that appreciate with time',
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Classic Steel Piller',
      category: 'Steel Pillers',
      image: '/white.png',
      description: 'Premium steel construction with elegant finish for modern interiors',
      rating: 4.9,
      price: '₹3,500',
      badge: 'Bestseller'
    },
    {
      id: 21,
      name: 'Classic Wooden Piller',
      category: 'Wooden Pillers',
      image: '/brown.png',
      description: 'Traditional wooden piller with natural wood grain and finish',
      rating: 4.8,
      price: '₹2,800',
      badge: 'New'
    },
    {
      id: 36,
      name: 'Clear Acrylic Piller',
      category: 'Acrylic Pillers',
      image: '/white.png',
      description: 'Crystal clear acrylic piller with transparent modern appeal',
      rating: 4.9,
      price: '₹4,200',
      badge: 'Premium'
    },
  ];

  const luxuryFeatures = [
    {
      icon: Award,
      title: 'Master Craftsmanship',
      description: 'Each piece is meticulously handcrafted by our master artisans with over 15 years of expertise',
      metric: '15+ Years'
    },
    {
      icon: Users,
      title: 'Elite Clientele',
      description: 'Trusted by luxury hotels, premium offices, and discerning homeowners across India',
      metric: '500+ Clients'
    },
    {
      icon: CheckCircle,
      title: 'Bespoke Solutions',
      description: 'Every creation is uniquely designed and tailored to your specific vision and requirements',
      metric: '1000+ Projects'
    },
    {
      icon: Sparkles,
      title: 'Lifetime Excellence',
      description: 'Premium materials and superior craftsmanship backed by our comprehensive warranty',
      metric: '5 Year Warranty'
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-screen overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            >
              <img
                src={slide.image}
                alt="Luxury steel furniture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
            </div>
          ))}
        </div>

        {/* Floating Particles Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 z-20 group"
        >
          <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
            <ChevronLeft className="w-6 h-6 text-white" />
          </div>
        </button>
        <button
          onClick={nextSlide}
          className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 z-20 group"
        >
          <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
            <ChevronRight className="w-6 h-6 text-white" />
          </div>
        </button>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-6">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-orange-600/20 to-orange-700/20 backdrop-blur-sm border border-orange-400/30 rounded-full text-orange-300 text-sm font-medium mb-4 shadow-lg">
                ✨ Premium Steel Furniture Specialists
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent">
                {slides[currentSlide].title}
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-orange-200 mb-4 font-light">
              {slides[currentSlide].subtitle}
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              {slides[currentSlide].description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="group relative overflow-hidden bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Explore Collection</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Link>
              
              <Link
                to="/gallery"
                className="group flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                <span>Watch Process</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Elegant Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-500 ${
                index === currentSlide 
                  ? 'w-12 h-3 bg-white rounded-full' 
                  : 'w-3 h-3 bg-white/40 rounded-full hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.1),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-orange-100 to-orange-50 text-orange-600 rounded-full text-sm font-semibold mb-6 shadow-lg">
              Why Choose Excellence
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
              Crafted for the
              <span className="block bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                Extraordinary
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Every piece tells a story of uncompromising quality, innovative design, and masterful execution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {luxuryFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="group relative">
                  <div className="relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 group-hover:-translate-y-2 overflow-hidden">
                    {/* Gradient Background on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className="text-center mb-4">
                        <div className="text-3xl font-bold text-orange-600 mb-1">{feature.metric}</div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                      </div>
                      
                      <p className="text-slate-600 leading-relaxed text-center">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.3),transparent_70%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-orange-600/20 to-orange-700/20 border border-orange-400/30 text-orange-300 rounded-full text-sm font-semibold mb-6 shadow-lg">
              Signature Collection
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Masterpiece
              <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Creations
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Discover our most coveted designs, each piece a testament to exceptional craftsmanship
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="group relative">
                <div className="relative bg-white rounded-3xl shadow-2xl hover:shadow-orange-500/20 transition-all duration-700 overflow-hidden group-hover:-translate-y-3">
                  {/* Product Badge */}
                  <div className="absolute top-6 left-6 z-20">
                    <span className={`px-4 py-2 rounded-full text-xs font-semibold shadow-lg ${
                      product.badge === 'Bestseller' ? 'bg-gradient-to-r from-green-500 to-green-600 text-white' :
                      product.badge === 'New' ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' :
                      'bg-gradient-to-r from-purple-500 to-purple-600 text-white'
                    }`}>
                      {product.badge}
                    </span>
                  </div>

                  {/* Product Image */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 p-8 h-80">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1 shadow-lg">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold text-slate-800">{product.rating}</span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="mb-4">
                      <span className="text-sm font-medium text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-orange-600 transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-slate-600 mb-6 leading-relaxed">{product.description}</p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">{product.price}</div>
                    </div>
                    
                    <Link
                      to={`/products/${product.id}`}
                      className="group/btn relative w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2 overflow-hidden"
                    >
                      <span className="relative z-10">Explore Details</span>
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/products"
              className="group inline-flex items-center space-x-2 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:-translate-y-1"
            >
              <span>View Complete Collection</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Luxury CTA Section */}
      <section className="py-32 bg-gradient-to-br from-slate-800 via-slate-900 to-black relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-orange-600/20 to-orange-700/20 border border-orange-400/30 text-orange-300 rounded-full text-sm font-semibold mb-8 shadow-lg">
              Ready to Begin Your Journey?
            </span>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Transform Your Space with
              <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Luxury Steel Furniture
              </span>
            </h2>
            
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience the pinnacle of craftsmanship. Let us create something extraordinary for your space.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Get Exclusive Quote</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Link>
              
              <Link
                to="/gallery"
                className="group bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View Our Process</span>
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;