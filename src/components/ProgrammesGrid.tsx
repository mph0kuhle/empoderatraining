import React from 'react';
import { Clock, Monitor, Award } from 'lucide-react';

const ProgrammesGrid: React.FC = () => {
  const programmes = [
    {
      title: 'Supply Chain Practitioner',
      duration: '6 months',
      format: 'Blended',
      level: 'NQF 5',
      image: 'https://d64gsuwffb70l.cloudfront.net/68eca18a5084cb1aee71fbcc_1760338385583_9a4575dd.webp'
    },
    {
      title: 'Project Management Fundamentals',
      duration: '3 months',
      format: 'Online',
      level: 'NQF 4',
      image: 'https://d64gsuwffb70l.cloudfront.net/68eca18a5084cb1aee71fbcc_1760338386340_6e4064a9.webp'
    },
    {
      title: 'Digital Transformation & AI',
      duration: '8 weeks',
      format: 'Virtual',
      level: 'Short Course',
      image: 'https://d64gsuwffb70l.cloudfront.net/68eca18a5084cb1aee71fbcc_1760338387090_65fc64d1.webp'
    },
    {
      title: 'Leadership & People Management',
      duration: '2 months',
      format: 'Online',
      level: 'NQF 5',
      image: 'https://d64gsuwffb70l.cloudfront.net/68eca18a5084cb1aee71fbcc_1760338387825_109b106b.webp'
    },
    {
      title: 'Business Analytics & Intelligence',
      duration: '4 months',
      format: 'Blended',
      level: 'NQF 5',
      image: 'https://d64gsuwffb70l.cloudfront.net/68eca18a5084cb1aee71fbcc_1760338388953_2c05263c.webp'
    },
    {
      title: 'Customer Service Excellence',
      duration: '6 weeks',
      format: 'Online',
      level: 'NQF 3',
      image: 'https://d64gsuwffb70l.cloudfront.net/68eca18a5084cb1aee71fbcc_1760338389667_076a88a0.webp'
    }
  ];

  return (
    <section id="programmes" className="py-20 bg-[#f9fafc]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#3349df]">
          Featured Programmes
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Industry-aligned, accredited training for the modern workforce
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programmes.map((prog, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <img src={prog.image} alt={prog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{prog.title}</h3>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-[#3349df]" />
                    <span className="text-sm">{prog.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Monitor className="w-4 h-4 mr-2 text-[#3349df]" />
                    <span className="text-sm">{prog.format}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Award className="w-4 h-4 mr-2 text-[#3349df]" />
                    <span className="text-sm">{prog.level}</span>
                  </div>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-[#3349df] to-[#2c4ae8] text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgrammesGrid;
