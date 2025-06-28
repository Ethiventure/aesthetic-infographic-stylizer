
import React from 'react';
import StyleCard from '../StyleCard';

const FeminineSection = () => {
  const feminineStyles = [
    {
      theme: "Balletcore",
      purpose: "Delicate events",
      headingFont: "Dancing Script",
      bodyFont: "Lustria",
      mainColor: "#C389A4",
      accentColors: ["#CFD8DC", "#F6C7C7"],
      background: "#FFF0F6",
      textColor: "#531742",
      visualDetails: "Veil gradients, ribbon overlays, soft florals",
      assets: {
        icons: ["delicate", "feminine", "romantic"],
        patterns: ["delicate", "lace", "ribbon", "soft"],
        textures: ["veil", "silk", "soft shadows"],
        illustrations: ["botanical", "romantic", "delicate"]
      }
    },
    {
      theme: "Coquette",
      purpose: "Playful romance",
      headingFont: "Dancing Script",
      bodyFont: "Quicksand",
      mainColor: "#E47DAF",
      accentColors: ["#E7B5C6", "#FFB3C6"],
      background: "#FFFAFD",
      textColor: "#B10F2E",
      visualDetails: "Heart buttons, bow accents, playful curves",
      assets: {
        icons: ["romantic", "delicate", "animated"],
        patterns: ["soft", "ribbon", "delicate"],
        textures: ["silk", "soft", "playful"],
        illustrations: ["romantic", "fun", "playful"]
      }
    },
    {
      theme: "Cottagecore",
      purpose: "Cozy vintage",
      headingFont: "Tenor Sans",
      bodyFont: "Gentium Book Basic",
      mainColor: "#A98467",
      accentColors: ["#A9C4EB", "#A8C686"],
      background: "#FFF6EC",
      textColor: "#5A4631",
      visualDetails: "Floral overlays, vintage textures, handcrafted elements",
      assets: {
        icons: ["organic", "folk", "craft"],
        patterns: ["flora", "embroidery", "folk art"],
        textures: ["linen", "handmade", "organic"],
        illustrations: ["botanical", "folk art", "hand drawn"]
      }
    },
    {
      theme: "Soft Minimalism",
      purpose: "Gentle modern UI",
      headingFont: "Poppins",
      bodyFont: "Inter",
      mainColor: "#D4A574",
      accentColors: ["#F2E7D5", "#C7B299"],
      background: "#FEFCF8",
      textColor: "#6B5B73",
      visualDetails: "Curved corners, gentle shadows, warm neutrals",
      assets: {
        icons: ["minimal", "soft", "organic"],
        patterns: ["soft", "minimal grid", "gentle"],
        textures: ["soft", "clean", "ambient"],
        illustrations: ["minimal", "abstract", "soft"]
      }
    },
    {
      theme: "Romantic Maximalism",
      purpose: "Opulent feminine design",
      headingFont: "Playfair Display",
      bodyFont: "Crimson Text",
      mainColor: "#B8336A",
      accentColors: ["#F7CAC9", "#DDA0DD", "#FFE4E1"],
      background: "#FDF2F8",
      textColor: "#4A154B",
      visualDetails: "Layered florals, ornate borders, rich textures",
      assets: {
        icons: ["decorative", "ornate", "romantic"],
        patterns: ["layered", "ornate", "floral"],
        textures: ["rich", "layered", "ornate"],
        illustrations: ["maximalist", "ornate", "romantic"]
      }
    }
  ];

  return (
    <section 
      className="py-16 px-6 relative"
      style={{ 
        background: 'radial-gradient(circle at 30% 20%, #FFB3C6 0%, #FFF0F6 30%, #FFFAFD 100%)',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23E47DAF' fill-opacity='0.03'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20S-10 18.954-10 30s8.954 20 20 20 20-8.954 20-20M70 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20'/%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 to-rose-50/30"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-rose-600 mb-4 font-['Dancing_Script'] text-5xl">
            🩰 Feminine / Romantic
          </h2>
          <p className="text-lg text-rose-700 font-['Lustria'] max-w-2xl mx-auto italic">
            Soft, delicate, and romantic aesthetics celebrating femininity, grace, and gentle beauty
          </p>
          <div className="mt-4 text-sm text-rose-600 bg-rose-50 rounded-lg p-3 inline-block border border-rose-200">
            <strong>Free Asset Sources:</strong> Freepik (feminine illustrations), Pexels (soft photography), 
            Iconify (delicate icons), CSS Pattern Gallery (soft textures), unDraw (romantic illustrations)
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
