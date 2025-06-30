import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '10+' },
    { icon: Users, label: 'Happy Customers', value: '500+' },
    { icon: Clock, label: 'Projects Completed', value: '1000+' },
    { icon: Shield, label: 'Warranty Years', value: '5' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">About Us</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              We are a team of passionate craftsmen specializing in modern steel furniture. 
              With 10+ years of experience, we deliver long-lasting, custom-designed furniture 
              solutions for homes and businesses.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our commitment to quality craftsmanship and innovative design has made us a 
              trusted name in the steel furniture industry. Every piece is meticulously 
              crafted to meet the highest standards of durability and aesthetics.
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

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our workshop and team"
                className="w-full h-96 object-cover"
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

        {/* Our Values */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">Our Values</h3>
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
                  <h4 className="text-xl font-bold text-slate-800 mb-2">{value.title}</h4>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;