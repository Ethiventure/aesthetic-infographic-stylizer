
import React from 'react';
import StyleCard from '../StyleCard';

const FeminineSection = () => {
  const feminineStyles = [
    {
      theme: "Balletcore",
      purpose: "Delicate events",
      headingFont: "Dancing Script", // Changed to a more flowing, graceful script
      bodyFont: "Tenor Sans", // Changed to an elegant, clean sans-serif for contrast and readability
      mainColor: "#E6C0CB", // Softer pink (was #D4A5B5)
      accentColors: ["#F5E2E8", "#D1AAB8", "#FFFFFF"], // Lighter pink, muted mauve, white
      background: "#FCF8F9", // Very light pinkish white (was #FAF7F9)
      textColor: "#5E4C52", // Softer, muted dark pink/brown (was #4A3B42)
      visualDetails: "Silk ribbons, tulle textures, pearl accents, graceful curves, flowing script and elegant sans-serif fonts.", // Updated
      assets: {
        icons: ["ballet shoes", "ribbon bow", "delicate swirl", "pearl", "swan"], // More Balletcore assets
        patterns: ["flowing ribbon", "tulle netting", "delicate lace", "subtle floral damask", "watercolour wash"], // More Balletcore assets (patterns good, added more)
        textures: ["soft silk", "sheer tulle", "smooth pearl", "brushed satin", "feather light"], // More Balletcore assets
        illustrations: ["graceful ballerina", "delicate floral sketch", "swan illustration", "flowing fabric", "ballet pose silhouette"] // More Balletcore assets
      }
    },
    {
      theme: "Coquette",
      purpose: "Playful romance",
      headingFont: "Satisfy", // Kept, good fit
      bodyFont: "Alice", // Changed from Quicksand to a more romantic, slightly vintage serif
      mainColor: "#F4ACB7", // Softer, more romantic pink (was #E47DAF)
      accentColors: ["#FFCAD4", "#D8BFD8", "#FFE5EC"], // Light pinks, lavender, creamy white
      background: "#FFF9FB", // Very light, warm pink (was #FFFAFD)
      textColor: "#7C525C", // Muted berry/rose (was #8B2853)
      visualDetails: "Heart motifs, bow details, playful yet elegant typography (Satisfy & Alice), sweet pastels, lace, pearls.", // Updated
      assets: {
        icons: ["dainty heart", "silk bow", "playful cherub", "pearl necklace", "lace detail", "rose"], // More Coquette assets
        patterns: ["tiny hearts", "delicate bows", "vintage floral", "lace trim", "polka dots"], // More Coquette assets
        textures: ["soft lace", "smooth satin", "velvet ribbon", "mother of pearl", "antique paper"], // More Coquette assets
        illustrations: ["romantic cherub", "coquette fashion sketch", "vintage perfume bottle", "floral bouquet", "love letter"] // More Coquette assets
      }
    },
    {
      theme: "Cottagecore",
      purpose: "Cozy vintage",
      headingFont: "IM Fell English SC", // Changed to a more traditional, vintage book style font
      bodyFont: "Gentium Book Basic", // Kept, good traditional body font
      mainColor: "#A07E5F", // Muted, earthy brown (was #8B6F47)
      accentColors: ["#BCAFA0", "#D8C3A5", "#8E8071"], // Dusty rose, cream, sage green (more traditional)
      background: "#FBF7F0", // Warm, aged off-white (was #F9F6F0)
      textColor: "#5A4D40", // Dark, warm brown (was #4A3D2F)
      visualDetails: "Hand-stitched textures, wildflower patterns, vintage charm, traditional bookish fonts (IM Fell English SC & Gentium Book Basic).", // Updated
      assets: {
        icons: ["thatched cottage", "vintage teacup", "handmade quilt square", "wildflower sprig", "garden basket"], // More Cottagecore assets
        patterns: ["ditsy floral", "gingham check", "vintage botanical print", "cross-stitch sampler", "toile de jouy"], // More Cottagecore assets
        textures: ["worn linen", "aged wood", "handmade paper", "pressed flowers", "knitted wool"], // More Cottagecore assets
        illustrations: ["cozy cottage scene", "vintage botanical drawing", "handmade craft item", "garden harvest", "forest animals"] // More Cottagecore assets
      }
    },
    {
      theme: "Soft Minimalism",
      purpose: "Gentle modern UI",
      headingFont: "Nunito",
      bodyFont: "Source Sans Pro",
      mainColor: "#C7A882",
      accentColors: ["#E5D4B1", "#B59968"],
      background: "#FEFCF8",
      textColor: "#5A4A3A",
      visualDetails: "Rounded corners, gentle shadows, warm earth tones",
      assets: {
        icons: ["soft", "minimal", "gentle"],
        patterns: ["soft", "minimal", "gentle"],
        textures: ["soft", "minimal", "warm"],
        illustrations: ["soft", "minimal", "gentle"]
      }
    },
    {
      theme: "Romantic Maximalism",
      purpose: "Opulent feminine design",
      headingFont: "Cormorant Garamond",
      bodyFont: "Crimson Text",
      mainColor: "#B8336A",
      accentColors: ["#D4759B", "#9B2A57", "#E8A4C0"],
      background: "#FDF2F8",
      textColor: "#4A154B",
      visualDetails: "Layered florals, ornate borders, rich textures, luxury details",
      assets: {
        icons: ["ornate", "floral", "luxury"],
        patterns: ["ornate", "floral", "layered"],
        textures: ["luxury", "ornate", "rich"],
        illustrations: ["romantic", "ornate", "luxury"]
      }
    }
  ];

  return (
    <section 
      className="py-16 px-6 relative"
      style={{ 
        background: 'radial-gradient(circle at 30% 20%, #F8A8C8 0%, #FAF7F9 30%, #FFFAFD 100%)',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23E47DAF' fill-opacity='0.03'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20S-10 18.954-10 30s8.954 20 20 20 20-8.954 20-20M70 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20'/%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 to-rose-50/30"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-rose-600 mb-4 font-['Cormorant_Garamond'] italic">
            🩰 Feminine / Romantic
          </h2>
          <p className="text-lg text-rose-700 font-['Crimson_Text'] max-w-2xl mx-auto italic">
            Soft, delicate, and romantic aesthetics celebrating femininity, grace, and gentle beauty
          </p>
          <div className="mt-4 text-sm text-rose-600 bg-rose-50 rounded-lg p-3 inline-block border border-rose-200">
            <strong>Free Asset Sources:</strong> Freepik (feminine illustrations), unDraw (romantic illustrations), 
            Iconify (delicate icons), Feather Icons (minimal), OpenPeeps (diverse characters)
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {feminineStyles.map((style, index) => (
            <div key={index} className="transform hover:rotate-1 transition-transform duration-300">
              <StyleCard style={style} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeminineSection;
