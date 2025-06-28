
import React from 'react';
import { Image, Palette, Type, Sparkles, Grid3X3, Waves, Leaf, Zap, Heart, Globe, Snowflake, Star, Crown, Flower } from 'lucide-react';

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
            {item === 'organic' && <Leaf className="w-4 h-4" style={{ color: mainColor }} />}
            {item === 'geometric' && <Grid3X3 className="w-4 h-4" style={{ color: mainColor }} />}
            {item === 'minimal' && <div className="w-4 h-4 border border-current rounded" style={{ borderColor: mainColor }} />}
            {item === 'decorative' && <Sparkles className="w-4 h-4" style={{ color: mainColor }} />}
            {item === 'tech' && <Zap className="w-4 h-4" style={{ color: mainColor }} />}
            {item === 'retro' && <div className="w-4 h-4 border-2 border-current" style={{ borderColor: mainColor, background: 'transparent' }} />}
            {item === 'animated' && <Heart className="w-4 h-4 animate-pulse" style={{ color: accentColors[0] || mainColor }} />}
            {item === 'folk' && <Flower className="w-4 h-4" style={{ color: mainColor }} />}
            {item === 'craft' && <div className="w-4 h-4 rounded-sm" style={{ background: `repeating-linear-gradient(45deg, ${mainColor}, ${mainColor} 2px, ${accentColors[0]} 2px, ${accentColors[0]} 4px)` }} />}
            {item === 'feminine' && <Crown className="w-4 h-4" style={{ color: mainColor }} />}
            {item === 'romantic' && <Heart className="w-4 h-4" style={{ color: accentColors[0] || mainColor }} />}
            {item === 'delicate' && <Star className="w-4 h-4" style={{ color: mainColor, opacity: 0.7 }} />}
            {item === 'cultural' && <Globe className="w-4 h-4" style={{ color: mainColor }} />}
            {item === 'clean' && <div className="w-4 h-4 bg-current rounded-full opacity-80" style={{ color: mainColor }} />}
            {item === 'editorial' && <div className="w-4 h-4 border-2 border-current bg-current opacity-20" style={{ borderColor: mainColor }} />}
          </div>
        );
        
      case 'patterns':
        return (
          <div className="w-12 h-6 border border-current border-opacity-20 overflow-hidden rounded">
            {item === 'vines' && (
              <div className="w-full h-full relative">
                <svg viewBox="0 0 40 20" className="w-full h-full">
                  <path d="M0,10 Q10,5 20,10 T40,10" stroke={mainColor} strokeWidth="1" fill="none" />
                  <circle cx="10" cy="8" r="1" fill={accentColors[0] || mainColor} />
                  <circle cx="30" cy="12" r="1" fill={accentColors[0] || mainColor} />
                </svg>
              </div>
            )}
            {item === 'sunburst' && (
              <div className="w-full h-full" style={{ background: `conic-gradient(from 0deg, ${mainColor}, ${accentColors[0]}, ${mainColor})` }} />
            )}
            {item === 'art nouveau' && (
              <div className="w-full h-full relative">
                <svg viewBox="0 0 40 20" className="w-full h-full">
                  <path d="M0,20 Q20,0 40,20" stroke={mainColor} strokeWidth="2" fill="none" />
                  <path d="M5,20 Q20,5 35,20" stroke={accentColors[0]} strokeWidth="1" fill="none" />
                </svg>
              </div>
            )}
            {item === 'grid' && <div className="w-full h-full" style={{ backgroundImage: `repeating-conic-gradient(${mainColor}20 0deg, transparent 90deg)`, backgroundSize: '6px 6px' }} />}
            {item === 'duotone' && <div className="w-full h-full" style={{ background: `linear-gradient(45deg, ${mainColor}, ${accentColors[0] || mainColor})` }} />}
            {item === 'high contrast' && <div className="w-full h-full" style={{ background: `repeating-linear-gradient(90deg, ${mainColor}, ${mainColor} 3px, white 3px, white 6px)` }} />}
            {item === 'glass' && <div className="w-full h-full backdrop-blur-sm" style={{ background: `linear-gradient(135deg, ${mainColor}30, transparent)` }} />}
            {item === 'blur' && <div className="w-full h-full" style={{ background: `radial-gradient(circle, ${mainColor}40, ${accentColors[0]}20)`, filter: 'blur(1px)' }} />}
            {item === 'liquid' && (
              <div className="w-full h-full relative overflow-hidden">
                <div className="absolute inset-0 rounded-full transform scale-150" style={{ background: `radial-gradient(ellipse, ${mainColor}60, ${accentColors[0]}40)` }} />
              </div>
            )}
            {item === 'modular' && <div className="w-full h-full" style={{ background: `repeating-linear-gradient(0deg, ${mainColor}40, ${mainColor}40 4px, transparent 4px, transparent 8px)` }} />}
            {item === 'progress' && (
              <div className="w-full h-full bg-gray-200 rounded">
                <div className="h-full rounded" style={{ width: '60%', background: `linear-gradient(90deg, ${mainColor}, ${accentColors[0]})` }} />
              </div>
            )}
            {item === 'gradient' && <div className="w-full h-full" style={{ background: `linear-gradient(135deg, ${mainColor}, ${accentColors[0]}, ${accentColors[1] || mainColor})` }} />}
            {item === 'fluid' && (
              <div className="w-full h-full relative">
                <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 60% 40% at 30% 70%, ${mainColor}60, transparent)` }} />
                <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 40% 60% at 70% 30%, ${accentColors[0]}60, transparent)` }} />
              </div>
            )}
            {item === 'adaptive' && <div className="w-full h-full" style={{ background: `conic-gradient(${mainColor}, ${accentColors[0]}, ${mainColor})` }} />}
            {item === 'neon' && <div className="w-full h-full" style={{ background: mainColor, boxShadow: `0 0 8px ${mainColor}` }} />}
            {item === 'glitch' && <div className="w-full h-full" style={{ background: `repeating-linear-gradient(90deg, ${mainColor}, ${accentColors[0]} 2px, ${mainColor} 4px)`, filter: 'contrast(1.2)' }} />}
            {item === 'circuit' && (
              <div className="w-full h-full relative">
                <svg viewBox="0 0 40 20" className="w-full h-full">
                  <path d="M0,10 L10,10 L15,5 L25,5 L30,10 L40,10" stroke={mainColor} strokeWidth="1" fill="none" />
                  <circle cx="15" cy="5" r="1" fill={accentColors[0] || mainColor} />
                  <circle cx="25" cy="5" r="1" fill={accentColors[0] || mainColor} />
                </svg>
              </div>
            )}
            {item === 'blocks' && <div className="w-full h-full" style={{ background: `repeating-conic-gradient(${mainColor} 0deg 90deg, ${accentColors[0]} 90deg 180deg)`, backgroundSize: '8px 8px' }} />}
            {item === 'clean' && <div className="w-full h-full bg-gray-100" style={{ background: `linear-gradient(to right, ${mainColor}10, transparent)` }} />}
            {item === 'bright' && <div className="w-full h-full" style={{ background: `linear-gradient(90deg, ${accentColors[0]}, ${accentColors[1] || mainColor}, ${accentColors[2] || mainColor})` }} />}
            {item === 'energetic' && <div className="w-full h-full animate-pulse" style={{ background: `conic-gradient(${accentColors[0]}, ${accentColors[1]}, ${accentColors[0]})` }} />}
            {item === 'collage' && <div className="w-full h-full" style={{ background: `linear-gradient(45deg, ${mainColor}60, ${accentColors[0]}60, ${accentColors[1] || mainColor}60)` }} />}
            {item === 'layered' && (
              <div className="w-full h-full relative">
                <div className="absolute inset-0" style={{ background: mainColor, opacity: 0.6 }} />
                <div className="absolute inset-1" style={{ background: accentColors[0], opacity: 0.5 }} />
                <div className="absolute inset-2" style={{ background: accentColors[1] || mainColor, opacity: 0.4 }} />
              </div>
            )}
            {item === 'complex' && (
              <div className="w-full h-full" style={{ 
                background: `
                  radial-gradient(circle at 25% 25%, ${mainColor}40, transparent 50%),
                  linear-gradient(45deg, ${accentColors[0]}30, transparent),
                  conic-gradient(${accentColors[1] || mainColor}20, transparent)
                `
              }} />
            )}
            {item === 'vhs' && <div className="w-full h-full" style={{ background: `repeating-linear-gradient(0deg, ${mainColor}, ${mainColor} 1px, transparent 1px, transparent 3px)` }} />}
            {item === 'waves' && (
              <div className="w-full h-full">
                <svg viewBox="0 0 40 20" className="w-full h-full">
                  <path d="M0,15 Q10,5 20,15 T40,15" stroke={mainColor} strokeWidth="2" fill="none" />
                </svg>
              </div>
            )}
            {item === 'particles' && (
              <div className="w-full h-full relative">
                <div className="absolute w-1 h-1 bg-current rounded-full top-1 left-2" style={{ color: mainColor }} />
                <div className="absolute w-1 h-1 bg-current rounded-full top-3 left-6" style={{ color: accentColors[0] }} />
                <div className="absolute w-1 h-1 bg-current rounded-full top-2 left-10" style={{ color: mainColor }} />
              </div>
            )}
            {item === 'leaves' && (
              <div className="w-full h-full">
                <svg viewBox="0 0 40 20" className="w-full h-full">
                  <ellipse cx="10" cy="10" rx="4" ry="2" fill={mainColor} opacity="0.6" />
                  <ellipse cx="30" cy="8" rx="3" ry="2" fill={accentColors[0]} opacity="0.7" />
                </svg>
              </div>
            )}
            {item === 'moss' && <div className="w-full h-full" style={{ background: `radial-gradient(circle, ${mainColor}40, ${mainColor}20, transparent)`, backgroundSize: '4px 4px' }} />}
            {item === 'flora' && (
              <div className="w-full h-full">
                <svg viewBox="0 0 40 20" className="w-full h-full">
                  <circle cx="8" cy="8" r="2" fill={mainColor} opacity="0.5" />
                  <circle cx="20" cy="12" r="1.5" fill={accentColors[0]} opacity="0.6" />
                  <circle cx="32" cy="6" r="1" fill={mainColor} opacity="0.7" />
                </svg>
              </div>
            )}
            {item === 'natural' && <div className="w-full h-full" style={{ background: `radial-gradient(ellipse, ${mainColor}30, ${accentColors[0]}20, transparent)` }} />}
            {item === 'embroidery' && (
              <div className="w-full h-full">
                <svg viewBox="0 0 40 20" className="w-full h-full">
                  <path d="M5,10 Q15,5 25,10 Q35,15 35,10" stroke={mainColor} strokeWidth="1" fill="none" strokeDasharray="1,1" />
                  <path d="M0,15 Q10,12 20,15 Q30,18 40,15" stroke={accentColors[0]} strokeWidth="1" fill="none" strokeDasharray="2,1" />
                </svg>
              </div>
            )}
            {item === 'folk art' && (
              <div className="w-full h-full flex items-center justify-around">
                <div className="w-2 h-2 rotate-45" style={{ background: mainColor }} />
                <div className="w-1 h-3" style={{ background: accentColors[0] }} />
                <div className="w-2 h-2 rounded-full" style={{ background: mainColor }} />
              </div>
            )}
            {item === 'knit' && <div className="w-full h-full" style={{ background: `repeating-linear-gradient(45deg, ${mainColor}, ${mainColor} 1px, ${accentColors[0]} 1px, ${accentColors[0]} 3px)` }} />}
            {item === 'patchwork' && (
              <div className="w-full h-full grid grid-cols-4 grid-rows-2 gap-px">
                <div style={{ background: mainColor }} />
                <div style={{ background: accentColors[0] }} />
                <div style={{ background: accentColors[1] || mainColor }} />
                <div style={{ background: mainColor }} />
                <div style={{ background: accentColors[0] }} />
                <div style={{ background: mainColor }} />
                <div style={{ background: accentColors[1] || mainColor }} />
                <div style={{ background: accentColors[0] }} />
              </div>
            )}
            {item === 'delicate' && (
              <div className="w-full h-full">
                <svg viewBox="0 0 40 20" className="w-full h-full">
                  <path d="M0,10 Q20,5 40,10" stroke={mainColor} strokeWidth="0.5" fill="none" opacity="0.7" />
                  <path d="M0,12 Q20,7 40,12" stroke={accentColors[0]} strokeWidth="0.5" fill="none" opacity="0.5" />
                </svg>
              </div>
            )}
            {item === 'lace' && (
              <div className="w-full h-full">
                <svg viewBox="0 0 40 20" className="w-full h-full">
                  <circle cx="10" cy="10" r="3" stroke={mainColor} strokeWidth="0.5" fill="none" opacity="0.6" />
                  <circle cx="30" cy="10" r="3" stroke={mainColor} strokeWidth="0.5" fill="none" opacity="0.6" />
                  <path d="M13,10 L27,10" stroke={accentColors[0]} strokeWidth="0.5" opacity="0.5" />
                </svg>
              </div>
            )}
            {item === 'ribbon' && (
              <div className="w-full h-full flex items-center">
                <div className="w-full h-2 rounded-full" style={{ background: `linear-gradient(90deg, ${mainColor}, ${accentColors[0]}, ${mainColor})` }} />
              </div>
            )}
            {item === 'soft' && <div className="w-full h-full rounded" style={{ background: `radial-gradient(ellipse, ${mainColor}20, transparent)` }} />}
            {item === 'geometric' && (
              <div className="w-full h-full flex items-center justify-around">
                <div className="w-2 h-2" style={{ background: mainColor }} />
                <div className="w-2 h-2 rounded-full" style={{ background: accentColors[0] }} />
                <div className="w-2 h-2 rotate-45" style={{ background: mainColor }} />
              </div>
            )}
            {item === 'cultural' && (
              <div className="w-full h-full">
                <svg viewBox="0 0 40 20" className="w-full h-full">
                  <rect x="5" y="5" width="8" height="10" fill={mainColor} opacity="0.6" />
                  <rect x="15" y="3" width="10" height="14" fill={accentColors[0]} opacity="0.5" />
                  <rect x="27" y="7" width="8" height="8" fill={mainColor} opacity="0.7" />
                </svg>
              </div>
            )}
            {item === 'minimal grid' && <div className="w-full h-full" style={{ backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 9px, ${mainColor}20 10px), repeating-linear-gradient(0deg, transparent, transparent 9px, ${mainColor}20 10px)` }} />}
          </div>
        );
        
      case 'textures':
        return (
          <div className="w-12 h-6 border border-current border-opacity-20 overflow-hidden rounded">
            {item === 'parchment' && <div className="w-full h-full" style={{ background: `radial-gradient(circle at 30% 30%, ${mainColor}15, ${mainColor}05, transparent)` }} />}
            {item === 'organic' && <div className="w-full h-full" style={{ background: `radial-gradient(ellipse 60% 40%, ${mainColor}20, transparent)` }} />}
            {item === 'metallic' && <div className="w-full h-full" style={{ background: `linear-gradient(135deg, ${mainColor}, white, ${mainColor})` }} />}
            {item === 'holographic' && <div className="w-full h-full" style={{ background: `conic-gradient(${mainColor}, ${accentColors[0]}, ${accentColors[1] || mainColor}, ${mainColor})` }} />}
            {item === 'soft' && <div className="w-full h-full" style={{ background: `radial-gradient(circle, ${mainColor}30, ${mainColor}10)` }} />}
            {item === 'ambient' && <div className="w-full h-full" style={{ background: `linear-gradient(45deg, ${mainColor}20, transparent, ${accentColors[0]}20)` }} />}
            {item === 'soft shadows' && <div className="w-full h-full bg-gray-100" style={{ boxShadow: `inset 2px 2px 4px ${mainColor}20, inset -2px -2px 4px white` }} />}
            {item === 'handmade' && <div className="w-full h-full" style={{ background: `repeating-radial-gradient(circle at random, ${mainColor}30, transparent 3px)` }} />}
            {item === 'craft' && <div className="w-full h-full" style={{ background: `repeating-conic-gradient(${mainColor}40, ${accentColors[0]}30, transparent)`, backgroundSize: '6px 6px' }} />}
            {item === 'tactile' && <div className="w-full h-full" style={{ background: `repeating-radial-gradient(circle, ${mainColor}40, transparent 2px)` }} />}
            {item === 'cozy' && <div className="w-full h-full rounded" style={{ background: `radial-gradient(ellipse, ${mainColor}25, ${accentColors[0]}15)` }} />}
            {item === 'frosted' && <div className="w-full h-full backdrop-blur-sm rounded" style={{ background: `linear-gradient(45deg, ${mainColor}30, transparent)` }} />}
            {item === 'translucent' && <div className="w-full h-full rounded" style={{ background: `linear-gradient(135deg, ${mainColor}40, ${accentColors[0]}20)`, backdropFilter: 'blur(2px)' }} />}
            {item === 'clean' && <div className="w-full h-full bg-gray-50" style={{ background: `linear-gradient(to bottom, ${mainColor}05, transparent)` }} />}
            {item === 'generative' && <div className="w-full h-full" style={{ background: `conic-gradient(from 45deg, ${mainColor}30, ${accentColors[0]}20, ${mainColor}30)` }} />}
            {item === 'smooth' && <div className="w-full h-full rounded-full" style={{ background: `radial-gradient(circle, ${mainColor}40, ${mainColor}20)` }} />}
            {item === 'neon glow' && <div className="w-full h-full rounded" style={{ background: mainColor, boxShadow: `0 0 12px ${mainColor}, inset 0 0 12px ${mainColor}80` }} />}
            {item === 'digital' && <div className="w-full h-full" style={{ background: `repeating-linear-gradient(90deg, ${mainColor}, ${mainColor} 1px, transparent 1px, transparent 4px)` }} />}
            {item === 'rough' && <div className="w-full h-full" style={{ background: `repeating-radial-gradient(circle at 20% 30%, ${mainColor}60, transparent 2px)`, filter: 'contrast(1.2)' }} />}
            {item === 'layered shadows' && <div className="w-full h-full" style={{ background: mainColor, boxShadow: `3px 3px 0 ${accentColors[0]}, 6px 6px 0 ${accentColors[1] || mainColor}` }} />}
            {item === 'bold' && <div className="w-full h-full" style={{ background: `linear-gradient(45deg, ${mainColor}, ${accentColors[0]})`, filter: 'saturate(1.5)' }} />}
            {item === 'animated' && <div className="w-full h-full animate-pulse" style={{ background: `linear-gradient(90deg, ${mainColor}, ${accentColors[0]})` }} />}
            {item === 'vibrant' && <div className="w-full h-full" style={{ background: `conic-gradient(${accentColors[0]}, ${accentColors[1]}, ${accentColors[0]})`, filter: 'saturate(1.8)' }} />}
            {item === 'retro' && <div className="w-full h-full" style={{ background: `repeating-linear-gradient(45deg, ${mainColor}, ${mainColor} 2px, ${accentColors[0]} 2px, ${accentColors[0]} 4px)` }} />}
            {item === 'dreamy' && <div className="w-full h-full" style={{ background: `radial-gradient(ellipse, ${mainColor}50, ${accentColors[0]}30, transparent)`, filter: 'blur(0.5px)' }} />}
            {item === 'pastel' && <div className="w-full h-full" style={{ background: `linear-gradient(135deg, ${mainColor}40, ${accentColors[0]}40)`, filter: 'brightness(1.2)' }} />}
            {item === 'veil' && <div className="w-full h-full" style={{ background: `linear-gradient(180deg, ${mainColor}20, transparent, ${accentColors[0]}15)` }} />}
            {item === 'silk' && <div className="w-full h-full" style={{ background: `linear-gradient(45deg, ${mainColor}30, white, ${accentColors[0]}30)` }} />}
            {item === 'linen' && <div className="w-full h-full" style={{ background: `repeating-linear-gradient(90deg, ${mainColor}20, ${mainColor}20 1px, transparent 1px, transparent 3px)` }} />}
            {item === 'paper' && <div className="w-full h-full bg-gray-50" style={{ background: `radial-gradient(circle at 70% 30%, ${mainColor}10, transparent)` }} />}
            {item === 'aged' && <div className="w-full h-full" style={{ background: `radial-gradient(ellipse, ${mainColor}25, ${mainColor}15, transparent)`, filter: 'sepia(0.3)' }} />}
            {item === 'wax seal' && <div className="w-full h-full rounded-full" style={{ background: `radial-gradient(circle, ${mainColor}, ${mainColor}80)` }} />}
            {item === 'stained glass' && <div className="w-full h-full" style={{ background: `conic-gradient(${mainColor}70, ${accentColors[0]}70, ${accentColors[1] || mainColor}70)` }} />}
            {item === 'column rules' && <div className="w-full h-full" style={{ background: `repeating-linear-gradient(90deg, transparent, transparent 15px, ${mainColor}40 16px)` }} />}
            {item === 'terrazzo' && (
              <div className="w-full h-full relative bg-gray-100">
                <div className="absolute w-1 h-1 rounded-full top-1 left-2" style={{ background: mainColor }} />
                <div className="absolute w-2 h-1 top-3 left-6" style={{ background: accentColors[0] }} />
                <div className="absolute w-1 h-2 top-2 left-9" style={{ background: mainColor }} />
              </div>
            )}
            {item === 'snow dust' && <div className="w-full h-full bg-blue-50" style={{ background: `radial-gradient(circle at random, white 1px, transparent 1px)`, backgroundSize: '8px 8px' }} />}
            {item === '3d depth' && <div className="w-full h-full" style={{ background: `linear-gradient(135deg, ${mainColor}, ${mainColor}80)`, boxShadow: `inset -2px -2px 4px ${mainColor}40` }} />}
          </div>
        );
        
      case 'illustrations':
        return (
          <div className="w-8 h-6 border border-current border-opacity-20 flex items-center justify-center rounded">
            {item === 'botanical' && (
              <svg viewBox="0 0 24 16" className="w-full h-full">
                <path d="M12,2 Q8,8 12,14 Q16,8 12,2" fill={mainColor} opacity="0.7" />
                <line x1="12" y1="8" x2="12" y2="14" stroke={accentColors[0]} strokeWidth="1" />
              </svg>
            )}
            {item === 'solar panels' && (
              <svg viewBox="0 0 24 16" className="w-full h-full">
                <rect x="2" y="4" width="8" height="8" fill={mainColor} opacity="0.8" />
                <rect x="14" y="4" width="8" height="8" fill={accentColors[0]} opacity="0.8" />
                <path d="M6,4 L6,12 M10,4 L10,12 M18,4 L18,12 M22,4 L22,12" stroke="white" strokeWidth="0.5" />
              </svg>
            )}
            {item === 'nature tech' && (
              <svg viewBox="0 0 24 16" className="w-full h-full">
                <circle cx="12" cy="8" r="6" fill={mainColor} opacity="0.5" />
                <rect x="10" y="6" width="4" height="4" fill={accentColors[0]} opacity="0.8" />
                <path d="M8,8 Q12,4 16,8" stroke={accentColors[0]} strokeWidth="1" fill="none" />
              </svg>
            )}
            {item === 'eco futuristic' && (
              <svg viewBox="0 0 24 16" className="w-full h-full">
                <ellipse cx="12" cy="8" rx="8" ry="4" fill={mainColor} opacity="0.4" />
                <rect x="8" y="6" width="8" height="4" rx="2" fill={accentColors[0]} opacity="0.8" />
                <circle cx="10" cy="8" r="1" fill="white" />
                <circle cx="14" cy="8" r="1" fill="white" />
              </svg>
            )}
            {item === 'wellness' && (
              <svg viewBox="0 0 24 16" className="w-full h-full">
                <path d="M12,4 Q8,2 6,8 Q8,14 12,12 Q16,14 18,8 Q16,2 12,4" fill={mainColor} opacity="0.6" />
                <circle cx="12" cy="8" r="2" fill={accentColors[0]} opacity="0.8" />
              </svg>
            )}
            {item === 'health' && (
              <svg viewBox="0 0 24 16" className="w-full h-full">
                <path d="M12,3 L15,6 L12,9 L9,6 Z" fill={mainColor} />
                <path d="M12,7 L15,10 L12,13 L9,10 Z" fill={accentColors[0]} opacity="0.7" />
              </svg>
            )}
            {item === 'abstract' && (
              <svg viewBox="0 0 24 16" className="w-full h-full">
                <path d="M4,12 Q12,4 20,12" fill="none" stroke={mainColor} strokeWidth="2" />
                <circle cx="8" cy="8" r="2" fill={accentColors[0]} opacity="0.7" />
                <rect x="16" y="6" width="4" height="4" fill={mainColor} opacity="0.6" />
              </svg>
            )}
            {item === 'geometric' && (
              <svg viewBox="0 0 24 16" className="w-full h-full">
                <polygon points="12,2 20,8 12,14 4,8" fill={mainColor} opacity="0.7" />
                <polygon points="12,4 16,8 12,12 8,8" fill={accentColors[0]} opacity="0.8" />
              </svg>
            )}
            {item === 'fluid' && (
              <svg viewBox="0 0 24 16" className="w-full h-full">
                <path d="M2,8 Q12,2 22,8 Q12,14 2,8" fill={mainColor} opacity="0.6" />
                <ellipse cx="12" cy="8" rx="6" ry="3" fill={accentColors[0]} opacity="0.5" />
              </svg>
            )}
            {item === 'educational' && (
              <svg viewBox="0 0 24 16" className="w-full h-full">
                <rect x="6" y="4" width="12" height="8" rx="1" fill={mainColor} opacity="0.7" />
                <rect x="8" y="6" width="8" height="1" fill="white" />
                <rect x="8" y="8" width="6" height="1" fill="white" />
                <rect x="8" y="10" width="4" height="1" fill="white" />
              </svg>
            )}
            {item === 'tech' && (
              <svg viewBox="0 0 24 16" className="w-full h-full">
                <rect x="4" y="6" width="16" height="4" rx="2" fill={mainColor} opacity="0.8" />
                <circle cx="8" cy="8" r="1" fill="white" />
                <circle cx="12" cy="8" r="1" fill="white" />
                <circle cx="16" cy="8" r="1" fill="white" />
              </svg>
            )}
            {item === 'AI' && (
              <svg viewBox="0 0 24 16" className="w-full h-full">
                <circle cx="12" cy="8" r="5" fill={mainColor} opacity="0.6" />
                <path d="M9,6 L12,8 L15,6 M9,10 L12,8 L15,10" stroke={accentColors[0]} strokeWidth="1.5" fill="none" />
              </svg>
            )}
            {item === 'cyberpunk' && (
              <svg viewBox="0 0 24 16" className="w-full h-full">
                <rect x="4" y="2" width="16" height="12" fill={mainColor} opacity="0.3" />
                <rect x="6" y="4" width="4" height="8" fill={accentColors[0]} />
                <rect x="14" y="6" width="4" height="6" fill={mainColor} />
                <rect x="10" y="5" width="4" height="6" fill={accentColors[0]} opacity="0.7" />
              </svg>
            )}
            {item === 'futuristic' && (
              <svg viewBox="0 0 24 16" className="w-full h-full">
                <ellipse cx="12" cy="8" rx="10" ry="6" fill={mainColor} opacity="0.4" />
                <ellipse cx="12" cy="8" rx="6" ry="3" fill={accentColors[0]} opacity="0.8" />
                <ellipse cx="12" cy="8" rx="2" ry="1" fill="white" />
              </svg>
            )}
            {item === 'minimal' && (
              <svg viewBox="0 0 24 16" className="w-full h-full">
                <circle cx="12" cy="8" r="4" stroke={mainColor} strokeWidth="1" fill="none" />
                <line x1="8" y1="8" x2="16" y2="8" stroke={accentColors[0]} strokeWidth="1" />
              </svg>
            )}
            {item === 'functional' && (
              <svg viewBox="0 0 24 16" className="w-full h-full">
                <rect x="6" y="6" width="12" height="4" stroke={mainColor} strokeWidth="1" fill="none" />
                <circle cx="9" cy="8" r="1" fill={accentColors[0]} />
                <circle cx="15" cy="8" r="1" fill={accentColors[0]} />
              </svg>
            )}
            {item === 'collage' && (
              <svg viewBox="0 0 24 16" className="w-full h-full">
                <rect x="2" y="2" width="8" height="6" fill={mainColor} opacity="0.7" />
                <rect x="12" y="4" width="6" height="8" fill={accentColors[0]} opacity="0.6" />
                <circle cx="8" cy="10" r="3" fill={accentColors[1] || mainColor} opacity="0.5" />
              </svg>
            )}
            {item === 'maximalist' && (
              <svg viewBox="0 0 24 16" className="w-full h-full">
                <rect x="0" y="0" width="24" height="16" fill={mainColor} opacity="0.3" />
                <circle cx="6" cy="4" r="2" fill={accentColors[0]} />
                <rect x="12" y="2" width="4" height="4" fill={accentColors[1] || mainColor} />
                <polygon points="18,6 22,8 18,10 16,8" fill={mainColor} />
                <circle cx="8" cy="12" r="1.5" fill={accentColors[0]} />
                <rect x="14" y="10" width="6" height="2" fill={accentColors[1] || mainColor} />
              </svg>
            )}
            {item === 'fun' && (
              <svg viewBox="0 0 24 16" className="w-full h-full">
                <circle cx="8" cy="6" r="2" fill={accentColors[0]} />
                <circle cx="16" cy="6" r="2" fill={accentColors[1] || mainColor} />
                <path d="M6,10 Q12,14 18,10" stroke={mainColor} strokeWidth="2" fill="none" />
              </svg>
            )}
            {item === 'colorful' && (
              <svg viewBox="0 0 24 16" className="w-full h-full">
                <rect x="2" y="4" width="4" height="8" fill={accentColors[0]} />
                <rect x="8" y="2" width="4" height="12" fill={accentColors[1] || mainColor} />
                <rect x="14" y="6" width="4" height="6" fill={mainColor} />
                <rect x="20" y="3" width="2" height="10" fill={accentColors[0]} />
              </svg>
            )}
            {item === '80s' && (
              <svg viewBox="0 0 24 16" className="w-full h-full">
                <path d="M2,14 L12,2 L22,14" stroke={mainColor} strokeWidth="2" fill="none" />
                <path d="M6,14 L12,6 L18,14" stroke={accentColors[0]} strokeWidth="2" fill="none" />
                <circle cx="12" cy="8" r="2" fill={accentColors[1] || mainColor} />
              </svg>
            )}
            {item === 'vaporwave' && (
              <svg viewBox="0 0 24 16" className="w-full h-full">
                <defs>
                  <linearGradient id="vaporGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={mainColor} />
                    <stop offset="100%" stopColor={accentColors[0]} />
                  </linearGradient>
                </defs>
                <rect x="0" y="8" width="24" height="8" fill="url(#vaporGrad)" opacity="0.6" />
                <path d="M0,14 L4,10 L8,14 L12,10 L16,14 L20,10 L24,14" stroke="white" strokeWidth="1" fill="none" />
              </svg>
            )}
            {item === 'folk art' && (
              <svg viewBox="0 0 24 16" className="w-full h-full">
                <circle cx="12" cy="8" r="5" stroke={mainColor} strokeWidth="1" fill="none" />
                <path d="M8,8 L12,4 L16,8 L12,12 Z" fill={accentColors[0]} opacity="0.7" />
                <circle cx="12" cy="8" r="2" fill={mainColor} />
              </svg>
            )}
            {item === 'hand drawn' && (
              <svg viewBox="0 0 24 16" className="w-full h-full">
                <path d="M4,8 Q8,4 12,8 Q16,12 20,8" stroke={mainColor} strokeWidth="2" fill="none" strokeLinecap="round" />
                <circle cx="6" cy="6" r="1" fill={accentColors[0]} />
                <circle cx="18" cy="10" r="1" fill={accentColors[0]} />
              </svg>
            )}
            {item === 'craft' && (
              <svg viewBox="0 0 24 16" className="w-full h-full">
                <rect x="6" y="4" width="12" height="8" stroke={mainColor} strokeWidth="1" fill="none" strokeDasharray="2,1" />
                <path d="M8,6 L16,6 M8,8 L14,8 M8,10 L12,10" stroke={accentColors[0]} strokeWidth="1" />
              </svg>
            )}
            {item === 'handmade' && (
              <svg viewBox="0 0 24 16" className="w-full h-full">
                <path d="M4,12 Q6,8 8,12 Q10,6 12,12 Q14,8 16,12 Q18,6 20,12" stroke={mainColor} strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <circle cx="8" cy="10" r="1" fill={accentColors[0]} opacity="0.7" />
                <circle cx="16" cy="10" r="1" fill={accentColors[0]} opacity="0.7" />
              </svg>
            )}
          </div>
        );
        
      default:
        return <span className="text-xs opacity-60 capitalize">{item}</span>;
    }
  };

  return (
    <div className="mt-4 pt-4 border-t border-opacity-20 border-current">
      <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
        <Palette className="w-4 h-4" />
        Visual Assets & Examples
      </h4>
      
      <div className="grid grid-cols-1 gap-4 text-xs">
        {assets.icons && (
          <div>
            <strong className="text-xs font-medium mb-2 block">Icons:</strong>
            <div className="flex gap-2 flex-wrap">
              {assets.icons.map((icon, index) => (
                <div key={index} className="flex items-center gap-2 bg-black bg-opacity-5 rounded-lg px-2 py-1.5 border border-current border-opacity-10">
                  {getVisualExample('icons', icon)}
                  <span className="capitalize text-xs">{icon}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {assets.patterns && (
          <div>
            <strong className="text-xs font-medium mb-2 block">Patterns:</strong>
            <div className="flex gap-2 flex-wrap">
              {assets.patterns.map((pattern, index) => (
                <div key={index} className="flex items-center gap-2 bg-black bg-opacity-5 rounded-lg px-2 py-1.5 border border-current border-opacity-10">
                  {getVisualExample('patterns', pattern)}
                  <span className="capitalize text-xs">{pattern}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {assets.textures && (
          <div>
            <strong className="text-xs font-medium mb-2 block">Textures:</strong>
            <div className="flex gap-2 flex-wrap">
              {assets.textures.map((texture, index) => (
                <div key={index} className="flex items-center gap-2 bg-black bg-opacity-5 rounded-lg px-2 py-1.5 border border-current border-opacity-10">
                  {getVisualExample('textures', texture)}
                  <span className="capitalize text-xs">{texture}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {assets.illustrations && (
          <div>
            <strong className="text-xs font-medium mb-2 block">Illustrations:</strong>
            <div className="flex gap-2 flex-wrap">
              {assets.illustrations.map((illustration, index) => (
                <div key={index} className="flex items-center gap-2 bg-black bg-opacity-5 rounded-lg px-2 py-1.5 border border-current border-opacity-10">
                  {getVisualExample('illustrations', illustration)}
                  <span className="capitalize text-xs">{illustration}</span>
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
