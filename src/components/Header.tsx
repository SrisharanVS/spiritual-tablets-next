import { useState, useRef, useEffect } from 'react';
import * as React from 'react';
import { Menu, X, Search, Facebook, Twitter, Instagram, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type NavItem = {
  name: string;
  href: string;
  children?: NavItem[];
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const subDropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleDropdownEnter = (itemName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(itemName);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
      setOpenSubDropdown(null);
    }, 150);
  };

  const handleSubDropdownEnter = (itemName: string) => {
    if (subDropdownTimeoutRef.current) {
      clearTimeout(subDropdownTimeoutRef.current);
    }
    setOpenSubDropdown(itemName);
  };

  const handleSubDropdownLeave = () => {
    subDropdownTimeoutRef.current = setTimeout(() => {
      setOpenSubDropdown(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
      if (subDropdownTimeoutRef.current) {
        clearTimeout(subDropdownTimeoutRef.current);
      }
    };
  }, []);

  const navItems: NavItem[] = [
    { name: 'Home', href: '/' },
    { 
      name: 'About',
      href: '/about',
      children: [
        { name: 'Story behind Spiritual Tablets', href: '/about' },
        { name: 'Trusts', href: '/about/trusts' },
        { 
          name: 'Facilities',
          href: '/about/facilities',
          children: [
            { name: 'Admission Centers', href: '/about/facilities/admission-centers' },
            { name: 'Primary Centres', href: '/about/facilities/admission-centers/primary-centres' },
            { name: 'Virtual Wellness Centres', href: '/about/facilities/admission-centers/virtual-wellness-centres' }
          ]
        },
        { 
          name: 'Team',
          href: '/about/team',
          children: [
            { name: 'Spiritual Doctors', href: '/about/spiritual-doctors' },
            { name: 'Counsellors', href: '/about/team/counsellors' }
          ]
        },
        { name: 'Associations', href: '/about/associations' },
      ]
    },
    { name: 'Gallery', href: '#gallery' },
    { 
      name: 'Events', 
      href: '#events',
      children: [
        { name: 'Meditation', href: '/meditation' },
        { name: 'Workshops', href: '/workshops' },
        { name: 'Anandho Brahma', href: '/anandho_brahma' },
        { name: 'Global Annual Programs', href: '/global_annual_programs' }
      ]
    },
    { 
      name: 'Resources',
      href: '#resources',
      children: [
        { 
          name: 'Audio', 
          href: '#audio',
          children: [
            { name: 'Telugu', href: '/resources/audio/telugu' },
            { name: 'Hindi', href: '/resources/audio/hindi' },
            { name: 'Marathi', href: '/resources/audio/marathi' },
            { name: 'Gujarati', href: '/resources/audio/gujarati' }
          ]
        },
        { 
          name: 'Books', 
          href: '#books',
          children: [
            { name: 'English', href: '/resources/books/english' },
            { name: 'Telugu', href: '/resources/books/telugu' },
            { name: 'Tamil', href: '/resources/books/tamil' },
            { name: 'Hindi', href: '/resources/books/hindi' }
          ]
        },
        { 
          name: 'Video', 
          href: '#video',
          children: [
            { name: 'Movies', href: '/resources/video/movies' },
            { name: 'Short Films', href: '/resources/video/shortfilms' },
            { name: 'Spiritual Disclosures', href: '/resources/video/spiritual-disclosures' }
          ]
        }
      ]
     },
    { name: 'Locations', href: '/locations' },
    { name: 'Register', href: '/register' },
    { name: 'Contact', href: '/contact' }
  ];

  const renderNavItem = (item: NavItem, isMobile = false, level = 0): React.ReactNode => {
    if (item.children) {
      // Handle dropdown items
      if (isMobile) {
        return (
          <div key={item.name} className="space-y-2">
            <div className="text-gray-700 font-medium">{item.name}</div>
            <div className="ml-4 space-y-2">
              
              {item.children.map((child: NavItem) => (
                <div key={child.name}>
                  {child.children ? (
                    renderNavItem(child, true, level + 1)
                  ) : (
                    <Link
                      href={child.href}
                      className="block text-gray-600 hover:text-spiritual-green transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {child.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      }

      const isOpen = openDropdown === item.name;

      return (
        <div 
          key={item.name} 
          className="relative"
          onMouseEnter={() => handleDropdownEnter(item.name)}
          onMouseLeave={handleDropdownLeave}
        >
          <button
            className="flex items-center space-x-1 text-gray-700 hover:text-spiritual-green transition-colors font-medium"
          >
            <span>{item.name}</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>
          {isOpen && (
            <div 
              className="absolute left-0 top-full bg-white border rounded-md shadow-md z-50 w-56 transition-colors duration-300"
              style={{ backgroundColor: 'white' }}
              onMouseEnter={() => handleDropdownEnter(item.name)}
              onMouseLeave={handleDropdownLeave}
            >
              {item.children.map((child: NavItem) => (
                <div key={child.name} className="relative">
                  {child.children ? (
                    // Sub-dropdown item
                    <div 
                      className="relative group"
                      onMouseEnter={() => handleSubDropdownEnter(child.name)}
                      onMouseLeave={handleSubDropdownLeave}
                    >
                      <button
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-spiritual-green/10 hover:text-spiritual-green transition-colors flex items-center justify-between"
                      >
                        <span>{child.name}</span>
                        <ChevronDown className={`h-3 w-3 transition-transform ${openSubDropdown === child.name ? 'rotate-180' : ''}`} />
                      </button>
                      {openSubDropdown === child.name && (
                        <div 
                          className="absolute left-full top-0 ml-0 bg-white border rounded-md shadow-md z-50 w-48 transition-colors duration-300"
                          style={{ backgroundColor: 'white' }}
                          onMouseEnter={() => handleSubDropdownEnter(child.name)}
                          onMouseLeave={handleSubDropdownLeave}
                        >
                          {child.children.map((subChild: NavItem) => (
                            <Link
                              key={subChild.name}
                              href={subChild.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-spiritual-green/10 hover:text-spiritual-green transition-colors"
                              onClick={() => {
                                setOpenDropdown(null);
                                setOpenSubDropdown(null);
                              }}
                            >
                              {subChild.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    // Regular dropdown item
                    <Link
                      href ={child.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-spiritual-green/10 hover:text-spiritual-green transition-colors"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {child.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

    // Handle regular navigation items
    if (item.href.startsWith('/')) {
      return (
        <Link
          key={item.name}
          href={item.href}
          className="text-gray-700 hover:text-spiritual-green transition-colors duration-300 font-medium"
          onClick={isMobile ? () => setIsMenuOpen(false) : undefined}
        >
          {item.name}
        </Link>
      );
    }

    return (
      <a
        key={item.name}
        href={item.href}
        className="text-gray-700 hover:text-spiritual-green transition-colors duration-300 font-medium"
        onClick={isMobile ? () => setIsMenuOpen(false) : undefined}
      >
        {item.name}
      </a>
    );
  };

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-spiritual-green text-white text-sm py-2">
        <div className="w-full px-2 flex items-center justify-center gap-4 text-center lg:container lg:mx-auto lg:px-4">
          <span>✨ Latest Workshops</span>
          <span>🌟 Global Annual Programs</span>
          <span>👥 Online Zoom Sessions Patient God</span>
        </div>
      </div>

      <header className="bg-white shadow-sm border-b">
        <div className="w-full px-2 py-2 lg:container lg:mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="https://swopgpgsdcqwvvnpeqvd.supabase.co/storage/v1/object/public/public-uploads//ST-02.png"
                alt="Spiritual Tablets Logo"
                className="h-12 w-auto lg:h-16 object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 relative overflow-visible">
              {navItems.map((item) => renderNavItem(item))}
            </nav>

            {/* Right side buttons */}
            <div className="hidden lg:flex items-center space-x-4">
	    	<a
		  key="Donate"
		  href="/donate"
		  className="bg-spiritual-green hover:bg-spiritual-green/90 text-white "
		  style={{
            		display: 'inline-block',
            		padding: '10px 20px',
            		backgroundColor: '#008000', // Green color
            		color: 'white',
            		textAlign: 'center',
            		borderRadius: '5px',
            		textDecoration: 'none', // Remove underline
            		fontSize: '16px',
            		transition: 'background-color 0.3s ease',
          	  }}
		>
		  Donate
		</a>
                {/* Social Icons */}
                <a href="https://x.com/dhyanaarogyam" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" className="text-gray-500 hover:text-black transition-colors">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M17.53 2H21.5l-7.44 8.47L23 22h-7.19l-5.6-7.13L3.97 22H0l7.97-9.07L1 2h7.32l5.2 6.64L17.53 2zm-1.23 17.3h2.01L6.59 3.29H4.44l11.86 15.99z"></path></svg>
                </a>
                <a href="https://www.facebook.com/spiritualtabletsofficial/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-500 hover:text-blue-600 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/spiritualtabletsgk/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-pink-500 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                {navItems.map((item) => renderNavItem(item, true))}
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
