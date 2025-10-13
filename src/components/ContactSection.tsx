import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:info@empodera.co.za?subject=Contact from ${formData.name}&body=${formData.message}`;
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-20 bg-[#f9fafc]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#3349df]">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Ready to transform your workforce? Let's talk.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3349df] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3349df] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea 
                  required 
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3349df] focus:border-transparent"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#3349df] to-[#2c4ae8] text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-[#3349df] mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                <a href="mailto:info@empodera.co.za" className="text-gray-600 hover:text-[#3349df]">
                  info@empodera.co.za
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-[#3349df] mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                <p className="text-gray-600">+27 11 123 4567</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-[#3349df] mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Location</h3>
                <p className="text-gray-600">Johannesburg, South Africa</p>
              </div>
            </div>
            <div className="mt-8 bg-gray-200 rounded-xl h-64 flex items-center justify-center">
              <p className="text-gray-500">Map Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
