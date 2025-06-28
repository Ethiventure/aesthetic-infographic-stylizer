
import React from 'react';
import { Image, Palette, Type, Sparkles, Grid3X3, Waves } from 'lucide-react';

interface AssetShowcaseProps {
  assets: {
    icons?: string[];
    patterns?: string[];
    textures?: string[];
    illustrations?: string[];
  };
  theme: string;
}

const AssetShowcase: React.FC<AssetShowcaseProps> = ({ assets, theme }) => {
  const getIconComponent = (iconType: string) => {
    switch (iconType) {
      case 'geometric': return <Grid3X3 className="w-8 h-8" />;
      case 'organic': return <Waves className="w-8 h-8" />;
      case 'minimal': return <Type className="w-8 h-8" />;
      case 'decorative': return <Sparkles className="w-8 h-8" />;
      case 'tech': return <Grid3X3 className="w-8 h-8" />;
      default: return <Image className="w-8 h-8" />;
    }
  };

  return (
    <div className="mt-4 pt-4 border-t border-opacity-20 border-current">
      <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
        <Palette className="w-4 h-4" />
        Visual Assets
      </h4>
      
      <div className="grid grid-cols-2 gap-4 text-xs">
        {assets.icons && (
          <div>
            <strong>Icons:</strong>
            <div className="flex gap-2 mt-1 flex-wrap">
              {assets.icons.map((icon, index) => (
                <div key={index} className="flex items-center gap-1 bg-black bg-opacity-10 rounded px-2 py-1">
                  {getIconComponent(icon)}
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
                <span key={index} className="bg-black bg-opacity-10 rounded px-2 py-1 text-xs capitalize">
                  {pattern}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {assets.textures && (
          <div>
            <strong>Textures:</strong>
            <div className="flex gap-1 mt-1 flex-wrap">
              {assets.textures.map((texture, index) => (
                <span key={index} className="bg-black bg-opacity-10 rounded px-2 py-1 text-xs capitalize">
                  {texture}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {assets.illustrations && (
          <div>
            <strong>Illustrations:</strong>
            <div className="flex gap-1 mt-1 flex-wrap">
              {assets.illustrations.map((illustration, index) => (
                <span key={index} className="bg-black bg-opacity-10 rounded px-2 py-1 text-xs capitalize">
                  {illustration}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssetShowcase;
