
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
      headingFont: "Amarante", // Changed
      bodyFont: "Della Respira", // Changed
      mainColor: "#7A6A47",
      accentColors: ["#C49A6C", "#8B6914"],
      background: "#F7F1E3",
      textColor: "#2F2B1A",
      visualDetails: "Flowing organic lines, botanical motifs, warm earth tones, carved textures, Amarante and Della Respira fonts", // Updated
      assets: {
        icons: ["nouveau", "organic", "solar", "amarante", "della respira"], // Added font names as indicative assets
        patterns: ["flowing curves", "botanical", "carved", "art nouveau floral"], // Added more specific pattern
        textures: ["carved wood", "etched brass", "organic", "aged paper"], // Added texture
        illustrations: ["nouveau botanical", "solar organic", "carved", "solarpunk city"] // Added illustration
      }
    },
    {
      theme: "Organic & Health",
      purpose: "Soft wellness UIs",
      headingFont: "Caveat", // Kept, as it's handwritten
      bodyFont: "Patrick Hand", // Changed to another handwritten option
      mainColor: "#7A8471", // Earthy green
      accentColors: ["#A8B5A0", "#BFA78A"], // Earthy green and brown
      background: "#FDFBF7", // Softer off-white
      textColor: "#4A4034", // Darker earthy brown
      visualDetails: "Hand-drawn elements, natural textures, earthy organic feel, handwritten fonts like Caveat and Patrick Hand.", // Updated
      assets: {
        icons: ["hand drawn", "leaf", "pebble", "sprout"], // More specific organic icons
        patterns: ["organic shapes", "subtle speckle", "watercolour wash"], // Earthy patterns
        textures: ["recycled paper", "pressed flower", "soft moss", "light wood grain"], // Earthy textures
        illustrations: ["hand drawn botanicals", "wellness symbols", "nature scenes"] // Updated
      }
    },
    {
      theme: "Biophilia",
      purpose: "Botanical immersion",
      headingFont: "Amatic SC", // Kept, hand-drawn style
      bodyFont: "Patrick Hand", // Kept, hand-drawn style
      mainColor: "#587D44", // Deeper green
      accentColors: ["#8FAF6B", "#A8C285", "#E3DBCB"], // Greens and an earthy beige
      background: "#F4F8F0", // Lighter green-tinted white
      textColor: "#3A4A2F",
      visualDetails: "Hand-sketched botanicals, organic shapes, living textures, focus on hand-drawn assets.", // Updated
      assets: {
        icons: ["hand drawn leaf", "sketched flower", "organic branch", "water drop"], // More specific hand-drawn icons
        patterns: ["sketched leaves", "botanical line art", "organic cell", "subtle wood grain"], // More hand-drawn patterns
        textures: ["handmade paper", "leaf vein", "rough bark", "watercolour"], // More hand-drawn textures
        illustrations: ["detailed botanical sketch", "hand drawn nature elements", "biophilic patterns", "ink drawings"] // More hand-drawn illustrations
      }
    },
    {
      theme: "Folk Digital Revival",
      purpose: "Handcrafted narratives",
      headingFont: "Fredericka the Great", // Kept
      bodyFont: "Gentium Book Basic", // Kept
      mainColor: "#B85C3E", // Earthy red-brown
      accentColors: ["#8B4A2F", "#D4926B", "#E4C8A8"], // Earthy tones
      background: "#FAF5F0",
      textColor: "#3D2A1E",
      visualDetails: "Traditional folk patterns, handmade textures, rustic warmth, Fredericka the Great and Gentium Book Basic fonts.", // Updated
      assets: {
        icons: ["folk bird", "traditional flower", "handmade star", "carved wood"], // More specific folk icons
        patterns: ["folk art motif", "traditional embroidery", "handmade quilt", "block print"], // More specific patterns
        textures: ["woven fabric", "carved wood", "traditional pottery", "handmade paper"], // More specific textures
        illustrations: ["folk art scene", "traditional storytelling", "handcrafted characters", "nature motifs"] // More specific illustrations
      }
    },
    {
      theme: "Digital Craftcore",
      purpose: "Cozy tactile digital",
      headingFont: "Fredericka the Great", // Kept
      bodyFont: "Gentium Book Basic", // Kept
      mainColor: "#A0674B", // Warm brown
      accentColors: ["#8B5A3C", "#C28B6F", "#D8BFA8"], // Warm browns and beige
      background: "#F9F4F0",
      textColor: "#4A3429",
      visualDetails: "Handwoven textures, craft patterns, artisanal warmth, cozy and tactile feel with more asset examples.", // Updated
      assets: {
        icons: ["knitting needles", "sewing thimble", "clay pot", "handmade brush"], // More craft-related icons
        patterns: ["woven basket", "knit stitch", "cross-stitch", "macrame knot"], // More craft-related patterns
        textures: ["chunky knit", "felted wool", "raw linen", "handmade clay"], // More craft-related textures
        illustrations: ["handmade crafts", "artisanal tools", "cozy home scene", "crafting process"] // More craft-related illustrations
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
