import React from 'react';

interface HeroProps {
  onExploreClick: () => void;
  onQuoteClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExploreClick, onQuoteClick }) => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://d64gsuwffb70l.cloudfront.net/68eca18a5084cb1aee71fbcc_1760338384689_f4ca5fee.webp')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#3349df]/95 via-[#2c4ae8]/90 to-[#2640c8]/95" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          Empower Your Workforce.<br />Transform Your Future.
        </h1>
        <p className="text-xl md:text-2xl mb-10 font-light max-w-3xl mx-auto opacity-95">
          Empodera Training Academy combines accredited learning with digital tools to help organisations unlock talent and performance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onExploreClick}
            className="px-8 py-4 bg-white text-[#3349df] rounded-full font-semibold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            Explore Programmes
          </button>
          <button 
            onClick={onQuoteClick}
            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-[#3349df] transition-all duration-300"
          >
            Generate a Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
