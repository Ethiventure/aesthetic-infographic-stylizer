
import React from 'react';
import { Image, Palette, Type, Sparkles, Grid3X3, Waves, Leaf, Zap, Heart, Globe, Snowflake } from 'lucide-react';

interface AssetShowcaseProps {
  assets: {
    icons?: string[];
    patterns?: string[];
    textures?: string[];
    illustrations?: string[];
  };
  theme: string;
  mainColor: string;
  accentColors: string[];
}

const AssetShowcase: React.FC<AssetShowcaseProps> = ({ assets, theme, mainColor, accentColors }) => {
  const getVisualExample = (type: string, item: string) => {
    const baseStyle = { backgroundColor: mainColor, color: 'white' };
    const accentStyle = { backgroundColor: accentColors[0] || mainColor, color: 'white' };
    
    switch (type) {
      case 'icons':
        return (
          <div className="flex gap-1">
            {item === 'organic' && <Leaf className="w-4 h-4" style={baseStyle} />}
            {item === 'geometric' && <Grid3X3 className="w-4 h-4" style={baseStyle} />}
            {item === 'minimal' && <Type className="w-4 h-4" style={baseStyle} />}
            {item === 'decorative' && <Sparkles className="w-4 h-4" style={baseStyle} />}
            {item === 'tech' && <Zap className="w-4 h-4" style={baseStyle} />}
            {item === 'retro' && <div className="w-4 h-4 border-2" style={{ borderColor: mainColor, background: 'transparent' }} />}
            {item === 'animated' && <Heart className="w-4 h-4 animate-pulse" style={baseStyle} />}
            {item === 'folk' && <div className="w-4 h-4 rounded-full border-2" style={{ borderColor: mainColor, background: accentColors[0] }} />}
            {item === 'craft' && <div className="w-4 h-4" style={{ background: `repeating-linear-gradient(45deg, ${mainColor}, ${mainColor} 2px, ${accentColors[0]} 2px, ${accentColors[0]} 4px)` }} />}
          </div>
        );
        
      case 'patterns':
        return (
          <div className="w-8 h-4 border border-current border-opacity-20 overflow-hidden">
            {item === 'vines' && <div className="w-full h-full" style={{ background: `repeating-linear-gradient(45deg, ${mainColor}20, ${mainColor}20 2px, transparent 2px, transparent 4px)` }} />}
            {item === 'grid' && <div className="w-full h-full" style={{ backgroundImage: `repeating-conic-gradient(${mainColor}20 0deg, transparent 90deg)`, backgroundSize: '4px 4px' }} />}
            {item === 'waves' && <div className="w-full h-full" style={{ background: `repeating-linear-gradient(90deg, ${mainColor}30, transparent 50%)` }} />}
            {item === 'collage' && <div className="w-full h-full" style={{ background: `linear-gradient(45deg, ${mainColor}40, ${accentColors[0]}40, ${accentColors[1] || mainColor}40)` }} />}
            {item === 'bright' && <div className="w-full h-full" style={{ background: `linear-gradient(90deg, ${accentColors[0]}, ${accentColors[1] || mainColor}, ${accentColors[2] || mainColor})` }} />}
            {item === 'neon' && <div className="w-full h-full" style={{ background: mainColor, boxShadow: `0 0 4px ${mainColor}` }} />}
            {item === 'glitch' && <div className="w-full h-full" style={{ background: `repeating-linear-gradient(90deg, ${mainColor}, ${accentColors[0]} 2px, ${mainColor} 4px)` }} />}
          </div>
        );
        
      case 'textures':
        return (
          <div className="w-8 h-4 border border-current border-opacity-20 overflow-hidden">
            {item === 'parchment' && <div className="w-full h-full" style={{ background: `radial-gradient(circle, ${mainColor}10, ${mainColor}05)` }} />}
            {item === 'organic' && <div className="w-full h-full" style={{ background: `radial-gradient(ellipse, ${mainColor}20, transparent)` }} />}
            {item === 'frosted' && <div className="w-full h-full backdrop-blur-sm" style={{ background: `linear-gradient(45deg, ${mainColor}20, transparent)` }} />}
            {item === 'neon glow' && <div className="w-full h-full" style={{ background: mainColor, filter: 'blur(1px)', opacity: 0.8 }} />}
            {item === 'tactile' && <div className="w-full h-full" style={{ background: `repeating-radial-gradient(circle, ${mainColor}30, transparent 2px)` }} />}
            {item === 'layered shadows' && <div className="w-full h-full" style={{ background: mainColor, boxShadow: `2px 2px 0 ${accentColors[0]}, 4px 4px 0 ${accentColors[1] || mainColor}` }} />}
          </div>
        );
        
      case 'illustrations':
        return (
          <div className="w-6 h-4 border border-current border-opacity-20 flex items-center justify-center text-xs">
            {item === 'botanical' && <Leaf className="w-3 h-3" style={{ color: mainColor }} />}
            {item === 'solar panels' && <Grid3X3 className="w-3 h-3" style={{ color: mainColor }} />}
            {item === 'abstract' && <div className="w-3 h-3 rounded-full" style={{ background: `linear-gradient(45deg, ${mainColor}, ${accentColors[0]})` }} />}
            {item === 'collage' && <div className="w-3 h-3" style={{ background: `conic-gradient(${mainColor}, ${accentColors[0]}, ${accentColors[1] || mainColor})` }} />}
            {item === 'fun' && <Heart className="w-3 h-3" style={{ color: accentColors[0] || mainColor }} />}
            {item === '80s' && <div className="w-3 h-3 triangle" style={{ borderBottom: `4px solid ${mainColor}`, borderLeft: '2px solid transparent', borderRight: '2px solid transparent' }} />}
            {item === 'cyberpunk' && <Zap className="w-3 h-3" style={{ color: mainColor }} />}
          </div>
        );
        
      default:
        return <span className="text-xs opacity-60">{item}</span>;
    }
  };

  return (
    <div className="mt-4 pt-4 border-t border-opacity-20 border-current">
      <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
        <Palette className="w-4 h-4" />
        Visual Assets
      </h4>
      
      <div className="grid grid-cols-2 gap-3 text-xs">
        {assets.icons && (
          <div>
            <strong>Icons:</strong>
            <div className="flex gap-1 mt-1 flex-wrap">
              {assets.icons.map((icon, index) => (
                <div key={index} className="flex items-center gap-1 bg-black bg-opacity-10 rounded px-2 py-1">
                  {getVisualExample('icons', icon)}
                  <span className="capitalize">{icon}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {assets.patterns && (
          <div>
            <strong>Patterns:</strong>
            <div className="flex gap-1 mt-1 flex-wrap">
              {assets.patterns.map((pattern, index) => (
                <div key={index} className="flex items-center gap-1 bg-black bg-opacity-10 rounded px-2 py-1">
                  {getVisualExample('patterns', pattern)}
                  <span className="capitalize">{pattern}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {assets.textures && (
          <div>
            <strong>Textures:</strong>
            <div className="flex gap-1 mt-1 flex-wrap">
              {assets.textures.map((texture, index) => (
                <div key={index} className="flex items-center gap-1 bg-black bg-opacity-10 rounded px-2 py-1">
                  {getVisualExample('textures', texture)}
                  <span className="capitalize">{texture}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {assets.illustrations && (
          <div>
            <strong>Illustrations:</strong>
            <div className="flex gap-1 mt-1 flex-wrap">
              {assets.illustrations.map((illustration, index) => (
                <div key={index} className="flex items-center gap-1 bg-black bg-opacity-10 rounded px-2 py-1">
                  {getVisualExample('illustrations', illustration)}
                  <span className="capitalize">{illustration}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssetShowcase;
