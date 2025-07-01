import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in your steel furniture. Can you provide more information?");
    window.open(`https://wa.me/919916082929?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Get in Touch</h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto px-4">
            Ready to transform your space with premium steel furniture? Let's discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4 sm:mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-sm sm:text-base"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-sm sm:text-base"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none text-sm sm:text-base"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4 sm:mb-6">Contact Information</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1 text-sm sm:text-base">Phone</h4>
                    <p className="text-slate-600 text-sm sm:text-base">Bhanwar lal Dara : 9916082929, 9620368553</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1 text-sm sm:text-base">Email</h4>
                    <p className="text-slate-600 text-sm sm:text-base break-all">kamdhenusteel29@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1 text-sm sm:text-base">Address</h4>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      No. 07, 2nd cross, 3rd main road, New Extension Area<br />
                      Kalasipalyam, Bengaluru - 560002
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1 text-sm sm:text-base">Business Hours</h4>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      Mon - Sat: 9:00 AM - 7:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsAppClick}
                className="w-full mt-4 sm:mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>

            {/* Google Map */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 sm:h-64 bg-slate-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-orange-600 mx-auto mb-2" />
                  <p className="text-slate-600 text-sm sm:text-base">Interactive Map</p>
                  <p className="text-xs sm:text-sm text-slate-500">
                    (Google Maps integration would go here)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;