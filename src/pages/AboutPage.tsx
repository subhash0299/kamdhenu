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
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Kamdhenu Steel</h1>
          <p className="text-xl text-slate-1000 max-w-2xl mx-auto">
            Crafting premium steel furniture with passion, precision, and dedication to excellence for over a decade
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed text-justify">
                Established in 2009, Kamdhenu Steel Furnitures is a leading manufacturer, wholesaler, 
                and trader of Wooden Railing Pillars and Stainless Steel Railing Pillars. 
                Over the years, we have built a reputation for delivering superior-quality products that 
                combine strength, elegance, and functionality. Our commitment to excellence and attention 
                to detail has positioned us as a trusted name in the railing and steel furniture industry.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed text-justify">
                We are a team of passionate craftsmen with over 15 years of experience, specializing in 
                modern steel furniture solutions for both residential and commercial spaces. Every piece 
                we create is thoughtfully designed and meticulously crafted to ensure long-lasting durability
                 and aesthetic appeal. Our focus on quality craftsmanship and innovative design enables us
                  to offer custom-designed furniture that meets the unique needs of our clients and exceeds 
                  their expectations.
              </p>
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center p-4 bg-slate-50 rounded-lg">
                      <IconComponent className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
                      <div className="text-sm text-slate-600">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Workshop Image */}
            <div className="relative h-full flex items-stretch">
              <div className="relative overflow-hidden rounded-4xl shadow-4xl h-full flex items-stretch">
                <img
                  src="/aboutimage.jpg"
                  alt="Our workshop and team"
                  className="w-full h-full object-contain bg-white"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">Quality Assured</div>
                    <div className="text-sm text-slate-600">ISO Certified Workshop</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Meet Our CEO</h2>
          <div className="flex flex-col md:flex-row items-center bg-white rounded-xl p-8 shadow-lg gap-10">
            {/* CEO Full Photo */}
            <img
              src="/ceo.png"
              alt="CEO"
              className="w-56 h-72 object-cover rounded-2xl border-4 border-orange-600 shadow-lg"
            />
            {/* CEO About Text */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Mr. Bhanwar Lal Dara</h3>
              <div className="text-base text-orange-600 font-semibold mb-4">Founder & CEO</div>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Mr. Bhanwar Lal Dara founded Kamdhenu Steel with a vision to redefine steel furniture in India.
                With over a decade of experience, he has led the company to become a trusted name for quality and innovation.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Under his leadership, Kamdhenu Steel has delivered thousands of custom projects for homes and businesses,
                always focusing on durability, design, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <div key={index} className="text-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Work With Us?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Experience the difference that quality craftsmanship and personalized service can make
          </p>
          <Link
            to="/contact"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;