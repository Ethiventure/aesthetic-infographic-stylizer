
import React from 'react';
import StyleCard from '../StyleCard';

const EcoSection = () => {
  const ecoStyles = [
    {
      theme: "Solarpunk x Art Nouveau",
      purpose: "Stories with solar-Art Nouveau flair",
      headingFont: "Playfair Display",
      bodyFont: "Crimson Text",
      mainColor: "#8B6914",
      accentColors: ["#C49A6C", "#5D7C47"],
      background: "#F9F3E8",
      textColor: "#2F2B1A",
      visualDetails: "Art nouveau florals, solar panels as decorative elements, brass-like metallics",
      assets: {
        icons: ["art nouveau", "solar", "decorative"],
        patterns: ["flowing vines", "sunburst", "nouveau"],
        textures: ["brass", "etched metal", "carved"],
        illustrations: ["botanical tech", "nouveau solar", "decorative"]
      }
    },
    {
      theme: "Art Nouveau Solarpunk",
      purpose: "Eco-ornate optimism",
      headingFont: "Playfair Display",
      bodyFont: "Libre Baskerville",
      mainColor: "#7A6A47",
      accentColors: ["#C49A6C", "#8B6914"],
      background: "#F7F1E3",
      textColor: "#2F2B1A",
      visualDetails: "Flowing organic lines, botanical motifs, warm earth tones, carved textures",
      assets: {
        icons: ["nouveau", "organic", "solar"],
        patterns: ["flowing curves", "botanical", "carved"],
        textures: ["carved wood", "etched brass", "organic"],
        illustrations: ["nouveau botanical", "solar organic", "carved"]
      }
    },
    {
      theme: "Organic & Health",
      purpose: "Soft wellness UIs",
      headingFont: "Caveat",
      bodyFont: "Kalam",
      mainColor: "#7A8471",
      accentColors: ["#A8B5A0", "#6B7A62"],
      background: "#F8F6F2",
      textColor: "#3E4A37",
      visualDetails: "Hand-drawn elements, natural textures, earthy organic feel",
      assets: {
        icons: ["hand drawn", "organic", "natural"],
        patterns: ["organic", "natural", "hand drawn"],
        textures: ["earth", "organic", "natural"],
        illustrations: ["hand drawn", "organic", "wellness"]
      }
    },
    {
      theme: "Biophilia",
      purpose: "Botanical immersion",
      headingFont: "Amatic SC",
      bodyFont: "Patrick Hand",
      mainColor: "#6B8F47",
      accentColors: ["#8FAF6B", "#A8C285"],
      background: "#F6F9F3",
      textColor: "#3A4A2F",
      visualDetails: "Hand-sketched botanicals, organic shapes, living textures",
      assets: {
        icons: ["hand drawn", "botanical", "organic"],
        patterns: ["sketched leaves", "organic", "botanical"],
        textures: ["hand drawn", "organic", "natural"],
        illustrations: ["botanical sketch", "hand drawn", "organic"]
      }
    },
    {
      theme: "Folk Digital Revival",
      purpose: "Handcrafted narratives",
      headingFont: "Fredericka the Great",
      bodyFont: "Gentium Book Basic",
      mainColor: "#B85C3E",
      accentColors: ["#8B4A2F", "#D4926B"],
      background: "#FAF5F0",
      textColor: "#3D2A1E",
      visualDetails: "Traditional folk patterns, handmade textures, rustic warmth",
      assets: {
        icons: ["folk", "traditional", "handmade"],
        patterns: ["folk art", "traditional", "handmade"],
        textures: ["woven", "carved", "traditional"],
        illustrations: ["folk art", "traditional", "handcrafted"]
      }
    },
    {
      theme: "Digital Craftcore",
      purpose: "Cozy tactile digital",
      headingFont: "Fredericka the Great",
      bodyFont: "Gentium Book Basic",
      mainColor: "#A0674B",
      accentColors: ["#8B5A3C", "#C28B6F"],
      background: "#F9F4F0",
      textColor: "#4A3429",
      visualDetails: "Handwoven textures, craft patterns, artisanal warmth",
      assets: {
        icons: ["craft", "handmade", "woven"],
        patterns: ["woven", "knit", "craft"],
        textures: ["woven", "knit", "handmade"],
        illustrations: ["craft", "handmade", "artisan"]
      }
    }
  ];

  return (
    <section 
      className="py-16 px-6"
      style={{ 
        background: 'linear-gradient(135deg, #F6F9F3 0%, #F7F1E3 100%)',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%236B8F47' fill-opacity='0.05'%3E%3Cpath d='M20 20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm0-20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z'/%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-800 mb-4 font-['Playfair_Display']">
            🌿 Nature / Eco Aesthetics
          </h2>
          <p className="text-lg text-amber-700 font-['Crimson_Text'] max-w-2xl mx-auto italic">
            Sustainable, organic, and biophilic design approaches that connect digital experiences with the natural world
          </p>
          <div className="mt-4 text-sm text-amber-700 bg-amber-50 rounded-lg p-3 inline-block border border-amber-200">
            <strong>Free Asset Sources:</strong> OpenDoodles (hand-drawn), Biodiversity Heritage Library (botanical), 
            The Noun Project (organic icons), Unsplash (nature photography), RoughJS (hand-drawn effects)
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ecoStyles.map((style, index) => (
            <StyleCard key={index} style={style} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcoSection;
