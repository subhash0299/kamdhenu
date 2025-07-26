import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '15+' },
    { icon: Users, label: 'Happy Customers', value: '500+' },
    { icon: Clock, label: 'Projects Completed', value: '1000+' },
    { icon: Shield, label: 'Warranty Years', value: '5' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(251,146,60,0.3),transparent_70%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-orange-600/20 to-orange-700/20 border border-orange-400/30 text-orange-300 rounded-full text-sm font-semibold mb-6 shadow-lg">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            About
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Kamdhenu Steel
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Crafting premium steel furniture with passion, precision, and dedication to excellence for over a decade
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
                Since 2009
              </span>
              <h2 className="text-4xl font-bold text-slate-800 mb-8">Our Story</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed text-justify">
                Established in 2009, Kamdhenu Steel Furnitures is a leading manufacturer, wholesaler, 
                and trader of Wooden Railing Pillars and Stainless Steel Railing Pillars. 
                Over the years, we have built a reputation for delivering superior-quality products that 
                combine strength, elegance, and functionality. Our commitment to excellence and attention 
                to detail has positioned us as a trusted name in the railing and steel furniture industry.
              </p>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed text-justify">
                We are a team of passionate craftsmen with over 15 years of experience, specializing in 
                modern steel furniture solutions for both residential and commercial spaces. Every piece 
                we create is thoughtfully designed and meticulously crafted to ensure long-lasting durability
                 and aesthetic appeal. Our focus on quality craftsmanship and innovative design enables us
                  to offer custom-designed furniture that meets the unique needs of our clients and exceeds 
                  their expectations.
              </p>
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center p-6 bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent mb-1">{stat.value}</div>
                      <div className="text-sm font-medium text-slate-600">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Workshop Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/aboutimage.jpg"
                  alt="Our workshop and team"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-lg">Quality Assured</div>
                    <div className="text-sm text-slate-600">ISO Certified Workshop</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
              Leadership
            </span>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Meet Our CEO</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center bg-gradient-to-br from-white to-slate-50 rounded-3xl p-10 shadow-2xl gap-12 border border-slate-100">
            {/* CEO Full Photo */}
            <img
              src="/ceo.png"
              alt="CEO"
              className="w-64 h-80 object-cover rounded-3xl border-4 border-orange-200 shadow-2xl"
            />
            {/* CEO About Text */}
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-slate-800 mb-3">Mr. Bhanwar Lal Bishnoi</h3>
              <div className="text-lg bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent font-bold mb-6">Founder & CEO</div>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Mr. Bhanwar Lal Dara founded Kamdhenu Steel with a vision to redefine steel furniture in India.
                With over a decade of experience, he has led the company to become a trusted name for quality and innovation.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Under his leadership, Kamdhenu Steel has delivered thousands of custom projects for homes and businesses,
                always focusing on durability, design, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
              Our Foundation
            </span>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'Quality First',
                description: 'We never compromise on the quality of materials and craftsmanship.',
                icon: Shield,
              },
              {
                title: 'Customer Focus',
                description: 'Your satisfaction is our priority. We listen and deliver.',
                icon: Users,
              },
              {
                title: 'Innovation',
                description: 'Constantly evolving our designs to meet modern needs.',
                icon: Award,
              },
            ].map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center p-8 bg-gradient-to-br from-white to-slate-50 rounded-3xl hover:shadow-2xl transition-all duration-500 border border-slate-100 group hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-orange-600 transition-colors">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.3),transparent_70%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-orange-600/20 to-orange-700/20 border border-orange-400/30 text-orange-300 rounded-full text-sm font-semibold mb-6 shadow-lg">
            Let's Connect
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Experience the difference that quality craftsmanship and personalized service can make
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:-translate-y-1"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;