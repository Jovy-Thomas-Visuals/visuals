import { balloonImage, portraitMasterBadge, peoplesChoiceBadge } from '../assets/images';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  const menuItems = [
    'HOME',
    'GALLERY',
    'SMALL EVENT PHOTOGRAPHY',
    'PACKAGES',
    'ABOUT ME',
    'MENTIONS',
    'CONTACT',
    'FAQs',
    'Blog'
  ];

  return (
    <header className="bg-[#e8e4d8] border-b-2 border-[#8b7355]">
      {/* Top section with balloons and branding */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Left badge */}
          <div className="flex-shrink-0">
            <img 
              src={peoplesChoiceBadge} 
              alt="GLOW Finalist Award" 
              className="w-32 h-32 object-contain"
            />
          </div>

          {/* Center content */}
          <div className="flex-1 flex flex-col items-center">
            {/* Balloons */}
            <div className="mb-4">
              <img 
                src={balloonImage} 
                alt="Hot air balloons" 
                className="h-16 w-auto"
              />
            </div>
            
            {/* Main heading */}
            <h1 className="text-4xl text-[#b8a894] mb-2" style={{ fontFamily: "'Fredericka the Great', cursive" }}>
              JOVY THOMAS VISUALS
            </h1>
            
            {/* Tagline */}
            <p className="text-sm text-[#9a9a9a] mb-3" style={{ fontFamily: "'Courier New', monospace" }}>
              Preserve those moments forever...
            </p>
            
            {/* Location */}
            <p className="text-sm text-[#6b6b6b]" style={{ fontFamily: "'Courier New', monospace" }}>
              Hendersonville-TN-Portrait and Small event Photographer
            </p>
          </div>

          {/* Right badge */}
          <div className="flex-shrink-0">
            <img 
              src={portraitMasterBadge} 
              alt="Portrait Masters Bronze 2021" 
              className="w-32 h-32 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Navigation menu */}
      <nav className="border-t border-[#c4b8a4]">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center justify-center gap-1 py-2 flex-wrap">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button 
                  onClick={() => onNavigate(item)}
                  className={`px-3 py-1 text-xs transition-colors border border-[#c4b8a4] ${
                    currentPage === item 
                      ? 'text-[#8b7355] bg-[#f5f2ec]' 
                      : 'text-[#6b6b6b] bg-white hover:text-[#8b7355] hover:bg-[#f5f2ec]'
                  }`} 
                  style={{ fontFamily: "'Courier New', monospace" }}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}