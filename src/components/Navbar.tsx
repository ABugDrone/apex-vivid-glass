import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Listings', href: '#listings' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto glass rounded-2xl md:rounded-full px-4 md:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
            A
          </div>
          <span className="text-lg md:text-xl font-bold text-primary tracking-tight">
            Apex Realty
          </span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-md transition-all hover:scale-105 active:scale-95">
            Get Started
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-7xl glass rounded-2xl p-4 space-y-3 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              onClick={() => setMobileOpen(false)} 
              className="block px-4 py-2 text-sm font-medium rounded-lg hover:bg-primary/10 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl mt-2">
            Get Started
          </Button>
        </div>
      )}
    </nav>
  );
};