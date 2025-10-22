import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    // ⚠️ UPDATED: Changed the starting colour of the gradient to a deeper navy blue (#1e293b)
    <footer className="bg-gradient-to-br from-[#1e293b] to-[#3349df] text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          {/* Logo & Tagline */}
          <div>
            <img 
              src="https://d64gsuwffb70l.cloudfront.net/689f069373db79e875d8de8a_1760338302628_a7cf9aea.png" 
              alt="Empodera Logo" 
              className="h-12 mb-4"
            />
            <p className="text-white/80 text-sm">
              Building Africa's Future Workforce
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white/80 transition-colors">Home</Link></li>
              <li><Link to="/learnerships" className="hover:text-white/80 transition-colors">Programmes</Link></li>
              <li><Link to="/about" className="hover:text-white/80 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white/80 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h4 className="font-bold mb-4">Programmes</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/learnerships" className="hover:text-white transition-colors">Learnerships</Link></li>
              <li><Link to="/slps" className="hover:text-white transition-colors">Short Programmes</Link></li>
              <li><Link to="/masterclasses" className="hover:text-white transition-colors">Masterclasses</Link></li>
              <li>Custom Solutions</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <p className="text-sm text-white/80 mb-2">info@empodera.co.za</p>
            <p className="text-sm text-white/80">+27 11 123 4567</p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm">
          <p className="mb-2">© 2025 Empodera Training Academy. All rights reserved.</p>
          <p className="text-white/60">
            Site powered by <a href="https://octothorp.online" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">EasyQuote (ODS)</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;