// /src/pages/MasterclassesPage.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Gem, Calendar, Shield, Cpu } from 'lucide-react'; 

// Placeholder Masterclass Card Component
const MasterclassCard: React.FC<{ title: string; slug: string; topic: string }> = ({ title, slug, topic }) => (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
        <span className="text-xs font-semibold uppercase text-[#3349df] tracking-wider bg-[#eef1ff] py-1 px-3 rounded-full mb-3 inline-block">
            {topic}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2">{title}</h3>
        
        <div className="flex flex-col space-y-2 text-sm text-gray-600 mb-6 flex-grow">
            <span className="flex items-center"><Calendar className="w-4 h-4 mr-2 text-[#3349df]" /> 1-3 Day Sessions</span>
            <span className="flex items-center"><Gem className="w-4 h-4 mr-2 text-[#3349df]" /> Executive Level</span>
        </div>

        <Link 
            to={`/masterclasses/${slug}`} 
            className="block w-full text-center py-2 bg-gradient-to-r from-[#3349df] to-[#2c4ae8] text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
        >
            Explore Session
        </Link>
    </div>
);

const MasterclassesPage: React.FC = () => {
    
    // Example Masterclass content
    const featuredMasterclasses = [
        { title: 'Executive Leadership in the Age of AI', slug: 'ai-leadership', topic: 'AI/Tech' },
        { title: 'ESG Strategy and Sustainable Business Practices', slug: 'esg-strategy', topic: 'Governance' },
        { title: 'Cyber Resilience for the Boardroom', slug: 'cyber-resilience', topic: 'Security' },
        { title: 'Digital Transformation Roadmap for CXOs', slug: 'digital-roadmap', topic: 'Strategy' },
        { title: 'Innovation and Design Thinking Workshop', slug: 'design-thinking', topic: 'Innovation' },
        { title: 'Advanced Financial Modelling for Non-Finance Managers', slug: 'financial-modelling', topic: 'Finance' },
    ];

    return (
        <main className="bg-[#f9fafc] min-h-screen">
            
            {/* --- 1. Split Hero Section (Darker accent for premium feel) --- */}
            <div className="py-24 md:py-32 bg-[#1e293b] text-white border-b border-gray-700">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    
                    {/* Text Block */}
                    <div>
                        <span className="text-lg font-bold uppercase text-[#93c5fd] tracking-widest mb-3 inline-block">
                            EXECUTIVE CONTINUOUS DEVELOPMENT
                        </span>
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                            Professional Masterclasses
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            High-impact, exclusive sessions focused on next-generation topics like AI, ESG, and Digital Leadership. Empower your executives to navigate the future with confidence.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link 
                                to="/contact" 
                                className="px-8 py-3 bg-white text-[#1e293b] rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                            >
                                Book a Masterclass
                            </Link>
                            <a 
                                href="/brochure-masterclasses.pdf" 
                                className="px-8 py-3 bg-transparent border-2 border-[#93c5fd] text-[#93c5fd] rounded-full font-semibold text-lg hover:bg-[#3349df] hover:text-white transition-colors"
                                download
                            >
                                View Calendar
                            </a>
                        </div>
                    </div>
                    
                    {/* Image Block */}
                    <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                        <img 
                            src="https://d64gsuwffb70l.cloudfront.net/68eca18a5084cb1aee71fbcc_1760338387090_65fc64d1.webp" 
                            alt="Executive Masterclass" 
                            className="w-full h-full object-cover opacity-70"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                    </div>
                </div>
            </div>

            {/* --- 2. Key Benefits Section --- */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Masterclass Focus Areas</h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-6 bg-white rounded-xl shadow-lg border-t-4 border-[#3349df] transition-shadow hover:shadow-xl">
                        <Shield className="w-8 h-8 text-[#3349df] mb-3" />
                        <h3 className="text-xl font-semibold mb-2">Future-Proof Leadership</h3>
                        <p className="text-gray-700">High-level insights into governance, risk, and strategic oversight required in a rapidly changing world.</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-lg border-t-4 border-[#3349df] transition-shadow hover:shadow-xl">
                        <Cpu className="w-8 h-8 text-[#3349df] mb-3" />
                        <h3 className="text-xl font-semibold mb-2">Technology & Disruption</h3>
                        <p className="text-gray-700">Deep dives into applied AI, digital transformation, and leveraging data for competitive advantage.</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-lg border-t-4 border-[#3349df] transition-shadow hover:shadow-xl">
                        <Gem className="w-8 h-8 text-[#3349df] mb-3" />
                        <h3 className="text-xl font-semibold mb-2">Expert-Led Sessions</h3>
                        <p className="text-gray-700">Learn directly from industry leaders and academic specialists in intimate, high-value learning environments.</p>
                    </div>
                </div>
            </section>


            {/* --- 3. Masterclass Grid --- */}
            <section className="max-w-7xl mx-auto px-6 py-16 bg-white rounded-t-3xl shadow-inner">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">Featured Masterclasses</h2>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {featuredMasterclasses.map((program) => (
                        <MasterclassCard key={program.slug} {...program} />
                    ))}
                </div>
                
                <div className="text-center mt-12">
                    <p className="text-xl text-gray-600 mb-4">Want a private session? We design bespoke masterclasses for entire executive teams.</p>
                    <Link 
                        to="/contact" 
                        className="inline-block px-8 py-3 border border-[#3349df] text-[#3349df] rounded-full font-semibold hover:bg-[#3349df] hover:text-white transition-colors"
                    >
                        Schedule a Consultation
                    </Link>
                </div>

            </section>

        </main>
    );
};

export default MasterclassesPage;