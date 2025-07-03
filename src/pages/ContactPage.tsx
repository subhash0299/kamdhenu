import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in your steel furniture. Can you provide more information?");
    window.open(`https://wa.me/919916082929?text=${message}`, '_blank');
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to transform your space with premium steel furniture? Let's discuss your project and bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              {/* Contact Details */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1 text-sm sm:text-base">Phone</h3>
                      <p className="text-slate-600 text-sm sm:text-base">Bhanwar lal Dara : 9916082929, 9620368553</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">Email</h3>
                      <p className="text-slate-600">kamdhenusteel29@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">Address</h3>
                      <p className="text-slate-600">
                        No. 07, 2nd cross, 3rd main road, New Extension Area<br />
                        Kalasipalyam, Bengaluru - 560002
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">Business Hours</h3>
                      <p className="text-slate-600">
                        Mon - Sat: 9:00 AM - 7:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Google Map moved next to Contact Information */}
            <div className="flex items-stretch">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex-1 flex flex-col">
                <div className="p-6 border-b border-slate-200">
                  <h2 className="text-2xl font-bold text-slate-800">Visit Our Workshop</h2>
                  <p className="text-slate-600 mt-2">Come see our craftsmanship in action</p>
                </div>
                <div
                  className="h-96 cursor-pointer transition hover:opacity-90 flex-1 flex flex-col items-center justify-center bg-slate-100"
                  onClick={() =>
                    window.open(
                      "https://www.google.co.in/maps/place/Kamdhenu+steel+furniture-KSF/@13.0101224,77.4979836,16.44z/data=!4m6!3m5!1s0x3bae3da3c5c17215:0x1f793b74316273cf!8m2!3d13.0093818!4d77.5012477!16s%2Fg%2F11n986wl57?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D",
                      "_blank"
                    )
                  }
                  title="Open in Google Maps"
                >
                  <MapPin className="w-16 h-16 text-orange-600 mb-4" />
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Click to Open Google Maps</h3>
                  <p className="text-slate-600 text-center px-4">
                    No. 07, 2nd cross, 3rd main road, New Extension Area<br />
                    Kalasipalyam, Bengaluru - 560002
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;