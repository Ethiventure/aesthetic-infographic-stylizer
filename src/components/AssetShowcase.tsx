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
          <circle cx="6" cy="10" r="1" fill={accentColors[1] || 'white'} />
          <circle cx="14" cy="10" r="1" fill={accentColors[1] || 'white'} />
        </svg>
      );
    // START OF NEW ECO ICON EXAMPLES
    case 'amarante': // Font example, not a real icon
      return <div className="w-4 h-4 flex items-center justify-center font-['Amarante'] text-xs" style={{ color: mainColor }}>Am</div>;
    case 'della respira': // Font example, not a real icon
      return <div className="w-4 h-4 flex items-center justify-center font-['Della_Respira'] text-xs" style={{ color: mainColor }}>De</div>;
    case 'leaf':
      return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Leaf icon"><path d="M10 2C4 2 2 8 2 10s2 8 8 8 8-2 8-8-2-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM10 6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" fill={mainColor} opacity="0.8" /><path d="M10 4C7.33 4 5.12 5.31 4 7.22C5.53 5.67 7.67 4.88 10 4.88s4.47.79 6 2.34C14.88 5.31 12.67 4 10 4z" fill={accentColors[0]} /></svg>;
    case 'pebble':
      return <ellipse cx="10" cy="10" rx="6" ry="4" fill={mainColor} opacity="0.7" />;
    case 'sprout':
      return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Sprout icon"><path d="M10 2c-1.1 0-2 .9-2 2v2H6c-1.1 0-2 .9-2 2s.9 2 2 2h2v2c0 1.1.9 2 2 2s2-.9 2-2V8h2c1.1 0 2-.9 2-2s-.9-2-2-2h-2V4c0-1.1-.9-2-2-2z" fill={mainColor} /><path d="M10 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill={accentColors[0]} opacity="0.6" /></svg>;
    case 'hand drawn leaf':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Hand drawn leaf icon"><path d="M14.5,2.5 C10,0 4,4 5.5,9.5 C7,15 12,18 14.5,17 C17,16 18,10 14.5,2.5 Z M10,10 Q8,8 10,6 Q12,8 10,10" stroke={mainColor} strokeWidth="1" fill={accentColors[0] || 'none'} strokeLinecap="round" strokeLinejoin="round" opacity="0.8" /></svg>;
    case 'sketched flower':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Sketched flower icon"><path d="M10,3 C12,5 12,5 14,3 M10,3 C8,5 8,5 6,3 M10,7 C12,5 12,5 14,7 M10,7 C8,5 8,5 6,7 M10,3 Q10,7 10,10 M10,10 C7,13 10,17 10,17 M10,10 C13,13 10,17 10,17" stroke={mainColor} strokeWidth="1" fill="none" strokeLinecap="round" /><circle cx="10" cy="10" r="1.5" fill={accentColors[0]} /></svg>;
    case 'organic branch':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Organic branch icon"><path d="M4,16 Q8,8 16,4 M8,16 Q10,12 12,8 M12,12 Q14,10 16,8" stroke={mainColor} strokeWidth="1.5" fill="none" strokeLinecap="round" /></svg>;
    case 'water drop':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Water drop icon"><path d="M10,2 C6,2 4,6 4,10 C4,15 10,18 10,18 C10,18 16,15 16,10 C16,6 14,2 10,2 Z" fill={mainColor} opacity="0.7" /><circle cx="10" cy="9" r="2" fill={accentColors[0] || 'white'} opacity="0.5" /></svg>;
    case 'folk bird':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Folk bird icon"><path d="M3,8 Q5,4 10,6 Q15,4 17,8 Q15,12 10,14 Q5,12 3,8 Z M10,9 A1,1 0 0,1 10,11 A1,1 0 0,1 10,9" fill={mainColor} /><path d="M8,14 Q10,16 12,14" stroke={accentColors[0]} strokeWidth="1" fill="none" /></svg>;
    case 'traditional flower':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Traditional flower icon"><circle cx="10" cy="10" r="4" fill={mainColor} /><circle cx="10" cy="6" r="2" fill={accentColors[0]} /><circle cx="10" cy="14" r="2" fill={accentColors[0]} /><circle cx="6" cy="10" r="2" fill={accentColors[0]} /><circle cx="14" cy="10" r="2" fill={accentColors[0]} /></svg>;
    case 'handmade star':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Handmade star icon"><polygon points="10,1 12.5,6.5 18.5,7.5 14.5,11.5 15.5,17.5 10,14.5 4.5,17.5 5.5,11.5 1.5,7.5 7.5,6.5" stroke={mainColor} strokeWidth="1" fill={accentColors[0] || 'none'} strokeLinejoin="round" /></svg>;
    case 'knitting needles':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Knitting needles icon"><path d="M4,16 L16,4 M4,4 L16,16" stroke={mainColor} strokeWidth="1.5" fill="none" strokeLinecap="round"/><circle cx="3" cy="3" r="1" fill={accentColors[0]} /><circle cx="17" cy="17" r="1" fill={accentColors[0]} /></svg>;
    case 'sewing thimble':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Sewing thimble icon"><path d="M6,18 L6,10 Q10,4 14,10 L14,18 Z M7,10.5 H13" stroke={mainColor} strokeWidth="1" fill={accentColors[0] || 'none'} /><rect x="6" y="17" width="8" height="2" fill={mainColor} /></svg>;
    case 'clay pot':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Clay pot icon"><path d="M4,6 Q4,4 6,4 H14 Q16,4 16,6 V12 Q16,16 10,16 Q4,16 4,12 Z M4,7 H16" fill={mainColor} stroke={accentColors[0]} strokeWidth="0.5" /></svg>;
    case 'handmade brush':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Handmade brush icon"><rect x="8" y="2" width="4" height="10" fill={mainColor} /><path d="M6,12 H14 V16 H12 L10,14 L8,16 H6 Z" fill={accentColors[0]} /></svg>;
    // END OF NEW ECO ICON EXAMPLES
    // START OF NEW EDITORIAL ICON EXAMPLES
    case 'old book':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Old book icon"><rect x="3" y="4" width="14" height="12" rx="1" fill={mainColor} /><rect x="5" y="2" width="10" height="2" fill={accentColors[0]} /><line x1="10" y1="4" x2="10" y2="16" stroke={accentColors[1] || 'white'} strokeWidth="0.5" /></svg>;
    case 'candle flame':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Candle flame icon"><path d="M10,18 V12 M8,12 Q10,8 12,12 M10,8 Q8,5 10,2 Q12,5 10,8 Z" stroke={mainColor} fill={accentColors[0]} strokeWidth="0.5" /></svg>;
    case 'ink pot':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Ink pot icon"><rect x="6" y="10" width="8" height="6" rx="1" fill={mainColor} /><rect x="7" y="8" width="6" height="2" fill={accentColors[0]} /><path d="M9,10 V4 L7,6 M11,10 V4 L13,6" stroke={mainColor} strokeWidth="1" fill="none" /></svg>;
    case 'glasses':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Glasses icon"><circle cx="6" cy="10" r="3" stroke={mainColor} strokeWidth="1" fill="none" /><circle cx="14" cy="10" r="3" stroke={mainColor} strokeWidth="1" fill="none" /><path d="M9,10 H11 M4,8 L2,6 M16,8 L18,6" stroke={mainColor} strokeWidth="1" fill="none" /></svg>;
    case 'gothic arch':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Gothic arch icon"><path d="M4,18 L4,10 Q10,2 16,10 L16,18 Z M6,17 L14,17" stroke={mainColor} strokeWidth="1.5" fill={accentColors[0] || 'none'} /></svg>;
    case 'medieval banner':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Medieval banner icon"><path d="M4,2 V18 L10,14 L16,18 V2 Z M5,3 H15" stroke={mainColor} strokeWidth="1" fill={accentColors[0]} /><polygon points="8,6 10,8 12,6 10,4" fill={accentColors[1] || mainColor} /></svg>;
    case 'illuminated letter':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Illuminated letter icon"><rect x="4" y="4" width="12" height="12" fill={accentColors[0]} rx="1" /><text x="6" y="14" fontFamily="serif" fontSize="10" fill={mainColor}>A</text><circle cx="5" cy="5" r="1" fill={accentColors[1]} /><path d="M16,4 v12 h-2" stroke={mainColor} strokeWidth="0.5" fill="none" /></svg>;
    case 'sword':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Sword icon"><path d="M10,2 L10,14 M6,12 H14 M8,14 L10,18 L12,14" stroke={mainColor} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" /><rect x="9" y="11" width="2" height="4" fill={accentColors[0]} /></svg>;
    case 'shield':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Shield icon"><path d="M10,2 L18,5 V12 Q10,18 2,12 V5 Z" stroke={mainColor} strokeWidth="1.5" fill={accentColors[0]} /><path d="M10,6 L10,14 M6,10 H14" stroke={accentColors[1] || 'white'} strokeWidth="1" /></svg>;
    case 'dragon':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Dragon icon"><path d="M18,8c0,4-8,4-8,4s-2.5-4-7-4C3,8,2,7,2,5s1-3,3-3s3,2,3,2l2-2l2,2V3l2,1l2-1v3l-2,2h4V8z M10,12 c -2,2 -2,4 0,4 s 2,-2 0,-4z" fill={mainColor} stroke={accentColors[0]} strokeWidth="0.5" /></svg>;
    case 'ionic column':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Ionic column icon"><rect x="7" y="4" width="6" height="12" fill={mainColor} /><rect x="6" y="3" width="8" height="2" rx="1" fill={accentColors[0]} /><rect x="6" y="15" width="8" height="2" rx="1" fill={accentColors[0]} /><path d="M7,5 Q5,5 5,7 Q7,7 7,5 M13,5 Q15,5 15,7 Q13,7 13,5" stroke={accentColors[1] || mainColor} strokeWidth="0.5" fill="none" /></svg>;
    case 'laurel wreath':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Laurel wreath icon"><path d="M10,2 C6,2 3,6 3,10 C3,14 6,18 10,18 M10,2 C14,2 17,6 17,10 C17,14 14,18 10,18 M6,6 L10,10 L6,14 M14,6 L10,10 L14,14" stroke={mainColor} strokeWidth="1" fill="none" /><circle cx="10" cy="10" r="1" fill={accentColors[0]} /></svg>;
    case 'formal scroll':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Formal scroll icon"><rect x="3" y="6" width="14" height="8" rx="1" fill={accentColors[0]} stroke={mainColor} strokeWidth="0.5" /><path d="M3,7 Q1,7 1,9 V11 Q1,13 3,13 M17,7 Q19,7 19,9 V11 Q19,13 17,13" stroke={mainColor} strokeWidth="1" fill={accentColors[0]} /></svg>;
    case 'classical bust':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Classical bust icon"><path d="M6,18 V14 Q6,10 10,10 Q14,10 14,14 V18 Z M8,12 Q8,9 10,9 Q12,9 12,12 M10,9 C8,7 12,7 10,9 M10,6 A2,2 0 1,1 10,2 A2,2 0 0,1 10,6" fill={mainColor} stroke={accentColors[0]} strokeWidth="0.5" /></svg>;
    case 'vintage camera':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Vintage camera icon"><rect x="3" y="5" width="14" height="10" rx="1" fill={mainColor} /><rect x="8" y="3" width="4" height="2" fill={accentColors[0]} /><circle cx="10" cy="10" r="3" fill={accentColors[1] || 'white'} /><circle cx="15" cy="7" r="1" fill={accentColors[0]} /></svg>;
    case 'rotary phone':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Rotary phone icon"><path d="M4,10 C4,6 8,4 12,4 V16 H8 C5,16 4,14 4,10 Z M14,5 H17 V8 H14 Z" fill={mainColor} /><circle cx="10" cy="10" r="4" stroke={accentColors[0]} strokeWidth="0.5" fill="none" /><circle cx="10" cy="8" r="0.5" fill={accentColors[0]} /><circle cx="12" cy="9" r="0.5" fill={accentColors[0]} /></svg>;
    case 'classic car':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Classic car icon"><path d="M2,12 H18 L16,8 H4 Z M5,14 A1,1 0 1,0 5,16 A1,1 0 0,0 5,14 M15,14 A1,1 0 1,0 15,16 A1,1 0 0,0 15,14 M6,8 L8,5 H12 L14,8" fill={mainColor} stroke={accentColors[0]} strokeWidth="0.5" /></svg>;
    case 'retro microphone':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Retro microphone icon"><rect x="7" y="2" width="6" height="10" rx="2" fill={mainColor} /><path d="M10,12 V16 M8,16 H12 M10,16 L10,18" stroke={accentColors[0]} strokeWidth="1" fill="none" /></svg>;
    // END OF NEW EDITORIAL ICON EXAMPLES
    // START OF NEW TECH ICON EXAMPLES
    case 'brutal cursor':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Brutal cursor icon"><polygon points="4,4 16,10 10,12 8,18" fill={mainColor} stroke={accentColors[0]} strokeWidth="1" /></svg>;
    case 'raw pixel':
        return <rect x="8" y="8" width="4" height="4" fill={mainColor} />;
    case 'grid block':
        return <rect x="6" y="6" width="8" height="8" stroke={mainColor} strokeWidth="2" fill={accentColors[0] || 'none'} />;
    case 'warning sign':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Warning sign icon"><polygon points="10,2 18,16 2,16" fill={accentColors[1] || mainColor} /><text x="9" y="14" fontSize="10" fill={accentColors[2] || mainColor} fontWeight="bold">!</text></svg>;
    case 'glass orb':
        return <circle cx="10" cy="10" r="7" fill={mainColor} opacity="0.3" stroke={accentColors[0]} strokeWidth="0.5"><animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" /></circle>;
    case 'rounded button':
        return <rect x="5" y="7" width="10" height="6" rx="3" fill={mainColor} opacity="0.8" stroke={accentColors[0]} strokeWidth="0.5" />;
    case 'soft shadow icon':
        return <rect x="6" y="6" width="8" height="8" rx="2" fill="none" style={{filter: `drop-shadow(1px 1px 1px ${mainColor}60)`}} />;
    case 'translucent layer':
        return <><rect x="4" y="4" width="12" height="12" rx="1" fill={mainColor} opacity="0.2" /><rect x="6" y="6" width="8" height="8" rx="1" fill={accentColors[0]} opacity="0.3" /></>;
    case 'ai brain':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="AI brain icon"><path d="M10,2 C6,2 3,5 3,9 C3,12 5,14 7,15 L7,12 C6,11.5 5,10.5 5,9 C5,6.5 7,5 10,5 C13,5 15,6.5 15,9 C15,10.5 14,11.5 13,12 L13,15 C15,14 17,12 17,9 C17,5 14,2 10,2 Z M8,16 H12 V18 H8Z" fill={mainColor} /><path d="M9,9 H11 V11 H9Z M7,7 H9 V9 H7Z M11,7 H13 V9 H11Z" fill={accentColors[0]} /></svg>;
    case 'neural node':
        return <><circle cx="10" cy="10" r="3" fill={mainColor} /><circle cx="5" cy="5" r="1.5" fill={accentColors[0]} /><circle cx="15" cy="5" r="1.5" fill={accentColors[0]} /><circle cx="5" cy="15" r="1.5" fill={accentColors[0]} /><circle cx="15" cy="15" r="1.5" fill={accentColors[0]} /><path d="M10,10 L5,5 M10,10 L15,5 M10,10 L5,15 M10,10 L15,15" stroke={accentColors[1] || mainColor} strokeWidth="0.5" /></>;
    case 'adaptive icon':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Adaptive icon"><path d="M10,4 L12,8 L16,8 L13,11 L14,15 L10,13 L6,15 L7,11 L4,8 L8,8 Z" fill={mainColor}><animateTransform attributeName="transform" type="rotate" from="0 10 10" to="360 10 10" dur="5s" repeatCount="indefinite" /></path></svg>;
    case 'data chart':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Data chart icon"><rect x="4" y="10" width="3" height="6" fill={accentColors[0]} /><rect x="8" y="6" width="3" height="10" fill={mainColor} /><rect x="12" y="2" width="3" height="14" fill={accentColors[1]} /></svg>;
    case 'glowing particle':
        return <circle cx="10" cy="10" r="2" fill={mainColor}><animate attributeName="r" values="2;4;2" dur="1.5s" repeatCount="indefinite" /><animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" /></circle>;
    case 'minimal ai':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Minimal AI icon"><circle cx="10" cy="10" r="6" stroke={mainColor} strokeWidth="1.5" fill="none" /><circle cx="10" cy="10" r="2" fill={accentColors[0]} /></svg>;
    case 'adaptive dot':
        return <circle cx="10" cy="10" r="3" fill={mainColor}><animate attributeName="fill" values={`${mainColor};${accentColors[0]};${mainColor}`} dur="3s" repeatCount="indefinite" /></circle>;
    case 'smart chip':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Smart chip icon"><rect x="5" y="5" width="10" height="10" rx="1" fill={mainColor} /><path d="M5,8H3 M5,12H3 M15,8H17 M15,12H17 M8,5V3 M12,5V3 M8,15V17 M12,15V17" stroke={accentColors[0]} strokeWidth="1" fill="none" /></svg>;
    case 'generative shape':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Generative shape"><path d="M10 2 Q18 10 10 18 Q2 10 10 2" stroke={mainColor} strokeWidth="1" fill="none"><animateTransform attributeName="transform" type="scale" values="1;0.8;1" dur="4s" repeatCount="indefinite" /></path><circle cx="10" cy="10" r="1" fill={accentColors[0]} /></svg>;
    case 'neon line':
        return <line x1="4" y1="10" x2="16" y2="10" stroke={mainColor} strokeWidth="2" style={{filter: `drop-shadow(0 0 2px ${mainColor})`}} />;
    case 'cyber eye':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Cyber eye icon"><ellipse cx="10" cy="10" rx="7" ry="4" stroke={mainColor} strokeWidth="1" fill={accentColors[0] || 'none'} /><circle cx="10" cy="10" r="2" fill={accentColors[1] || mainColor} /><path d="M6,10 H4 M14,10 H16" stroke={mainColor} strokeWidth="1" /></svg>;
    case 'glitch square':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Glitch square icon"><rect x="5" y="5" width="10" height="10" fill={mainColor} /><rect x="4" y="7" width="10" height="2" fill={accentColors[0]} opacity="0.7" /><rect x="7" y="10" width="10" height="2" fill={accentColors[1]} opacity="0.7" /></svg>;
    case 'circuit chip':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Circuit chip icon"><rect x="6" y="6" width="8" height="8" fill={mainColor} /><path d="M6,10H2 M14,10H18 M10,6V2 M10,14V18" stroke={accentColors[0]} strokeWidth="1" fill="none" /><circle cx="8" cy="8" r="0.5" fill={accentColors[1]||'white'} /><circle cx="12" cy="12" r="0.5" fill={accentColors[1]||'white'} /></svg>;
    case 'HUD element':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="HUD element icon"><path d="M4,4 L8,4 M12,4 L16,4 M4,16 L8,16 M12,16 L16,16 M4,4 L4,8 M4,12 L4,16 M16,4 L16,8 M16,12 L16,16" stroke={mainColor} strokeWidth="1.5" fill="none" /><circle cx="10" cy="10" r="2" stroke={accentColors[0]} strokeWidth="1" fill="none" /></svg>;
    case 'playful blob':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Playful blob icon"><path d="M15,10 C18,10 18,15 12,16 C6,17 2,12 4,8 C6,4 12,4 15,10 Z" fill={mainColor} opacity="0.8" stroke={accentColors[0]} strokeWidth="0.5" /></svg>;
    case 'asymmetric star':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Asymmetric star icon"><polygon points="10,2 12,8 18,7 13,11 15,16 10,13 6,17 7,11 2,8 8,7" fill={mainColor} stroke={accentColors[0]} strokeWidth="0.5" /></svg>;
    case 'colorful switch':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Colorful switch icon"><rect x="4" y="7" width="12" height="6" rx="3" fill={accentColors[0]} /><circle cx="8" cy="10" r="2" fill={mainColor} /></svg>;
    case 'friendly cloud':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Friendly cloud icon"><path d="M16,10 C16,7 13.5,5 10.5,5 C8,5 6,7 6,9.5 C4,9.5 2.5,11 2.5,13 C2.5,15 4.5,16.5 7,16.5 H15.5 C17.5,16.5 18.5,15 18.5,13.5 C18.5,12 17.5,10 16,10Z" fill={mainColor} stroke={accentColors[0]} strokeWidth="0.5" /></svg>;
    case 'geometric pastel':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Geometric pastel icon"><rect x="3" y="8" width="6" height="6" rx="1" fill={mainColor} /><circle cx="13" cy="7" r="3" fill={accentColors[0]} /><polygon points="10,14 14,18 18,14" fill={accentColors[1]}/></svg>;
    // END OF NEW TECH ICON EXAMPLES
    // START OF NEW MAXIMALIST ICON EXAMPLES
    case 'bold statement':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Bold statement icon"><rect x="2" y="2" width="16" height="16" fill={mainColor} /><text x="4" y="14" fontSize="10" fontWeight="bold" fill={accentColors[0] || 'white'}>B!</text></svg>;
    case 'layered shape':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Layered shape icon"><polygon points="10,2 18,10 10,18 2,10" fill={mainColor} /><rect x="5" y="5" width="10" height="10" fill={accentColors[0]} opacity="0.7" /><circle cx="10" cy="10" r="3" fill={accentColors[1] || mainColor} opacity="0.5" /></svg>;
    case 'explosive graphic':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Explosive graphic icon"><path d="M10,2 L12,8 L18,8 L13,12 L15,18 L10,14 L5,18 L7,12 L2,8 L8,8 Z" fill={mainColor} stroke={accentColors[0]} strokeWidth="0.5" /><circle cx="10" cy="10" r="2" fill={accentColors[1] || 'white'} /></svg>;
    case 'ornate detail':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Ornate detail icon"><path d="M10,3 C5,3 2,8 2,10 S5,17 10,17 S18,12 18,10 S15,3 10,3 Z M10,5 A5,5 0 0,1 10,15 A5,5 0 0,1 10,5 Z" fill={mainColor} /><path d="M10,7 A3,3 0 0,1 10,13 A3,3 0 0,1 10,7 Z" fill={accentColors[0]} /><circle cx="10" cy="10" r="1" fill={accentColors[1] || 'white'} /></svg>;
    case 'eclectic mix':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Eclectic mix icon"><rect x="2" y="2" width="6" height="6" fill={mainColor} /><circle cx="13" cy="5" r="3" fill={accentColors[0]} /><polygon points="4,12 8,18 12,12" fill={accentColors[1]} /><path d="M14,10 L18,14 L14,18" stroke={accentColors[2] || mainColor} strokeWidth="1.5" fill="none" /></svg>;
    case 'smiling face':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Smiling face icon"><circle cx="10" cy="10" r="8" fill={mainColor} /><circle cx="7" cy="8" r="1.5" fill={accentColors[3] || 'white'} /><circle cx="13" cy="8" r="1.5" fill={accentColors[3] || 'white'} /><path d="M6,12 Q10,15 14,12" stroke={accentColors[3] || 'white'} strokeWidth="1.5" fill="none" /></svg>;
    case 'bright star':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Bright star icon"><polygon points="10,1 13,7 19,7.5 14.5,12 16,18 10,14.5 4,18 5.5,12 1,7.5 7,7" fill={mainColor} stroke={accentColors[0]} strokeWidth="0.5" /></svg>;
    case 'playful squiggle':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Playful squiggle icon"><path d="M3,10 Q5,5 10,8 Q15,11 17,6" stroke={mainColor} strokeWidth="2" fill="none" strokeLinecap="round" /></svg>;
    case 'energetic bolt':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Energetic bolt icon"><polygon points="10,2 6,10 10,10 8,18 14,8 10,8" fill={mainColor} stroke={accentColors[0]} strokeWidth="0.5" /></svg>;
    case 'colorful confetti':
        return <><circle cx="5" cy="5" r="1.5" fill={mainColor} /><rect x="10" y="3" width="3" height="3" rx="0.5" fill={accentColors[0]} /><polygon points="15,8 17,12 13,12" fill={accentColors[1]} /><circle cx="7" cy="15" r="1" fill={accentColors[2]}/><rect x="12" y="14" width="2" height="2" fill={accentColors[3]} /></>;
    case '8-bit heart':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="8-bit heart icon"><path d="M6,6 H8V4H12V6H14V8H16V12H14V14H12V16H8V14H6V12H4V8H6Z" fill={mainColor} /></svg>;
    case 'neon palm tree':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Neon palm tree icon"><path d="M10,18 V10 M10,10 L6,6 M10,10 L14,6 M10,10 L4,10 M10,10 L16,10" stroke={mainColor} strokeWidth="1.5" fill="none" style={{filter: `drop-shadow(0 0 1px ${mainColor})`}} /><rect x="9" y="15" width="2" height="3" fill={accentColors[0]} /></svg>;
    case 'glitchy cursor':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Glitchy cursor icon"><polygon points="4,4 16,10 10,12 8,18" fill={mainColor} /><polygon points="6,6 14,10 10,11 9,16" fill={accentColors[0]} opacity="0.7" /></svg>;
    case 'cassette tape':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Cassette tape icon"><rect x="3" y="5" width="14" height="10" rx="1" fill={mainColor} /><rect x="5" y="7" width="10" height="2" fill={accentColors[0]} /><circle cx="7" cy="11" r="1.5" fill={accentColors[1]||'white'} /><circle cx="13" cy="11" r="1.5" fill={accentColors[1]||'white'} /></svg>;
    case 'CRT monitor':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="CRT monitor icon"><rect x="2" y="4" width="16" height="10" rx="1" fill={mainColor} /><rect x="8" y="14" width="4" height="2" fill={accentColors[0]} /><line x1="4" y1="6" x2="16" y2="6" stroke={accentColors[1] || 'white'} strokeWidth="0.5" opacity="0.5" /></svg>;
    // END OF NEW MAXIMALIST ICON EXAMPLES
    // START OF NEW FEMININE ICON EXAMPLES
    case 'ballet shoes':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Ballet shoes icon"><path d="M6,18 L6,10 Q8,6 10,8 L14,14 M10,8 L12,4 L14,8" stroke={mainColor} strokeWidth="1" fill="none" /><ellipse cx="6" cy="17" rx="2" ry="1" fill={accentColors[0]} /><ellipse cx="13" cy="15" rx="1.5" ry="1" fill={accentColors[0]} /></svg>;
    case 'ribbon bow':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Ribbon bow icon"><path d="M10,10 Q6,6 4,10 L6,18 Q10,14 10,10 M10,10 Q14,6 16,10 L14,18 Q10,14 10,10 Z" fill={mainColor} stroke={accentColors[0]} strokeWidth="0.5" /><circle cx="10" cy="10" r="1.5" fill={accentColors[1] || 'white'} /></svg>;
    case 'delicate swirl':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Delicate swirl icon"><path d="M4,10 Q10,2 16,10 Q10,18 4,10" stroke={mainColor} strokeWidth="1.5" fill="none" strokeLinecap="round" /></svg>;
    case 'pearl': // Already exists, but updated for clarity in this section
        return <circle cx="10" cy="10" r="6" fill={`radial-gradient(circle at 30% 30%, white, ${mainColor}90, ${accentColors[0] || mainColor}60)`} stroke={mainColor} strokeWidth="0.5" />;
    case 'swan':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Swan icon"><path d="M4,14 C4,10 8,8 10,8 C12,8 14,6 14,4 C14,2 12,2 10,4 C8,6 6,10 6,12 C6,14 8,16 12,16 H16 L14,14 H4Z" fill={mainColor} stroke={accentColors[0]} strokeWidth="0.5" /></svg>;
    case 'dainty heart': // Similar to 'heart' but could be styled differently if needed, using mainColor here
        return <svg className="w-4 h-4" fill={mainColor} viewBox="0 0 24 24" aria-label="Dainty heart icon"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>;
    case 'silk bow': // Same as ribbon bow, just for clarity
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Silk bow icon"><path d="M10,10 Q6,6 4,10 L6,18 Q10,14 10,10 M10,10 Q14,6 16,10 L14,18 Q10,14 10,10 Z" fill={mainColor} stroke={accentColors[0]} strokeWidth="0.5" /><circle cx="10" cy="10" r="1.5" fill={accentColors[1] || 'white'} /></svg>;
    case 'playful cherub':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Playful cherub icon"><circle cx="10" cy="6" r="3" fill={mainColor} /><path d="M7,9 Q10,12 13,9 M6,14 L8,10 H12 L14,14 M6,12 Q4,10 6,8 M14,12 Q16,10 14,8" stroke={accentColors[0]} strokeWidth="1" fill="none" /></svg>;
    case 'pearl necklace':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Pearl necklace icon"><path d="M4,10 A6,6 0 0,0 16,10" stroke={mainColor} strokeWidth="1.5" fill="none" /><circle cx="4" cy="10" r="1" fill={accentColors[0]} /><circle cx="7" cy="12.6" r="1" fill={accentColors[0]} /><circle cx="10" cy="13" r="1" fill={accentColors[0]} /><circle cx="13" cy="12.6" r="1" fill={accentColors[0]} /><circle cx="16" cy="10" r="1" fill={accentColors[0]} /></svg>;
    case 'lace detail':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Lace detail icon"><path d="M4,8 Q10,4 16,8 L15,12 H5Z M5,12 Q8,10 10,12 Q12,10 15,12" stroke={mainColor} strokeWidth="0.5" fill={accentColors[0] || 'none'} opacity="0.7" /></svg>;
    case 'rose':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Rose icon"><path d="M10,2 C5,2 2,7 2,10 C2,13 5,18 10,18 C15,18 18,13 18,10 C18,7 15,2 10,2 Z M10,6 A4,4 0 0,1 10,14 A4,4 0 0,1 10,6 Z" fill={mainColor} /><path d="M10,8 A2,2 0 0,1 10,12 A2,2 0 0,1 10,8 Z" fill={accentColors[0]} /></svg>;
    case 'thatched cottage':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Thatched cottage icon"><path d="M2,10 L10,4 L18,10 V16 H2Z M6,16 V12 H14 V16 M4,9 L16,9" stroke={mainColor} strokeWidth="1" fill={accentColors[0]} /><rect x="8" y="12" width="4" height="4" fill={accentColors[1] || 'white'} /></svg>;
    case 'vintage teacup':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Vintage teacup icon"><path d="M4,8 H16 V14 H4Z M16,10 H18 V12 H16" fill={mainColor} stroke={accentColors[0]} strokeWidth="0.5" /><rect x="6" y="14" width="8" height="2" rx="1" fill={mainColor} /></svg>;
    case 'handmade quilt square':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Handmade quilt square icon"><rect x="4" y="4" width="12" height="12" stroke={mainColor} strokeWidth="0.5" fill={accentColors[0]} /><path d="M4,10 H16 M10,4 V16 M7,7 L13,13 M7,13 L13,7" stroke={accentColors[1] || 'white'} strokeWidth="0.5" /></svg>;
    case 'wildflower sprig':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Wildflower sprig icon"><path d="M10,18 V8 M8,10 L10,8 L12,10 M10,8 Q8,5 10,2 Q12,5 10,8" stroke={mainColor} strokeWidth="1" fill="none" /><circle cx="10" cy="3" r="1" fill={accentColors[0]} /><circle cx="7" cy="6" r="1" fill={accentColors[1]} /><circle cx="13" cy="6" r="1" fill={accentColors[1]} /></svg>;
    case 'garden basket':
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Garden basket icon"><path d="M4,10 H16 L14,16 H6Z M4,10 Q2,10 2,8 H18 Q18,10 16,10 M10,4 A4,4 0 0,0 6,8 H14 A4,4 0 0,0 10,4" stroke={mainColor} strokeWidth="1" fill={accentColors[0]} /></svg>;
    // END OF NEW FEMININE ICON EXAMPLES
    // START OF NEW CULTURAL ICON EXAMPLES
    case 'geometric star': // Moroccan
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Geometric star icon"><polygon points="10,1 12,7 18,7 13.5,11 15,17 10,13.5 5,17 6.5,11 2,7 8,7" fill={mainColor} stroke={accentColors[0]} strokeWidth="0.5" /></svg>;
    case 'ornate lantern': // Moroccan
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Ornate lantern icon"><path d="M6,2 H14 L16,6 V14 L14,18 H6 L4,14 V6 Z M8,7 H12 V13 H8Z" fill={mainColor} stroke={accentColors[0]} strokeWidth="0.5" /><circle cx="10" cy="10" r="1" fill={accentColors[1] || 'white'} /></svg>;
    case 'riad arch': // Moroccan
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Riad arch icon"><path d="M4,18 V8 Q10,2 16,8 V18 M6,17 H14" stroke={mainColor} strokeWidth="1.5" fill={accentColors[0] || 'none'} /></svg>;
    case 'tagine pot': // Moroccan
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Tagine pot icon"><path d="M4,14 H16 V16 H4Z M6,13 L10,6 L14,13Z" fill={mainColor} stroke={accentColors[0]} strokeWidth="0.5" /></svg>;
    case 'hand of fatima': // Moroccan / Hamsa
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Hand of Fatima icon"><path d="M10,18 C8,18 6,16 6,14 V10 H4 C2,10 2,8 4,8 H5 V6 C5,4 7,2 10,2 C13,2 15,4 15,6 V8 H16 C18,8 18,10 16,10 H14 V14 C14,16 12,18 10,18 Z M10,12 A2,2 0 1,0 10,8 A2,2 0 0,0 10,12Z" fill={mainColor} stroke={accentColors[0]} strokeWidth="0.5" /></svg>;
    case 'dala horse': // Scandinavian
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Dala horse icon"><path d="M4,10 C4,6 8,6 10,8 L16,6 V14 H10 C6,14 4,12 4,10 Z M12,9 L14,8" fill={mainColor} stroke={accentColors[0]} strokeWidth="0.5" /><circle cx="7" cy="9" r="1" fill={accentColors[1]} /></svg>;
    case 'folk flower': // Scandinavian
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Folk flower icon"><circle cx="10" cy="10" r="3" fill={mainColor} /><path d="M10,7 V3 M10,13 V17 M7,10 H3 M13,10 H17 M7,7 L4,4 M13,7 L16,4 M7,13 L4,16 M13,13 L16,16" stroke={accentColors[0]} strokeWidth="1.5" fill="none" /></svg>;
    case 'nordic cross': // Scandinavian
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Nordic cross icon"><rect x="3" y="8" width="14" height="4" fill={mainColor} /><rect x="7" y="4" width="4" height="12" fill={mainColor} /></svg>;
    case 'kurbits motif': // Scandinavian
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Kurbits motif icon"><path d="M10,2 C4,6 6,12 10,18 C14,12 16,6 10,2 Z M10,10 Q8,8 10,6 Q12,8 10,10" stroke={mainColor} strokeWidth="1" fill={accentColors[0] || 'none'} /></svg>;
    case 'forest animal': // Scandinavian (e.g. fox or deer silhouette)
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Forest animal icon"><path d="M4,16 L6,10 L10,12 L14,10 L16,16 H12 L10,14 L8,16 H4 Z M10,6 A2,2 0 1,1 10,2 A2,2 0 0,1 10,6 M8,6 L6,4 M12,6 L14,4" fill={mainColor} /></svg>;
    case 'modern paisley': // Indian
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Modern paisley icon"><path d="M10,2 C5,2 2,7 4,12 C6,17 12,18 15,14 C18,10 15,2 10,2 Z M8,10 A2,2 0 1,1 12,10 A2,2 0 0,1 8,10Z" fill={mainColor} stroke={accentColors[0]} strokeWidth="0.5" /></svg>;
    case 'lotus flower': // Indian
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Lotus flower icon"><path d="M10,18 L6,10 H14Z M10,2 L2,10 H6 M10,2 L18,10 H14" stroke={mainColor} strokeWidth="1" fill={accentColors[0] || 'none'} /><circle cx="10" cy="10" r="2" fill={accentColors[1] || mainColor} /></svg>;
    case 'rangoli element': // Indian
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Rangoli element icon"><circle cx="10" cy="10" r="7" stroke={mainColor} strokeWidth="0.5" fill={accentColors[0] || 'none'} /><path d="M10,3 L12,8 L17,8 L13,12 L15,17 L10,14 L5,17 L7,12 L3,8 L8,8 Z" fill={accentColors[1] || mainColor} /></svg>;
    case 'indian arch': // Indian
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Indian arch icon"><path d="M4,18 V10 C4,6 7,2 10,2 C13,2 16,6 16,10 V18 M6,17 H14 M10,10 A3,3 0 0,0 7,13 H13 A3,3 0 0,0 10,10Z" stroke={mainColor} strokeWidth="1.5" fill={accentColors[0] || 'none'} /></svg>;
    case 'contemporary deity': // Indian (stylized)
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Contemporary deity icon"><circle cx="10" cy="6" r="3" fill={mainColor} /><path d="M6,18 V10 H14 V18 M8,10 L10,14 L12,10 M6,10 Q2,10 2,14 H18 Q18,10 14,10" stroke={accentColors[0]} strokeWidth="1" fill={mainColor} opacity="0.3" /></svg>;
    // END OF NEW CULTURAL ICON EXAMPLES
    // START OF NEW CLEAN/MINIMAL ICON EXAMPLES
    case 'atomic starburst': // Midcentury
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Atomic starburst icon"><path d="M10,2 L11,7 L16,7 L12,10 L14,15 L10,12 L6,15 L8,10 L4,7 L9,7 Z" fill={mainColor} /><circle cx="10" cy="10" r="1.5" fill={accentColors[0]} /></svg>;
    case 'midcentury furniture icon': // Midcentury
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Midcentury furniture icon"><path d="M4,16 V8 H16 V16 M4,12 H16 M6,8 L4,4 M14,8 L16,4" stroke={mainColor} strokeWidth="1.5" fill={accentColors[0] || 'none'} /></svg>;
    case 'sputnik': // Midcentury
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Sputnik icon"><circle cx="10" cy="10" r="3" fill={mainColor} /><path d="M10,7V2 M10,13V18 M7,10H2 M13,10H18 M7,7L3,3 M13,7L17,3 M7,13L3,17 M13,13L17,17" stroke={accentColors[0]} strokeWidth="1" /></svg>;
    case 'snowflake': // Nordic Winter
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Snowflake icon"><path d="M10,2 V18 M2,10 H18 M5,5 L15,15 M5,15 L15,5 M7,2 L10,6 L13,2 M7,18 L10,14 L13,18 M2,7 L6,10 L2,13 M18,7 L14,10 L18,13" stroke={mainColor} strokeWidth="1" fill="none" /></svg>;
    case 'ice crystal': // Nordic Winter
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Ice crystal icon"><polygon points="10,2 14,8 10,14 6,8" stroke={mainColor} strokeWidth="1" fill={accentColors[0] || 'none'} /><polygon points="10,5 12,8 10,11 8,8" fill={accentColors[1] || mainColor} /></svg>;
    case 'bare tree silhouette': // Nordic Winter
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Bare tree silhouette icon"><path d="M10,18 V4 M10,8 L6,4 M10,8 L14,4 M10,12 L7,8 M10,12 L13,8" stroke={mainColor} strokeWidth="1.5" fill="none" /></svg>;
    case 'aurora borealis swirl': // Nordic Winter
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Aurora borealis swirl icon"><path d="M4,16 Q10,8 16,16 M6,12 Q10,6 14,12" stroke={`url(#auroraGrad${theme})`} strokeWidth="2" fill="none" ><defs><linearGradient id={`auroraGrad${theme}`} x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor={mainColor} /><stop offset="50%" stopColor={accentColors[0]} /><stop offset="100%" stopColor={accentColors[1] || mainColor} /></linearGradient></defs></path></svg>;
    case 'minimalist mountain': // Nordic Winter
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Minimalist mountain icon"><polygon points="2,16 10,4 18,16 H14 L10,8 L6,16Z" fill={mainColor} stroke={accentColors[0]} strokeWidth="0.5" /></svg>;
    case '3D button': // Tactile UI
        return <rect x="5" y="7" width="10" height="6" rx="2" fill={mainColor} style={{boxShadow: `1px 1px 2px ${accentColors[0] || '#00000030'}, -1px -1px 2px #ffffff50 inset`}} />;
    case 'depth icon': // Tactile UI
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Depth icon"><rect x="4" y="4" width="12" height="12" rx="1" fill={mainColor} opacity="0.3" /><rect x="6" y="6" width="8" height="8" rx="1" fill={mainColor} opacity="0.6" /></svg>;
    case 'premium material swatch': // Tactile UI
        return <rect x="6" y="6" width="8" height="8" rx="1" fill={`linear-gradient(45deg, ${mainColor}, ${accentColors[0]})`} />;
    case 'soft shadow element': // Tactile UI
        return <circle cx="10" cy="10" r="5" fill={mainColor} style={{filter: `drop-shadow(2px 2px 3px ${accentColors[0] || '#00000020'})`}} />;
    case 'interactive toggle': // Tactile UI
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Interactive toggle"><rect x="5" y="8" width="10" height="4" rx="2" fill={accentColors[0]} /><circle cx="8" cy="10" r="2.5" fill={mainColor} /></svg>;
    case 'grid icon': // Swiss Modernism
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Grid icon"><path d="M4,4 H16 V16 H4Z M4,10 H16 M10,4 V16" stroke={mainColor} strokeWidth="1.5" fill="none" /></svg>;
    case 'geometric arrow': // Swiss Modernism
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Geometric arrow icon"><polygon points="10,4 14,10 10,16 6,10" fill={mainColor} /></svg>;
    case 'plus symbol': // Swiss Modernism
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Plus symbol"><path d="M4,10 H16 M10,4 V16" stroke={mainColor} strokeWidth="2" /></svg>;
    case 'circle element': // Swiss Modernism
        return <circle cx="10" cy="10" r="6" fill={mainColor} />;
    case 'precise line': // Swiss Modernism
        return <line x1="2" y1="10" x2="18" y2="10" stroke={mainColor} strokeWidth="2" />;
    case 'monolithic block': // Soft Brutalism
        return <rect x="4" y="6" width="12" height="8" fill={mainColor} rx="0.5" />;
    case 'smooth concrete curve': // Soft Brutalism
        return <path d="M4,16 C4,8 16,8 16,16" stroke={mainColor} strokeWidth="2" fill="none" />;
    case 'large geometric shape': // Soft Brutalism
        return <polygon points="3,3 17,3 17,10 10,17 3,17" fill={mainColor} />;
    case 'architectural detail': // Soft Brutalism
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Architectural detail"><path d="M6,4 H14 V8 H6Z M6,10 H14 V14 H6Z" fill={mainColor} stroke={accentColors[0]} strokeWidth="0.5" /></svg>;
    case 'minimalist structure': // Soft Brutalism
        return <svg viewBox="0 0 20 20" className="w-5 h-5" aria-label="Minimalist structure"><path d="M4,16 L10,4 L16,16 M6,12 H14" stroke={mainColor} strokeWidth="1.5" fill="none" /></svg>;
    // END OF NEW CLEAN/MINIMAL ICON EXAMPLES
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
    // START OF NEW PATTERN EXAMPLES
    case 'art nouveau floral':
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Art Nouveau floral pattern"><path d="M5,5 Q10,15 15,5 M15,5 Q20,15 25,5 M25,5 Q30,15 35,5" stroke={mainColor} strokeWidth="1.5" fill="none" /><circle cx="10" cy="5" r="2" fill={accentColors[0]} /><circle cx="20" cy="5" r="2" fill={accentColors[0]} /><circle cx="30" cy="5" r="2" fill={accentColors[0]} /></svg>;
    case 'sunburst':
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Sunburst pattern"><defs><radialGradient id={`sunburstGrad${theme}`}><stop offset="0%" stopColor={accentColors[0] || mainColor} /><stop offset="70%" stopColor={mainColor} /><stop offset="100%" stopColor="transparent" /></radialGradient></defs><rect width="40" height="20" fill={`url(#sunburstGrad${theme})`} /><line x1="20" y1="10" x2="0" y2="0" stroke={accentColors[1] || 'white'} strokeWidth="0.5" /><line x1="20" y1="10" x2="40" y2="0" stroke={accentColors[1] || 'white'} strokeWidth="0.5" /><line x1="20" y1="10" x2="0" y2="20" stroke={accentColors[1] || 'white'} strokeWidth="0.5" /><line x1="20" y1="10" x2="40" y2="20" stroke={accentColors[1] || 'white'} strokeWidth="0.5" /></svg>;
    case 'organic shapes':
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Organic shapes pattern"><ellipse cx="10" cy="8" rx="5" ry="3" fill={mainColor} opacity="0.6" /><ellipse cx="25" cy="12" rx="7" ry="4" fill={accentColors[0]} opacity="0.5" /><ellipse cx="15" cy="15" rx="4" ry="2" fill={accentColors[1] || mainColor} opacity="0.7" /></svg>;
    case 'subtle speckle':
        return <div className="w-full h-full" style={{ background: `radial-gradient(${mainColor}30 1px, transparent 1px), radial-gradient(${accentColors[0]}30 1px, transparent 1px)`, backgroundSize: '8px 8px, 8px 8px', backgroundPosition: '0 0, 4px 4px' }} aria-label="Subtle speckle pattern" />;
    case 'watercolour wash':
        return <div className="w-full h-full" style={{ background: `linear-gradient(135deg, ${mainColor}30, ${accentColors[0]}20, ${accentColors[1] || mainColor}30)`}} aria-label="Watercolour wash pattern" />;
    case 'botanical line art':
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Botanical line art pattern"><path d="M5,15 C10,5 15,15 20,5 M15,15 C20,5 25,15 30,5" stroke={mainColor} strokeWidth="1" fill="none" /><path d="M8,12 L12,8 M22,12 L28,8" stroke={accentColors[0]} strokeWidth="0.5" fill="none" /></svg>;
    case 'organic cell':
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Organic cell pattern"><circle cx="8" cy="8" r="3" stroke={mainColor} strokeWidth="0.5" fill="none" /><circle cx="15" cy="12" r="4" stroke={accentColors[0]} strokeWidth="0.5" fill="none" /><ellipse cx="25" cy="7" rx="5" ry="3" stroke={accentColors[1] || mainColor} strokeWidth="0.5" fill="none" /></svg>;
    case 'subtle wood grain':
        return <div className="w-full h-full" style={{ backgroundImage: `repeating-linear-gradient(90deg, ${mainColor}10, ${mainColor}10 1px, transparent 1px, transparent 5px), repeating-linear-gradient(90deg, ${accentColors[0]}05, ${accentColors[0]}05 1px, transparent 1px, transparent 3px)`, backgroundPosition: '0 0, 0 2px' }} aria-label="Subtle wood grain pattern" />;
    case 'traditional embroidery':
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Traditional embroidery pattern"><path d="M5,5 L10,10 L5,15 M15,5 L10,10 L15,15 M25,5 L30,10 L25,15 M35,5 L30,10 L35,15" stroke={mainColor} strokeWidth="1.5" fill="none" /><circle cx="10" cy="10" r="1" fill={accentColors[0]} /><circle cx="30" cy="10" r="1" fill={accentColors[0]} /></svg>;
    case 'handmade quilt':
        return <div className="w-full h-full grid grid-cols-4 grid-rows-2 gap-px"><div style={{background: mainColor}} /><div style={{background: accentColors[0]}} /><div style={{background: accentColors[1] || mainColor}} /><div style={{background: accentColors[0]}} /><div style={{background: accentColors[1] || mainColor}} /><div style={{background: mainColor}} /><div style={{background: accentColors[0]}} /><div style={{background: mainColor}} /></div>;
    case 'block print':
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Block print pattern"><rect x="5" y="5" width="8" height="8" fill={mainColor} opacity="0.7" /><rect x="18" y="7" width="6" height="6" fill={accentColors[0]} opacity="0.6" /><rect x="28" y="4" width="7" height="7" fill={accentColors[1] || mainColor} opacity="0.8" /></svg>;
    case 'woven basket':
        return <div className="w-full h-full" style={{ background: `repeating-linear-gradient(45deg, ${mainColor}, ${mainColor} 3px, ${accentColors[0]} 3px, ${accentColors[0]} 6px), repeating-linear-gradient(-45deg, ${mainColor}, ${mainColor} 3px, ${accentColors[0]} 3px, ${accentColors[0]} 6px)` }} aria-label="Woven basket pattern" />;
    case 'knit stitch':
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Knit stitch pattern"><path d="M5,5 L10,10 L5,15 M15,5 L20,10 L15,15 M25,5 L30,10 L25,15 M35,5 L40,10 L35,15" stroke={mainColor} strokeWidth="1" fill="none" strokeDasharray="2 2" /></svg>;
    case 'cross-stitch':
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Cross-stitch pattern"><path d="M5,5 L10,10 M10,5 L5,10 M15,5 L20,10 M20,5 L15,10 M25,5 L30,10 M30,5 L25,10 M5,15 L10,20 M10,15 L5,20" stroke={mainColor} strokeWidth="1.5" fill="none" /></svg>;
    case 'macrame knot':
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Macrame knot pattern"><circle cx="10" cy="10" r="3" stroke={mainColor} strokeWidth="1" fill="none" /><path d="M10,7 V3 M10,13 V17 M7,10 H3 M13,10 H17" stroke={mainColor} strokeWidth="1" /><circle cx="30" cy="10" r="3" stroke={accentColors[0]} strokeWidth="1" fill="none" /><path d="M30,7 V3 M30,13 V17 M27,10 H23 M33,10 H37" stroke={accentColors[0]} strokeWidth="1" /></svg>;
    // START OF NEW EDITORIAL PATTERN EXAMPLES
    case 'aged paper': // Already a texture, but can be a pattern too
        return <div className="w-full h-full" style={{ background: `linear-gradient(to bottom, ${mainColor}10, ${accentColors[0]}20, ${mainColor}15), repeating-linear-gradient(0deg, transparent, transparent 4px, ${mainColor}05 5px, transparent 6px)` }} aria-label="Aged paper pattern" />;
    case 'ink blot':
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Ink blot pattern"><circle cx="10" cy="10" r="4" fill={mainColor} opacity="0.7" /><ellipse cx="25" cy="8" rx="5" ry="3" fill={accentColors[0] || mainColor} opacity="0.6" /><circle cx="15" cy="15" r="2" fill={accentColors[1] || mainColor} opacity="0.8" /></svg>;
    case 'leather texture': // Already a texture, but can be a pattern too
        return <div className="w-full h-full" style={{ background: `repeating-linear-gradient(135deg, ${mainColor}80, ${mainColor}80 1px, ${accentColors[0]}70 1px, ${accentColors[0]}70 3px), radial-gradient(circle, ${mainColor}50 10%, transparent 50%)`, backgroundSize: '10px 10px, 100% 100%' }} aria-label="Leather texture pattern" />;
    case 'tartan':
        return <div className="w-full h-full" style={{ background: `repeating-linear-gradient(90deg, ${mainColor}, ${mainColor} 4px, ${accentColors[0]} 4px, ${accentColors[0]} 8px), repeating-linear-gradient(0deg, ${mainColor}50, ${mainColor}50 4px, ${accentColors[1]}50 4px, ${accentColors[1]}50 8px)` }} aria-label="Tartan pattern" />;
    case 'old script':
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Old script pattern"><path d="M5,15 C10,5 15,15 20,5 C25,15 30,5 35,15" stroke={mainColor} strokeWidth="0.5" fill="none" strokeDasharray="2,1" /><path d="M3,12 C8,2 13,12 18,2 C23,12 28,2 33,12" stroke={accentColors[0] || mainColor} strokeWidth="0.5" fill="none" strokeDasharray="3,2" /></svg>;
    case 'tapestry floral':
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Tapestry floral pattern"><path d="M5,5 Q10,15 15,5 M25,5 Q30,15 35,5" stroke={mainColor} strokeWidth="2" fill={accentColors[0] || 'none'} /><circle cx="10" cy="10" r="3" fill={accentColors[1]} /><circle cx="30" cy="10" r="3" fill={accentColors[2] || accentColors[1]} /></svg>;
    case 'medieval damask':
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Medieval damask pattern"><path d="M0,10 Q10,0 20,10 T40,10 M0,15 Q10,5 20,15 T40,15" stroke={mainColor} strokeWidth="1" fill="none" opacity="0.5" /><path d="M0,8 Q10,18 20,8 T40,8" stroke={accentColors[0]} strokeWidth="1" fill="none" opacity="0.5" /></svg>;
    case 'arts & crafts vine':
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Arts & Crafts vine pattern"><path d="M0,10 C10,0 10,20 20,10 C30,0 30,20 40,10" stroke={mainColor} strokeWidth="1.5" fill="none" /><circle cx="10" cy="10" r="2" fill={accentColors[0]} /><circle cx="30" cy="10" r="2" fill={accentColors[1]} /></svg>;
    case 'heraldic':
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Heraldic pattern"><polygon points="5,3 15,3 10,10" fill={mainColor} /><polygon points="25,3 35,3 30,10" fill={accentColors[0]} /><rect x="8" y="12" width="4" height="5" fill={accentColors[1]} /><rect x="28" y="12" width="4" height="5" fill={mainColor} /></svg>;
    case 'stained glass':
        return <div className="w-full h-full grid grid-cols-4 grid-rows-2 gap-px" style={{border: `1px solid ${mainColor}`}}><div style={{background: accentColors[0] || `${mainColor}50`, borderRight: `1px solid ${mainColor}`, borderBottom: `1px solid ${mainColor}`}} /><div style={{background: accentColors[1] || `${mainColor}30`, borderRight: `1px solid ${mainColor}`, borderBottom: `1px solid ${mainColor}`}} /><div style={{background: accentColors[2] || `${mainColor}70`, borderRight: `1px solid ${mainColor}`, borderBottom: `1px solid ${mainColor}`}} /><div style={{background: accentColors[0] || `${mainColor}40`, borderBottom: `1px solid ${mainColor}`}} /></div>;
    case 'greek key':
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Greek key pattern"><path d="M0,5 H10 V10 H0 V15 H10 M15,0 V10 H20 V0 H25 V10 H30 V0 H35 V10 H40" stroke={mainColor} strokeWidth="2" fill="none" /></svg>;
    case 'marble vein':
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Marble vein pattern"><path d="M0,10 C5,5 10,15 15,10 S25,5 30,10 S35,15 40,10" stroke={mainColor} strokeWidth="1" fill="none" opacity="0.7" /><path d="M0,8 C7,12 12,3 18,9 S28,15 33,6 S40,12 40,12" stroke={accentColors[0]} strokeWidth="0.5" fill="none" opacity="0.5" /></svg>;
    case 'acanthus leaf':
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Acanthus leaf pattern"><path d="M5,15 C10,5 15,15 20,10 C25,5 30,15 35,10 M8,12 Q10,8 12,12 M28,12 Q30,8 32,12" stroke={mainColor} strokeWidth="1.5" fill={accentColors[0] || 'none'} /></svg>;
    case 'formal damask': // Similar to medieval damask, perhaps more refined
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Formal damask pattern"><path d="M0,10 Q10,2 20,10 T40,10 M0,10 Q10,18 20,10 T40,10" stroke={mainColor} strokeWidth="1" fill="none" opacity="0.6" /><path d="M10,2 Q5,10 10,18 M30,2 Q25,10 30,18" stroke={accentColors[0]} strokeWidth="0.5" fill="none" opacity="0.4" /></svg>;
    case 'gold filigree':
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Gold filigree pattern"><circle cx="10" cy="10" r="6" stroke={mainColor} strokeWidth="0.5" fill="none" /><path d="M10,4 A6,6 0 0,0 4,10 M10,4 A6,6 0 0,1 16,10 M10,16 A6,6 0 0,0 4,10 M10,16 A6,6 0 0,1 16,10" stroke={mainColor} strokeWidth="0.5" fill="none" strokeDasharray="1 1" /><circle cx="30" cy="10" r="4" stroke={accentColors[0]} strokeWidth="0.5" fill="none" /><path d="M30,6 L26,10 L30,14 L34,10Z" stroke={accentColors[0]} strokeWidth="0.5" fill="none" /></svg>;
    case 'halftone dots':
        return <div className="w-full h-full" style={{ background: `radial-gradient(${mainColor} 20%, transparent 20%)`, backgroundSize: '6px 6px' }} aria-label="Halftone dots pattern" />;
    case 'aged newsprint':
        return <div className="w-full h-full" style={{ background: accentColors[2] || '#D8C8A8', color: mainColor, fontSize: '4px', lineHeight: '1', overflow: 'hidden', textOrientation: 'sideways', writingMode: 'vertical-rl', filter: 'grayscale(0.5) sepia(0.2)' }} aria-label="Aged newsprint pattern">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>;
    case 'vintage ad border':
        return <div className="w-full h-full border-2 border-dashed" style={{borderColor: mainColor, padding: '2px'}}><div className="w-full h-full border" style={{borderColor: accentColors[0]}} /></div>;
    case 'art deco geometric':
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Art Deco geometric pattern"><rect x="0" y="0" width="40" height="20" fill={accentColors[1] || '#4A3B31'} /><path d="M0,20 L10,0 H15 L5,20 Z M20,20 L30,0 H35 L25,20 Z" fill={mainColor} /><circle cx="10" cy="10" r="3" fill={accentColors[0]} /><circle cx="30" cy="10" r="3" fill={accentColors[0]} /></svg>;
    case 'faded stripes':
        return <div className="w-full h-full" style={{ background: `repeating-linear-gradient(90deg, ${mainColor}50, ${mainColor}50 5px, ${accentColors[2]}50 5px, ${accentColors[2]}50 10px)` }} aria-label="Faded stripes pattern" />;
    // END OF NEW EDITORIAL PATTERN EXAMPLES
    // START OF NEW TECH PATTERN EXAMPLES
    case 'stark grid': // Brutalist
        return <div className="w-full h-full" style={{ backgroundSize: '10px 10px', backgroundImage: `linear-gradient(to right, ${mainColor} 1px, transparent 1px), linear-gradient(to bottom, ${mainColor} 1px, transparent 1px)`}} aria-label="Stark grid pattern" />;
    case 'warning stripes': // Brutalist
        return <div className="w-full h-full" style={{ background: `repeating-linear-gradient(45deg, ${mainColor}, ${mainColor} 5px, ${accentColors[1] || 'yellow'} 5px, ${accentColors[1] || 'yellow'} 10px)` }} aria-label="Warning stripes pattern" />;
    case 'pixelated noise': // Brutalist
        return <div className="w-full h-full" style={{ background: `radial-gradient(${mainColor} 15%, transparent 16%), radial-gradient(${accentColors[0]} 15%, transparent 16%)`, backgroundSize: '4px 4px', backgroundPosition: '0 0, 2px 2px', backgroundColor: accentColors[2] || 'white' }} aria-label="Pixelated noise pattern" />;
    case 'raw concrete block': // Brutalist
        return <div className="w-full h-full grid grid-cols-3 grid-rows-2 gap-px" style={{backgroundColor: mainColor}}><div style={{backgroundColor: accentColors[0] || '#888'}} /><div /><div style={{backgroundColor: accentColors[1] || '#AAA'}} /><div /><div style={{backgroundColor: accentColors[0] || '#888'}} /><div /></div>;
    case 'aurora gradient': // Glassmorphism
        return <div className="w-full h-full" style={{ background: `linear-gradient(120deg, ${mainColor}90, ${accentColors[0]}90, ${accentColors[1]}90, ${accentColors[2]}90)` }} aria-label="Aurora gradient pattern" />;
    case 'soft bokeh': // Glassmorphism
        return <div className="w-full h-full" style={{ background: `radial-gradient(circle, ${mainColor}30 10%, transparent 40%), radial-gradient(circle, ${accentColors[0]}20 5%, transparent 20%), radial-gradient(circle, ${accentColors[1]}25 15%, transparent 30%)`, backgroundSize: '40px 40px, 30px 30px, 50px 50px', backgroundPosition: '0 0, 10px 15px, 20px 5px', filter: 'blur(1px)' }} aria-label="Soft bokeh pattern" />;
    case 'frosted noise': // Glassmorphism
        return <div className="w-full h-full" style={{ background: `linear-gradient(${mainColor}10, ${accentColors[0]}05), url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23${(accentColors[1] || '000000').substring(1)}' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 0h3v3H0V0zm3 3h3v3H3V3z'/%3E%3C/g%3E%3C/svg%3E")`, backdropFilter: 'blur(1.5px)' }} aria-label="Frosted noise pattern" />;
    case 'layered glass panels': // Glassmorphism
        return <div className="w-full h-full relative"><div className="absolute inset-1 rounded" style={{background: `${mainColor}30`, backdropFilter: 'blur(2px)'}} /><div className="absolute top-2 left-2 right-4 bottom-4 rounded" style={{background: `${accentColors[0]}20`, backdropFilter: 'blur(3px)'}} /><div className="absolute top-4 left-4 right-2 bottom-2 rounded" style={{background: `${accentColors[1]}15`, backdropFilter: 'blur(1px)'}} /></div>;
    case 'neural network': // Tech E-learning / AI
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Neural network pattern"><circle cx="5" cy="5" r="2" fill={mainColor} /><circle cx="5" cy="15" r="2" fill={mainColor} /><circle cx="20" cy="5" r="2" fill={accentColors[0]} /><circle cx="20" cy="15" r="2" fill={accentColors[0]} /><circle cx="35" cy="10" r="2" fill={accentColors[1]} /><path d="M5,5 L20,5 M5,5 L20,15 M5,15 L20,5 M5,15 L20,15 M20,5 L35,10 M20,15 L35,10" stroke={accentColors[2] || '#888'} strokeWidth="0.5" /></svg>;
    case 'data stream': // Tech E-learning / AI
        return <div className="w-full h-full" style={{ background: `repeating-linear-gradient(0deg, ${mainColor}30, ${mainColor}30 1px, transparent 1px, transparent 4px), repeating-linear-gradient(90deg, ${accentColors[0]}20, ${accentColors[0]}20 1px, transparent 1px, transparent 4px)` }} aria-label="Data stream pattern" />;
    case 'generative art': // Tech E-learning / AI
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Generative art pattern"><path d="M0,10 Q5,2 10,10 T20,10 T30,10 T40,10" stroke={mainColor} strokeWidth="1" fill="none" /><path d="M0,12 Q5,18 10,12 T20,12 T30,12 T40,12" stroke={accentColors[0]} strokeWidth="1" fill="none" /><path d="M0,14 Q5,6 10,14 T20,14 T30,14 T40,14" stroke={accentColors[1]} strokeWidth="0.5" fill="none" /></svg>;
    case 'dynamic particle system': // Tech E-learning / AI
        return <div className="w-full h-full" style={{ background: `radial-gradient(circle, ${mainColor}80 1px, transparent 1px), radial-gradient(circle, ${accentColors[0]}70 1px, transparent 1px), radial-gradient(circle, ${accentColors[1]}60 1px, transparent 1px)`, backgroundSize: '20px 20px, 30px 30px, 15px 15px', backgroundPosition: '0 0, 5px 5px, 10px 10px' }} aria-label="Dynamic particle system pattern" />;
    case 'subtle generative': // AI Minimalism
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Subtle generative pattern"><path d="M0,10 C10,5 20,15 30,10 C40,5 40,15 40,15" stroke={mainColor} strokeWidth="0.5" fill="none" opacity="0.5" /><path d="M0,12 C5,18 15,2 25,12 C35,18 40,2 40,2" stroke={accentColors[0]} strokeWidth="0.5" fill="none" opacity="0.4" /></svg>;
    case 'adaptive grid': // AI Minimalism
        return <div className="w-full h-full" style={{ backgroundSize: '15px 10px, 10px 15px', backgroundImage: `linear-gradient(to right, ${mainColor}1A 1px, transparent 1px), linear-gradient(to bottom, ${accentColors[0]}1A 1px, transparent 1px)`}} aria-label="Adaptive grid pattern" />;
    case 'minimal data flow': // AI Minimalism
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Minimal data flow pattern"><path d="M0,10 H40 M5,5 L10,10 L5,15 M35,5 L30,10 L35,15" stroke={mainColor} strokeWidth="1" fill="none" opacity="0.7" /></svg>;
    case 'calm neural net': // AI Minimalism
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Calm neural net pattern"><circle cx="10" cy="10" r="3" fill={mainColor} opacity="0.5" /><circle cx="30" cy="10" r="3" fill={accentColors[0]} opacity="0.5" /><line x1="13" y1="10" x2="27" y2="10" stroke={accentColors[1] || '#ddd'} strokeWidth="0.5" /><line x1="10" y1="7" x2="30" y2="7" stroke={accentColors[1] || '#ddd'} strokeWidth="0.5" opacity="0.3"/><line x1="10" y1="13" x2="30" y2="13" stroke={accentColors[1] || '#ddd'} strokeWidth="0.5" opacity="0.3"/></svg>;
    case 'digital circuit': // Cyberpunk
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Digital circuit pattern"><rect x="0" y="0" width="40" height="20" fill={accentColors[2] || '#050508'} /><path d="M0,5 H10 V10 H5 M10,5 H15 V15 H20 M15,10 H25 M20,0 V20 M30,5 H40 M30,15 H35 V10 H30" stroke={mainColor} strokeWidth="1" fill="none" style={{filter: `drop-shadow(0 0 1px ${mainColor})`}} /></svg>;
    case 'neon grid': // Cyberpunk
        return <div className="w-full h-full" style={{ backgroundSize: '10px 10px', backgroundImage: `linear-gradient(to right, ${mainColor}80 1px, transparent 1px), linear-gradient(to bottom, ${mainColor}80 1px, transparent 1px)`, filter: `drop-shadow(0 0 2px ${mainColor})` }} aria-label="Neon grid pattern" />;
    case 'glitch screen': // Cyberpunk
        return <div className="w-full h-full relative overflow-hidden" style={{background: accentColors[2] || '#0A0A0F'}}><div className="absolute w-full h-1/3 top-1/4" style={{background: mainColor, opacity:0.05, animation: 'glitch1 0.5s infinite alternate'}} /><div className="absolute w-1/2 h-full left-1/3" style={{background: accentColors[0], opacity:0.03, animation: 'glitch2 0.3s infinite alternate'}} /></div>;
    case 'binary rain': // Cyberpunk
        return <div className="w-full h-full text-xs leading-none" style={{color: mainColor, columnCount: 5, columnGap: '2px', opacity: 0.7, filter: `drop-shadow(0 0 1px ${mainColor})`}} aria-label="Binary rain pattern"><div>0101010101</div><div>1010101010</div><div>0011001100</div><div>1100110011</div><div>0110110110</div></div>;
    case 'holographic data': // Cyberpunk
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Holographic data pattern"><rect x="2" y="2" width="10" height="5" fill={mainColor} opacity="0.3" /><rect x="15" y="4" width="12" height="7" fill={accentColors[0]} opacity="0.25" /><rect x="5" y="10" width="18" height="6" fill={accentColors[1]} opacity="0.3" /><line x1="0" y1="0" x2="40" y2="20" stroke={mainColor} strokeWidth="0.2" opacity="0.4" /><line x1="0" y1="20" x2="40" y2="0" stroke={accentColors[0]} strokeWidth="0.2" opacity="0.4" /></svg>;
    case 'offset pastel shapes': // Neo-Pastel
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Offset pastel shapes pattern"><rect x="2" y="2" width="10" height="8" rx="2" fill={mainColor} opacity="0.8" /><circle cx="18" cy="10" r="5" fill={accentColors[0]} opacity="0.7" /><polygon points="25,5 35,5 30,15" fill={accentColors[1]} opacity="0.9" /></svg>;
    case 'playful Memphis-like': // Neo-Pastel
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Playful Memphis-like pattern"><circle cx="8" cy="6" r="3" fill={mainColor} /><rect x="15" y="10" width="10" height="4" fill={accentColors[0]} transform="rotate(-15 20 12)" /><path d="M25,3 L35,3 M25,7 L35,7 M25,11 L35,11" stroke={accentColors[1]} strokeWidth="1.5" strokeLinecap="round" /></svg>;
    case 'colorful confetti': // Neo-Pastel
        return <div className="w-full h-full relative" aria-label="Colorful confetti pattern"><div className="absolute w-1 h-1 rounded-full bg-current top-1 left-2" style={{color:mainColor}} /><div className="absolute w-1.5 h-1.5 rounded-sm bg-current top-3 right-3 rotate-45" style={{color:accentColors[0]}} /><div className="absolute w-1 h-2 rounded-b-full bg-current bottom-2 left-5" style={{color:accentColors[1]}} /><div className="absolute w-2 h-1 rounded-full bg-current top-8 right-8" style={{color:accentColors[2]}} /></div>;
    // case 'asymmetric grid': // Neo-Pastel - Already defined for Swiss, will reuse
    case 'wavy lines': // Neo-Pastel
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Wavy lines pattern"><path d="M0,5 Q10,0 20,5 T40,5" stroke={mainColor} strokeWidth="2" fill="none" /><path d="M0,10 Q10,15 20,10 T40,10" stroke={accentColors[0]} strokeWidth="2" fill="none" /><path d="M0,15 Q10,10 20,15 T40,15" stroke={accentColors[1]} strokeWidth="2" fill="none" /></svg>;
    // END OF NEW TECH PATTERN EXAMPLES
    // START OF NEW MAXIMALIST PATTERN EXAMPLES
    case 'clashing patterns':
        return <div className="w-full h-full"><div className="w-1/2 h-full float-left" style={{ background: `repeating-linear-gradient(45deg, ${mainColor}, ${mainColor} 2px, ${accentColors[0]} 2px, ${accentColors[0]} 4px)` }} /><div className="w-1/2 h-full float-left" style={{ background: `radial-gradient(circle, ${accentColors[1]} 20%, transparent 20%), radial-gradient(circle, ${accentColors[2]} 20%, transparent 20%)`, backgroundSize: '10px 10px, 10px 10px', backgroundPosition: '0 0, 5px 5px', backgroundColor: accentColors[3] || 'white' }} /></div>;
    case 'animal print': // Leopard-like
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Animal print pattern"><g fill={mainColor}><ellipse cx="8" cy="6" rx="2" ry="1.5" /><path d="M15,10 A3,2 0 0,0 12,9 A3,2 0 0,0 15,8 A3,2 0 0,0 18,9 A3,2 0 0,0 15,10 Z M15,9 A1,0.8 0 1,1 15,9.01 Z" /></g><g fill={accentColors[0]}><ellipse cx="25" cy="5" rx="1.5" ry="1" /><path d="M30,14 A2.5,1.8 0 0,0 27,13 A2.5,1.8 0 0,0 30,12 A2.5,1.8 0 0,0 33,13 A2.5,1.8 0 0,0 30,14 Z M30,13 A0.8,0.6 0 1,1 30,13.01 Z" /></g></svg>;
    case 'opulent floral':
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Opulent floral pattern"><circle cx="10" cy="10" r="5" fill={mainColor} /><path d="M10,5 A5,5 0 0,1 15,10 A5,5 0 0,1 10,15 A5,5 0 0,1 5,10 A5,5 0 0,1 10,5" stroke={accentColors[0]} strokeWidth="1" fill="none" /><circle cx="10" cy="10" r="2" fill={accentColors[1]} /><path d="M25,5 Q30,15 35,5 M28,12 L32,8" stroke={accentColors[2] || mainColor} strokeWidth="1.5" fill="none" /></svg>;
    case 'bold geometric': // Reusing existing 'geometric' with potentially bolder colors
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Bold geometric pattern"><polygon points="10,2 18,6 18,14 10,18 2,14 2,6" fill={mainColor} opacity="0.9" /><polygon points="30,2 38,6 38,14 30,18 22,14 22,6" fill={accentColors[0]} opacity="0.9" /></svg>;
    case 'textured collage':
        return <div className="w-full h-full relative"><div className="absolute inset-0" style={{background: `linear-gradient(45deg, ${mainColor}30, ${accentColors[0]}40)`}} /><div className="absolute top-1 left-1 w-1/2 h-1/2" style={{background: `repeating-radial-gradient(circle, ${accentColors[1]} 10%, transparent 11%), repeating-linear-gradient(${accentColors[2]}50, ${accentColors[2]}50 1px, transparent 1px, transparent 3px)`, backgroundSize: '8px 8px, 100%'}} /></div>;
    case 'bold stripes':
        return <div className="w-full h-full" style={{ background: `repeating-linear-gradient(90deg, ${mainColor}, ${mainColor} 5px, ${accentColors[0]} 5px, ${accentColors[0]} 10px, ${accentColors[1]} 10px, ${accentColors[1]} 15px)` }} aria-label="Bold stripes pattern" />;
    case 'colorful polka dots':
        return <div className="w-full h-full" style={{ background: `radial-gradient(${mainColor} 30%, transparent 30%), radial-gradient(${accentColors[0]} 30%, transparent 30%), radial-gradient(${accentColors[1]} 30%, transparent 30%)`, backgroundSize: '15px 15px, 15px 15px, 15px 15px', backgroundPosition: '0 0, 5px 5px, 10px 10px', backgroundColor: accentColors[2] || 'white' }} aria-label="Colorful polka dots pattern" />;
    case 'abstract shapes': // Reusing organic shapes with potentially different colors
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Abstract shapes pattern"><ellipse cx="10" cy="8" rx="5" ry="3" fill={mainColor} opacity="0.8" /><ellipse cx="25" cy="12" rx="7" ry="4" fill={accentColors[0]} opacity="0.7" /><ellipse cx="15" cy="15" rx="4" ry="2" fill={accentColors[1] || mainColor} opacity="0.9" /></svg>;
    case 'confetti burst':
        return <div className="w-full h-full relative" aria-label="Confetti burst pattern"><div className="absolute w-1 h-1 rounded-full bg-current top-2 left-3 rotate-12" style={{color:mainColor}} /><div className="absolute w-0.5 h-1.5 bg-current top-5 right-5 -rotate-45" style={{color:accentColors[0]}} /><div className="absolute w-1 h-1 rounded-sm bg-current bottom-3 left-6 rotate-6" style={{color:accentColors[1]}} /><div className="absolute w-1.5 h-0.5 rounded-full bg-current top-1 right-8 -rotate-12" style={{color:accentColors[2]}} /><div className="absolute w-1 h-1 rounded-full bg-current top-8 left-12 rotate-30" style={{color:accentColors[3]}} /></div>;
    case 'neon grid lines': // Similar to neon grid, more focused on lines
        return <div className="w-full h-full" style={{ backgroundSize: '10px 10px', backgroundImage: `linear-gradient(to right, ${mainColor} 0.5px, transparent 0.5px), linear-gradient(to bottom, ${mainColor} 0.5px, transparent 0.5px)`, filter: `drop-shadow(0 0 1.5px ${mainColor})` }} aria-label="Neon grid lines pattern" />;
    case 'sunset gradient':
        return <div className="w-full h-full" style={{ background: `linear-gradient(to bottom, ${accentColors[0]} 0%, ${mainColor} 50%, ${accentColors[2] || '#1A0B33'} 100%)` }} aria-label="Sunset gradient pattern" />;
    case 'checkerboard floor':
        return <div className="w-full h-full" style={{ backgroundSize: '10px 10px', backgroundImage: `linear-gradient(45deg, ${mainColor} 25%, transparent 25%), linear-gradient(-45deg, ${mainColor} 25%, transparent 25%), linear-gradient(45deg, transparent 75%, ${mainColor} 75%), linear-gradient(-45deg, transparent 75%, ${mainColor} 75%)`, backgroundPosition: '0 0, 0 5px, 5px -5px, -5px 0px', backgroundColor: accentColors[0] || '#1A0B33' }} aria-label="Checkerboard floor pattern" />;
    case 'pixelated static': // Similar to pixelated noise, different colors
        return <div className="w-full h-full" style={{ background: `radial-gradient(${mainColor}30 1px, transparent 1px), radial-gradient(${accentColors[0]}20 1px, transparent 1px)`, backgroundSize: '3px 3px, 3px 3px', backgroundPosition: '0 0, 1.5px 1.5px', backgroundColor: accentColors[2] || '#1A0B33' }} aria-label="Pixelated static pattern" />;
    case 'geometric 80s':
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Geometric 80s pattern"><rect x="0" y="0" width="40" height="20" fill={accentColors[2] || '#1A0B33'} /><polygon points="0,0 20,0 10,20" fill={mainColor} /><polygon points="20,0 40,0 30,20 20,20" fill={accentColors[0]} /><circle cx="10" cy="5" r="3" fill={accentColors[1]} opacity="0.7" /><rect x="25" y="10" width="10" height="5" fill={accentColors[1]} opacity="0.7" /></svg>;
    // END OF NEW MAXIMALIST PATTERN EXAMPLES
    // START OF NEW FEMININE PATTERN EXAMPLES
    case 'flowing ribbon':
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Flowing ribbon pattern"><path d="M0,5 C10,15 20,0 30,10 C40,20 40,5 40,5" stroke={mainColor} strokeWidth="3" fill="none" strokeLinecap="round" /><path d="M2,7 C12,17 22,2 32,12" stroke={accentColors[0]} strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.7" /></svg>;
    case 'tulle netting':
        return <div className="w-full h-full" style={{ backgroundSize: '8px 8px', backgroundImage: `linear-gradient(45deg, ${mainColor}20 1px, transparent 1px), linear-gradient(-45deg, ${mainColor}20 1px, transparent 1px)` }} aria-label="Tulle netting pattern" />;
    case 'delicate lace':
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Delicate lace pattern"><path d="M0,10 Q5,5 10,10 T20,10 T30,10 T40,10 M5,10 Q10,15 15,10 T25,10 T35,10" stroke={mainColor} strokeWidth="0.5" fill="none" /><circle cx="10" cy="10" r="1" fill={accentColors[0]} opacity="0.5"/><circle cx="20" cy="10" r="1" fill={accentColors[0]} opacity="0.5"/><circle cx="30" cy="10" r="1" fill={accentColors[0]} opacity="0.5"/></svg>;
    case 'subtle floral damask':
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Subtle floral damask pattern"><path d="M5,5 Q10,15 15,5 M25,5 Q30,15 35,5" stroke={mainColor} strokeWidth="1" fill="none" opacity="0.3" /><path d="M10,10 A3,3 0 1,1 10,9.9 M30,10 A3,3 0 1,1 30,9.9" fill={accentColors[0]} opacity="0.4" /></svg>;
    case 'tiny hearts':
        return <div className="w-full h-full text-xs" style={{color: mainColor, background: `radial-gradient(${accentColors[0] || mainColor}10 1px, transparent 1px)`, backgroundSize: '10px 10px'}} aria-label="Tiny hearts pattern">♥︎ ♥︎ ♥︎ ♥︎ ♥︎ ♥︎ ♥︎ ♥︎ ♥︎ ♥︎ ♥︎ ♥︎ ♥︎ ♥︎ ♥︎ ♥︎ ♥︎ ♥︎ ♥︎ ♥︎</div>;
    case 'delicate bows':
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Delicate bows pattern"><g transform="translate(5 5) scale(0.5)"><path d="M10,10 Q6,6 4,10 L6,18 Q10,14 10,10 M10,10 Q14,6 16,10 L14,18 Q10,14 10,10 Z" fill={mainColor} /><circle cx="10" cy="10" r="1.5" fill={accentColors[0] || 'white'} /></g><g transform="translate(25 5) scale(0.5)"><path d="M10,10 Q6,6 4,10 L6,18 Q10,14 10,10 M10,10 Q14,6 16,10 L14,18 Q10,14 10,10 Z" fill={mainColor} /><circle cx="10" cy="10" r="1.5" fill={accentColors[0] || 'white'} /></g></svg>;
    case 'vintage floral':
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Vintage floral pattern"><g fill={mainColor} opacity="0.7"><path d="M8,5 A3,3 0 1,1 2,5 A3,3 0 0,1 8,5"/><path d="M12,15 A3,3 0 1,1 6,15 A3,3 0 0,1 12,15"/></g><g fill={accentColors[0]} opacity="0.6"><path d="M28,3 A2,2 0 1,1 24,3 A2,2 0 0,1 28,3"/><path d="M32,17 A2,2 0 1,1 28,17 A2,2 0 0,1 32,17"/></g><line x1="5" y1="5" x2="30" y2="15" stroke={accentColors[1] || '#00000010'} strokeWidth="0.5" /></svg>;
    case 'lace trim':
        return <div className="w-full h-full" style={{borderBottom: `3px dashed ${mainColor}`, backgroundImage: `radial-gradient(${accentColors[0] || mainColor}30 1px, transparent 1px)`, backgroundSize: '5px 5px' }} aria-label="Lace trim pattern" />;
    case 'polka dots':
        return <div className="w-full h-full" style={{ background: `radial-gradient(${mainColor} 35%, transparent 35%)`, backgroundSize: '10px 10px', backgroundColor: accentColors[1] || 'transparent' }} aria-label="Polka dots pattern" />;
    case 'ditsy floral':
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Ditsy floral pattern"><g fill={mainColor}><circle cx="5" cy="5" r="1"/><circle cx="8" cy="15" r="1"/><circle cx="15" cy="8" r="1"/><circle cx="22" cy="12" r="1"/><circle cx="30" cy="6" r="1"/><circle cx="35" cy="16" r="1"/></g><g fill={accentColors[0]}><circle cx="10" cy="3" r="0.5"/><circle cx="18" cy="18" r="0.5"/><circle cx="25" cy="2" r="0.5"/><circle cx="3" cy="12" r="0.5"/><circle cx="38" cy="8" r="0.5"/></g></svg>;
    case 'gingham check':
        return <div className="w-full h-full" style={{ backgroundSize: '10px 10px', backgroundImage: `linear-gradient(to right, ${mainColor}30 1px, transparent 1px), linear-gradient(to bottom, ${mainColor}30 1px, transparent 1px), linear-gradient(to right, ${accentColors[0]}80 50%, transparent 50%), linear-gradient(to bottom, ${accentColors[0]}80 50%, transparent 50%)`, backgroundPosition: '0 0, 0 0, 0 0, 0 0', backgroundColor: accentColors[1] || 'white' }} aria-label="Gingham check pattern" />;
    case 'vintage botanical print':
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Vintage botanical print pattern"><path d="M10,18 V5 C5,5 5,15 10,15 M10,5 C15,5 15,15 10,15 M10,8 L15,3 M10,8 L5,3" stroke={mainColor} strokeWidth="1" fill="none" /><circle cx="15" cy="3" r="1" fill={accentColors[0]} /><circle cx="5" cy="3" r="1" fill={accentColors[0]} /><text x="20" y="15" fill={accentColors[1] || mainColor} fontSize="6" fontFamily="serif" style={{fontStyle: 'italic'}}>Flora</text></svg>;
    case 'cross-stitch sampler': // Similar to cross-stitch
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Cross-stitch sampler pattern"><g strokeWidth="2" strokeLinecap="round"><path d="M5,5 L10,10 M10,5 L5,10" stroke={mainColor} /><path d="M15,5 L20,10 M20,5 L15,10" stroke={accentColors[0]} /><path d="M25,5 L30,10 M30,5 L25,10" stroke={accentColors[1] || mainColor} /></g><text x="5" y="18" fill={mainColor} fontSize="4">ABC</text></svg>;
    case 'toile de jouy': // Simplified
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Toile de Jouy pattern"><g fill={mainColor} opacity="0.7"><path d="M5,15 C10,5 15,15 20,10 C25,5 30,15 35,10" stroke="none" /><circle cx="8" cy="8" r="2" /><path d="M22,5 L25,10 L20,12Z" /></g></svg>;
    // END OF NEW FEMININE PATTERN EXAMPLES
    // START OF NEW CULTURAL PATTERN EXAMPLES
    case 'zellige tile': // Moroccan
        return <div className="w-full h-full grid grid-cols-5 grid-rows-3 gap-px" style={{backgroundColor: accentColors[1] || 'teal'}}><div className="col-span-2" style={{backgroundColor: mainColor}} /><div style={{backgroundColor: accentColors[0] || 'gold'}} /><div className="col-span-2 row-span-2" style={{backgroundColor: accentColors[2] || 'burgundy'}} /><div style={{backgroundColor: mainColor}} /><div style={{backgroundColor: accentColors[0] || 'gold'}} /><div style={{backgroundColor: mainColor}} /><div className="col-span-2" style={{backgroundColor: accentColors[0] || 'gold'}} /></div>;
    case 'mashrabiya screen': // Moroccan
        return <div className="w-full h-full" style={{ backgroundSize: '10px 10px', backgroundImage: `radial-gradient(circle, ${mainColor} 30%, transparent 30%), linear-gradient(to right, ${accentColors[0]} 1px, transparent 1px), linear-gradient(to bottom, ${accentColors[0]} 1px, transparent 1px)` }} aria-label="Mashrabiya screen pattern" />;
    case 'moroccan trellis':
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Moroccan trellis pattern"><path d="M0,0 L10,10 L0,20 M10,0 L20,10 L10,20 M20,0 L30,10 L20,20 M30,0 L40,10 L30,20" stroke={mainColor} strokeWidth="1" fill="none" /><path d="M5,0 L15,10 L5,20 M15,0 L25,10 L15,20 M25,0 L35,10 L25,20" stroke={accentColors[0]} strokeWidth="1" fill="none" /></svg>;
    case 'berber carpet':
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Berber carpet pattern" style={{backgroundColor: accentColors[2] || '#FDF6E3'}}><path d="M5,5 L10,10 L15,5 L20,10 L25,5 L30,10 L35,5 M5,15 L10,10 L15,15 L20,10 L25,15 L30,10 L35,15" stroke={mainColor} strokeWidth="1.5" fill="none" /><path d="M2,8 H38 M2,12 H38" stroke={accentColors[0]} strokeWidth="0.5" fill="none" /></svg>;
    case 'scandi folk floral': // Scandinavian
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Scandi folk floral pattern"><g fill={mainColor}><circle cx="10" cy="10" r="4" /><path d="M10,6 V2 M10,14 V18 M6,10 H2 M14,10 H18" stroke={mainColor} strokeWidth="1" /></g><g fill={accentColors[0]}><circle cx="30" cy="10" r="3" /><path d="M30,7 L27,5 M30,7 L33,5 M30,13 L27,15 M30,13 L33,15" stroke={accentColors[0]} strokeWidth="1" /></g></svg>;
    case 'geometric border': // Scandinavian
        return <div className="w-full h-full" style={{border: `3px solid ${mainColor}`}}><div className="w-full h-full" style={{border: `1px dashed ${accentColors[0]}`, margin: '2px'}} /></div>;
    case 'kurbits painting': // Simplified Kurbits
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Kurbits painting pattern"><path d="M5,15 C10,5 15,15 20,5 C25,15 30,5 35,15" stroke={mainColor} strokeWidth="2" fill={accentColors[0] || 'none'} /><circle cx="12" cy="5" r="1.5" fill={accentColors[1]} /><circle cx="28" cy="5" r="1.5" fill={accentColors[1]} /></svg>;
    case 'traditional knit': // Scandinavian
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Traditional knit pattern"><path d="M0,5 L5,10 L0,15 M10,5 L5,10 L10,15 M10,5 L15,10 L20,5 M20,15 L15,10 L20,5 M20,15 L25,10 L30,15 M30,5 L25,10 L30,15 M30,5 L35,10 L40,5 M40,15 L35,10 L40,5" stroke={mainColor} strokeWidth="1" fill="none" /></svg>;
    case 'simple stripe': // Scandinavian
        return <div className="w-full h-full" style={{ background: `repeating-linear-gradient(90deg, ${mainColor}, ${mainColor} 8px, ${accentColors[0]} 8px, ${accentColors[0]} 12px, ${accentColors[1] || 'white'} 12px, ${accentColors[1] || 'white'} 15px)` }} aria-label="Simple stripe pattern" />;
    case 'reimagined paisley': // Indian
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Reimagined paisley pattern"><path d="M10,2 C2,8 5,18 12,15 C18,12 20,5 10,2 Z M28,18 C38,12 35,2 28,5 C22,8 20,15 28,18 Z" fill={mainColor} stroke={accentColors[0]} strokeWidth="0.5" /><circle cx="10" cy="8" r="1" fill={accentColors[1]} /><circle cx="28" cy="12" r="1" fill={accentColors[1]} /></svg>;
    case 'modern rangoli': // Indian
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Modern rangoli pattern"><circle cx="10" cy="10" r="6" fill={mainColor} /><polygon points="10,4 12,8 16,8 13,11 14,15 10,13 6,15 7,11 4,8 8,8" fill={accentColors[0]} /><circle cx="30" cy="10" r="4" fill={accentColors[1]} /><path d="M30,6 L28,10 L32,10Z M30,14 L28,10 L32,10Z" fill={accentColors[2] || mainColor} /></svg>;
    case 'indian textile print':
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Indian textile print pattern"><rect x="0" y="0" width="40" height="20" fill={accentColors[2] || '#FEFAE0'} /><g fill={mainColor}><rect x="2" y="2" width="5" height="5" /><rect x="12" y="8" width="5" height="5" /><rect x="22" y="14" width="5" height="5" /><rect x="32" y="5" width="5" height="5" /></g><g fill={accentColors[0]}><circle cx="10" cy="15" r="2" /><circle cx="20" cy="5" r="2" /><circle cx="30" cy="12" r="2" /></g></svg>;
    case 'geometric jaali':
        return <div className="w-full h-full" style={{ backgroundSize: '12px 12px', backgroundImage: `radial-gradient(circle, transparent 30%, ${mainColor} 31%, ${mainColor} 40%, transparent 41%), linear-gradient(to right, ${accentColors[0]}00 1px, transparent 1px), linear-gradient(to bottom, ${accentColors[0]}00 1px, transparent 1px)` }} aria-label="Geometric jaali pattern" />;
    case 'block print motif': // Similar to block print
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Block print motif pattern"><g fill={mainColor}><path d="M5,5 L10,10 L5,15Z M15,5 L20,10 L15,15Z" /></g><g fill={accentColors[0]}><path d="M25,5 L30,10 L25,15Z M35,5 L40,10 L35,15Z" /></g></svg>;
    // END OF NEW CULTURAL PATTERN EXAMPLES
    // START OF NEW CLEAN/MINIMAL PATTERN EXAMPLES
    case 'atomic age pattern': // Midcentury
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Atomic age pattern"><g fill={mainColor}><circle cx="5" cy="5" r="1.5"/><path d="M3,8 L7,8 M5,6 V10"/></g><g fill={accentColors[0]}><circle cx="15" cy="10" r="2"/><path d="M13,10 H17 M15,8 V12 M12,7 L18,13 M12,13 L18,7"/></g><g fill={accentColors[1]}><rect x="25" y="3" width="8" height="3" rx="1"/><rect x="28" y="8" width="2" height="8" rx="1"/></g></svg>;
    case 'boomerang print': // Midcentury
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Boomerang print pattern"><path d="M5,5 Q15,2 15,10 Q15,18 5,15 Z" fill={mainColor} /><path d="M25,15 Q15,18 15,10 Q15,2 25,5 Z" fill={accentColors[0]} opacity="0.7" /></svg>;
    case 'abstract line art': // Midcentury
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Abstract line art pattern"><path d="M0,10 H40 M10,0 V20 M20,0 Q10,10 20,20 M30,0 Q20,10 30,20" stroke={mainColor} strokeWidth="1" fill="none" opacity="0.6" /></svg>;
    case 'starbursts': // Midcentury
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Starbursts pattern"><g fill={mainColor}><path d="M8,8 L9,3 L10,8 L15,9 L10,10 L9,15 L8,10 L3,9Z" /></g><g fill={accentColors[0]}><path d="M28,12 L29,7 L30,12 L35,13 L30,14 L29,19 L28,14 L23,13Z" /></g></svg>;
    case 'frosted glass': // Nordic Winter
        return <div className="w-full h-full" style={{background: `linear-gradient(45deg, ${mainColor}20, ${accentColors[0]}15)`, backdropFilter: 'blur(1px)'}} aria-label="Frosted glass pattern" />;
    case 'subtle snowdrift': // Nordic Winter
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Subtle snowdrift pattern"><path d="M0,15 C10,10 20,18 30,12 C40,8 40,15 40,15 V20 H0 Z" fill={mainColor} opacity="0.2" /><path d="M0,18 C15,12 25,20 40,16 V20 H0 Z" fill={accentColors[0]} opacity="0.15" /></svg>;
    case 'nordic knit pattern': // Nordic Winter
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Nordic knit pattern"><path d="M0,5 L5,10 L0,15 M10,5 L5,10 L10,15 M10,5 L15,10 L20,5 M20,15 L15,10 L20,5 M20,15 L25,10 L30,15 M30,5 L25,10 L30,15 M30,5 L35,10 L40,5 M40,15 L35,10 L40,5" stroke={mainColor} strokeWidth="1" fill="none" /></svg>;
    case 'ice crackle': // Nordic Winter
        return <svg viewBox="0 0 40 20" className="w-full h-full" aria-label="Ice crackle pattern"><path d="M0,10 L15,5 L20,15 L30,0 L40,10 M5,20 L10,0 M25,20 L35,5" stroke={mainColor} strokeWidth="0.5" fill="none" opacity="0.6" /></svg>;
    case 'subtle depth gradient': // Tactile UI
        return <div className="w-full h-full" style={{ background: `radial-gradient(ellipse at top left, ${mainColor}20, transparent 70%), radial-gradient(ellipse at bottom right, ${accentColors[0]}15, transparent 70%)` }} aria-label="Subtle depth gradient pattern" />;
    case 'material grain': // Tactile UI
        return <div className="w-full h-full" style={{ background: `url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 0v4M3 0v4' stroke='%23${(mainColor).substring(1)}' stroke-width='0.2' stroke-opacity='0.1'/%3E%3C/svg%3E")`, backgroundColor: accentColors[1] || '#F3F4F6' }} aria-label="Material grain pattern" />;
    case 'neumorphic depression': // Tactile UI
        return <div className="w-full h-full rounded" style={{ background: mainColor, boxShadow: `inset 2px 2px 3px ${accentColors[0] || '#0000001A'}, inset -2px -2px 3px #ffffff80` }} aria-label="Neumorphic depression pattern" />;
    case 'soft noise': // Tactile UI
        return <div className="w-full h-full" style={{ background: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23${(mainColor).substring(1)}' fill-opacity='0.08' fill-rule='evenodd'%3E%3Cpath d='M0 0h3v3H0V0zm3 3h3v3H3V3z'/%3E%3C/g%3E%3C/svg%3E")` }} aria-label="Soft noise pattern" />;
    case 'asymmetric grid': // Swiss Modernism - also used in Neo-Pastel, but context makes it different
        return <svg viewBox="0 0 40 20" className="w-full h-full" style={{backgroundColor: accentColors[1] || 'white'}}><path d="M0,10 H30 V0 M15,0 V20 M0,5 H40" stroke={mainColor} strokeWidth="1" fill="none" /><rect x="32" y="2" width="6" height="6" fill={accentColors[0]} /></svg>;
    case 'bold color block': // Swiss Modernism
        return <div className="w-full h-full grid grid-cols-3"><div style={{backgroundColor: mainColor}} /><div style={{backgroundColor: accentColors[0]}} /><div style={{backgroundColor: accentColors[2] || accentColors[1] || 'grey'}} /></div>;
    case 'typographic layout': // Swiss Modernism
        return <div className="w-full h-full flex items-center justify-around"><span style={{fontFamily: `'${"Space Grotesk"}', sans-serif`, fontSize: '10px', color: mainColor}}>Aa</span><span style={{fontFamily: `'${"Manrope"}', sans-serif`, fontSize: '8px', color: accentColors[0]}}>Grid</span></div>;
    case 'geometric division': // Swiss Modernism
        return <svg viewBox="0 0 40 20" className="w-full h-full"><rect x="0" y="0" width="20" height="20" fill={mainColor} /><rect x="20" y="0" width="20" height="10" fill={accentColors[0]} /><rect x="20" y="10" width="10" height="10" fill={accentColors[2] || 'white'} /><rect x="30" y="10" width="10" height="10" fill={accentColors[0]} /></svg>;
    case 'negative space': // Swiss Modernism
        return <svg viewBox="0 0 40 20" className="w-full h-full" style={{backgroundColor: mainColor}}><circle cx="10" cy="10" r="7" fill={accentColors[1] || 'white'} /><rect x="20" y="3" width="15" height="14" fill={accentColors[1] || 'white'} /></svg>;
    case 'smooth concrete slab': // Soft Brutalism
        return <div className="w-full h-full" style={{ background: `linear-gradient(135deg, ${mainColor}, ${accentColors[0]})` }} aria-label="Smooth concrete slab pattern" />;
    case 'large scale terrazzo': // Soft Brutalism
        return <div className="w-full h-full" style={{ background: `${mainColor}, radial-gradient(${accentColors[1]} 15%, transparent 16%), radial-gradient(${accentColors[2]} 10%, transparent 11%)`, backgroundSize: '100%, 20px 20px, 15px 15px', backgroundPosition: '0 0, 0 0, 10px 10px' }} aria-label="Large scale terrazzo pattern" />;
    case 'minimalist grid': // Soft Brutalism
        return <div className="w-full h-full" style={{ backgroundSize: '20px 20px', backgroundImage: `linear-gradient(to right, ${accentColors[0]}30 1px, transparent 1px), linear-gradient(to bottom, ${accentColors[0]}30 1px, transparent 1px)`}} aria-label="Minimalist grid pattern" />;
    case 'shadow play': // Soft Brutalism
        return <div className="w-full h-full" style={{ background: mainColor, boxShadow: `inset 5px 5px 0px ${accentColors[0] || '#00000020'}` }} aria-label="Shadow play pattern" />;
    case 'architectural repetition': // Soft Brutalism
        return <svg viewBox="0 0 40 20" className="w-full h-full" style={{backgroundColor: accentColors[1] || '#F5F5F5'}}><rect x="2" y="2" width="5" height="16" fill={mainColor} /><rect x="10" y="2" width="5" height="16" fill={mainColor} /><rect x="18" y="2" width="5" height="16" fill={mainColor} /><rect x="26" y="2" width="5" height="16" fill={mainColor} /><rect x="34" y="2" width="5" height="16" fill={mainColor} /></svg>;
    // END OF NEW CLEAN/MINIMAL PATTERN EXAMPLES
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
    // START OF NEW TEXTURE EXAMPLES
    case 'aged paper': // Eco, Editorial
        return <div className="w-full h-full" style={{ background: `linear-gradient(to bottom, ${mainColor}10, ${accentColors[0]}20, ${mainColor}15), repeating-linear-gradient(0deg, transparent, transparent 4px, #00000008 5px, transparent 6px)`, filter: 'sepia(0.1) contrast(0.9) brightness(1.05)' }} aria-label="Aged paper texture" />;
    case 'recycled paper': // Eco - Organic & Health
        return <div className="w-full h-full" style={{ background: `${mainColor}30`, backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23${(accentColors[0] || '000000').substring(1)}' fill-opacity='0.15' fill-rule='evenodd'%3E%3Cpath d='M0 0h1v1H0V0zm2 2h1v1H2V2zm2 2h1v1H4V4z'/%3E%3C/g%3E%3C/svg%3E")` }} aria-label="Recycled paper texture" />;
    case 'pressed flower': // Eco - Organic & Health
        return <svg viewBox="0 0 20 10" className="w-full h-full" aria-label="Pressed flower texture"><rect width="20" height="10" fill={accentColors[1] || '#FDFBF7'} /><path d="M5,3 A2,2 0 1,1 1,3 A2,2 0 0,1 5,3 M8,7 A2,2 0 1,1 4,7 A2,2 0 0,1 8,7" fill={mainColor} opacity="0.4" /><path d="M15,2 A1.5,1.5 0 1,1 12,2 A1.5,1.5 0 0,1 15,2 M18,6 A1.5,1.5 0 1,1 15,6 A1.5,1.5 0 0,1 18,6" fill={accentColors[0]} opacity="0.3" /></svg>;
    case 'soft moss': // Eco - Organic & Health
        return <div className="w-full h-full" style={{ background: `radial-gradient(ellipse, ${mainColor}50, ${accentColors[0]}80 70%)`, filter: 'blur(0.5px) contrast(1.1)' }} aria-label="Soft moss texture" />;
    case 'light wood grain': // Eco - Organic & Health
        return <div className="w-full h-full" style={{ backgroundImage: `repeating-linear-gradient(90deg, ${mainColor}1A, ${mainColor}1A 1px, transparent 1px, transparent 6px), repeating-linear-gradient(90deg, ${accentColors[0]}10, ${accentColors[0]}10 1px, transparent 1px, transparent 10px)`, backgroundPosition: '0 0, 0 3px', backgroundColor: accentColors[1] || '#FDFBF7' }} aria-label="Light wood grain texture" />;
    case 'handmade paper': // Eco - Biophilia, Folk
        return <div className="w-full h-full" style={{ background: `${mainColor}20`, border: `1px solid ${mainColor}30`, backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 5h10M5 0v10' stroke='%23${(accentColors[0] || '000000').substring(1)}' stroke-width='0.1' stroke-opacity='0.2'/%3E%3C/svg%3E")` }} aria-label="Handmade paper texture" />;
    case 'leaf vein': // Eco - Biophilia
        return <svg viewBox="0 0 20 10" className="w-full h-full" aria-label="Leaf vein texture" style={{backgroundColor: accentColors[2] || '#F4F8F0'}}><path d="M10,1 V9 M10,5 L5,2 M10,5 L15,2 M10,7 L6,5 M10,7 L14,5" stroke={mainColor} strokeWidth="0.5" fill="none" opacity="0.7" /></svg>;
    case 'rough bark': // Eco - Biophilia
        return <div className="w-full h-full" style={{ background: `linear-gradient(0deg, ${mainColor}70, ${accentColors[0]}50), repeating-linear-gradient(90deg, transparent, transparent 2px, ${mainColor}30 3px, transparent 4px)`, filter: 'contrast(1.2) brightness(0.9)'}} aria-label="Rough bark texture" />;
    case 'watercolour': // Eco - Biophilia
        return <div className="w-full h-full" style={{ background: `radial-gradient(circle at 20% 20%, ${mainColor}20, transparent 60%), radial-gradient(circle at 80% 70%, ${accentColors[0]}25, transparent 50%)`, backgroundColor: accentColors[2] || '#F4F8F0', filter: 'blur(0.3px)' }} aria-label="Watercolour texture" />;
    case 'woven fabric': // Eco - Folk
        return <div className="w-full h-full" style={{ background: `repeating-linear-gradient(0deg, ${mainColor}60, ${mainColor}60 1px, ${accentColors[0]}40 1px, ${accentColors[0]}40 2px), repeating-linear-gradient(90deg, ${mainColor}50, ${mainColor}50 1px, ${accentColors[0]}30 1px, ${accentColors[0]}30 2px)` }} aria-label="Woven fabric texture" />;
    case 'traditional pottery': // Eco - Folk
        return <div className="w-full h-full" style={{ background: `radial-gradient(ellipse, ${mainColor}70, ${accentColors[0]}90), linear-gradient(0deg, ${mainColor}20 0%, transparent 100%)`, filter: 'saturate(0.8) contrast(1.1)' }} aria-label="Traditional pottery texture" />;
    case 'chunky knit': // Eco - Craftcore
        return <svg viewBox="0 0 20 10" className="w-full h-full" aria-label="Chunky knit texture"><path d="M0,2 L5,5 L0,8 M5,2 L10,5 L5,8 M10,2 L15,5 L10,8 M15,2 L20,5 L15,8" stroke={mainColor} strokeWidth="1.5" fill="none" strokeLinecap="round" /><path d="M2.5,0 V10 M7.5,0 V10 M12.5,0 V10 M17.5,0 V10" stroke={accentColors[0]} strokeWidth="0.5" fill="none" opacity="0.5" /></svg>;
    case 'felted wool': // Eco - Craftcore
        return <div className="w-full h-full" style={{ background: `radial-gradient(circle, ${mainColor}60, ${accentColors[0]}80), url("data:image/svg+xml,%3Csvg width='5' height='5' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0L5 5M0 5L5 0' stroke='%23${(accentColors[1]||'000000').substring(1)}' stroke-width='0.1' stroke-opacity='0.1'/%3E%3C/svg%3E")`, filter: 'blur(0.2px)' }} aria-label="Felted wool texture" />;
    case 'raw linen': // Eco - Craftcore
        return <div className="w-full h-full" style={{ background: `${accentColors[2] || '#F9F4F0'}`, backgroundImage: `repeating-linear-gradient(0deg, ${mainColor}1A, ${mainColor}1A 1px, transparent 1px, transparent 3px), repeating-linear-gradient(90deg, ${mainColor}1A, ${mainColor}1A 1px, transparent 1px, transparent 3px)` }} aria-label="Raw linen texture" />;
    case 'handmade clay': // Eco - Craftcore
        return <div className="w-full h-full" style={{ background: `linear-gradient(135deg, ${mainColor}70, ${accentColors[0]}80)`, filter: 'saturate(0.7) contrast(1.05)', boxShadow: 'inset 1px 1px 2px #00000010' }} aria-label="Handmade clay texture" />;
    case 'parchment': // Editorial - Dark Academia
        return <div className="w-full h-full" style={{ background: `linear-gradient(160deg, ${mainColor}C0, ${accentColors[0]}B0), repeating-linear-gradient(0deg, #00000005, #00000005 1px, transparent 1px, transparent 5px)`, filter: 'sepia(0.2) brightness(1.1)'}} aria-label="Parchment texture" />;
    case 'distressed leather': // Editorial - Dark Academia
        return <div className="w-full h-full" style={{ background: `linear-gradient(${mainColor}, ${accentColors[0]}), repeating-linear-gradient(45deg, transparent, transparent 5px, #FFFFFF10 5px, #FFFFFF10 6px), repeating-linear-gradient(-45deg, transparent, transparent 3px, #00000010 3px, #00000010 4px)`, filter: 'contrast(1.3) saturate(0.7)' }} aria-label="Distressed leather texture" />;
    case 'old wood': // Editorial - Dark Academia
        return <div className="w-full h-full" style={{ background: `repeating-linear-gradient(0deg, ${mainColor}, ${mainColor} 3px, ${accentColors[0]} 3px, ${accentColors[0]} 5px), linear-gradient(90deg, #0000001A, transparent)`, filter: 'sepia(0.4) brightness(0.9)' }} aria-label="Old wood texture" />;
    case 'velvet': // Editorial - Dark Academia, Moroccan
        return <div className="w-full h-full" style={{ background: `radial-gradient(ellipse at 70% 30%, ${mainColor}, ${accentColors[0]} 150%)`, filter: 'brightness(0.8) contrast(1.2)' }} aria-label="Velvet texture" />;
    case 'ink wash': // Editorial - Dark Academia
        return <div className="w-full h-full" style={{ background: `radial-gradient(circle at 10% 10%, ${mainColor}30, transparent 50%), radial-gradient(circle at 80% 90%, ${accentColors[0]}20, transparent 60%)`, backgroundColor: accentColors[1] || '#FDF6E3', filter: 'grayscale(0.2) contrast(1.1)' }} aria-label="Ink wash texture" />;
    case 'aged tapestry': // Editorial - Castlecore
        return <div className="w-full h-full" style={{ background: `linear-gradient(20deg, ${mainColor}, ${accentColors[0]}), repeating-linear-gradient(0deg, #00000011, #00000011 1px, transparent 1px, transparent 3px), repeating-linear-gradient(90deg, #00000011, #00000011 1px, transparent 1px, transparent 3px)`, filter: 'sepia(0.3) contrast(0.9)' }} aria-label="Aged tapestry texture" />;
    case 'rough stone': // Editorial - Castlecore
        return <div className="w-full h-full" style={{ background: `radial-gradient(circle at 15% 25%, ${mainColor}, transparent 60%), radial-gradient(circle at 80% 70%, ${accentColors[0]}, transparent 50%)`, backgroundColor: accentColors[1] || '#E0E0E0', filter: 'contrast(1.2) saturate(0.6)' }} aria-label="Rough stone texture" />;
    case 'dark wood': // Editorial - Castlecore
        return <div className="w-full h-full" style={{ background: `repeating-linear-gradient(0deg, ${mainColor}, ${mainColor} 4px, ${accentColors[0]} 4px, ${accentColors[0]} 7px)`, filter: 'brightness(0.7) sepia(0.2)' }} aria-label="Dark wood texture" />;
    case 'chainmail': // Editorial - Castlecore
        return <div className="w-full h-full" style={{ backgroundSize: '6px 6px', backgroundImage: `radial-gradient(circle, ${mainColor} 30%, transparent 30%), radial-gradient(circle, ${mainColor} 30%, transparent 30%)`, backgroundPosition: '0 0, 3px 3px', backgroundColor: accentColors[0] || 'grey' }} aria-label="Chainmail texture" />;
    case 'polished marble': // Editorial - Clerical Classicism
        return <svg viewBox="0 0 20 10" className="w-full h-full" aria-label="Polished marble texture" style={{backgroundColor: accentColors[2] || '#FCF8F0'}}><path d="M0,5 C3,2 7,8 10,5 S17,8 20,5 M0,8 C4,12 8,3 12,9 S18,2 20,6" stroke={mainColor} strokeWidth="0.3" fill="none" opacity="0.7" /><path d="M2,0 C8,3 3,7 9,10 M18,0 C12,4 17,8 11,10" stroke={accentColors[0]} strokeWidth="0.2" fill="none" opacity="0.5" /></svg>;
    case 'gold leaf': // Editorial - Clerical Classicism
        return <div className="w-full h-full" style={{ background: `radial-gradient(ellipse, ${accentColors[1] || 'gold'}, ${mainColor} 120%)`, filter: 'brightness(1.1) contrast(1.1)' }} aria-label="Gold leaf texture" />;
    case 'carved stone': // Editorial - Clerical Classicism
        return <div className="w-full h-full" style={{ background: `linear-gradient(135deg, ${mainColor}, ${accentColors[0]}), repeating-linear-gradient(0deg, #FFFFFF1A 1px, transparent 2px)` }} aria-label="Carved stone texture" />;
    case 'rich wood': // Editorial - Clerical Classicism
        return <div className="w-full h-full" style={{ background: `repeating-linear-gradient(90deg, ${mainColor}, ${mainColor} 8px, ${accentColors[0]} 8px, ${accentColors[0]} 12px)`, filter: 'sepia(0.1) brightness(0.95)' }} aria-label="Rich wood texture" />;
    case 'newsprint': // Editorial - Vintage Publishing
        return <div className="w-full h-full" style={{ background: accentColors[2] || '#FDF5E6', color: mainColor, fontSize: '3px', lineHeight: '1.1', overflow: 'hidden', textOrientation: 'mixed', writingMode: 'horizontal-tb', filter: 'grayscale(0.7) sepia(0.3) opacity(0.7)' }} aria-label="Newsprint texture">lorem ipsum dolor sit amet...</div>;
    case 'grainy photo': // Editorial - Vintage Publishing
        return <div className="w-full h-full" style={{ background: `linear-gradient(${mainColor}30, ${accentColors[1]}30), url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 0h1v1H0V0zm2 2h1v1H2V2z'/%3E%3C/g%3E%3C/svg%3E")`, filter: 'grayscale(0.5) contrast(1.2)'}} aria-label="Grainy photo texture" />;
    case 'linen book cover': // Editorial - Vintage Publishing
        return <div className="w-full h-full" style={{ background: mainColor, backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, ${accentColors[0]}20 2px, ${accentColors[0]}20 4px)` }} aria-label="Linen book cover texture" />;
    case 'offset print': // Editorial - Vintage Publishing
        return <div className="w-full h-full relative" style={{backgroundColor: accentColors[2] || '#FDF5E6'}}><div className="absolute inset-0" style={{color: mainColor, fontSize: '6px', opacity: 0.5, transform: 'translate(0.5px, 0.5px)'}}>TEXT</div><div className="absolute inset-0" style={{color: accentColors[0], fontSize: '6px', opacity: 0.5, transform: 'translate(-0.5px, -0.5px)'}}>TEXT</div></div>;
    // START OF NEW TECH TEXTURES
    case 'raw concrete': // Digital Brutalism
        return <div className="w-full h-full" style={{ background: `linear-gradient(45deg, ${mainColor}, ${accentColors[0]}), radial-gradient(circle, ${accentColors[1]}30 1px, transparent 1px)`, backgroundSize: '100%, 5px 5px', filter: 'contrast(1.5) saturate(0.5)' }} aria-label="Raw concrete texture" />;
    case 'exposed metal': // Digital Brutalism
        return <div className="w-full h-full" style={{ background: `linear-gradient(135deg, ${accentColors[0]}, ${mainColor}, ${accentColors[1]})`, filter: 'contrast(1.2) brightness(1.1)'}} aria-label="Exposed metal texture" />;
    case 'static noise': // Digital Brutalism
        return <div className="w-full h-full" style={{ background: `radial-gradient(${mainColor} 1px, transparent 0), radial-gradient(${accentColors[0]} 1px, transparent 0)`, backgroundSize: '3px 3px', backgroundPosition: '0 0, 1.5px 1.5px', backgroundColor: accentColors[2] || 'black' }} aria-label="Static noise texture" />;
    case 'pixelated screen': // Digital Brutalism
        return <div className="w-full h-full" style={{ background: `repeating-linear-gradient(0deg, ${mainColor}10, ${mainColor}10 1px, transparent 1px, transparent 2px), repeating-linear-gradient(90deg, ${accentColors[0]}10, ${accentColors[0]}10 1px, transparent 1px, transparent 2px)`, backgroundColor: accentColors[2] || 'black' }} aria-label="Pixelated screen texture" />;
    case 'smooth acrylic': // Glassmorphism
        return <div className="w-full h-full rounded" style={{ background: `linear-gradient(135deg, ${mainColor}50, ${accentColors[0]}40)`, filter: 'brightness(1.1)' }} aria-label="Smooth acrylic texture" />;
    case 'blurry background': // Glassmorphism
        return <div className="w-full h-full" style={{ background: `linear-gradient(45deg, ${accentColors[1]}, ${accentColors[2]})`, filter: 'blur(3px) opacity(0.7)' }} aria-label="Blurry background texture" />;
    case 'holographic foil': // Glassmorphism, Vaporwave
        return <div className="w-full h-full" style={{ background: `linear-gradient(135deg, ${mainColor}, ${accentColors[0]}, ${accentColors[1]}, ${accentColors[2]})`, backgroundSize: '200% 200%', animation: 'holoGradient 5s ease infinite', filter: 'brightness(1.2) contrast(1.1)' }} aria-label="Holographic foil texture" />;
    case 'glowing circuit': // Tech E-learning
        return <svg viewBox="0 0 20 10" className="w-full h-full" style={{backgroundColor: accentColors[2] || '#0F172A'}}><path d="M0,2 H5 V8 H10 M15,2 H10 V8 H5" stroke={mainColor} strokeWidth="0.5" fill="none" style={{filter: `drop-shadow(0 0 1px ${mainColor})`}} /><circle cx="5" cy="5" r="0.5" fill={accentColors[0]} style={{filter: `drop-shadow(0 0 1px ${accentColors[0]})`}} /><circle cx="10" cy="5" r="0.5" fill={accentColors[0]} style={{filter: `drop-shadow(0 0 1px ${accentColors[0]})`}} /></svg>;
    case 'digital mesh': // Tech E-learning
        return <div className="w-full h-full" style={{ backgroundSize: '8px 8px', backgroundImage: `linear-gradient(45deg, ${mainColor}50 0.5px, transparent 0.5px), linear-gradient(-45deg, ${mainColor}50 0.5px, transparent 0.5px)`, backgroundColor: accentColors[2] || '#0F172A' }} aria-label="Digital mesh texture" />;
    case 'plexus background': // Tech E-learning
        return <svg viewBox="0 0 20 10" className="w-full h-full" style={{backgroundColor: accentColors[2] || '#0F172A'}}><circle cx="3" cy="3" r="0.5" fill={mainColor} /><circle cx="8" cy="7" r="0.5" fill={mainColor} /><circle cx="15" cy="4" r="0.5" fill={mainColor} /><circle cx="18" cy="8" r="0.5" fill={mainColor} /><path d="M3,3 L8,7 L15,4 L18,8 M3,3 L15,4 M8,7 L18,8" stroke={accentColors[0]} strokeWidth="0.2" opacity="0.7" /></svg>;
    case 'holographic shimmer': // Tech E-learning
        return <div className="w-full h-full" style={{ background: `linear-gradient(45deg, ${mainColor}20, ${accentColors[0]}30, ${accentColors[1]}25)`, filter: 'brightness(1.3) contrast(1.2)', opacity: 0.7 }} aria-label="Holographic shimmer texture" />;
    case 'polished metal': // Tech E-learning
        return <div className="w-full h-full" style={{ background: `linear-gradient(135deg, ${mainColor}90, ${accentColors[0]}B0, ${mainColor}90)`, filter: 'contrast(1.1) brightness(1.05)' }} aria-label="Polished metal texture" />;
    case 'smooth matte': // AI Minimalism
        return <div className="w-full h-full" style={{ background: mainColor, filter: 'brightness(0.95)' }} aria-label="Smooth matte texture" />;
    case 'faint gradient': // AI Minimalism
        return <div className="w-full h-full" style={{ background: `linear-gradient(180deg, ${mainColor}05, ${accentColors[0]}03)` }} aria-label="Faint gradient texture" />;
    case 'soft glow': // AI Minimalism
        return <div className="w-full h-full" style={{ background: `radial-gradient(ellipse, ${mainColor}30, transparent 70%)`, filter: 'blur(1px)' }} aria-label="Soft glow texture" />;
    case 'brushed aluminum': // AI Minimalism
        return <div className="w-full h-full" style={{ background: `linear-gradient(0deg, ${mainColor}E0, ${accentColors[0]}C0), repeating-linear-gradient(90deg, transparent, transparent 1px, #FFFFFF30 1px, #FFFFFF30 2px)` }} aria-label="Brushed aluminum texture" />;
    case 'cybernetic metal': // Cyberpunk
        return <div className="w-full h-full" style={{ background: `linear-gradient(45deg, ${mainColor}99, ${accentColors[0]}77, ${accentColors[1]}88), repeating-linear-gradient(0deg, #FFFFFF1A 1px, transparent 2px)` }} aria-label="Cybernetic metal texture" />;
    case 'static glitch': // Cyberpunk
        return <div className="w-full h-full relative overflow-hidden" style={{backgroundColor: accentColors[2] || '#0A0A0F'}}><div className="absolute w-full h-px top-1/3" style={{background: mainColor, animation: 'glitchLine1 0.1s steps(2, end) infinite'}} /><div className="absolute w-full h-px top-2/3" style={{background: accentColors[0], animation: 'glitchLine2 0.15s steps(2, end) infinite reverse'}} /></div>;
    case 'wet asphalt': // Cyberpunk
        return <div className="w-full h-full" style={{ background: `linear-gradient(0deg, ${mainColor}1A, ${accentColors[2] || '#0A0A0F'}), radial-gradient(ellipse at 70% 80%, ${accentColors[0]}30, transparent 50%)` }} aria-label="Wet asphalt texture" />;
    case 'carbon fiber': // Cyberpunk
        return <div className="w-full h-full" style={{ backgroundSize: '8px 8px', backgroundImage: `linear-gradient(45deg, ${mainColor} 25%, transparent 25%, transparent 75%, ${mainColor} 75%, ${mainColor}), linear-gradient(45deg, ${mainColor} 25%, transparent 25%, transparent 75%, ${mainColor} 75%, ${mainColor})`, backgroundPosition: '0 0, 4px 4px', backgroundColor: accentColors[2] || '#0A0A0F' }} aria-label="Carbon fiber texture" />;
    case 'soft matte plastic': // Neo-Pastel
        return <div className="w-full h-full rounded" style={{ background: mainColor, filter: 'brightness(0.9) contrast(1.1)' }} aria-label="Soft matte plastic texture" />;
    case 'gummy texture': // Neo-Pastel
        return <div className="w-full h-full rounded" style={{ background: `linear-gradient(135deg, ${mainColor}80, ${accentColors[0]}70)`, filter: 'blur(0.3px) brightness(1.1)', opacity: 0.9 }} aria-label="Gummy texture" />;
    case 'powdered sugar': // Neo-Pastel
        return <div className="w-full h-full" style={{ background: `radial-gradient(circle, ${mainColor}10 0.5px, transparent 0.5px), radial-gradient(circle, ${accentColors[0]}08 0.5px, transparent 0.5px)`, backgroundSize: '5px 5px, 5px 5px', backgroundPosition: '0 0, 2.5px 2.5px', backgroundColor: accentColors[3] || '#FFFBF2' }} aria-label="Powdered sugar texture" />;
    case 'smooth clay': // Neo-Pastel
        return <div className="w-full h-full rounded" style={{ background: `linear-gradient(20deg, ${mainColor}, ${accentColors[1]})`, filter: 'saturate(0.85)' }} aria-label="Smooth clay texture" />;
    case 'iridescent film': // Neo-Pastel
        return <div className="w-full h-full" style={{ background: `linear-gradient(60deg, ${mainColor}30, ${accentColors[0]}40, ${accentColors[1]}35, ${accentColors[2]}40)`, filter: 'brightness(1.2) contrast(1.1) saturate(1.2)', opacity:0.8 }} aria-label="Iridescent film texture" />;
    // END OF NEW TECH TEXTURES
    // START OF NEW MAXIMALIST TEXTURES
    // 'velvet' already defined for Dark Academia
    case 'faux fur':
        return <svg viewBox="0 0 20 10" className="w-full h-full" style={{backgroundColor: accentColors[3] || '#F0F0F0'}}><path d="M0,1 C2,0 3,1 5,1 S7,0 9,1 S11,0 13,1 S15,0 17,1 S19,0 20,1 M0,3 C2,2 3,3 5,3 S7,2 9,3 S11,2 13,3 S15,2 17,3 S19,2 20,3 M0,5 C2,4 3,5 5,5 S7,4 9,5 S11,4 13,5 S15,4 17,5 S19,4 20,5 M0,7 C2,6 3,7 5,7 S7,6 9,7 S11,6 13,7 S15,6 17,7 S19,6 20,7 M0,9 C2,8 3,9 5,9 S7,8 9,9 S11,8 13,9 S15,8 17,9 S19,8 20,9" stroke={mainColor} strokeWidth="0.5" fill="none" opacity="0.7" /></svg>;
    case 'glitter':
        return <div className="w-full h-full" style={{ background: `radial-gradient(${mainColor} 1px, transparent 0), radial-gradient(${accentColors[0]} 1px, transparent 0), radial-gradient(${accentColors[1]} 1px, transparent 0)`, backgroundSize: '4px 4px', backgroundPosition: `0 0, 1px 2px, 2px 0`, backgroundColor: accentColors[2] || 'black' }} aria-label="Glitter texture" />;
    case 'brocade':
        return <svg viewBox="0 0 20 10" className="w-full h-full" style={{backgroundColor: mainColor}}><path d="M0,5 Q2.5,0 5,5 T10,5 T15,5 T20,5 M0,8 Q2.5,3 5,8 T10,8 T15,8 T20,8" stroke={accentColors[0]} strokeWidth="0.5" fill="none" opacity="0.6" /><circle cx="7" cy="3" r="0.5" fill={accentColors[1]} /><circle cx="13" cy="7" r="0.5" fill={accentColors[1]} /></svg>;
    case 'mixed media collage':
        return <div className="w-full h-full relative"><div className="absolute w-2/3 h-2/3 top-0 left-0" style={{background: `linear-gradient(45deg, ${mainColor}, ${accentColors[0]})`}} /><div className="absolute w-1/2 h-1/2 bottom-0 right-0" style={{background: `repeating-linear-gradient(0deg, ${accentColors[1]}, ${accentColors[1]} 1px, ${accentColors[2]} 1px, ${accentColors[2]} 2px)`}} /><div className="absolute w-1/3 h-1/3 top-1/3 left-1/3 rounded-full" style={{background: accentColors[3] || 'white', opacity:0.5}} /></div>;
    case 'shiny plastic': // Dopamine Brights
        return <div className="w-full h-full rounded" style={{ background: `linear-gradient(135deg, ${mainColor}, ${accentColors[0]})`, filter: 'brightness(1.2) contrast(1.1)', boxShadow: 'inset 1px 1px 2px #FFFFFF80' }} aria-label="Shiny plastic texture" />;
    // 'gummy texture' already defined for Neo-Pastel
    case 'smooth gloss': // Dopamine Brights
        return <div className="w-full h-full rounded" style={{ background: mainColor, boxShadow: `inset -2px -2px 5px ${accentColors[0]}50, inset 2px 2px 5px #FFFFFF80` }} aria-label="Smooth gloss texture" />;
    case 'sparkle': // Dopamine Brights
        return <div className="w-full h-full relative" style={{backgroundColor: mainColor}}><div className="absolute top-1 left-2 w-0.5 h-0.5 bg-white rotate-45 transform scale-150 animate-pulse" /><div className="absolute top-3 right-1 w-px h-px bg-white transform scale-125 animate-pulse animation-delay-100" /><div className="absolute bottom-2 left-1 w-0.5 h-0.5 bg-white rotate-12 transform scale-100 animate-pulse animation-delay-200" /></div>;
    case 'vibrant gradient': // Dopamine Brights
        return <div className="w-full h-full" style={{ background: `linear-gradient(60deg, ${mainColor}, ${accentColors[0]}, ${accentColors[1]}, ${accentColors[2]})`, backgroundSize: '300% 300%', animation: 'gradient 6s ease infinite' }} aria-label="Vibrant gradient texture" />;
    // 'holographic foil' already defined for Glassmorphism
    case 'CRT screen noise': // Vaporwave
        return <div className="w-full h-full" style={{ background: `linear-gradient(${mainColor}05, ${accentColors[0]}03), repeating-linear-gradient(0deg, #FFFFFF0A 1px, transparent 1px, transparent 3px), url("data:image/svg+xml,%3Csvg width='3' height='3' viewBox='0 0 3 3' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='1' height='1' fill='%23${(accentColors[1]||'FFFFFF').substring(1)}0D'/%3E%3C/svg%3E")` }} aria-label="CRT screen noise texture" />;
    case 'polished chrome': // Vaporwave
        return <div className="w-full h-full" style={{ background: `linear-gradient(135deg, #AAAAAA, #FFFFFF, #AAAAAA, ${mainColor}30, #FFFFFF, #AAAAAA)`, filter: 'contrast(1.5) brightness(1.1)' }} aria-label="Polished chrome texture" />;
    case 'grainy VHS': // Vaporwave
        return <div className="w-full h-full" style={{ background: `linear-gradient(${mainColor}1A, ${accentColors[0]}10), url("data:image/svg+xml,%3Csvg width='40' height='30' viewBox='0 0 40 30' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='30' fill='transparent'/%3E%3Cpath d='M0 5h40M0 10h40M0 15h40M0 20h40M0 25h40' stroke='%23${(accentColors[1]||'000000').substring(1)}' stroke-width='0.2' stroke-opacity='0.05'/%3E%3Cpath d='M5 0v30M10 0v30M15 0v30M20 0v30M25 0v30M30 0v30M35 0v30' stroke='%23${(accentColors[1]||'000000').substring(1)}' stroke-width='0.2' stroke-opacity='0.03'/%3E%3C/svg%3E")`, filter: 'saturate(0.7) contrast(1.1) blur(0.2px)' }} aria-label="Grainy VHS texture" />;
    // END OF NEW MAXIMALIST TEXTURES
    // START OF NEW FEMININE TEXTURES
    case 'soft silk':
        return <div className="w-full h-full" style={{ background: `linear-gradient(135deg, ${mainColor}90, ${accentColors[0]}B0, white, ${accentColors[1]}A0)`, filter: 'brightness(1.1)'}} aria-label="Soft silk texture" />;
    case 'sheer tulle':
        return <div className="w-full h-full" style={{ background: `radial-gradient(circle, ${mainColor}10, transparent 60%), radial-gradient(circle, ${accentColors[0]}08, transparent 50%)`, backgroundColor: accentColors[2] || '#FCF8F9', filter: 'blur(0.2px)', opacity:0.8 }} aria-label="Sheer tulle texture" />;
    case 'smooth pearl':
        return <div className="w-full h-full rounded-full" style={{ background: `radial-gradient(circle at 30% 30%, white, ${mainColor}A0, ${accentColors[0]}80)`, filter: 'brightness(1.15) contrast(1.05)'}} aria-label="Smooth pearl texture" />;
    case 'brushed satin':
        return <div className="w-full h-full" style={{ background: `linear-gradient(0deg, ${mainColor}, ${accentColors[0]}), repeating-linear-gradient(90deg, transparent, transparent 1px, #FFFFFF20 1px, #FFFFFF20 2px)` }} aria-label="Brushed satin texture" />;
    case 'feather light':
        return <svg viewBox="0 0 20 10" className="w-full h-full" style={{backgroundColor: accentColors[2] || '#FCF8F9'}}><path d="M2,5 Q10,1 18,5 M2,7 Q10,3 18,7 M5,5 Q10,8 15,5" stroke={mainColor} strokeWidth="0.3" fill="none" opacity="0.6" /></svg>;
    case 'soft lace':
        return <svg viewBox="0 0 20 10" className="w-full h-full" style={{backgroundColor: accentColors[2] || '#FFF9FB'}}><path d="M0,5 Q2.5,2.5 5,5 T10,5 T15,5 T20,5 M0,7 Q2.5,4.5 5,7 T10,7 T15,7 T20,7" stroke={mainColor} strokeWidth="0.5" fill="none" opacity="0.7" /><circle cx="5" cy="5" r="0.5" fill={accentColors[0]} opacity="0.5"/><circle cx="10" cy="5" r="0.5" fill={accentColors[0]} opacity="0.5"/><circle cx="15" cy="5" r="0.5" fill={accentColors[0]} opacity="0.5"/></svg>;
    case 'smooth satin':
        return <div className="w-full h-full" style={{ background: `linear-gradient(135deg, ${mainColor}, ${accentColors[0]})`, filter: 'brightness(1.2) contrast(0.9)'}} aria-label="Smooth satin texture" />;
    case 'velvet ribbon':
        return <div className="w-full h-full" style={{ background: mainColor, boxShadow: `inset 0 0 3px ${accentColors[0] || '#00000030'}`}} aria-label="Velvet ribbon texture" />;
    case 'mother of pearl':
        return <div className="w-full h-full" style={{ background: `linear-gradient(60deg, ${mainColor}50, ${accentColors[0]}60, ${accentColors[1]}55, ${accentColors[2]}60)`, filter: 'brightness(1.1) saturate(0.8) contrast(1.2)' }} aria-label="Mother of pearl texture" />;
    case 'antique paper': // Similar to aged paper
        return <div className="w-full h-full" style={{ background: `linear-gradient(to bottom, ${mainColor}20, ${accentColors[0]}30, ${mainColor}25), repeating-linear-gradient(0deg, transparent, transparent 6px, #0000000A 7px, transparent 8px)`, filter: 'sepia(0.15) contrast(0.95) brightness(1.02)' }} aria-label="Antique paper texture" />;
    case 'worn linen': // Cottagecore
        return <div className="w-full h-full" style={{ background: `${accentColors[1] || '#FBF7F0'}`, backgroundImage: `repeating-linear-gradient(0deg, ${mainColor}2A, ${mainColor}2A 1px, transparent 1px, transparent 4px), repeating-linear-gradient(90deg, ${mainColor}2A, ${mainColor}2A 1px, transparent 1px, transparent 4px)` }} aria-label="Worn linen texture" />;
    case 'pressed flowers': // Cottagecore - visual representation
        return <svg viewBox="0 0 20 10" className="w-full h-full" style={{backgroundColor: accentColors[1] || '#FBF7F0'}}><g opacity="0.5" transform="rotate(15 10 5)"><path d="M3,3 A1,1 0 1,1 -1,3 A1,1 0 0,1 3,3" fill={mainColor} transform="translate(5 2)"/><path d="M3,3 A1,1 0 1,1 -1,3 A1,1 0 0,1 3,3" fill={accentColors[0]} transform="translate(12 5) scale(0.8)"/></g></svg>;
    case 'knitted wool': // Cottagecore
        return <svg viewBox="0 0 20 10" className="w-full h-full" aria-label="Knitted wool texture"><path d="M0,1 L2.5,3 L0,5 M5,1 L2.5,3 L5,5 M5,1 L7.5,3 L5,5 M10,1 L7.5,3 L10,5 M10,1 L12.5,3 L15,1 M15,5 L12.5,3 L15,1 M15,5 L17.5,3 L20,1 M20,5 L17.5,3 L20,1 M0,6 L2.5,8 L0,10 M5,6 L2.5,8 L5,10 M5,6 L7.5,8 L5,10 M10,6 L7.5,8 L10,10 M10,6 L12.5,8 L15,6 M15,10 L12.5,8 L15,6 M15,10 L17.5,8 L20,6 M20,10 L17.5,8 L20,6" stroke={mainColor} strokeWidth="0.7" fill="none" /></svg>;
    // END OF NEW FEMININE TEXTURES
    // START OF NEW CULTURAL TEXTURES
    case 'polished tadelakt': // Moroccan
        return <div className="w-full h-full" style={{ background: `linear-gradient(135deg, ${mainColor}E0, ${accentColors[0]}C0)`, filter: 'brightness(1.05) contrast(1.05)', boxShadow: 'inset 0px 0px 10px #00000010' }} aria-label="Polished tadelakt texture" />;
    case 'heavy silk': // Moroccan
        return <div className="w-full h-full" style={{ background: `linear-gradient(45deg, ${mainColor}, ${accentColors[0]}), repeating-linear-gradient(90deg, transparent, transparent 2px, #FFFFFF1A 2px, #FFFFFF1A 3px)`, filter: 'brightness(1.1)' }} aria-label="Heavy silk texture" />;
    // 'carved cedarwood' -> use 'carved wood'
    case 'beaten brass': // Moroccan
        return <div className="w-full h-full" style={{ background: `radial-gradient(ellipse, ${accentColors[0]}, ${mainColor} 150%), repeating-radial-gradient(circle, #FFFFFF1A 1px, transparent 2px)`, backgroundSize: '100%, 5px 5px', filter: 'contrast(1.3) brightness(1.2)' }} aria-label="Beaten brass texture" />;
    case 'glazed tile': // Moroccan
        return <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-px" style={{backgroundColor: accentColors[1]}}><div style={{backgroundColor: mainColor, opacity:0.9}}/><div style={{backgroundColor: accentColors[0], opacity:0.8}}/><div style={{backgroundColor: accentColors[2] || accentColors[0], opacity:0.85}}/><div style={{backgroundColor: mainColor, opacity:0.95}}/></div>;
    case 'painted wood': // Scandinavian
        return <div className="w-full h-full" style={{ background: `repeating-linear-gradient(90deg, ${mainColor}E0, ${mainColor}E0 5px, ${accentColors[0]}D0 5px, ${accentColors[0]}D0 6px)`, filter: 'brightness(1.05)' }} aria-label="Painted wood texture" />;
    case 'linen': // Scandinavian - similar to raw linen
        return <div className="w-full h-full" style={{ background: `${accentColors[2] || '#F5F5F5'}`, backgroundImage: `repeating-linear-gradient(0deg, ${mainColor}10, ${mainColor}10 1px, transparent 1px, transparent 2px), repeating-linear-gradient(90deg, ${mainColor}10, ${mainColor}10 1px, transparent 1px, transparent 2px)` }} aria-label="Linen texture" />;
    case 'simple ceramic': // Scandinavian
        return <div className="w-full h-full" style={{ background: mainColor, filter: 'brightness(0.9) contrast(1.1)', boxShadow: 'inset 1px 1px 1px #FFFFFF30' }} aria-label="Simple ceramic texture" />;
    case 'handloom cotton': // Indian
        return <div className="w-full h-full" style={{ background: `${accentColors[2] || '#FDFDEA'}`, backgroundImage: `repeating-linear-gradient(0deg, ${mainColor}22, ${mainColor}22 0.5px, transparent 0.5px, transparent 2px), repeating-linear-gradient(90deg, ${mainColor}22, ${mainColor}22 0.5px, transparent 0.5px, transparent 2px)` }} aria-label="Handloom cotton texture" />;
    case 'raw silk': // Indian
        return <div className="w-full h-full" style={{ background: `linear-gradient(45deg, ${mainColor}80, ${accentColors[0]}70), repeating-linear-gradient(135deg, transparent, transparent 3px, #FFFFFF18 3px, #FFFFFF18 4px)` }} aria-label="Raw silk texture" />;
    case 'terracotta': // Indian
        return <div className="w-full h-full" style={{ background: `linear-gradient(135deg, ${mainColor}, ${accentColors[0]}), radial-gradient(circle, #FFFFFF1A 1px, transparent 1px)`, backgroundSize: '100%, 3px 3px', filter: 'saturate(0.8) brightness(0.95)' }} aria-label="Terracotta texture" />;
    case 'beaten metal (brass/copper)': // Indian
        return <div className="w-full h-full" style={{ background: `radial-gradient(ellipse, ${accentColors[1] || mainColor}, ${mainColor} 130%), repeating-radial-gradient(circle, #0000001A 0.5px, transparent 1px)`, backgroundSize: '100%, 4px 4px', filter: 'contrast(1.2) brightness(1.1)' }} aria-label="Beaten metal (brass/copper) texture" />;
    // END OF NEW CULTURAL TEXTURES
    // START OF NEW CLEAN/MINIMAL TEXTURES
    case 'nubby textile': // Midcentury
        return <div className="w-full h-full" style={{ background: `${accentColors[2] || '#FAF0E6'}`, backgroundImage: `repeating-linear-gradient(45deg, ${mainColor}33 0.5px, transparent 0.5px, transparent 2.5px), repeating-linear-gradient(-45deg, ${mainColor}33 0.5px, transparent 0.5px, transparent 2.5px)` }} aria-label="Nubby textile texture" />;
    case 'formica': // Midcentury
        return <div className="w-full h-full" style={{ background: `linear-gradient(135deg, ${mainColor}E0, ${accentColors[0]}D0)`, boxShadow: 'inset 0 0 5px #FFFFFF40' }} aria-label="Formica texture" />;
    case 'brushed brass': // Midcentury
        return <div className="w-full h-full" style={{ background: `linear-gradient(0deg, ${accentColors[1] || '#F7B538'}, #A17A0A), repeating-linear-gradient(90deg, transparent, transparent 1px, #FFFFFF20 1px, #FFFFFF20 1.5px)` }} aria-label="Brushed brass texture" />;
    case 'vintage linoleum': // Midcentury
        return <div className="w-full h-full" style={{ background: `${mainColor}50, radial-gradient(${accentColors[0]}20 1px, transparent 1px), radial-gradient(${accentColors[1]}15 1px, transparent 1px)`, backgroundSize: '100%, 8px 8px, 8px 8px', backgroundPosition: '0 0, 0 0, 4px 4px' }} aria-label="Vintage linoleum texture" />;
    case 'soft snow': // Nordic Winter
        return <div className="w-full h-full" style={{ background: `radial-gradient(ellipse at 50% 70%, ${accentColors[1] || 'white'}, ${mainColor} 200%)`, filter: 'blur(0.5px)' }} aria-label="Soft snow texture" />;
    case 'light pine wood': // Nordic Winter
        return <div className="w-full h-full" style={{ backgroundImage: `repeating-linear-gradient(90deg, ${mainColor}0D, ${mainColor}0D 2px, transparent 2px, transparent 8px), repeating-linear-gradient(90deg, ${accentColors[0]}0A, ${accentColors[0]}0A 1px, transparent 1px, transparent 12px)`, backgroundPosition: '0 0, 0 4px', backgroundColor: accentColors[1] || '#F8FAFC' }} aria-label="Light pine wood texture" />;
    case 'wool knit': // Nordic Winter
        return <svg viewBox="0 0 20 10" className="w-full h-full" style={{backgroundColor: accentColors[1] || '#F8FAFC'}}><path d="M0,1 L2,3 L0,5 M4,1 L2,3 L4,5 M4,1 L6,3 L8,1 M8,5 L6,3 L8,1 M8,5 L10,3 L12,1 M12,5 L10,3 L12,1 M12,5 L14,3 L16,1 M16,5 L14,3 L16,1 M16,5 L18,3 L20,1 M20,5 L18,3 L20,1 M0,6 L2,8 L0,10 M4,6 L2,8 L4,10 M4,6 L6,8 L8,6 M8,10 L6,8 L8,6 M8,10 L10,8 L12,6 M12,10 L10,8 L12,6 M12,10 L14,8 L16,6 M16,10 L14,8 L16,6 M16,10 L18,8 L20,6 M20,10 L18,8 L20,6" stroke={mainColor} strokeWidth="0.4" fill="none" opacity="0.7" /></svg>;
    case 'cold stone': // Nordic Winter
        return <div className="w-full h-full" style={{ background: `linear-gradient(135deg, ${mainColor}A0, ${accentColors[0]}90), radial-gradient(circle, ${accentColors[1]}10 1px, transparent 1px)`, backgroundSize: '100%, 6px 6px', filter: 'saturate(0.7) contrast(1.1)' }} aria-label="Cold stone texture" />;
    // 'frosted glass' already defined
    case 'brushed aluminum': // Tactile UI - already defined for AI Minimalism, slightly different color usage
        return <div className="w-full h-full" style={{ background: `linear-gradient(0deg, ${mainColor}E0, ${accentColors[0]}C0), repeating-linear-gradient(90deg, transparent, transparent 0.5px, #FFFFFF28 0.5px, #FFFFFF28 1px)` }} aria-label="Brushed aluminum texture" />;
    case 'soft matte plastic': // Tactile UI - already defined for Neo-Pastel
        return <div className="w-full h-full rounded" style={{ background: mainColor, filter: 'brightness(0.9) contrast(1.1)' }} aria-label="Soft matte plastic texture" />;
    case 'velvet touch': // Tactile UI
        return <div className="w-full h-full" style={{ background: `radial-gradient(ellipse at 80% 20%, ${mainColor}, ${accentColors[0]} 160%)`, filter: 'brightness(0.85) contrast(1.15)' }} aria-label="Velvet touch texture" />;
    case 'polished stone': // Tactile UI
        return <svg viewBox="0 0 20 10" className="w-full h-full" aria-label="Polished stone texture" style={{backgroundColor: mainColor}}><path d="M0,3 C2,1 5,4 7,2 S13,5 15,3 S18,6 20,4 M0,7 C3,9 6,6 9,8 S14,5 17,8" stroke={accentColors[0]} strokeWidth="0.2" fill="none" opacity="0.6" /><rect width="20" height="10" fill={`url(#polyNoise${theme})`} opacity="0.05" /><defs><pattern id={`polyNoise${theme}`} width=".05" height=".05" patternContentUnits="objectBoundingBox"><rect width="1" height="1" fill="#fff" /><path d="M0 1L1 0M-0.5 0.5L0.5 -0.5M0.5 1.5L1.5 0.5" stroke="#000" strokeWidth=".01" /></pattern></defs></svg>;
    case 'flat color': // Swiss Modernism
        return <div className="w-full h-full" style={{ background: mainColor }} aria-label="Flat color texture" />;
    case 'smooth paper': // Swiss Modernism
        return <div className="w-full h-full" style={{ background: accentColors[1] || 'white', filter: 'brightness(0.98)' }} aria-label="Smooth paper texture" />;
    case 'matte finish': // Swiss Modernism, Soft Brutalism
        return <div className="w-full h-full" style={{ background: mainColor, filter: 'brightness(0.9)' }} aria-label="Matte finish texture" />;
    case 'no texture': // Swiss Modernism
        return <div className="w-full h-full" style={{ background: mainColor }} aria-label="No texture" />;
    case 'clean surface': // Swiss Modernism
        return <div className="w-full h-full" style={{ background: accentColors[1] || 'white' }} aria-label="Clean surface texture" />;
    case 'polished concrete': // Soft Brutalism
        return <div className="w-full h-full" style={{ background: `linear-gradient(135deg, ${mainColor}, ${accentColors[0]}), radial-gradient(circle at 30% 40%, #FFFFFF0A 1px, transparent 1px)`, backgroundSize: '100%, 4px 4px', filter: 'brightness(1.05)' }} aria-label="Polished concrete texture" />;
    case 'sandblasted surface': // Soft Brutalism
        return <div className="w-full h-full" style={{ background: mainColor, backgroundImage: `url("data:image/svg+xml,%3Csvg width='3' height='3' viewBox='0 0 3 3' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='1' height='1' fill='%23${(accentColors[0]||'000000').substring(1)}0A'/%3E%3C/svg%3E")` }} aria-label="Sandblasted surface texture" />;
    case 'lightly textured plaster': // Soft Brutalism
        return <div className="w-full h-full" style={{ background: mainColor, backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")` }} aria-label="Lightly textured plaster texture" />;
    // END OF NEW CLEAN/MINIMAL TEXTURES
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
          <rect x="6" y="6" width="4" height="4" fill={accentColors[0] || 'white'} opacity="0.2" />
          <rect x="14" y="6" width="4" height="4" fill={accentColors[0] || 'white'} opacity="0.2" />
          <rect x="10" y="7" width="4" height="2" fill={accentColors[1] || mainColor} opacity="0.8" />
        </svg>
      );
    // START OF NEW ILLUSTRATION EXAMPLES
    case 'solarpunk city': // Art Nouveau Solarpunk
        return <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Solarpunk city illustration"><path d="M2,14 L6,10 L10,14 L14,10 L18,14 V6 Q14,2 10,6 Q6,2 2,6Z" fill={mainColor} opacity="0.7" /><path d="M4,6 Q10,0 16,6" stroke={accentColors[0]} strokeWidth="1" fill="none" /><circle cx="10" cy="4" r="1" fill={accentColors[1] || 'yellow'} /></svg>;
    case 'hand drawn botanicals': // Organic & Health
        return <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Hand drawn botanicals illustration"><path d="M6,14 V5 Q4,2 6,2 M10,14 V3 Q12,1 10,1 M14,14 V5 Q16,2 14,2" stroke={mainColor} strokeWidth="1" fill="none" strokeLinecap="round"/><circle cx="6" cy="3" r="1" fill={accentColors[0]}/><circle cx="10" cy="2" r="1" fill={accentColors[1]}/><circle cx="14" cy="3" r="1" fill={accentColors[0]}/></svg>;
    case 'wellness symbols': // Organic & Health
        return <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Wellness symbols illustration"><path d="M4,8 L8,12 L12,8 M8,6 Q10,3 12,6" stroke={mainColor} strokeWidth="1" fill="none"/><circle cx="16" cy="10" r="3" fill={accentColors[0]} opacity="0.6"/><path d="M16,7 L16,13 M13,10 L19,10" stroke={accentColors[1] || 'white'} strokeWidth="0.5"/></svg>;
    case 'nature scenes': // Organic & Health
        return <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Nature scenes illustration"><path d="M2,14 H22 L12,4 Z" fill={mainColor} opacity="0.5"/><circle cx="16" cy="6" r="2" fill={accentColors[0]}/><path d="M5,14 Q8,10 10,14 Q12,10 15,14" stroke={accentColors[1] || mainColor} strokeWidth="0.5" fill="none"/></svg>;
    case 'detailed botanical sketch': // Biophilia
        return <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Detailed botanical sketch illustration"><path d="M12,15 V3 M12,8 L6,4 M12,8 L18,4 M10,12 Q12,10 14,12 M8,5 Q12,2 16,5" stroke={mainColor} strokeWidth="0.5" fill="none"/><circle cx="12" cy="2" r="1" fill={accentColors[0]} opacity="0.7"/><path d="M12,15 A3,2 0 0,0 9,14 A3,2 0 0,0 12,15 A3,2 0 0,0 15,14 A3,2 0 0,0 12,15" fill={accentColors[1] || mainColor} opacity="0.3"/></svg>;
    case 'hand drawn nature elements': // Biophilia
        return <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Hand drawn nature elements"><path d="M4,4 Q8,8 4,12 M10,3 L12,8 L10,13 M18,5 Q15,10 18,15" stroke={mainColor} strokeWidth="1" fill="none" strokeLinecap="round" strokeDasharray="1 1"/><circle cx="7" cy="3" r="1" fill={accentColors[0]}/><rect x="14" y="10" width="2" height="2" fill={accentColors[1]} rx="0.5"/></svg>;
    case 'biophilic patterns': // Biophilia
        return <div className="w-full h-full" style={{ backgroundSize: '10px 10px', backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 5 Q2.5 2.5 5 5 T10 5' stroke='${mainColor}' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`, backgroundColor: accentColors[2] || '#F4F8F0'}} aria-label="Biophilic patterns"/>;
    case 'ink drawings': // Biophilia
        return <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Ink drawings illustration"><path d="M5,14 C10,4 15,14 20,4" stroke={mainColor} strokeWidth="1.5" fill="none" strokeLinecap="round"/><path d="M3,10 C8,18 12,2 18,10" stroke={accentColors[0] || mainColor} strokeWidth="0.5" fill="none" strokeDasharray="2 2" opacity="0.7"/></svg>;
    case 'folk art scene': // Folk Digital Revival
        return <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Folk art scene illustration"><rect x="2" y="10" width="20" height="4" fill={accentColors[2] || '#FAF5F0'}/><path d="M4,10 L8,6 L12,10 M10,6 L14,2 L18,6 L14,10Z" fill={mainColor}/><circle cx="16" cy="4" r="1.5" fill={accentColors[0]}/><path d="M6,12 L6,14 M10,12 L10,14 M14,12 L14,14" stroke={accentColors[1]} strokeWidth="0.5"/></svg>;
    case 'traditional storytelling': // Folk Digital Revival
        return <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Traditional storytelling illustration"><rect x="3" y="3" width="18" height="10" fill={accentColors[2] || '#FAF5F0'} stroke={mainColor} strokeWidth="0.5"/><text x="5" y="10" fontSize="4" fontFamily="serif" fill={mainColor}>Once...</text><path d="M15,5 L18,8 L15,11" stroke={accentColors[0]} fill="none" strokeWidth="1"/></svg>;
    case 'handcrafted characters': // Folk Digital Revival
        return <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Handcrafted characters illustration"><circle cx="6" cy="6" r="2" fill={mainColor}/><rect x="5" y="8" width="2" height="5" fill={mainColor}/><path d="M4,13 L8,13 M3,10 L5,8 M7,10 L9,8" stroke={mainColor} strokeWidth="1"/><circle cx="16" cy="7" r="2.5" fill={accentColors[0]}/><rect x="15" y="9.5" width="2" height="4" fill={accentColors[0]}/><path d="M14,12 L18,12" stroke={accentColors[0]} strokeWidth="1"/></svg>;
    case 'nature motifs': // Folk Digital Revival
        return <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Nature motifs illustration"><path d="M5,12 Q10,2 15,12 L10,15Z" fill={mainColor}/><path d="M18,4 Q14,8 18,12 L16,8Z" fill={accentColors[0]}/></svg>;
    case 'handmade crafts': // Digital Craftcore
        return <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Handmade crafts illustration"><rect x="2" y="5" width="6" height="6" rx="1" fill={mainColor} /><path d="M10,3 L12,8 L10,13 M14,3 L16,8 L14,13" stroke={accentColors[0]} strokeWidth="1"/><ellipse cx="18" cy="9" rx="3" ry="4" fill={accentColors[1]}/></svg>;
    case 'artisanal tools': // Digital Craftcore
        return <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Artisanal tools illustration"><path d="M4,2 L4,14 L8,10 M16,2 L16,14 L12,10" stroke={mainColor} strokeWidth="1.5" fill="none"/><rect x="9" y="5" width="2" height="6" fill={accentColors[0]}/><circle cx="10" cy="3" r="1" fill={accentColors[1]}/></svg>;
    case 'cozy home scene': // Digital Craftcore
        return <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Cozy home scene illustration"><path d="M2,14 H22 V8 L12,2 L2,8Z" fill={mainColor} opacity="0.6"/><rect x="8" y="10" width="8" height="4" fill={accentColors[0]}/><circle cx="18" cy="5" r="1" fill={accentColors[1] || 'yellow'}/></svg>;
    case 'crafting process': // Digital Craftcore
        return <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Crafting process illustration"><path d="M2,8 H8 L10,4 M12,12 L14,8 H20" stroke={mainColor} strokeWidth="1.5" fill="none"/><circle cx="11" cy="6" r="1.5" fill={accentColors[0]}/><rect x="15" y="10" width="3" height="3" fill={accentColors[1]} rx="0.5"/></svg>;
    // END OF NEW ECO ILLUSTRATION EXAMPLES
    // START OF NEW EDITORIAL ILLUSTRATION EXAMPLES
    case 'classical statue': // Dark Academia
        return <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Classical statue illustration"><path d="M10,2 C8,4 8,8 10,9 M10,9 C12,8 12,4 10,2 M10,9 V14 M8,14 H12 M7,14 L6,16 M13,14 L14,16" stroke={mainColor} strokeWidth="1" fill="none"/><rect x="7" y="13.5" width="6" height="2" fill={accentColors[0] || mainColor} opacity="0.7"/></svg>;
    case 'academic sketch': // Dark Academia
        return <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Academic sketch illustration"><path d="M4,12 C8,4 12,14 16,6 M6,4 L18,12" stroke={mainColor} strokeWidth="0.5" fill="none" strokeDasharray="2 1"/><circle cx="10" cy="10" r="3" stroke={accentColors[0]} strokeWidth="0.5" fill="none"/></svg>;
    case 'gothic window': // Dark Academia
        return <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Gothic window illustration"><path d="M6,14 V4 Q12,1 18,4 V14 Z M12,14 V2 M9,14 L9,4 M15,14 L15,4" stroke={mainColor} strokeWidth="1" fill={accentColors[0] || 'none'} opacity="0.8"/></svg>;
    case 'library interior': // Dark Academia
        return <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Library interior illustration"><path d="M2,2 L8,5 V15 L2,12Z M10,5 L16,2 L22,5 V12 L16,15Z" fill={mainColor} opacity="0.6"/><path d="M9,6 H15 M9,8 H15 M9,10 H15 M9,12 H15" stroke={accentColors[0]} strokeWidth="0.5"/></svg>;
    case 'scientific drawing': // Dark Academia
        return <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Scientific drawing illustration"><circle cx="8" cy="8" r="4" stroke={mainColor} strokeWidth="0.5" fill="none"/><path d="M8,8 L16,4 M8,8 L16,12 M12,6 L18,6 M12,10 L18,10" stroke={accentColors[0] || mainColor} strokeWidth="0.5" fill="none"/><text x="15" y="15" fontSize="3" fill={mainColor}>Fig.1</text></svg>;
    case 'medieval scene': // Castlecore
        return <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Medieval scene illustration"><path d="M2,14 H22 L18,10 H6Z M8,10 L10,4 L14,4 L16,10" fill={mainColor}/><circle cx="18" cy="3" r="1" fill={accentColors[0]}/><path d="M5,12 L7,10 M17,12 L19,10" stroke={accentColors[1]} strokeWidth="0.5"/></svg>;
    case 'gothic knight': // Castlecore
        return <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Gothic knight illustration"><path d="M10,2 L14,2 L16,6 L10,15 L4,6Z M10,6 H14" fill={mainColor} stroke={accentColors[0]} strokeWidth="0.5"/><path d="M8,15 H12 M6,6 L8,8 M14,6 L12,8" stroke={accentColors[1]} strokeWidth="1"/></svg>;
    case 'illuminated manuscript page': // Castlecore
        return <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Illuminated manuscript page"><rect x="2" y="2" width="20" height="12" fill={accentColors[2] || '#F0E8DC'} stroke={mainColor} strokeWidth="0.5"/><text x="4" y="8" fontSize="5" fontFamily="UnifrakturMaguntia" fill={mainColor}>L</text><path d="M5,9 L18,9 M5,11 L16,11" stroke={mainColor} strokeWidth="0.3"/><rect x="15" y="3" width="5" height="4" fill={accentColors[0]} opacity="0.7"/></svg>;
    case 'castle silhouette': // Castlecore
        return <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Castle silhouette illustration"><path d="M2,14 H6V10 H2Z M7,14 H11V6 H7Z M12,14 H16V10 H12Z M17,14 H21V8 H17Z" fill={mainColor}/></svg>;
    case 'mythical beast': // Castlecore
        return <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Mythical beast illustration"><path d="M4,12 C8,8 12,10 16,6 L20,8 M16,6 C18,2 22,4 20,8 M10,14 A4,4 0 1,0 2,10" stroke={mainColor} strokeWidth="1" fill={accentColors[0] || 'none'} opacity="0.8"/><circle cx="18" cy="7" r="0.5" fill={accentColors[1]}/></svg>;
    case 'classical architecture': // Clerical Classicism
        return <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Classical architecture illustration"><path d="M4,14 H20 M6,14 V4 H18V14 M8,4 L12,1 L16,4 M10,14 V6 M14,14 V6" stroke={mainColor} strokeWidth="1" fill={accentColors[2] || 'none'}/></svg>;
    case 'formal portrait': // Clerical Classicism
        return <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Formal portrait illustration"><rect x="6" y="2" width="12" height="12" fill={accentColors[2] || '#FCF8F0'} stroke={mainColor} strokeWidth="0.5"/><circle cx="12" cy="6" r="2" fill={mainColor}/><path d="M9,9 Q12,11 15,9 M10,12 H14 V13 H10Z" stroke={accentColors[0]} strokeWidth="0.5"/></svg>;
    case 'mythological scene': // Clerical Classicism
        return <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Mythological scene illustration"><path d="M4,10 C8,6 12,12 16,8 L20,10 M8,14 A3,3 0 1,0 2,10" stroke={mainColor} strokeWidth="1" fill="none"/><circle cx="18" cy="9" r="1.5" fill={accentColors[0]}/><text x="5" y="5" fontSize="3" fill={accentColors[1]}>?</text></svg>;
    case 'ornate cartouche': // Clerical Classicism
        return <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Ornate cartouche illustration"><ellipse cx="12" cy="8" rx="8" ry="5" fill={accentColors[2] || '#FCF8F0'} stroke={mainColor} strokeWidth="0.5"/><path d="M12,4 Q8,5 6,8 Q8,11 12,12 Q16,11 18,8 Q16,5 12,4" stroke={accentColors[0]} strokeWidth="0.5" fill="none"/><text x="9" y="9" fontSize="3" fill={mainColor}>ABC</text></svg>;
    case 'still life': // Clerical Classicism
        return <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Still life illustration"><path d="M6,14 H18 V12 H6Z M8,12 L8,6 Q12,4 16,6 L16,12" fill={mainColor} opacity="0.7"/><circle cx="12" cy="5" r="1.5" fill={accentColors[0]}/><ellipse cx="5" cy="13" rx="2" ry="1" fill={accentColors[1]}/></svg>;
    case 'vintage advertisement': // Vintage Publishing
        return <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Vintage advertisement illustration" style={{backgroundColor: accentColors[2] || '#FDF5E6'}}><text x="3" y="8" fontSize="4" fontFamily="Abril Fatface" fill={mainColor}>BUY!</text><rect x="10" y="3" width="10" height="10" fill={accentColors[0]} opacity="0.5"/><text x="4" y="13" fontSize="2.5" fontFamily="Special Elite" fill={accentColors[1]}>Best Product Ever</text></svg>;
    case 'retro fashion sketch': // Vintage Publishing
        return <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Retro fashion sketch illustration"><path d="M12,2 C10,4 10,8 12,9 M12,9 V14 M10,14 H14 M8,14 L6,12 M16,14 L18,12 M12,9 C14,8 14,4 12,2" stroke={mainColor} strokeWidth="0.7" fill="none"/><path d="M10,5 Q12,3 14,5" stroke={accentColors[0]} strokeWidth="0.5" fill="none"/></svg>;
    case 'old map': // Vintage Publishing
        return <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Old map illustration" style={{backgroundColor: accentColors[2] || '#FDF5E6'}}><path d="M2,2 L22,2 L20,14 L4,14Z" fill={mainColor} opacity="0.2"/><path d="M5,5 C10,8 15,3 20,6 M3,12 C8,10 12,14 18,11" stroke={accentColors[0]} strokeWidth="0.5" fill="none"/><text x="10" y="10" fontSize="3" fill={mainColor} transform="rotate(-15 10 10)">Terra</text></svg>;
    case 'product illustration (50s style)': // Vintage Publishing
        return <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="50s product illustration"><rect x="5" y="3" width="14" height="10" rx="2" fill={mainColor} /><circle cx="12" cy="8" r="3" fill={accentColors[0]} /><line x1="7" y1="5" x2="7" y2="11" stroke={accentColors[1] || 'white'} strokeWidth="0.5" /><line x1="17" y1="5" x2="17" y2="11" stroke={accentColors[1] || 'white'} strokeWidth="0.5" /></svg>;
    case 'travel poster': // Vintage Publishing
        return <svg viewBox="0 0 24 16" className="w-full h-full" aria-label="Travel poster illustration"><rect x="0" y="0" width="24" height="16" fill={accentColors[0]}/><path d="M4,14 L10,6 L12,8 L20,2" stroke={mainColor} strokeWidth="1.5" fill="none"/><text x="3" y="13" fontSize="4" fontFamily="Abril Fatface" fill={accentColors[1] || 'white'}>VISIT</text></svg>;
    // END OF NEW EDITORIAL ILLUSTRATION EXAMPLES
    // START OF NEW TECH ILLUSTRATIONS
    case 'brutal geometric shape': // Digital Brutalism
        return <svg viewBox="0 0 24 16" className="w-full h-full"><polygon points="2,2 22,2 12,14" fill={mainColor}/><rect x="5" y="5" width="14" height="3" fill={accentColors[0]}/></svg>;
    case 'raw wireframe': // Digital Brutalism
        return <svg viewBox="0 0 24 16" className="w-full h-full"><path d="M2,2 L22,2 L22,14 L2,14Z M2,8 L22,8 M12,2 L12,14" stroke={mainColor} strokeWidth="1" fill="none"/></svg>;
    case 'command line interface': // Digital Brutalism
        return <svg viewBox="0 0 24 16" className="w-full h-full" style={{backgroundColor: accentColors[2] || 'black'}}><text x="2" y="5" fontSize="3" fontFamily="JetBrains Mono" fill={mainColor}>{">"} run</text><text x="2" y="10" fontSize="3" fontFamily="JetBrains Mono" fill={accentColors[0]}>OK</text></svg>;
    case '3D glass shape': // Colourful Glassmorphism
        return <svg viewBox="0 0 24 16" className="w-full h-full"><defs><linearGradient id={`glassGrad${theme}`} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={`${mainColor}80`} /><stop offset="100%" stopColor={`${accentColors[0]}80`} /></linearGradient></defs><path d="M6,3 L18,3 L22,8 L12,15 L2,8Z" fill={`url(#glassGrad${theme})`} stroke={accentColors[1]} strokeWidth="0.3" style={{backdropFilter:'blur(1px)'}} /></svg>;
    case 'soft abstract blob': // Colourful Glassmorphism
        return <svg viewBox="0 0 24 16" className="w-full h-full"><defs><radialGradient id={`blobGrad${theme}`}><stop offset="0%" stopColor={`${mainColor}90`} /><stop offset="100%" stopColor={`${accentColors[0]}70`} /></radialGradient></defs><ellipse cx="12" cy="8" rx="7" ry="4" fill={`url(#blobGrad${theme})`} style={{filter:'blur(2px)'}} /></svg>;
    case 'translucent interface element': // Colourful Glassmorphism
        return <svg viewBox="0 0 24 16" className="w-full h-full"><rect x="3" y="3" width="18" height="10" rx="2" fill={`${mainColor}40`} stroke={`${accentColors[0]}60`} strokeWidth="0.5" style={{backdropFilter:'blur(1.5px)'}} /><circle cx="7" cy="8" r="1.5" fill={`${accentColors[1]}80`}/><rect x="10" y="6.5" width="8" height="3" rx="1" fill={`${accentColors[2]}70`}/></svg>;
    case 'colorful light flare': // Colourful Glassmorphism
        return <svg viewBox="0 0 24 16" className="w-full h-full"><defs><radialGradient id={`flareGrad${theme}`}><stop offset="0%" stopColor={`${accentColors[0] || 'white'}FF`} /><stop offset="30%" stopColor={`${mainColor}AA`} /><stop offset="100%" stopColor={`${mainColor}00`} /></radialGradient></defs><circle cx="12" cy="8" r="6" fill={`url(#flareGrad${theme})`} /></svg>;
    case 'ai assistant': // Tech E-learning
        return <svg viewBox="0 0 24 16" className="w-full h-full"><circle cx="12" cy="8" r="5" fill={mainColor}/><circle cx="12" cy="8" r="3" fill={accentColors[0]}/><path d="M10,7 L14,7 M10,9 L14,9" stroke={accentColors[1] || 'white'} strokeWidth="0.5"/><path d="M12,13 L12,15 M10,15 H14" stroke={mainColor} strokeWidth="1"/></svg>;
    case 'futuristic dashboard': // Tech E-learning
        return <svg viewBox="0 0 24 16" className="w-full h-full" style={{backgroundColor: accentColors[2] || '#0F172A'}}><rect x="2" y="2" width="8" height="5" fill={mainColor} opacity="0.7"/><rect x="12" y="2" width="10" height="5" fill={accentColors[0]} opacity="0.6"/><rect x="2" y="9" width="20" height="5" fill={accentColors[1]} opacity="0.5"/><line x1="5" y1="4.5" x2="7" y2="3" stroke="white" strokeWidth="0.3"/><line x1="14" y1="4.5" x2="18" y2="3" stroke="white" strokeWidth="0.3"/></svg>;
    case 'abstract neural art': // Tech E-learning
        return <svg viewBox="0 0 24 16" className="w-full h-full"><path d="M2,8 C8,2 16,14 22,8" stroke={mainColor} strokeWidth="1" fill="none"/><path d="M2,10 C8,16 16,4 22,10" stroke={accentColors[0]} strokeWidth="1" fill="none"/><circle cx="5" cy="9" r="1" fill={accentColors[1]}/><circle cx="19" cy="9" r="1" fill={accentColors[1]}/></svg>;
    case 'learning pathway': // Tech E-learning
        return <svg viewBox="0 0 24 16" className="w-full h-full"><path d="M2,14 Q6,2 12,8 T22,2" stroke={mainColor} strokeWidth="1.5" fill="none" strokeDasharray="2 2"/><circle cx="2" cy="14" r="1" fill={accentColors[0]}/><circle cx="12" cy="8" r="1" fill={accentColors[0]}/><circle cx="22" cy="2" r="1" fill={accentColors[0]}/></svg>;
    case 'ai learning curve': // AI Minimalism
        return <svg viewBox="0 0 24 16" className="w-full h-full"><path d="M2,14 C4,14 6,4 12,4 C18,4 20,14 22,14" stroke={mainColor} strokeWidth="1.5" fill="none"/><circle cx="12" cy="4" r="1" fill={accentColors[0]}/></svg>;
    case 'minimal adaptive interface': // AI Minimalism
        return <svg viewBox="0 0 24 16" className="w-full h-full" style={{backgroundColor: accentColors[1] || '#F9FAFB'}}><rect x="4" y="4" width="16" height="8" rx="1" fill={mainColor} opacity="0.1"/><circle cx="7" cy="8" r="1" fill={mainColor}/><rect x="10" y="7" width="8" height="2" rx="0.5" fill={mainColor} opacity="0.7"/></svg>;
    case 'abstract data node': // AI Minimalism
        return <svg viewBox="0 0 24 16" className="w-full h-full"><circle cx="12" cy="8" r="4" fill={mainColor} opacity="0.2"/><circle cx="12" cy="8" r="2" fill={mainColor}/><path d="M12,4 V2 M12,12 V14 M8,8 H6 M16,8 H18" stroke={accentColors[0]} strokeWidth="1" opacity="0.5"/></svg>;
    case 'intelligent agent icon': // AI Minimalism
        return <svg viewBox="0 0 24 16" className="w-full h-full"><path d="M12,2 A6,6 0 0,0 6,8 C6,12.5 12,15 12,15 C12,15 18,12.5 18,8 A6,6 0 0,0 12,2Z" fill={mainColor}/><circle cx="12" cy="7" r="1.5" fill={accentColors[0] || 'white'}/></svg>;
    case 'cyberpunk city': // Cyberpunk
        return <svg viewBox="0 0 24 16" className="w-full h-full" style={{backgroundColor: accentColors[2] || '#0A0A0F'}}><path d="M2,14 L6,10 L8,14 L12,6 L14,14 L18,8 L20,14H2Z" fill={mainColor} style={{filter:`drop-shadow(0 0 2px ${mainColor})`}}/><rect x="0" y="13" width="24" height="3" fill={accentColors[0]} opacity="0.3"/></svg>;
    case 'neon sign': // Cyberpunk
        return <svg viewBox="0 0 24 16" className="w-full h-full"><text x="4" y="12" fontSize="8" fontFamily="Orbitron" fill={mainColor} style={{filter:`drop-shadow(0 0 3px ${mainColor}) drop-shadow(0 0 5px ${accentColors[0]})`}}>CYBER</text></svg>;
    case 'futuristic character': // Cyberpunk
        return <svg viewBox="0 0 24 16" className="w-full h-full"><path d="M10,2 L14,2 L15,6 L12,8 L9,6Z M10,9 H14 V14 H10Z M8,7 H16" fill={mainColor} stroke={accentColors[0]} strokeWidth="0.5" style={{filter:`drop-shadow(0 0 1px ${accentColors[0]})`}}/></svg>;
    case 'hacker interface': // Cyberpunk
        return <svg viewBox="0 0 24 16" className="w-full h-full" style={{backgroundColor: accentColors[2] || '#0A0A0F'}}><path d="M2,2 H22 M2,5 H18 M2,8 H20 M2,11 H16 M2,14 H22" stroke={mainColor} strokeWidth="0.5" opacity="0.7"/><text x="3" y="4.5" fontSize="2" fill={accentColors[0]}>ACCESS GRANTED</text></svg>;
    case 'robotic arm': // Cyberpunk
        return <svg viewBox="0 0 24 16" className="w-full h-full"><path d="M4,12 L10,6 L16,6 L18,8 M10,6 L8,2 M16,6 L18,2" stroke={mainColor} strokeWidth="1.5" fill="none"/><circle cx="10" cy="6" r="1" fill={accentColors[0]}/><rect x="17" y="7" width="3" height="2" fill={accentColors[1]}/></svg>;
    case 'abstract pastel composition': // Neo-Pastel
        return <svg viewBox="0 0 24 16" className="w-full h-full"><rect x="2" y="2" width="10" height="12" rx="2" fill={mainColor} opacity="0.8"/><circle cx="16" cy="6" r="4" fill={accentColors[0]} opacity="0.7"/><polygon points="12,10 20,10 16,15" fill={accentColors[1]} opacity="0.9"/></svg>;
    // 'playful character' already defined for Dopamine Brights, can be reused
    case 'modern utility icon set': // Neo-Pastel
        return <svg viewBox="0 0 24 16" className="w-full h-full"><g transform="scale(0.8) translate(2 1)"><path d="M3,2 H9 V5 H3Z M12,2 H18 V5 H12Z M3,7 H9 V10 H3Z M12,7 H18 V10 H12Z" fill={mainColor} stroke={accentColors[0]} strokeWidth="0.3"/></g></svg>;
    case 'unconventional UI element': // Neo-Pastel
        return <svg viewBox="0 0 24 16" className="w-full h-full"><path d="M4,4 C10,0 12,12 20,8 S18,16 10,14 S0,10 4,4Z" fill={mainColor} opacity="0.7"/><circle cx="15" cy="5" r="2" fill={accentColors[0]}/></svg>;
    case 'friendly data graph': // Neo-Pastel
        return <svg viewBox="0 0 24 16" className="w-full h-full"><path d="M2,14 L6,10 L10,12 L14,6 L18,8 L22,4" stroke={mainColor} strokeWidth="2" fill="none" strokeLinecap="round"/><circle cx="6" cy="10" r="1" fill={accentColors[0]}/><circle cx="14" cy="6" r="1" fill={accentColors[1]}/><circle cx="22" cy="4" r="1" fill={accentColors[2]}/></svg>;
    // END OF NEW TECH ILLUSTRATIONS
    // START OF NEW MAXIMALIST ILLUSTRATIONS
    case 'surreal collage':
        return <svg viewBox="0 0 24 16" className="w-full h-full"><rect x="0" y="0" width="24" height="16" fill={accentColors[3] || 'white'} /><path d="M5,2 L15,12 L5,12Z" fill={mainColor}/><circle cx="18" cy="5" r="3" fill={accentColors[0]}/><path d="M2,14 Q8,10 12,14 T22,14" stroke={accentColors[1]} strokeWidth="1" fill="none"/><ellipse cx="8" cy="8" rx="4" ry="2" fill={accentColors[2]} opacity="0.6"/></svg>;
    case 'bold abstract art':
        return <svg viewBox="0 0 24 16" className="w-full h-full"><rect x="0" y="0" width="12" height="16" fill={mainColor}/><rect x="12" y="0" width="12" height="8" fill={accentColors[0]}/><rect x="12" y="8" width="12" height="8" fill={accentColors[1]}/><circle cx="6" cy="8" r="3" fill={accentColors[2]}/><polygon points="18,4 15,12 21,12" fill={accentColors[3] || 'white'}/></svg>;
    case 'pop art graphic':
        return <svg viewBox="0 0 24 16" className="w-full h-full"><rect x="0" y="0" width="24" height="16" fill={accentColors[0]} /><text x="2" y="12" fontSize="10" fontWeight="bold" fill={mainColor} stroke={accentColors[1]} strokeWidth="0.5">POP!</text></svg>;
    case 'ornate fashion sketch':
        return <svg viewBox="0 0 24 16" className="w-full h-full"><path d="M12,2 C10,5 10,10 12,12 M12,12 V15 M10,15 H14 M12,12 C14,10 14,5 12,2 M8,5 C4,8 4,12 8,15 M16,5 C20,8 20,12 16,15" stroke={mainColor} strokeWidth="1" fill="none"/><circle cx="12" cy="3" r="1" fill={accentColors[0]}/><path d="M6,8 L18,8" stroke={accentColors[1]} strokeWidth="0.5" strokeDasharray="2 2"/></svg>;
    case 'eclectic still life':
        return <svg viewBox="0 0 24 16" className="w-full h-full"><path d="M4,14 H20 V10 H4Z M7,10 V6 Q12,3 17,6 V10" fill={mainColor} opacity="0.8"/><circle cx="6" cy="5" r="2" fill={accentColors[0]}/><rect x="15" y="4" width="4" height="5" fill={accentColors[1]}/><polygon points="10,12 12,8 14,12" fill={accentColors[2]}/></svg>;
    // 'playful character' - defined for Dopamine Brights, can be reused
    // 'bright abstract' - similar to bold abstract art
    case 'fun icon set':
        return <svg viewBox="0 0 24 16" className="w-full h-full"><g transform="scale(0.7) translate(2 2)"><circle cx="4" cy="4" r="3" fill={mainColor}/><rect x="10" y="1" width="6" height="6" rx="1" fill={accentColors[0]}/><polygon points="19,7 22,2 25,7" fill={accentColors[1]}/><path d="M3,10 L7,14 L11,10" stroke={accentColors[2]} strokeWidth="1" fill="none"/></g></svg>;
    case 'energetic scene':
        return <svg viewBox="0 0 24 16" className="w-full h-full"><rect x="0" y="0" width="24" height="16" fill={accentColors[4] || 'white'}/><path d="M0,8 Q6,2 12,8 T24,8" stroke={mainColor} strokeWidth="2"/><path d="M0,10 Q6,16 12,10 T24,10" stroke={accentColors[0]} strokeWidth="1.5"/><circle cx="6" cy="6" r="1.5" fill={accentColors[1]}/><polygon points="18,10 16,14 20,14" fill={accentColors[2]}/></svg>;
    case 'positive message graphic':
        return <svg viewBox="0 0 24 16" className="w-full h-full"><rect x="0" y="0" width="24" height="16" fill={mainColor}/><text x="2" y="11" fontSize="6" fontWeight="bold" fill={accentColors[3] || 'white'}>FUN!</text><circle cx="18" cy="5" r="2" fill={accentColors[0]}/></svg>;
    case '80s sports car':
        return <svg viewBox="0 0 24 16" className="w-full h-full"><path d="M2,12 L22,12 L20,8 L4,8Z M3,12 V10 M21,12 V10 M6,8 L8,4 H16 L18,8 M7,14 A1,1 0 1,0 7,12 A1,1 0 0,0 7,14 M17,14 A1,1 0 1,0 17,12 A1,1 0 0,0 17,14" fill={mainColor} stroke={accentColors[0]} strokeWidth="0.5"/></svg>;
    // 'palm tree sunset' - covered by neon palm tree icon and sunset gradient pattern
    case 'abstract neon landscape':
        return <svg viewBox="0 0 24 16" className="w-full h-full" style={{backgroundColor: accentColors[2] || '#1A0B33'}}><path d="M0,14 H24 M0,12 Q6,8 12,12 T24,12" stroke={mainColor} strokeWidth="1" style={{filter:`drop-shadow(0 0 2px ${mainColor})`}}/><path d="M0,10 Q8,14 16,10 T24,14" stroke={accentColors[0]} strokeWidth="0.5" style={{filter:`drop-shadow(0 0 1px ${accentColors[0]})`}}/><circle cx="18" cy="5" r="2" fill={accentColors[1]} style={{filter:`drop-shadow(0 0 3px ${accentColors[1]})`}}/></svg>;
    case 'retro computer interface':
        return <svg viewBox="0 0 24 16" className="w-full h-full" style={{backgroundColor: accentColors[2] || '#1A0B33'}}><rect x="2" y="2" width="20" height="12" fill="none" stroke={mainColor} strokeWidth="1"/><path d="M3,4 H21 M3,6 H15 M3,8 H18 M3,10 H12 M3,12 H21" stroke={accentColors[0]} strokeWidth="0.5" opacity="0.8"/></svg>;
    // END OF NEW MAXIMALIST ILLUSTRATIONS
    // START OF NEW FEMININE ILLUSTRATIONS
    case 'graceful ballerina':
        return <svg viewBox="0 0 24 16" className="w-full h-full"><path d="M12,2 C10,5 10,10 12,12 L10,15 M12,12 L14,15 M12,8 C14,5 16,4 18,6" stroke={mainColor} strokeWidth="1" fill="none"/><ellipse cx="12" cy="12" rx="3" ry="1.5" fill={accentColors[0]} opacity="0.5"/></svg>;
    case 'delicate floral sketch':
        return <svg viewBox="0 0 24 16" className="w-full h-full"><path d="M12,14 C8,10 8,4 12,2 C16,4 16,10 12,14 M12,8 C10,6 14,6 12,8 M10,6 L6,4 M14,6 L18,4" stroke={mainColor} strokeWidth="0.5" fill={accentColors[0] || 'none'} opacity="0.7"/></svg>;
    case 'swan illustration':
        return <svg viewBox="0 0 24 16" className="w-full h-full"><path d="M6,12 C6,8 10,6 12,6 C14,6 18,4 18,2 C18,0 14,0 12,3 C10,6 8,10 8,12 C8,14 10,15 14,15 H18 L16,12 H6Z" fill={mainColor} stroke={accentColors[0]} strokeWidth="0.3" opacity="0.9"/></svg>;
    case 'flowing fabric':
        return <svg viewBox="0 0 24 16" className="w-full h-full"><path d="M2,4 C6,0 10,8 12,6 C14,4 18,12 22,8" stroke={mainColor} strokeWidth="2" fill="none" opacity="0.7"/><path d="M2,7 C6,3 10,11 12,9 C14,7 18,15 22,11" stroke={accentColors[0]} strokeWidth="1.5" fill="none" opacity="0.5"/></svg>;
    case 'ballet pose silhouette':
        return <svg viewBox="0 0 24 16" className="w-full h-full"><path d="M12,2 C11,4 10,7 10,9 L8,14 M12,9 L14,14 M12,9 C13,7 14,4 15,2" fill={mainColor}/></svg>;
    case 'romantic cherub': // Similar to playful cherub icon
        return <svg viewBox="0 0 24 16" className="w-full h-full"><circle cx="12" cy="5" r="2.5" fill={mainColor}/><path d="M9,7 Q12,10 15,7 M8,13 L10,8 H14 L16,13 M8,11 Q6,9 8,7 M16,11 Q18,9 16,7" stroke={accentColors[0]} strokeWidth="0.8" fill="none" opacity="0.8"/></svg>;
    case 'coquette fashion sketch':
        return <svg viewBox="0 0 24 16" className="w-full h-full"><path d="M12,2 C10,5 10,10 13,12 L10,15 M13,12 L15,15 M13,12 C15,10 15,5 12,2 M9,6 Q12,4 15,6 M8,12 H16" stroke={mainColor} strokeWidth="0.7" fill="none"/><path d="M10,8 L14,8" stroke={accentColors[0]} strokeWidth="2" fill="none" strokeLinecap="round"/></svg>;
    case 'vintage perfume bottle':
        return <svg viewBox="0 0 24 16" className="w-full h-full"><rect x="8" y="6" width="8" height="8" rx="1" fill={mainColor} opacity="0.8"/><rect x="10" y="2" width="4" height="4" fill={accentColors[0]}/><path d="M12,6 V2 M11,3 H13" stroke={accentColors[1]||'white'} strokeWidth="0.5"/></svg>;
    case 'floral bouquet':
        return <svg viewBox="0 0 24 16" className="w-full h-full"><g fill={mainColor}><circle cx="10" cy="6" r="2"/><circle cx="14" cy="6" r="2"/><circle cx="12" cy="9" r="2.5"/></g><g fill={accentColors[0]}><circle cx="8" cy="8" r="1.5"/><circle cx="16" cy="8" r="1.5"/></g><path d="M10,11 L14,11 L12,15Z" fill={accentColors[1] || mainColor}/></svg>;
    case 'love letter':
        return <svg viewBox="0 0 24 16" className="w-full h-full"><rect x="3" y="3" width="18" height="10" fill={accentColors[2] || '#FFF9FB'} stroke={mainColor} strokeWidth="0.5"/><path d="M4,4 L12,9 L20,4" stroke={mainColor} strokeWidth="0.5"/><path d="M11,8 L13,10 L12,11Z" fill={accentColors[0]}/></svg>;
    case 'cozy cottage scene': // Cottagecore
        return <svg viewBox="0 0 24 16" className="w-full h-full" style={{backgroundColor: accentColors[1] || '#FBF7F0'}}><path d="M3,14 H21 V7 L12,1 L3,7Z" fill={mainColor}/><rect x="9" y="9" width="6" height="5" fill={accentColors[0]}/><circle cx="6" cy="5" r="1" fill={accentColors[2] || mainColor} opacity="0.5"/><path d="M16,5 L18,3 L20,5" stroke={accentColors[2] || mainColor} strokeWidth="1" fill="none"/></svg>;
    case 'vintage botanical drawing': // Cottagecore
        return <svg viewBox="0 0 24 16" className="w-full h-full" style={{backgroundColor: accentColors[1] || '#FBF7F0'}}><path d="M12,15 V2 M12,6 L6,3 M12,6 L18,3 M10,10 Q12,8 14,10 M8,3 Q12,0 16,3" stroke={mainColor} strokeWidth="0.7" fill="none"/><circle cx="12" cy="1" r="0.7" fill={accentColors[0]}/><text x="3" y="14" fontSize="2.5" fontFamily="Gentium Book Basic" fill={mainColor} style={{fontStyle:'italic'}}>Rosa</text></svg>;
    case 'handmade craft item': // Cottagecore
        return <svg viewBox="0 0 24 16" className="w-full h-full"><rect x="5" y="4" width="14" height="8" fill={mainColor} stroke={accentColors[0]} strokeWidth="0.5"/><path d="M7,6 L10,9 L7,12 M17,6 L14,9 L17,12" stroke={accentColors[1] || 'white'} strokeWidth="1"/></svg>;
    case 'garden harvest': // Cottagecore
        return <svg viewBox="0 0 24 16" className="w-full h-full"><path d="M3,10 H21 L18,15 H6Z" fill={mainColor}/><circle cx="7" cy="8" r="2" fill={accentColors[0]}/><ellipse cx="12" cy="7" rx="2.5" ry="1.5" fill={accentColors[1]}/><path d="M17,6 A2,3 0 1,0 17,10Z" fill={accentColors[2]}/></svg>;
    case 'forest animals': // Cottagecore
        return <svg viewBox="0 0 24 16" className="w-full h-full"><path d="M5,14 L7,10 L10,12 L12,9 L15,14Z M18,10 C16,8 16,5 18,4 L20,6Z" fill={mainColor}/><circle cx="6" cy="9" r="0.5" fill={accentColors[0]}/><circle cx="19" cy="5" r="0.5" fill={accentColors[0]}/></svg>;
    // END OF NEW FEMININE ILLUSTRATIONS
    // START OF NEW CULTURAL ILLUSTRATIONS
    case 'moroccan doorway':
        return <svg viewBox="0 0 24 16" className="w-full h-full"><path d="M5,15 V5 Q12,1 19,5 V15 Z M8,14 H16 V6 Q12,3 8,6Z" fill={mainColor} stroke={accentColors[0]} strokeWidth="0.5"/><rect x="10" y="7" width="4" height="7" fill={accentColors[1] || '#3B2B1C'}/></svg>;
    case 'geometric pattern detail':
        return <svg viewBox="0 0 24 16" className="w-full h-full"><path d="M0,0 L12,8 L0,16 Z M12,0 L24,8 L12,16 Z M6,4 L18,4 L12,12Z" fill={mainColor} opacity="0.8"/><path d="M3,2 L9,2 L6,8Z M15,2 L21,2 L18,8Z" fill={accentColors[0]} opacity="0.7"/></svg>;
    case 'modern riad interior':
        return <svg viewBox="0 0 24 16" className="w-full h-full" style={{backgroundColor: accentColors[2] || '#FFF8F0'}}><path d="M2,14 H22 M2,2 L8,6 H16 L22,2 M8,6 V14 M16,6 V14 M12,6 V10" stroke={mainColor} strokeWidth="1"/><circle cx="12" cy="12" r="1.5" fill={accentColors[0]}/></svg>;
    case 'ornate calligraphy':
        return <svg viewBox="0 0 24 16" className="w-full h-full"><path d="M4,12 C8,4 12,14 16,6 C20,12 22,8 22,8" stroke={mainColor} strokeWidth="1.5" fill="none" strokeLinecap="round"/><circle cx="5" cy="11" r="0.5" fill={accentColors[0]}/><circle cx="18" cy="7" r="0.5" fill={accentColors[0]}/></svg>;
    case 'desert landscape':
        return <svg viewBox="0 0 24 16" className="w-full h-full" style={{backgroundColor: accentColors[2] || '#FFF8F0'}}><path d="M0,14 H24 V10 Q18,6 12,10 Q6,14 0,10Z" fill={mainColor} opacity="0.7"/><circle cx="18" cy="5" r="2" fill={accentColors[0]}/></svg>;
    case 'scandi folk animal':
        return <svg viewBox="0 0 24 16" className="w-full h-full"><path d="M5,12 L9,6 L15,6 L19,12 H16 L12,8 L8,12Z M10,12 V14 H14V12" fill={mainColor}/><circle cx="7" cy="7" r="1" fill={accentColors[0]}/><circle cx="17" cy="7" r="1" fill={accentColors[0]}/></svg>;
    // 'traditional pattern' is too generic, covered by specific patterns
    case 'nordic landscape':
        return <svg viewBox="0 0 24 16" className="w-full h-full" style={{backgroundColor: accentColors[2] || '#F5F5F5'}}><path d="M2,14 L8,8 L12,10 L16,6 L22,14Z" fill={mainColor}/><path d="M0,10 H24" stroke={accentColors[0]} strokeWidth="0.5" opacity="0.5"/><circle cx="18" cy="4" r="1.5" fill={accentColors[1] || 'white'}/></svg>;
    case 'hand-painted motif':
        return <svg viewBox="0 0 24 16" className="w-full h-full"><path d="M6,3 C4,8 8,12 10,10 C12,8 16,10 18,5" stroke={mainColor} strokeWidth="2" fill="none" strokeLinecap="round"/><circle cx="7" cy="4" r="1" fill={accentColors[0]}/><circle cx="17" cy="6" r="1" fill={accentColors[1]}/></svg>;
    case 'simple character':
        return <svg viewBox="0 0 24 16" className="w-full h-full"><circle cx="12" cy="5" r="3" fill={mainColor}/><rect x="10" y="8" width="4" height="6" fill={mainColor}/><line x1="8" y1="10" x2="10" y2="12" stroke={accentColors[0]} strokeWidth="1"/><line x1="16" y1="10" x2="14" y2="12" stroke={accentColors[0]} strokeWidth="1"/></svg>;
    case 'contemporary indian art':
        return <svg viewBox="0 0 24 16" className="w-full h-full"><rect x="2" y="2" width="20" height="12" fill={accentColors[2] || '#FDFDEA'} /><path d="M5,5 Q12,12 19,5" stroke={mainColor} strokeWidth="1.5" fill="none"/><circle cx="8" cy="10" r="2" fill={accentColors[0]}/><polygon points="15,8 18,12 12,12" fill={accentColors[1]}/></svg>;
    case 'modern interpretation of mythology':
        return <svg viewBox="0 0 24 16" className="w-full h-full"><path d="M12,2 A8,6 0 0,0 4,8 A8,6 0 0,0 12,14 A8,6 0 0,0 20,8 A8,6 0 0,0 12,2Z" fill={mainColor} opacity="0.3"/><path d="M10,6 L14,10 M10,10 L14,6" stroke={accentColors[0]} strokeWidth="2"/><circle cx="12" cy="8" r="1" fill={accentColors[1]}/></svg>;
    case 'indian cityscape':
        return <svg viewBox="0 0 24 16" className="w-full h-full"><path d="M2,14 H6V10 H2Z M7,14 H11V6 H7Z M12,14 H16V10 H12Z M17,14 H21V8 H17Z" fill={mainColor}/><rect x="0" y="13" width="24" height="3" fill={accentColors[0]} opacity="0.5"/><circle cx="10" cy="4" r="1" fill={accentColors[1]}/></svg>;
    case 'stylized folk art':
        return <svg viewBox="0 0 24 16" className="w-full h-full"><path d="M4,2 L12,8 L20,2 M4,14 L12,8 L20,14" stroke={mainColor} strokeWidth="1" fill="none"/><circle cx="8" cy="5" r="1.5" fill={accentColors[0]}/><circle cx="16" cy="11" r="1.5" fill={accentColors[1]}/></svg>;
    case 'vibrant pattern collage':
        return <div className="w-full h-full grid grid-cols-2 grid-rows-2"><div style={{background: `radial-gradient(${mainColor} 20%, transparent 21%)`, backgroundSize:'8px 8px'}}/><div style={{background: `repeating-linear-gradient(45deg, ${accentColors[0]}, ${accentColors[0]} 2px, transparent 2px, transparent 4px)`}}/><div style={{background: `repeating-conic-gradient(${accentColors[1]} 0% 10%, transparent 10% 20%)`}}/><div style={{backgroundColor: accentColors[2] || mainColor, opacity:0.6}}/></div>;
    // END OF NEW CULTURAL ILLUSTRATIONS
    // START OF NEW CLEAN/MINIMAL ILLUSTRATIONS
    case 'midcentury modern architecture':
        return <svg viewBox="0 0 24 16" className="w-full h-full"><path d="M2,14 H22 V6 L12,2 Z M4,12 V7 M20,12 V7 M8,14 V6 M16,14 V6" stroke={mainColor} strokeWidth="1" fill={accentColors[0] || 'none'} opacity="0.8"/><rect x="9" y="10" width="6" height="4" fill={accentColors[1]}/></svg>;
    case 'atomic age poster style':
        return <svg viewBox="0 0 24 16" className="w-full h-full" style={{backgroundColor: accentColors[2] || '#FAF0E6'}}><circle cx="6" cy="6" r="3" fill={mainColor}/><path d="M10,3 L12,8 L18,8 M12,8 L10,13" stroke={accentColors[0]} strokeWidth="1.5"/><text x="14" y="14" fontSize="4" fontFamily="Space Grotesk" fill={accentColors[1] || mainColor}>ATOM</text></svg>;
    // 'abstract geometric art' - too generic, covered by patterns
    case 'period furniture sketch':
        return <svg viewBox="0 0 24 16" className="w-full h-full"><path d="M4,12 H20 V8 H4Z M6,8 L4,4 M18,8 L20,4 M6,12 V14 M18,12 V14" stroke={mainColor} strokeWidth="1" fill="none"/><rect x="7" y="9" width="10" height="2" fill={accentColors[0]} opacity="0.6"/></svg>;
    case 'retro character':
        return <svg viewBox="0 0 24 16" className="w-full h-full"><circle cx="12" cy="5" r="3" fill={mainColor}/><path d="M10,8 L14,8 L15,14 H9Z" fill={accentColors[0]}/><path d="M11,10 L13,10" stroke={accentColors[1] || 'white'} strokeWidth="0.5"/></svg>;
    case 'minimalist winter landscape':
        return <svg viewBox="0 0 24 16" className="w-full h-full" style={{backgroundColor: accentColors[1] || '#F8FAFC'}}><path d="M2,14 H22 M4,12 L8,8 L12,10 L16,6 L20,12" stroke={mainColor} strokeWidth="1" fill="none"/><circle cx="18" cy="3" r="1.5" fill={accentColors[0]} opacity="0.7"/></svg>;
    case 'abstract ice formation':
        return <svg viewBox="0 0 24 16" className="w-full h-full"><path d="M4,2 L10,14 L12,4 L18,14 M6,8 L16,8" stroke={mainColor} strokeWidth="1" fill="none" opacity="0.8"/><path d="M8,4 L14,12" stroke={accentColors[0]} strokeWidth="0.5" fill="none" opacity="0.6"/></svg>;
    case 'nordic animal silhouette': // e.g. deer
        return <svg viewBox="0 0 24 16" className="w-full h-full"><path d="M10,2 L12,5 M10,2 L8,5 M10,5 V10 L6,14 M10,5 V10 L14,14 M8,10 H12" fill={mainColor}/></svg>;
    // 'aurora borealis' - covered by pattern
    case 'crystalline geometric':
        return <svg viewBox="0 0 24 16" className="w-full h-full"><polygon points="12,2 18,8 12,14 6,8" fill={mainColor} opacity="0.6"/><polygon points="12,5 16,8 12,11 8,8" fill={accentColors[0]} opacity="0.8"/></svg>;
    case '3D interface element': // Tactile UI
        return <svg viewBox="0 0 24 16" className="w-full h-full"><rect x="4" y="4" width="16" height="8" rx="2" fill={mainColor} style={{boxShadow: `2px 2px 4px ${accentColors[0] || '#00000020'}, -1px -1px 1px #FFFFFF30 inset`}}/><circle cx="8" cy="8" r="1.5" fill={accentColors[1] || 'white'}/></svg>;
    case 'abstract depth map': // Tactile UI
        return <svg viewBox="0 0 24 16" className="w-full h-full"><defs><radialGradient id={`depthMap${theme}`}><stop offset="0%" stopColor={mainColor} /><stop offset="50%" stopColor={accentColors[0]} /><stop offset="100%" stopColor={accentColors[1] || 'transparent'} /></radialGradient></defs><rect x="0" y="0" width="24" height="16" fill={`url(#depthMap${theme})`} /></svg>;
    case 'material interaction': // Tactile UI
        return <svg viewBox="0 0 24 16" className="w-full h-full"><rect x="3" y="3" width="18" height="10" rx="1" fill={accentColors[1] || '#F3F4F6'} /><rect x="5" y="5" width="14" height="6" rx="1" fill={mainColor} /><path d="M8,8 L11,6 L11,10Z" fill={accentColors[0]}/></svg>;
    case 'neumorphic component': // Tactile UI
        return <svg viewBox="0 0 24 16" className="w-full h-full" style={{backgroundColor: mainColor}}><rect x="5" y="4" width="14" height="8" rx="2" fill={mainColor} style={{boxShadow: `2px 2px 3px ${accentColors[0] || '#0000001A'}, -2px -2px 3px #FFFFFF60`}}/></svg>;
    case 'layered composition': // Tactile UI
        return <svg viewBox="0 0 24 16" className="w-full h-full"><rect x="2" y="2" width="20" height="12" rx="1" fill={mainColor} opacity="0.2"/><rect x="4" y="4" width="16" height="8" rx="1" fill={mainColor} opacity="0.4"/><rect x="6" y="6" width="12" height="4" rx="1" fill={mainColor} opacity="0.8"/></svg>;
    case 'objective product photography': // Swiss Modernism - visual representation
        return <svg viewBox="0 0 24 16" className="w-full h-full" style={{backgroundColor: accentColors[1] || 'white'}}><rect x="6" y="3" width="12" height="10" fill={mainColor}/><circle cx="12" cy="8" r="2" fill={accentColors[0]}/></svg>;
    case 'typographic poster': // Swiss Modernism
        return <svg viewBox="0 0 24 16" className="w-full h-full" style={{backgroundColor: accentColors[1] || 'white'}}><text x="2" y="8" fontSize="5" fontFamily="Space Grotesk" fill={mainColor}>TEXT</text><rect x="2" y="10" width="18" height="2" fill={accentColors[0]}/></svg>;
    case 'information design': // Swiss Modernism
        return <svg viewBox="0 0 24 16" className="w-full h-full"><path d="M2,2 H22 M2,14 H22 M6,2 V14 M18,2 V14" stroke={accentColors[0]} strokeWidth="0.5"/><rect x="7" y="3" width="4" height="4" fill={mainColor}/><rect x="7" y="9" width="10" height="2" fill={mainColor} opacity="0.7"/><text x="13" y="6" fontSize="3" fill={accentColors[2] || 'black'}>Info</text></svg>;
    case 'architectural blueprint style': // Swiss Modernism
        return <svg viewBox="0 0 24 16" className="w-full h-full" style={{backgroundColor: accentColors[0]}}><path d="M4,12 H20 V4 H4Z M8,10 V6 M12,10 V6 M16,10 V6" stroke={accentColors[1] || 'white'} strokeWidth="0.5" fill="none"/></svg>;
    case 'abstract architectural form': // Soft Brutalism
        return <svg viewBox="0 0 24 16" className="w-full h-full"><path d="M2,14 L10,2 L18,14Z M8,14 L12,8 L16,14Z" fill={mainColor} opacity="0.9"/><path d="M6,10 H14" stroke={accentColors[0]} strokeWidth="1" opacity="0.7"/></svg>;
    case 'minimalist still life': // Soft Brutalism
        return <svg viewBox="0 0 24 16" className="w-full h-full"><rect x="4" y="10" width="16" height="2" fill={accentColors[0]}/><circle cx="8" cy="7" r="3" fill={mainColor}/><rect x="14" y="5" width="4" height="5" fill={mainColor} opacity="0.8"/></svg>;
    case 'large typographic statement': // Soft Brutalism
        return <svg viewBox="0 0 24 16" className="w-full h-full" style={{backgroundColor: accentColors[1] || '#F5F5F5'}}><text x="2" y="12" fontSize="10" fontFamily="Lexend" fill={mainColor} fontWeight="bold">BOLD</text></svg>;
    case 'shadow and light study': // Soft Brutalism
        return <svg viewBox="0 0 24 16" className="w-full h-full"><rect x="0" y="0" width="24" height="16" fill={mainColor}/><polygon points="0,0 12,0 0,16" fill={accentColors[0]} opacity="0.3"/><polygon points="12,16 24,16 24,0" fill={accentColors[1]} opacity="0.2"/></svg>;
    case 'geometric sculpture': // Soft Brutalism
        return <svg viewBox="0 0 24 16" className="w-full h-full"><path d="M4,14 L12,2 L20,14Z" fill={mainColor}/><rect x="8" y="10" width="8" height="4" fill={accentColors[0]} opacity="0.7"/></svg>;
    // END OF NEW CLEAN/MINIMAL ILLUSTRATIONS
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
