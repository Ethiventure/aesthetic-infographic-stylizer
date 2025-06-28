
import React from 'react';
import StyleCard from '../StyleCard';

const MaximalistSection = () => {
  const maximalistStyles = [
    {
      theme: "Maximalist",
      purpose: "Bold layered art",
      headingFont: "Fredoka One",
      bodyFont: "Nunito",
      mainColor: "#E63946",
      accentColors: ["#FFF600", "#4361EE", "#F72585"],
      background: "#FFF5EA",
      textColor: "#1A1A2E",
      visualDetails: "Layered patterns, bold typography, explosive color combinations",
      assets: {
        icons: ["bold", "layered", "explosive"],
        patterns: ["layered", "complex", "bold"],
        textures: ["layered", "bold", "complex"],
        illustrations: ["maximalist", "bold", "layered"]
      }
    },
    {
      theme: "Dopamine Brights",
      purpose: "Energetic fun UI",
      headingFont: "Fredoka One",
      bodyFont: "Quicksand",
      mainColor: "#FF6B6B",
      accentColors: ["#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7"],
      background: "#FFFFFF",
      textColor: "#2D3436",
      visualDetails: "Saturated colors, playful shapes, energetic animations",
      assets: {
        icons: ["playful", "bright", "energetic"],
        patterns: ["bright", "playful", "energetic"],
        textures: ["vibrant", "playful", "energetic"],
        illustrations: ["playful", "bright", "fun"]
      }
    },
    {
      theme: "Vaporwave",
      purpose: "Dreamy retro web",
      headingFont: "Orbitron",
      bodyFont: "VT323",
      mainColor: "#FF006E",
      accentColors: ["#8338EC", "#3A86FF", "#06FFA5"],
      background: "#1A0B33",
      textColor: "#E0AAFF",
      visualDetails: "Retro-futuristic grids, neon gradients, 80s nostalgia",
      assets: {
        icons: ["retro", "neon", "80s"],
        patterns: ["grid", "neon", "retro"],
        textures: ["neon", "retro", "holographic"],
        illustrations: ["80s", "vaporwave", "retro"]
      }
    }
  ];

  return (
    <section 
      className="py-16 px-6 relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(45deg, #FFF600 0%, #E63946 25%, #4361EE 50%, #F72585 75%, #FF6B6B 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradient 15s ease infinite'
      }}
    >
      <div className="absolute inset-0 bg-white/85"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-red-600 mb-4 font-['Fredoka_One'] tracking-wider transform rotate-1">
            🎨 MAXIMALIST / DECORATIVE
          </h2>
          <p className="text-xl text-purple-800 font-['Nunito'] max-w-2xl mx-auto font-bold">
            BOLD • BRIGHT • UNAPOLOGETICALLY EXTRA • MORE IS MORE
          </p>
          <div className="mt-4 text-sm text-red-700 bg-yellow-200 rounded-lg p-3 inline-block border-4 border-blue-500 transform -rotate-1">
            <strong>Free Asset Sources:</strong> Unsplash+ (vibrant photography), Mixkit (colorful illustrations), 
            OpenDoodles (playful graphics), CSS Pattern Gallery (bold patterns), Dribbble (inspiration)
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {maximalistStyles.map((style, index) => (
            <div key={index} className="transform hover:scale-105 transition-transform duration-300">
              <StyleCard style={style} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaximalistSection;
