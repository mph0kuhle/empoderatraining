import React, { useCallback } from 'react';
// ⚠️ You must install this package first: npm install react-tsparticles
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

interface HeroProps {
  onExploreClick: () => void;
  onQuoteClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExploreClick, onQuoteClick }) => {
    
    // ⚠️ Step 1: Initialize the particle engine only once
    const [particlesInit, setParticlesInit] = React.useState(false);

    React.useEffect(() => {
        if (particlesInit) return;
        initParticlesEngine(async (engine) => {
            await loadSlim(engine); // 'slim' load is lighter than 'full'
        }).then(() => {
            setParticlesInit(true);
        });
    }, [particlesInit]);

    // ⚠️ Step 2: Particle Configuration for "Drama" (Subtle White/Blue Lines)
    const particlesOptions = {
        background: {
            color: {
                value: "transparent", // Use the background image/overlay color
            },
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "grab", // Causes particles to follow/grab the mouse
                },
            },
            modes: {
                push: {
                    quantity: 4,
                },
                grab: {
                    distance: 150,
                    line_linked: {
                        opacity: 1
                    }
                }
            },
        },
        particles: {
            number: {
                value: 60,
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            color: {
                value: ["#ffffff", "#93c5fd", "#3349df"], // White, Light Blue, Empodera Blue
            },
            shape: {
                type: "circle",
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                },
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false,
                },
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff", // White connection lines
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
            },
        },
        detectRetina: true,
    };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        
      {/* Background Image (Updated to use a SA-look placeholder) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        // ⚠️ Placeholder for a Black Faces/SA-look image. PLEASE REPLACE!
        style={{ backgroundImage: `url('https://d64gsuwffb70l.cloudfront.net/68eca18a5084cb1aee71fbcc_1760338384689_f4ca5fee.webp')` }}
      />
      {/* Blue Overlay to provide contrast for white text/particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3349df]/95 via-[#2c4ae8]/90 to-[#2640c8]/95" />
      
      {/* ⚠️ PARTICLE EFFECT LAYER */}
      {particlesInit && (
          <Particles
              id="tsparticles"
              options={particlesOptions as any} // 'as any' often needed for complex configs
              style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  zIndex: 5, // Below the text, above the overlay
              }}
          />
      )}
      
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