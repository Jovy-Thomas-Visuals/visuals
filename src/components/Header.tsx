import { useState } from "react";
import { Menu, X } from "lucide-react";
import { balloonImage, portraitMasterBadge, peoplesChoiceBadge } from "../assets/images";

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuItems = [
    "HOME",
    "GALLERY",
    "SMALL EVENT PHOTOGRAPHY",
    "PACKAGES",
    "ABOUT ME",
    "MENTIONS",
    "CONTACT",
  ];

  return (
    <header className="bg-[#e8e4d8]">
      {/* Top section with balloons and branding */}
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Left badge - hidden on mobile, visible on md+ */}
          <div className="hidden md:block flex-shrink-0">
            <img
              src={peoplesChoiceBadge}
              alt="GLOW Finalist Award"
              className="w-20 lg:w-32 h-20 lg:h-32 object-contain"
            />
          </div>

          {/* Center content */}
          <div className="flex-1 flex flex-col items-center px-2">
            {/* Balloons */}
            <div className="mb-2 md:mb-4">
              <img src={balloonImage} alt="Hot air balloons" className="h-10 md:h-16 w-auto" />
            </div>

            {/* Main heading */}
            <h1
              className="text-2xl sm:text-3xl md:text-4xl text-[#b8a894] mb-1 md:mb-2 text-center"
              style={{ fontFamily: "'Fredericka the Great', cursive" }}
            >
              JOVY THOMAS VISUALS
            </h1>

            {/* Tagline */}
            <p
              className="text-xs md:text-sm text-[#9a9a9a] mb-2 md:mb-3 text-center"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              Preserve those moments forever...
            </p>

            {/* Location */}
            <p
              className="text-xs md:text-sm text-[#6b6b6b] text-center px-2"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              Hendersonville-TN-Portrait and Small event Photographer
            </p>
          </div>

          {/* Right badge - hidden on mobile, visible on md+ */}
          <div className="hidden md:block flex-shrink-0">
            <img
              src={portraitMasterBadge}
              alt="Portrait Masters Bronze 2021"
              className="w-20 lg:w-32 h-20 lg:h-32 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Navigation menu */}
      <nav className="border-t border-[#c4b8a4]">
        <div className="max-w-7xl mx-auto px-4">
          {/* Mobile menu button */}
          <div className="md:hidden flex justify-center py-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center gap-2 px-4 py-2 text-[#8b7355] border border-[#c4b8a4] bg-white"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              <span className="text-sm">Menu</span>
            </button>
          </div>

          {/* Mobile menu dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <ul className="flex flex-col items-center gap-2">
                {menuItems.map((item, index) => (
                  <li key={index} className="w-full max-w-xs">
                    <button
                      onClick={() => {
                        onNavigate(item);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-sm transition-colors border border-[#c4b8a4] ${
                        currentPage === item
                          ? "text-[#8b7355] bg-[#f5f2ec]"
                          : "text-[#6b6b6b] bg-white hover:text-[#8b7355] hover:bg-[#f5f2ec]"
                      }`}
                      style={{ fontFamily: "'Courier New', monospace" }}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center justify-center gap-1 py-2 flex-wrap">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => onNavigate(item)}
                  className={`px-3 py-1 text-xs transition-colors border border-[#c4b8a4] ${
                    currentPage === item
                      ? "text-[#8b7355] bg-[#f5f2ec]"
                      : "text-[#6b6b6b] bg-white hover:text-[#8b7355] hover:bg-[#f5f2ec]"
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
