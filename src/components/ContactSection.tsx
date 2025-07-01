import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in your steel furniture. Can you provide more information?");
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Get in Touch</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to transform your space with premium steel furniture? Let's discuss your project.
          </p>
        </div>

        {/* Only Contact Information shown */}
        <div className="flex justify-center">
          <div className="space-y-8 w-full max-w-xl">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Phone</h4>
                    <p className="text-slate-600"> Bhanwar lal Dara : 9916082929 , 9620368553, 778</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Email</h4>
                    <p className="text-slate-600">kamdhenusteel29@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Address</h4>
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
                    <h4 className="font-semibold text-slate-800 mb-1">Business Hours</h4>
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

            {/* Google Map Pin Link */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center py-8">
              <button
                onClick={() =>
                  window.open(
                    "https://www.google.co.in/maps/place/Kamdhenu+steel+furniture-KSF/@13.0093818,77.4986728,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae3da3c5c17215:0x1f793b74316273cf!8m2!3d13.0093818!4d77.5012477!16s%2Fg%2F11n986wl57?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D",
                    "_blank"
                  )
                }
                className="flex flex-col items-center focus:outline-none"
                aria-label="Open Kamdhenu Steel Location in Google Maps"
              >
                <MapPin className="w-16 h-16 text-orange-600 mb-2" />
                <span className="text-slate-800 font-semibold">View on Google Maps</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;