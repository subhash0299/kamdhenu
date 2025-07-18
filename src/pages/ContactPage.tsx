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
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(251,146,60,0.3),transparent_70%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-orange-600/20 to-orange-700/20 border border-orange-400/30 text-orange-300 rounded-full text-sm font-semibold mb-6 shadow-lg">
            Contact Us
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Get in
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your space with premium steel furniture? Let's discuss your project and bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-2xl p-10 border border-slate-100">
                <div className="mb-8">
                  <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
                    Reach Out
                  </span>
                  <h2 className="text-3xl font-bold text-slate-800">Contact Information</h2>
                </div>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Phone className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 mb-2 text-lg">Phone</h3>
                      <p className="text-slate-600 text-base">Bhanwar lal Dara : 9916082929, 9620368553</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 mb-2 text-lg">Email</h3>
                      <p className="text-slate-600 text-base">kamdhenusteel29@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 mb-2 text-lg">Address</h3>
                      <p className="text-slate-600 text-base leading-relaxed">
                        No. 07, 2nd cross, 3rd main road, New Extension Area<br />
                        Kalasipalyam, Bengaluru - 560002
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 mb-2 text-lg">Business Hours</h3>
                      <p className="text-slate-600 text-base leading-relaxed">
                        Mon - Sat: 9:00 AM - 7:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full mt-8 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Google Map moved next to Contact Information */}
            <div className="flex items-stretch">
              <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-2xl overflow-hidden flex-1 flex flex-col border border-slate-100">
                <div className="p-8 border-b border-slate-200">
                  <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
                    Visit Us
                  </span>
                  <h2 className="text-3xl font-bold text-slate-800 mb-2">Visit Our Workshop</h2>
                  <p className="text-slate-600">Come see our craftsmanship in action</p>
                </div>
                <div
                  className="h-96 cursor-pointer transition-all duration-300 hover:bg-slate-50 flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 group"
                  onClick={() =>
                    window.open(
                      "https://www.google.co.in/maps/place/Kamdhenu+steel+furniture-KSF/@13.0101224,77.4979836,16.44z/data=!4m6!3m5!1s0x3bae3da3c5c17215:0x1f793b74316273cf!8m2!3d13.0093818!4d77.5012477!16s%2Fg%2F11n986wl57?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D",
                      "_blank"
                    )
                  }
                  title="Open in Google Maps"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-orange-600 transition-colors">Click to Open Google Maps</h3>
                  <p className="text-slate-600 text-center px-6 leading-relaxed">
                    #1173 5the main Peenya industrial area, 2nd Stage<br />
                    ,Hegganahalli, Bengaluru, Karnataka 560058
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