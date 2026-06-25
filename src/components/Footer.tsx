import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-green-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary font-bold text-xl">
                A
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Apex Realty
              </span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Leading real estate agency in Jimeta, Adamawa State. 
              We bridge the gap between dream properties and reality.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-secondary">Quick Links</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#" className="hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#listings" className="hover:text-secondary transition-colors">Listings</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-secondary">Services</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#" className="hover:text-secondary transition-colors">Property Valuation</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Investment Consulting</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Land Sales</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Asset Management</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-secondary">Newsletter</h4>
            <p className="text-white/70 mb-6">Subscribe to get latest property updates.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border-none outline-none rounded-lg px-4 py-2 w-full text-white placeholder:text-white/40 focus:ring-2 ring-secondary"
              />
              <button className="bg-secondary text-primary font-bold px-4 py-2 rounded-lg hover:scale-105 transition-all">
                Go
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Apex Realty Limited. All rights reserved. Located in Bekaji, Jimeta, Adamawa.</p>
        </div>
      </div>
    </footer>
  );
};
