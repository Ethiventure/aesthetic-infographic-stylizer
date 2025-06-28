
import React from 'react';
import StyleCard from '../StyleCard';

const MaximalistSection = () => {
  const maximalistStyles = [
    {
      theme: "Maximalist",
      purpose: "Bold layered art",
      headingFont: "Staatliches",
      bodyFont: "Chivo",
      mainColor: "#E63946",
      accentColors: ["#FFF600", "#4361EE"],
      background: "#FFF5EA",
      textColor: "#1A1A2E",
      visualDetails: "Patterned collages, shadow layering",
      assets: {
        icons: ["decorative", "geometric"],
        patterns: ["collage", "layered", "complex"],
        textures: ["bold", "layered shadows"],
        illustrations: ["collage", "maximalist"]
      }
    },
    {
      theme: "Dopamine Brights",
      purpose: "Energetic fun UI",
      headingFont: "Space Grotesk",
      bodyFont: "Nunito",
      mainColor: "#EF476F",
      accentColors: ["#FFD166", "#06D6A0", "#118AB2"],
      background: "#FFFFFF",
      textColor: "#073B4C",
      visualDetails: "Micro-animations, bold blocks",
      assets: {
        icons: ["decorative", "animated"],
        patterns: ["bright", "energetic", "blocks"],
        textures: ["vibrant", "animated"],
        illustrations: ["fun", "colorful"]
      }
    },
    {
      theme: "Vaporwave",
      purpose: "Dreamy retro web",
      headingFont: "Major Mono Display",
      bodyFont: "Rubik",
      mainColor: "#F76E9A",
      accentColors: ["#50FFD9", "#B47AEA"],
      background: "#FDEFF9",
      textColor: "#22223B",
      visualDetails: "Pastel grids, VHS glitches",
      assets: {
        icons: ["retro", "geometric"],
        patterns: ["grid", "glitch", "vhs"],
        textures: ["retro", "dreamy"],
        illustrations: ["80s", "vaporwave"]
      }
    }
  ];

  return (
    <section 
      className="py-16 px-6 relative overflow-hidden animate-pulse"
      style={{ 
        background: 'linear-gradient(45deg, #FFF600 0%, #E63946 25%, #4361EE 50%, #EF476F 75%, #FFD166 100%)',
        backgroundSize: '400% 400%'
      }}
    >
      <div className="absolute inset-0 bg-white/80"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-red-600 mb-4 font-['Staatliches'] tracking-wider transform rotate-1">
            🎨 MAXIMALIST / DECORATIVE
          </h2>
          <p className="text-xl text-purple-800 font-['Chivo'] max-w-2xl mx-auto font-bold">
            BOLD • BRIGHT • UNAPOLOGETICALLY EXTRA • MORE IS MORE
          </p>
          <div className="mt-4 text-sm text-red-700 bg-yellow-200 rounded-lg p-3 inline-block border-4 border-blue-500 transform -rotate-1">
            <strong>Free Asset Sources:</strong> Unsplash+ (vibrant photography), Mixkit (colorful illustrations), 
            OpenDoodles (playful graphics), CSS Pattern Gallery (bold patterns)
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
