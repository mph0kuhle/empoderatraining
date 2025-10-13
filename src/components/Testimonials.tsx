import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "Empodera's digital programmes helped us certify 120 employees remotely — effortless compliance.",
      author: "Learning & Development Manager",
      company: "RetailCo"
    },
    {
      text: "The EasyQuote tool made planning our training budget simple and transparent.",
      author: "HR Partner",
      company: "Logistics Group"
    },
    {
      text: "Outstanding support and industry-relevant content. Our team's productivity increased by 35%.",
      author: "Operations Director",
      company: "Manufacturing Solutions"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#3349df] to-[#2640c8]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          What Our Clients Say
        </h2>
        <p className="text-center text-white/90 mb-12 text-lg">
          Trusted by leading organisations across South Africa
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <Quote className="w-10 h-10 text-[#3349df] mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-800">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
