
import React from 'react';
import StyleCard from '../StyleCard';

const EditorialSection = () => {
  const editorialStyles = [
    {
      theme: "Dark Academia",
      purpose: "Moody literary UIs",
      headingFont: "Special Elite", // Changed to distressed typewriter/book style
      bodyFont: "Courier Prime", // Changed to typewriter font
      mainColor: "#3E2C1C", // Darker, ink-like brown
      accentColors: ["#6B5B47", "#800000"], // Muted brown and deep red
      background: "#FDF6E3", // Off-white paper (was #F5F1E8, made it a bit warmer)
      textColor: "#1A140F", // Off-black/dark ink blue (was #2D2419)
      visualDetails: "Aged paper, ink stains, leather bindings, candlelit atmosphere, distressed book and typewriter fonts.", // Updated
      assets: {
        icons: ["quill", "old book", "candle flame", "ink pot", "glasses"], // Added more assets
        patterns: ["aged paper", "ink blot", "leather texture", "tartan", "old script"], // Added more assets
        textures: ["parchment", "distressed leather", "old wood", "velvet", "ink wash"], // Added more assets
        illustrations: ["classical statue", "academic sketch", "gothic window", "library interior", "scientific drawing"] // Added more assets
      }
    },
    {
      theme: "Castlecore",
      purpose: "Gothic medieval RPG",
      headingFont: "UnifrakturMaguntia", // Kept, good fit
      bodyFont: "Gentium Book Basic", // Changed for better medieval/Arts & Crafts feel
      mainColor: "#4A0404", // Deep, rich red (Pre-Raphaelite)
      accentColors: ["#2E4A2E", "#B8860B", "#704214"], // Forest green, dark gold, russet brown (Pre-Raphaelite)
      background: "#F0E8DC", // Aged parchment/stone (was #F0E8EC)
      textColor: "#2C1A10", // Dark brown/off-black (was #2D1A24)
      visualDetails: "Pre-Raphaelite colors (deep reds, greens, golds), Arts & Crafts medieval-lite fonts, illuminated manuscript details, tapestry patterns.", // Updated
      assets: {
        icons: ["gothic arch", "medieval banner", "illuminated letter", "sword", "shield", "dragon"], // Added more assets
        patterns: ["tapestry floral", "medieval damask", "arts & crafts vine", "heraldic", "stained glass"], // Added more assets
        textures: ["aged tapestry", "rough stone", "dark wood", "chainmail", "velvet"], // Added more assets
        illustrations: ["medieval scene", "gothic knight", "illuminated manuscript page", "castle silhouette", "mythical beast"] // Added more assets
      }
    },
    {
      theme: "Clerical Classicism",
      purpose: "Formal editorial style",
      headingFont: "Cinzel Decorative", // Changed to a more decorative version of Cinzel
      bodyFont: "EB Garamond", // Changed to a classic, highly legible serif
      mainColor: "#5A3A22", // Richer brown (was #6B4423)
      accentColors: ["#B08D57", "#D4AF37", "#EAE0C8"], // Gold, brass, and parchment
      background: "#FCF8F0", // Warmer off-white (was #FAF7F2)
      textColor: "#3B2B1F", // Darker brown for better contrast
      visualDetails: "Classical proportions, marble and gold textures, golden ratios, ornate borders, elegant serif fonts.", // Updated
      assets: {
        icons: ["ionic column", "laurel wreath", "formal scroll", "quill and ink", "classical bust"], // Added more assets
        patterns: ["greek key", "marble vein", "acanthus leaf", "formal damask", "gold filigree"], // Added more assets
        textures: ["polished marble", "aged parchment", "gold leaf", "carved stone", "rich wood"], // Added more assets
        illustrations: ["classical architecture", "formal portrait", "mythological scene", "ornate cartouche", "still life"] // Added more assets
      }
    },
    {
      theme: "Vintage Publishing",
      purpose: "Retro magazine aesthetic",
      headingFont: "Abril Fatface", // Kept, good for vintage headlines
      bodyFont: "Special Elite", // Changed to a vintage typewriter font
      mainColor: "#B86B0B", // Slightly desaturated orange-brown (was #B8860B)
      accentColors: ["#CD853F", "#4A3B31", "#D8C8A8"], // Dusty orange, dark brown, aged paper
      background: "#FDF5E6", // Warmer, aged paper (was #FFF8DC)
      textColor: "#3A2F2F", // Dark, slightly faded black (was #2F2F2F)
      visualDetails: "Halftone patterns, vintage typography (Abril Fatface & Special Elite), newsprint and aged paper textures, retro ad layouts.", // Updated
      assets: {
        icons: ["vintage camera", "old newspaper", "rotary phone", "classic car", "retro microphone"], // Added more assets
        patterns: ["halftone dots", "aged newsprint", "vintage ad border", "art deco geometric", "faded stripes"], // Added more assets
        textures: ["newsprint", "aged paper", "grainy photo", "linen book cover", "offset print"], // Added more assets
        illustrations: ["vintage advertisement", "retro fashion sketch", "old map", "product illustration (50s style)", "travel poster"] // Added more assets
      }
    }
  ];

  return (
    <section 
      className="py-16 px-6 relative"
      style={{ 
        background: 'linear-gradient(135deg, #3D352A 0%, #2D1F14 100%)', // Darkened background for better contrast with section title
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238B7355' fill-opacity='0.08'%3E%3Cpath d='M50 50c13.807 0 25-11.193 25-25S63.807 0 50 0 25 11.193 25 25s11.193 25 25 25zm0 25c13.807 0 25-11.193 25-25S63.807 50 50 50s-25 11.193-25 25 11.193 25 25 25z'/%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          {/* Updated text colors for better legibility, as per user feedback "intellectual bit text is illegible yellow on white" */}
          <h2 className="text-4xl font-bold text-stone-300 mb-4 font-['IM_Fell_English_SC']"> {/* Was text-amber-200 */}
            📚 Intellectual / Editorial
          </h2>
          <p className="text-lg text-stone-400 font-['Crimson_Text'] max-w-2xl mx-auto italic"> {/* Was text-amber-100 */}
            Scholarly, literary, and academic aesthetics that evoke knowledge, tradition, and intellectual pursuit
          </p>
          {/* Updated text colors for better legibility */}
          <div className="mt-4 text-sm text-stone-300 bg-slate-800/70 rounded-lg p-3 inline-block backdrop-blur-sm border border-stone-600/30"> {/* Was text-amber-100 and border-amber-600/30 */}
            <strong>Free Asset Sources:</strong> Project Gutenberg (classical texts), Internet Archive (vintage books), 
            Biodiversity Heritage Library (illuminated manuscripts), Wikimedia Commons (historical imagery)
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {editorialStyles.map((style, index) => (
            <div key={index} className="transform hover:scale-105 transition-transform duration-300">
              <StyleCard style={style} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;
