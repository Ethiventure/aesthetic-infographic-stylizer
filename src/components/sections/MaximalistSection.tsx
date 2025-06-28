
import React from 'react';
import StyleCard from '../StyleCard';

const MaximalistSection = () => {
  const maximalistStyles = [
    {
      theme: "Maximalist",
      purpose: "Bold layered art",
      headingFont: "Bungee", // Changed from Fredoka One to a bolder, more expressive font
      bodyFont: "Chivo", // User was unsure about Chivo, but it's a solid sans-serif that can work with a very bold heading.
      mainColor: "#FF0054", // Vibrant Pink
      accentColors: ["#FFBD00", "#00D4FF", "#AD00FF", "#00FF85"], // Gold, Cyan, Purple, Bright Green
      background: "#F0F0F0", // Light neutral grey to let colors pop
      textColor: "#1E1E1E", // Dark grey
      visualDetails: "Layered patterns, clashing colors, bold typography (Bungee & Chivo), diverse textures, 'more is more' philosophy.", // Updated
      assets: {
        icons: ["bold statement", "layered shape", "explosive graphic", "ornate detail", "eclectic mix"], // More maximalist icons
        patterns: ["clashing patterns", "animal print", "opulent floral", "bold geometric", "textured collage"], // More maximalist patterns
        textures: ["velvet", "faux fur", "glitter", "brocade", "mixed media collage"], // More maximalist textures
        illustrations: ["surreal collage", "bold abstract art", "pop art graphic", "ornate fashion sketch", "eclectic still life"] // More maximalist illustrations
      }
    },
    {
      theme: "Dopamine Brights",
      purpose: "Energetic fun UI",
      headingFont: "Fredoka One", // Kept, good for playful
      bodyFont: "Quicksand", // Kept, good for playful
      mainColor: "#FF5733", // Energetic Orange-Red
      accentColors: ["#33FF57", "#3357FF", "#FF33A1", "#FFFF33", "#A133FF"], // Lime Green, Bright Blue, Hot Pink, Bright Yellow, Vibrant Purple - a more intense palette
      background: "#FFFFFF",
      textColor: "#2A2A2A", // Slightly darker for better contrast
      visualDetails: "Highly saturated colors, playful shapes, energetic animations, positive vibes, chunky elements.", // Updated
      assets: {
        icons: ["smiling face", "bright star", "playful squiggle", "energetic bolt", "colorful confetti"], // More dopamine assets
        patterns: ["bold stripes", "colorful polka dots", "wavy lines", "abstract shapes", "confetti burst"], // More dopamine assets
        textures: ["shiny plastic", "gummy texture", "smooth gloss", "sparkle", "vibrant gradient"], // More dopamine assets
        illustrations: ["playful character", "bright abstract", "fun icon set", "energetic scene", "positive message graphic"] // More dopamine assets
      }
    },
    {
      theme: "Vaporwave",
      purpose: "Dreamy retro web",
      headingFont: "Orbitron", // Kept, good fit
      bodyFont: "Roboto Mono", // Changed from VT323 to a slightly more versatile but still retro mono font for better 80s feel
      mainColor: "#FF00C1", // Neon Pink (was #FF006E)
      accentColors: ["#00F2FF", "#9D00FF", "#3FFF00"], // Neon Cyan, Neon Purple, Neon Green (adjusted from #8338EC, #3A86FF, #06FFA5)
      background: "#1A0B33", // Kept
      textColor: "#E0AAFF", // Kept
      visualDetails: "Retro-futuristic grids, neon gradients, 80s nostalgia, pixel art, classic computer UI elements, Orbitron & Roboto Mono.", // Updated
      assets: {
        icons: ["8-bit heart", "neon palm tree", "glitchy cursor", "cassette tape", "CRT monitor"], // More Vaporwave assets
        patterns: ["neon grid lines", "sunset gradient", "checkerboard floor", "pixelated static", "geometric 80s"], // More Vaporwave assets
        textures: ["holographic foil", "CRT screen noise", "polished chrome", "neon light glow", "grainy VHS"], // More Vaporwave assets
        illustrations: ["80s sports car", "palm tree sunset", "abstract neon landscape", "retro computer interface", "pixel art character"] // More Vaporwave assets
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
