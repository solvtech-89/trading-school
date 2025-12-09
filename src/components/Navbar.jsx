import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ onPremiumClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Beranda', href: '#hero' },
    { label: 'Community Premium', href: '#', premium: true },
    { label: 'Fitur Affiliate Trading School', href: '#features' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/logo.jpg" alt="Trading School" className="h-12 w-12 rounded-full" />
            <span className="text-xl font-bold text-gradient">Trading School</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="btn-primary">Join</button>
            
            {/* Three Dots Menu */}
            <div className="relative group">
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <div className="flex flex-col space-y-1">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                </div>
              </button>
              
              {/* Dropdown */}
              <div className="absolute right-0 mt-2 w-64 glass-card p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={(e) => {
                      if (item.premium) {
                        e.preventDefault();
                        onPremiumClick();
                      }
                    }}
                    className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-colors text-sm"
                  >
                    {item.label}
                    {item.premium && <span className="ml-2 text-xs text-primary">★</span>}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 glass-card p-4 animate-fade-in">
            <button className="btn-primary w-full mb-4">Join</button>
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => {
                  if (item.premium) {
                    e.preventDefault();
                    onPremiumClick();
                  }
                  setIsMenuOpen(false);
                }}
                className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                {item.label}
                {item.premium && <span className="ml-2 text-xs text-primary">★</span>}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
