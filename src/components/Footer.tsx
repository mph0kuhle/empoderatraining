import React from 'react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#2640c8] to-[#3349df] text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
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

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={scrollToTop} className="hover:text-white/80 transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection('programmes')} className="hover:text-white/80 transition-colors">Programmes</button></li>
              <li><button onClick={scrollToTop} className="hover:text-white/80 transition-colors">About</button></li>
              <li><button onClick={scrollToTop} className="hover:text-white/80 transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Programmes</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Supply Chain</li>
              <li>Project Management</li>
              <li>Digital Transformation</li>
              <li>Leadership</li>
            </ul>
          </div>

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
