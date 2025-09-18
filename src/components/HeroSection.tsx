import React from 'react';

const HeroSection = () => {
  // Single static image for mobile optimization
  const heroImage = 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1600';

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Static Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Kamdhenu Steel Furniture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Content - Mobile Optimized */}
      <div className="relative z-10 w-full px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <img
              src="/whitelogo.png"
              alt="Kamdhenu Steel"
              className="h-10 sm:h-12 md:h-16 mx-auto mb-4"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
          
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Kamdhenu Steel Furniture
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-orange-200 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Premium Steel Pillers & Pickots - Custom-built. Durable. Stylish.
          </p>
          
          <button
            onClick={scrollToProducts}
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore Our Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;