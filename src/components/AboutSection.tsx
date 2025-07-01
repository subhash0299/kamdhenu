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
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* About Us Section */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">About Us</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <p className="text-base sm:text-lg text-slate-600 mb-4 sm:mb-6 leading-relaxed">
                We are a team of passionate craftsmen specializing in modern steel furniture. 
                With 10+ years of experience, we deliver long-lasting, custom-designed furniture 
                solutions for homes and businesses.
              </p>
              <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                Our commitment to quality craftsmanship and innovative design has made us a 
                trusted name in the steel furniture industry. Every piece is meticulously 
                crafted to meet the highest standards of durability and aesthetics.
              </p>
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center p-3 sm:p-4 bg-slate-50 rounded-lg">
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600 mx-auto mb-2" />
                      <div className="text-xl sm:text-2xl font-bold text-slate-800">{stat.value}</div>
                      <div className="text-xs sm:text-sm text-slate-600">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Workshop Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Our workshop and team"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 bg-white p-4 sm:p-6 rounded-xl shadow-xl border">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-600 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm sm:text-base">Quality Assured</div>
                    <div className="text-xs sm:text-sm text-slate-600">ISO Certified Workshop</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CEO Section */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 sm:mb-8">About Our CEO</h3>
          <div className="flex flex-col md:flex-row items-center bg-slate-50 rounded-xl p-6 sm:p-8 shadow-sm gap-6 sm:gap-10">
            {/* CEO Full Photo */}
            <img
<<<<<<< HEAD
              src="/public/ceo.png" // bhanwara dara pic
=======
              src="https://randomuser.me/api/portraits/men/32.jpg"
>>>>>>> 5844b8b892a704fe78c4c50438eafca8d83dccee
              alt="CEO"
              className="w-40 h-48 sm:w-48 sm:h-60 lg:w-56 lg:h-72 object-cover rounded-xl sm:rounded-2xl border-4 border-orange-600 shadow-lg"
            />
            {/* CEO About Text */}
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">Mr. Bhanwar Lal Dara</h4>
              <div className="text-sm sm:text-base text-orange-600 font-semibold mb-3">Founder & CEO</div>
              <p className="text-sm sm:text-base text-slate-600 mb-2 leading-relaxed">
                Mr. Bhanwar Lal Dara founded Kamdhenu Steel with a vision to redefine steel furniture in India.
                With over a decade of experience, he has led the company to become a trusted name for quality and innovation.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Under his leadership, Kamdhenu Steel has delivered thousands of custom projects for homes and businesses,
                always focusing on durability, design, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mt-8 sm:mt-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-8 sm:mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
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
                <div key={index} className="text-center p-4 sm:p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">{value.title}</h4>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{value.description}</p>
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