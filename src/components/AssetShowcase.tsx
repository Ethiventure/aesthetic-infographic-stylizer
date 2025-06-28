import React from 'react';
import { Palette } from 'lucide-react';

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

const IconExamples: React.FC<{ icon: string; mainColor: string; accentColors: string[] }> = ({ icon, mainColor, accentColors }) => {
  switch (icon) {
    case 'art nouveau':
      return (
        <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Art Nouveau icon">
          <path d="M10,2 Q6,8 10,14 Q14,8 10,2 M6,10 Q10,6 14,10" stroke={mainColor} strokeWidth="1" fill="none" />
          <circle cx="10" cy="8" r="1" fill={accentColors[0]} />
        </svg>
      );
    case 'nouveau':
      return (
        <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Nouveau icon">
          <path d="M4,16 Q10,8 16,16 M6,12 Q10,8 14,12" stroke={mainColor} strokeWidth="1.5" fill="none" />
          <ellipse cx="10" cy="10" rx="2" ry="1" fill={accentColors[0]} opacity="0.7" />
        </svg>
      );
    case 'solar':
      return (
        <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Solar icon">
          <rect x="6" y="6" width="8" height="8" fill={mainColor} opacity="0.8" />
          <path d="M8,6 L8,14 M12,6 L12,14 M6,8 L14,8 M6,12 L14,12" stroke="white" strokeWidth="0.5" />
          <circle cx="10" cy="4" r="1" fill={accentColors[0]} />
        </svg>
      );
    case 'hand drawn':
      return (
        <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Hand drawn icon">
          <path d="M4,12 Q6,8 8,12 Q10,6 12,12 Q14,8 16,12" stroke={mainColor} strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <circle cx="8" cy="10" r="0.5" fill={accentColors[0]} />
        </svg>
      );
    case 'craft':
      return (
        <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Craft icon">
          <rect x="6" y="6" width="8" height="8" stroke={mainColor} strokeWidth="1" fill="none" strokeDasharray="1,1" />
          <path d="M8,8 L12,8 M8,10 L11,10 M8,12 L10,12" stroke={accentColors[0]} strokeWidth="0.8" />
        </svg>
      );
    case 'folk':
      return (
        <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Folk icon">
          <circle cx="10" cy="10" r="6" stroke={mainColor} strokeWidth="1" fill="none" />
          <path d="M6,10 L10,6 L14,10 L10,14 Z" fill={accentColors[0]} opacity="0.7" />
          <circle cx="10" cy="10" r="2" fill={mainColor} />
        </svg>
      );
    case 'traditional':
      return (
        <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Traditional icon">
          <rect x="4" y="8" width="12" height="4" fill={mainColor} opacity="0.6" />
          <rect x="6" y="6" width="8" height="8" stroke={accentColors[0]} strokeWidth="1" fill="none" />
          <circle cx="10" cy="10" r="1" fill={mainColor} />
        </svg>
      );
    case 'brutal':
      return (
        <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Brutal icon">
          <rect x="2" y="4" width="16" height="12" fill={mainColor} />
          <rect x="4" y="6" width="4" height="8" fill="white" opacity="0.3" />
          <rect x="12" y="6" width="4" height="8" fill="white" opacity="0.3" />
        </svg>
      );
    case 'industrial':
      return (
        <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Industrial icon">
          <rect x="2" y="8" width="16" height="8" fill={mainColor} />
          <rect x="4" y="6" width="2" height="4" fill={accentColors[0]} />
          <rect x="8" y="4" width="2" height="6" fill={accentColors[0]} />
          <rect x="12" y="6" width="2" height="4" fill={accentColors[0]} />
        </svg>
      );
    case 'ai':
      return (
        <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="AI icon">
          <circle cx="10" cy="10" r="6" fill={mainColor} opacity="0.3" />
          <path d="M7,8 L10,10 L13,8 M7,12 L10,10 L13,12" stroke={accentColors[0]} strokeWidth="1.5" fill="none" />
          <circle cx="10" cy="10" r="1" fill={mainColor} />
        </svg>
      );
    case 'neural':
      return (
        <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Neural icon">
          <circle cx="6" cy="6" r="1.5" fill={mainColor} />
          <circle cx="14" cy="6" r="1.5" fill={accentColors[0]} />
          <circle cx="10" cy="14" r="1.5" fill={mainColor} />
          <path d="M6,6 L14,6 M6,6 L10,14 M14,6 L10,14" stroke={accentColors[0]} strokeWidth="0.5" />
        </svg>
      );
    case 'glass':
      return (
        <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Glass icon">
          <rect x="4" y="4" width="12" height="12" rx="2" fill={mainColor} opacity="0.2" stroke={mainColor} strokeWidth="0.5" />
          <rect x="6" y="6" width="8" height="8" rx="1" fill="white" opacity="0.3" />
        </svg>
      );
    case 'afrofuturistic':
      return (
        <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Afrofuturistic icon">
          <polygon points="10,2 16,6 16,14 10,18 4,14 4,6" fill={mainColor} opacity="0.8" />
          <polygon points="10,6 13,8 13,12 10,14 7,12 7,8" fill={accentColors[0]} />
        </svg>
      );
    case 'zen':
      return (
        <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Zen icon">
          <circle cx="10" cy="10" r="7" stroke={mainColor} strokeWidth="1" fill="none" />
          <path d="M10,3 Q15,10 10,17 Q5,10 10,3" fill={accentColors[0]} opacity="0.5" />
        </svg>
      );
    case 'ballet':
      return (
        <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Ballet icon">
          <ellipse cx="10" cy="12" rx="8" ry="3" fill={mainColor} opacity="0.3" />
          <ellipse cx="10" cy="8" rx="4" ry="6" fill={accentColors[0]} opacity="0.6" />
          <circle cx="10" cy="5" r="2" fill={mainColor} opacity="0.8" />
        </svg>
      );
    case 'heart':
      return <svg className="w-4 h-4" fill={accentColors[0] || mainColor} viewBox="0 0 24 24" aria-label="Heart icon"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>;
    case 'bow':
      return (
        <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Bow icon">
          <path d="M4,10 Q8,6 10,10 Q12,6 16,10 Q12,14 10,10 Q8,14 4,10" fill={mainColor} />
          <ellipse cx="10" cy="10" rx="1" ry="2" fill={accentColors[0]} />
        </svg>
      );
    case 'bold':
      return (
        <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Bold icon">
          <rect x="2" y="2" width="16" height="16" fill={mainColor} />
          <rect x="4" y="4" width="12" height="12" fill={accentColors[0]} />
          <rect x="6" y="6" width="8" height="8" fill={accentColors[1] || mainColor} />
        </svg>
      );
    case 'layered':
      return (
        <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Layered icon">
          <circle cx="8" cy="8" r="4" fill={mainColor} opacity="0.7" />
          <circle cx="12" cy="12" r="4" fill={accentColors[0]} opacity="0.7" />
          <rect x="6" y="6" width="8" height="8" fill={accentColors[1] || mainColor} opacity="0.5" />
        </svg>
      );
    case 'explosive':
      return (
        <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Explosive icon">
          <polygon points="10,2 12,8 18,8 13,12 15,18 10,14 5,18 7,12 2,8 8,8" fill={mainColor} />
          <circle cx="10" cy="10" r="3" fill={accentColors[0]} opacity="0.8" />
        </svg>
      );
    case 'atomic':
      return (
        <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Atomic icon">
          <circle cx="10" cy="10" r="6" stroke={mainColor} strokeWidth="1" fill="none" />
          <ellipse cx="10" cy="10" rx="8" ry="3" stroke={accentColors[0]} strokeWidth="1" fill="none" />
          <ellipse cx="10" cy="10" rx="3" ry="8" stroke={accentColors[0]} strokeWidth="1" fill="none" />
          <circle cx="10" cy="10" r="1.5" fill={mainColor} />
        </svg>
      );
    case 'crystalline':
      return (
        <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Crystalline icon">
          <polygon points="10,2 16,8 10,14 4,8" stroke={mainColor} strokeWidth="1" fill="none" />
          <polygon points="10,4 14,8 10,12 6,8" fill={accentColors[0]} opacity="0.5" />
        </svg>
      );
    case 'midcentury':
      return (
        <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Midcentury icon">
          <ellipse cx="10" cy="10" rx="8" ry="4" fill={mainColor} opacity="0.6" />
          <ellipse cx="10" cy="10" rx="4" ry="2" fill={accentColors[0]} />
          <circle cx="6" cy="10" r="1" fill="white" />
          <circle cx="14" cy="10" r="1" fill="white" />
        </svg>
      );
    default:
      return <div className="w-4 h-4 border border-current rounded" style={{ borderColor: mainColor }} aria-label={icon} />;
  }
};

const PatternExamples: React.FC<{ pattern: string; mainColor: string; accentColors: string[] }> = ({ pattern, mainColor, accentColors }) => {
  switch (pattern) {
    case 'flowing vines':
      return (
        <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Flowing vines pattern">
          <path d="M0,15 Q10,5 20,12 Q30,8 40,15" stroke={mainColor} strokeWidth="2" fill="none" />
          <path d="M5,12 Q15,8 25,15 Q35,5 40,12" stroke={accentColors[0]} strokeWidth="1" fill="none" />
          <circle cx="15" cy="9" r="1" fill={accentColors[0]} />
          <circle cx="25" cy="12" r="1" fill={mainColor} />
        </svg>
      );
    case 'flowing curves':
      return (
        <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Flowing curves pattern">
          <path d="M0,10 Q20,0 40,10 Q20,20 0,10" fill={mainColor} opacity="0.4" />
          <path d="M0,8 Q20,2 40,8" stroke={accentColors[0]} strokeWidth="1" fill="none" />
          <path d="M0,12 Q20,18 40,12" stroke={accentColors[1] || mainColor} strokeWidth="1" fill="none" />
        </svg>
      );
    case 'carved':
      return (
        <div
          className="w-full h-full"
          style={{
            background: `repeating-linear-gradient(45deg, ${mainColor}40, ${mainColor}40 2px, ${accentColors[0]}40 2px, ${accentColors[0]}40 4px)`,
            filter: 'contrast(1.1)',
          }}
          aria-label="Carved pattern"
        />
      );
    case 'concrete':
      return (
        <div
          className="w-full h-full"
          style={{
            background: `
              radial-gradient(circle at 25% 25%, ${mainColor}60, transparent 50%),
              repeating-linear-gradient(90deg, ${mainColor}30, ${mainColor}30 3px, transparent 3px, transparent 6px)
            `,
            filter: 'contrast(1.3)',
          }}
          aria-label="Concrete pattern"
        />
      );
    case 'brutal':
      return (
        <div
          className="w-full h-full grid grid-cols-4 grid-rows-2 gap-px"
          style={{ background: mainColor }}
          aria-label="Brutal pattern"
        >
          <div style={{ background: 'white', opacity: 0.2 }} />
          <div style={{ background: mainColor }} />
          <div style={{ background: 'white', opacity: 0.2 }} />
          <div style={{ background: mainColor }} />
          <div style={{ background: mainColor }} />
          <div style={{ background: 'white', opacity: 0.2 }} />
          <div style={{ background: mainColor }} />
          <div style={{ background: 'white', opacity: 0.2 }} />
        </div>
      );
    case 'glass':
      return (
        <div className="w-full h-full relative" aria-label="Glass pattern">
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${mainColor}20, transparent, ${accentColors[0]}20)`,
              backdropFilter: 'blur(2px)',
            }}
          />
          <div
            className="absolute inset-1"
            style={{
              background: 'white',
              opacity: 0.1,
              borderRadius: '2px',
            }}
          />
        </div>
      );
    case 'folk art':
      return (
        <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Folk art pattern">
          <rect x="5" y="5" width="6" height="10" fill={mainColor} opacity="0.6" />
          <rect x="15" y="3" width="10" height="14" fill={accentColors[0]} opacity="0.5" />
          <rect x="29" y="7" width="6" height="6" fill={mainColor} opacity="0.7" />
          <circle cx="8" cy="10" r="2" stroke={accentColors[0]} strokeWidth="0.5" fill="none" />
          <circle cx="32" cy="10" r="2" stroke={mainColor} strokeWidth="0.5" fill="none" />
        </svg>
      );
    case 'woven':
      return (
        <div
          className="w-full h-full"
          style={{
            background: `
              repeating-linear-gradient(0deg, ${mainColor}60, ${mainColor}60 2px, ${accentColors[0]}40 2px, ${accentColors[0]}40 4px),
              repeating-linear-gradient(90deg, ${accentColors[0]}40, ${accentColors[0]}40 2px, ${mainColor}60 2px, ${mainColor}60 4px)
            `,
          }}
          aria-label="Woven pattern"
        />
      );
    case 'geometric':
      return (
        <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Geometric pattern">
          <polygon points="10,2 18,6 18,14 10,18 2,14 2,6" fill={mainColor} opacity="0.7" />
          <polygon points="30,2 38,6 38,14 30,18 22,14 22,6" fill={accentColors[0]} opacity="0.7" />
        </svg>
      );
    case 'moroccan':
      return (
        <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Moroccan pattern">
          <path d="M5,10 L10,5 L15,10 L10,15 Z M25,10 L30,5 L35,10 L30,15 Z" fill={mainColor} opacity="0.6" />
          <path d="M10,2 L20,10 L10,18 M30,2 L20,10 L30,18" stroke={accentColors[0]} strokeWidth="1" fill="none" />
        </svg>
      );
    case 'sketched leaves':
      return (
        <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Sketched leaves pattern">
          <path d="M8,8 Q12,4 16,8 Q12,12 8,8" stroke={mainColor} strokeWidth="1" fill="none" strokeDasharray="1,1" />
          <path d="M24,6 Q28,2 32,6 Q28,10 24,6" stroke={accentColors[0]} strokeWidth="1" fill="none" strokeDasharray="1,1" />
          <path d="M16,14 Q20,10 24,14 Q20,18 16,14" stroke={mainColor} strokeWidth="1" fill="none" strokeDasharray="1,1" />
        </svg>
      );
    case 'neural':
      return (
        <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Neural pattern">
          <circle cx="8" cy="6" r="1" fill={mainColor} />
          <circle cx="20" cy="4" r="1" fill={accentColors[0]} />
          <circle cx="32" cy="8" r="1" fill={mainColor} />
          <circle cx="14" cy="14" r="1" fill={accentColors[0]} />
          <circle cx="26" cy="16" r="1" fill={mainColor} />
          <path d="M8,6 L20,4 L32,8 M20,4 L14,14 M32,8 L26,16 M8,6 L14,14 L26,16" stroke={accentColors[0]} strokeWidth="0.3" opacity="0.7" />
        </svg>
      );
    case 'layered':
      return (
        <div className="w-full h-full relative" aria-label="Layered pattern">
          <div className="absolute inset-0" style={{ background: mainColor, opacity: 0.6 }} />
          <div className="absolute inset-1" style={{ background: accentColors[0], opacity: 0.5 }} />
          <div className="absolute inset-2" style={{ background: accentColors[1] || mainColor, opacity: 0.4 }} />
          <div className="absolute top-1 left-1 w-2 h-2 rounded-full" style={{ background: 'white', opacity: 0.8 }} />
          <div className="absolute bottom-1 right-1 w-2 h-2" style={{ background: 'white', opacity: 0.6 }} />
        </div>
      );
    case 'crystalline':
      return (
        <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Crystalline pattern">
          <polygon points="10,2 16,8 10,14 4,8" stroke={mainColor} strokeWidth="0.5" fill="none" />
          <polygon points="30,2 36,8 30,14 24,8" stroke={accentColors[0]} strokeWidth="0.5" fill="none" />
          <polygon points="20,6 24,10 20,14 16,10" fill={mainColor} opacity="0.3" />
        </svg>
      );
    case 'atomic':
      return (
        <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Atomic pattern">
          <circle cx="12" cy="10" r="6" stroke={mainColor} strokeWidth="0.5" fill="none" />
          <ellipse cx="12" cy="10" rx="8" ry="3" stroke={accentColors[0]} strokeWidth="0.5" fill="none" />
          <ellipse cx="12" cy="10" rx="3" ry="8" stroke={accentColors[0]} strokeWidth="0.5" fill="none" />
          <circle cx="12" cy="10" r="1" fill={mainColor} />
          <circle cx="28" cy="10" r="4" stroke={mainColor} strokeWidth="0.5" fill="none" />
          <circle cx="28" cy="10" r="1" fill={accentColors[0]} />
        </svg>
      );
    default:
      return <div className="w-full h-full" style={{ background: `linear-gradient(45deg, ${mainColor}40, ${accentColors[0]}40)` }} aria-label={pattern} />;
  }
};

const TextureExamples: React.FC<{ texture: string; mainColor: string; accentColors: string[] }> = ({ texture, mainColor, accentColors }) => {
  switch (texture) {
    case 'brass':
      return (
        <div
          className="w-full h-full"
          style={{
            background: `radial-gradient(ellipse, ${mainColor}, #B8860B, ${mainColor})`,
            filter: 'contrast(1.2) brightness(1.1)',
          }}
          aria-label="Brass texture"
        />
      );
    case 'etched metal':
      return (
        <div
          className="w-full h-full"
          style={{
            background: `linear-gradient(135deg, ${mainColor}, white, ${accentColors[0]})`,
            backgroundSize: '4px 4px',
          }}
          aria-label="Etched metal texture"
        />
      );
    case 'carved wood':
      return (
        <div
          className="w-full h-full"
          style={{
            background: `repeating-linear-gradient(90deg, ${mainColor}80, ${mainColor}80 1px, ${accentColors[0]}60 1px, ${accentColors[0]}60 3px)`,
            filter: 'sepia(0.2)',
          }}
          aria-label="Carved wood texture"
        />
      );
    case 'earth':
      return (
        <div
          className="w-full h-full"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${mainColor}80, ${accentColors[0]}60, ${mainColor}40)`,
            filter: 'contrast(1.1) saturate(0.8)',
          }}
          aria-label="Earth texture"
        />
      );
    case 'hand drawn':
      return (
        <div className="w-full h-full relative" aria-label="Hand drawn texture">
          <div className="absolute w-1 h-1 bg-current rounded-full top-1 left-1" style={{ color: mainColor, opacity: 0.7 }} />
          <div className="absolute w-0.5 h-2 top-3 left-3" style={{ background: accentColors[0], opacity: 0.6, transform: 'rotate(15deg)' }} />
          <div className="absolute w-1 h-1 top-2 left-8" style={{ background: mainColor, opacity: 0.8, borderRadius: '30%' }} />
          <div className="absolute w-2 h-0.5 top-4 left-6" style={{ background: accentColors[0], opacity: 0.5, transform: 'rotate(-10deg)' }} />
        </div>
      );
    case 'woven':
      return (
        <div
          className="w-full h-full"
          style={{
            background: `
              repeating-linear-gradient(45deg, ${mainColor}60, ${mainColor}60 1px, ${accentColors[0]}40 1px, ${accentColors[0]}40 2px),
              repeating-linear-gradient(-45deg, ${accentColors[0]}40, ${accentColors[0]}40 1px, ${mainColor}60 1px, ${mainColor}60 2px)
            `,
          }}
          aria-label="Woven texture"
        />
      );
    case 'knit':
      return (
        <div
          className="w-full h-full"
          style={{
            background: `repeating-radial-gradient(circle at 2px 2px, ${mainColor}60, ${mainColor}60 1px, ${accentColors[0]}40 1px, ${accentColors[0]}40 3px)`,
            backgroundSize: '6px 4px',
          }}
          aria-label="Knit texture"
        />
      );
    case 'concrete':
      return (
        <div
          className="w-full h-full"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, ${mainColor}40, transparent 50%),
              radial-gradient(circle at 80% 20%, ${mainColor}30, transparent 50%),
              radial-gradient(circle at 40% 40%, ${accentColors[0]}20, transparent 50%)
            `,
            filter: 'contrast(1.2)',
          }}
          aria-label="Concrete texture"
        />
      );
    case 'raw':
      return (
        <div
          className="w-full h-full"
          style={{
            background: `repeating-radial-gradient(circle at 30% 40%, ${mainColor}80, transparent 3px)`,
            filter: 'contrast(1.4) brightness(0.9)',
          }}
          aria-label="Raw texture"
        />
      );
    case 'refined concrete':
      return (
        <div
          className="w-full h-full"
          style={{
            background: `linear-gradient(135deg, ${mainColor}60, ${accentColors[0]}40)`,
            boxShadow: `inset 2px 2px 4px ${mainColor}20, inset -1px -1px 2px white`,
          }}
          aria-label="Refined concrete texture"
        />
      );
    case 'frosted':
      return (
        <div
          className="w-full h-full backdrop-blur-sm rounded"
          style={{
            background: `linear-gradient(45deg, ${mainColor}20, transparent, ${accentColors[0]}15)`,
            filter: 'blur(0.5px)',
          }}
          aria-label="Frosted texture"
        />
      );
    case 'glass':
      return (
        <div
          className="w-full h-full rounded"
          style={{
            background: `linear-gradient(135deg, ${mainColor}30, ${accentColors[0]}20)`,
            backdropFilter: 'blur(2px)',
            border: `0.5px solid ${mainColor}30`,
          }}
          aria-label="Glass texture"
        />
      );
    case 'tile':
      return (
        <div className="w-full h-full grid grid-cols-3 grid-rows-2 gap-px" aria-label="Tile texture">
          <div style={{ background: mainColor, opacity: 0.8 }} />
          <div style={{ background: accentColors[0], opacity: 0.7 }} />
          <div style={{ background: mainColor, opacity: 0.6 }} />
          <div style={{ background: accentColors[0], opacity: 0.8 }} />
          <div style={{ background: mainColor, opacity: 0.7 }} />
          <div style={{ background: accentColors[0], opacity: 0.6 }} />
        </div>
      );
    case 'wood':
      return (
        <div
          className="w-full h-full"
          style={{
            background: `repeating-linear-gradient(90deg, ${mainColor}70, ${mainColor}70 2px, ${accentColors[0]}50 2px, ${accentColors[0]}50 4px)`,
            filter: 'sepia(0.3)',
          }}
          aria-label="Wood texture"
        />
      );
    case 'silk':
      return (
        <div
          className="w-full h-full"
          style={{
            background: `linear-gradient(45deg, ${mainColor}40, white, ${accentColors[0]}30)`,
            filter: 'brightness(1.1)',
          }}
          aria-label="Silk texture"
        />
      );
    case 'tulle':
      return (
        <div
          className="w-full h-full"
          style={{
            background: `radial-gradient(circle at 25% 25%, ${mainColor}30, transparent 60%), radial-gradient(circle at 75% 75%, ${accentColors[0]}20, transparent 60%)`,
            filter: 'blur(0.3px)',
          }}
          aria-label="Tulle texture"
        />
      );
    case 'pearl':
      return (
        <div
          className="w-full h-full rounded-full"
          style={{
            background: `radial-gradient(circle at 30% 30%, white, ${mainColor}60, ${accentColors[0]}40)`,
            filter: 'brightness(1.2)',
          }}
          aria-label="Pearl texture"
        />
      );
    case 'neural':
      return (
        <div className="w-full h-full relative" aria-label="Neural texture">
          <div className="absolute w-px h-full left-2 top-0" style={{ background: `linear-gradient(to bottom, transparent, ${mainColor}, transparent)` }} />
          <div className="absolute w-px h-full left-6 top-0" style={{ background: `linear-gradient(to bottom, transparent, ${accentColors[0]}, transparent)` }} />
          <div className="absolute w-px h-full right-2 top-0" style={{ background: `linear-gradient(to bottom, transparent, ${mainColor}, transparent)` }} />
          <div className="absolute w-1 h-px top-2 left-0" style={{ background: `linear-gradient(to right, transparent, ${accentColors[0]}, transparent)` }} />
          <div className="absolute w-1 h-px bottom-2 left-0" style={{ background: `linear-gradient(to right, transparent, ${mainColor}, transparent)` }} />
        </div>
      );
    case 'neon glow':
      return (
        <div
          className="w-full h-full rounded"
          style={{
            background: mainColor,
            boxShadow: `0 0 6px ${mainColor}, inset 0 0 6px ${mainColor}80`,
            filter: 'brightness(1.3)',
          }}
          aria-label="Neon glow texture"
        />
      );
    default:
      return (
        <div
          className="w-full h-full"
          style={{ background: `radial-gradient(circle, ${mainColor}40, ${mainColor}20)` }}
          aria-label={texture}
        />
      );
  }
};

const IllustrationExamples: React.FC<{ illustration: string; mainColor: string; accentColors: string[] }> = ({ illustration, mainColor, accentColors }) => {
  switch (illustration) {
    case 'nouveau botanical':
      return (
        <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Nouveau botanical illustration">
          <path d="M12,2 Q8,6 12,14 Q16,6 12,2" fill={mainColor} opacity="0.7" />
          <path d="M8,8 Q12,4 16,8" stroke={accentColors[0]} strokeWidth="1" fill="none" />
          <circle cx="12" cy="6" r="1" fill={accentColors[0]} />
          <ellipse cx="12" cy="10" rx="2" ry="1" fill={mainColor} opacity="0.5" />
        </svg>
      );
    case 'solar organic':
      return (
        <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Solar organic illustration">
          <rect x="8" y="4" width="8" height="8" fill={mainColor} opacity="0.6" />
          <path d="M10,4 L10,12 M14,4 L14,12 M8,6 L16,6 M8,10 L16,10" stroke="white" strokeWidth="0.5" />
          <path d="M4,8 Q12,2 20,8" stroke={accentColors[0]} strokeWidth="1" fill="none" />
        </svg>
      );
    case 'botanical sketch':
      return (
        <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Botanical sketch illustration">
          <path d="M12,3 Q8,7 12,13 Q16,7 12,3" stroke={mainColor} strokeWidth="1.5" fill="none" strokeDasharray="2,1" />
          <path d="M8,8 Q12,6 16,8" stroke={accentColors[0]} strokeWidth="1" fill="none" strokeDasharray="1,1" />
          <circle cx="10" cy="7" r="0.5" fill={mainColor} />
          <circle cx="14" cy="9" r="0.5" fill={accentColors[0]} />
        </svg>
      );
    case 'hand drawn':
      return (
        <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Hand drawn illustration">
          <path d="M4,8 Q8,4 12,8 Q16,12 20,8" stroke={mainColor} strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="3,1" />
          <circle cx="6" cy="6" r="1" fill={accentColors[0]} opacity="0.7" />
          <circle cx="18" cy="10" r="1" fill={accentColors[0]} opacity="0.7" />
        </svg>
      );
    case 'craft':
      return (
        <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Craft illustration">
          <rect x="6" y="4" width="12" height="8" stroke={mainColor} strokeWidth="1" fill="none" strokeDasharray="2,1" />
          <path d="M8,6 L16,6 M8,8 L14,8 M8,10 L12,10" stroke={accentColors[0]} strokeWidth="1" />
          <circle cx="19" cy="5" r="1" stroke={mainColor} strokeWidth="0.5" fill="none" />
        </svg>
      );
    case 'handcrafted':
      return (
        <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Handcrafted illustration">
          <path d="M4,12 Q6,8 8,12 Q10,6 12,12 Q14,8 16,12 Q18,6 20,12" stroke={mainColor} strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <rect x="8" y="9" width="8" height="4" stroke={accentColors[0]} strokeWidth="0.8" fill="none" strokeDasharray="1,1" />
        </svg>
      );
    case 'brutal':
      return (
        <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Brutal illustration">
          <rect x="2" y="4" width="20" height="8" fill={mainColor} />
          <rect x="4" y="6" width="4" height="4" fill="white" opacity="0.3" />
          <rect x="16" y="6" width="4" height="4" fill="white" opacity="0.3" />
          <rect x="10" y="2" width="4" height="12" fill={accentColors[0]} opacity="0.8" />
        </svg>
      );
    case 'afrofuturistic':
      return (
        <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Afrofuturistic illustration">
          <polygon points="12,2 18,6 18,10 12,14 6,10 6,6" fill={mainColor} opacity="0.8" />
          <polygon points="12,4 16,7 16,9 12,12 8,9 8,7" fill={accentColors[0]} />
          <circle cx="12" cy="8" r="1" fill="white" />
        </svg>
      );
    case 'zen':
      return (
        <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Zen illustration">
          <circle cx="12" cy="8" r="6" stroke={mainColor} strokeWidth="1" fill="none" />
          <path d="M12,2 Q18,8 12,14 Q6,8 12,2" fill={accentColors[0]} opacity="0.3" />
          <circle cx="12" cy="8" r="1" fill={mainColor} />
        </svg>
      );
    case 'ballet':
      return (
        <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Ballet illustration">
          <ellipse cx="12" cy="12" rx="8" ry="2" fill={mainColor} opacity="0.3" />
          <ellipse cx="12" cy="7" rx="3" ry="5" fill={accentColors[0]} opacity="0.6" />
          <circle cx="12" cy="4" r="1.5" fill={mainColor} />
          <path d="M9,7 Q12,5 15,7" stroke={mainColor} strokeWidth="0.5" fill="none" />
        </svg>
      );
    case 'coquette':
      return (
        <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Coquette illustration">
          <path d="M8,8 Q12,4 16,8 Q12,12 8,8" fill={accentColors[0]} opacity="0.7" />
          <circle cx="10" cy="6" r="1" fill={mainColor} />
          <circle cx="14" cy="6" r="1" fill={mainColor} />
          <path d="M10,10 Q12,12 14,10" stroke={mainColor} strokeWidth="1" fill="none" />
        </svg>
      );
    case 'ai':
      return (
        <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="AI illustration">
          <circle cx="12" cy="8" r="5" fill={mainColor} opacity="0.3" />
          <path d="M9,6 L12,8 L15,6 M9,10 L12,8 L15,10" stroke={accentColors[0]} strokeWidth="1.5" fill="none" />
          <circle cx="12" cy="8" r="1" fill={mainColor} />
        </svg>
      );
    case 'neural':
      return (
        <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Neural illustration">
          <circle cx="6" cy="6" r="1" fill={mainColor} />
          <circle cx="18" cy="6" r="1" fill={accentColors[0]} />
          <circle cx="12" cy="12" r="1" fill={mainColor} />
          <circle cx="8" cy="10" r="0.5" fill={accentColors[0]} />
          <circle cx="16" cy="10" r="0.5" fill={mainColor} />
          <path d="M6,6 L18,6 M6,6 L12,12 M18,6 L12,12 M8,10 L16,10" stroke={accentColors[0]} strokeWidth="0.3" />
        </svg>
      );
    case 'maximalist':
      return (
        <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Maximalist illustration">
          <rect x="0" y="0" width="24" height="16" fill={mainColor} opacity="0.3" />
          <circle cx="6" cy="4" r="2" fill={accentColors[0]} />
          <rect x="12" y="2" width="4" height="4" fill={accentColors[1] || mainColor} />
          <polygon points="18,6 22,8 18,10 16,8" fill={mainColor} />
          <circle cx="8" cy="12" r="1.5" fill={accentColors[0]} />
          <rect x="14" y="10" width="6" height="2" fill={accentColors[1] || mainColor} />
          <polygon points="4,8 2,10 4,12 6,10" fill={accentColors[0]} opacity="0.8" />
        </svg>
      );
    case 'midcentury':
      return (
        <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Midcentury illustration">
          <ellipse cx="12" cy="8" rx="8" ry="4" fill={mainColor} opacity="0.5" />
          <ellipse cx="12" cy="8" rx="4" ry="2" fill={accentColors[0]} />
          <circle cx="8" cy="8" r="1" fill="white" />
          <circle cx="16" cy="8" r="1" fill="white" />
          <path d="M4,8 Q12,4 20,8" stroke={mainColor} strokeWidth="1" fill="none" />
        </svg>
      );
    case 'refined brutal':
      return (
        <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Refined brutal illustration">
          <rect x="4" y="4" width="16" height="8" fill={mainColor} opacity="0.7" rx="1" />
          <rect x="6" y="6" width="4" height="4" fill="white" opacity="0.2" />
          <rect x="14" y="6" width="4" height="4" fill="white" opacity="0.2" />
          <rect x="10" y="7" width="4" height="2" fill={accentColors[0]} opacity="0.8" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 16" className="w-full h-full" aria-label={illustration}>
          <circle cx="12" cy="8" r="4" stroke={mainColor} strokeWidth="1" fill="none" />
          <line x1="8" y1="8" x2="16" y2="8" stroke={accentColors[0]} strokeWidth="1" />
        </svg>
      );
  }
};

const AssetShowcase: React.FC<AssetShowcaseProps> = ({ assets, theme, mainColor, accentColors }) => {
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
                <div
                  key={index}
                  className="flex items-center gap-2 bg-black bg-opacity-5 rounded-lg px-2 py-1.5 border border-current border-opacity-10"
                >
                  <IconExamples icon={icon} mainColor={mainColor} accentColors={accentColors} />
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
                <div
                  key={index}
                  className="flex items-center gap-2 bg-black bg-opacity-5 rounded-lg px-2 py-1.5 border border-current border-opacity-10"
                >
                  <PatternExamples pattern={pattern} mainColor={mainColor} accentColors={accentColors} />
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
                <div
                  key={index}
                  className="flex items-center gap-2 bg-black bg-opacity-5 rounded-lg px-2 py-1.5 border border-current border-opacity-10"
                >
                  <TextureExamples texture={texture} mainColor={mainColor} accentColors={accentColors} />
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
                <div
                  key={index}
                  className="flex items-center gap-2 bg-black bg-opacity-5 rounded-lg px-2 py-1.5 border border-current border-opacity-10"
                >
                  <IllustrationExamples illustration={illustration} mainColor={mainColor} accentColors={accentColors} />
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
