import React from 'react';
import { BookOpen, Target, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const steps = [
    { icon: BookOpen, label: 'Learn', color: '#3349df' },
    { icon: Target, label: 'Apply', color: '#2c4ae8' },
    { icon: TrendingUp, label: 'Transform', color: '#2640c8' }
  ];

  return (
    <section className="py-20 bg-[#f9fafc]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#3349df]">
          About Empodera
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
          Empodera Training Academy is redefining workforce development through accredited, blended learning programmes that equip teams with future-ready skills. We bridge the gap between education and employability by delivering real-world, industry-aligned training across sectors.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-lg"
                  style={{ backgroundColor: step.color }}
                >
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <span className="text-xl font-semibold text-gray-800">{step.label}</span>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute w-24 h-0.5 bg-[#e8ebf5] translate-x-32" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
