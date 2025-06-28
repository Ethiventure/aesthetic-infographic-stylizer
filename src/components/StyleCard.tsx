
import React from 'react';
import AssetShowcase from './AssetShowcase';

interface StyleCardProps {
  style: {
    theme: string;
    purpose: string;
    headingFont: string;
    bodyFont: string;
    mainColor: string;
    accentColors: string[];
    background: string;
    textColor: string;
    visualDetails: string;
    assets?: {
      icons?: string[];
      patterns?: string[];
      textures?: string[];
      illustrations?: string[];
    };
  };
}

const StyleCard: React.FC<StyleCardProps> = ({ style }) => {
  const cardStyle = {
    backgroundColor: style.background,
    color: style.textColor,
    fontFamily: `'${style.bodyFont.replace(/\s+/g, '_')}', sans-serif`,
    borderLeft: `4px solid ${style.mainColor}`,
    boxShadow: `0 4px 15px ${style.mainColor}20`,
  };

  const headingStyle = {
    color: style.mainColor,
    fontFamily: `'${style.headingFont.replace(/\s+/g, '_')}', sans-serif`,
  };

  return (
    <div 
      className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-opacity-20"
      style={cardStyle}
    >
      <h3 
        className="text-xl font-bold mb-2"
        style={headingStyle}
      >
        {style.theme}
      </h3>
      
      <p className="text-sm opacity-80 mb-3 italic">
        {style.purpose}
      </p>
      
      <p className="text-base mb-4 leading-relaxed">
        {style.visualDetails}
      </p>
      
      <div className="border-t pt-4 space-y-3" style={{ borderColor: `${style.textColor}20` }}>
        <div>
          <strong className="text-sm">Fonts:</strong>
          <div className="text-sm mt-1">
            <span style={{ fontFamily: `'${style.headingFont.replace(/\s+/g, '_')}', sans-serif` }}>
              {style.headingFont}
            </span>
            {' / '}
            <span style={{ fontFamily: `'${style.bodyFont.replace(/\s+/g, '_')}', sans-serif` }}>
              {style.bodyFont}
            </span>
          </div>
        </div>
        
        <div>
          <strong className="text-sm">Palette:</strong>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="flex items-center gap-2 text-xs">
              <span 
                className="w-3 h-3 rounded-full border border-white/20" 
                style={{ backgroundColor: style.textColor }}
              ></span>
              Text
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span 
                className="w-3 h-3 rounded-full border border-white/20" 
                style={{ backgroundColor: style.background }}
              ></span>
              Background
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span 
                className="w-3 h-3 rounded-full border border-white/20" 
                style={{ backgroundColor: style.mainColor }}
              ></span>
              Main
            </div>
            {style.accentColors.map((color, index) => (
              <div key={index} className="flex items-center gap-2 text-xs">
                <span 
                  className="w-3 h-3 rounded-full border border-white/20" 
                  style={{ backgroundColor: color }}
                ></span>
                Accent {index + 1}
              </div>
            ))}
          </div>
        </div>
        
        {style.assets && (
          <AssetShowcase 
            assets={style.assets} 
            theme={style.theme}
            mainColor={style.mainColor}
            accentColors={style.accentColors}
          />
        )}
      </div>
    </div>
  );
};

export default StyleCard;
