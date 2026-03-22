import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const MapSection = () => {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-white to-brand-blue/5 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row rounded-[40px] overflow-hidden shadow-2xl border-4 border-white bg-white">
          
          {/* Left: Google Maps */}
          <div className="flex-1 min-h-[400px] relative">
            <iframe 
              title="School Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15549.336423405!2d77.0300!3d13.0200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bafeed86640c31d%3A0x63351ecf425c276b!2sKunigal%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1710770000000!5m2!1sen!2sin" 
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Right: Contact Support */}
          <div className="flex-1 p-8 lg:p-16 bg-gradient-to-br from-brand-yellow/10 to-brand-blue/10 flex flex-col justify-center">
            <h2 className="text-4xl lg:text-5xl font-playful font-black text-gray-800 mb-8">
              Find Us <span className="text-brand-blue">&</span> Say Hello
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-3xl bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-brand-yellow flex items-center justify-center text-white shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-rounded font-bold text-gray-800">Address</h4>
                  <p className="text-gray-600 text-sm">KHB Colony, Housing Board, Vidyanagar, Kunigal, Tumkur</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-3xl bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-brand-green flex items-center justify-center text-white shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-rounded font-bold text-gray-800">Phone</h4>
                  <p className="text-gray-600 text-sm">+91-9449368682, +91-7676307892</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-3xl bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue flex items-center justify-center text-white shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-rounded font-bold text-gray-800">Email</h4>
                  <p className="text-gray-600 text-sm">info@imasterpreschool.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-3xl bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-brand-pink flex items-center justify-center text-white shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-rounded font-bold text-gray-800">Open Hours</h4>
                  <p className="text-gray-600 text-sm">Mon - Sat: 9:00 AM - 3:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
