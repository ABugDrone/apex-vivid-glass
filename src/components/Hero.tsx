import { Button } from '@/components/ui/button';
import { Search, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{ 
          backgroundImage: `url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/fa850f4b-28c7-44e3-b90f-9526d15b28f7/apex-realty-hero-5288e600-1782389180033.webp')`,
        }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-black/20 to-background" />

      <div className="relative z-20 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-secondary/90 text-primary font-semibold text-xs uppercase tracking-wider glass border-secondary/30">
            Real Estate in Bekaji, Jimeta
          </span>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight text-shadow">
            Find Your Dream Property <br />
            <span className="text-secondary">With Apex Realty</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Investment opportunities, land plots, office spaces, and luxury homes. 
            We provide expert valuation and asset management in Adamawa State.
          </p>

          <div className="max-w-3xl mx-auto glass rounded-2xl md:rounded-full p-2 flex flex-col md:flex-row items-stretch md:items-center gap-2">
            <div className="flex-1 flex items-center px-4 gap-3 py-2 md:py-0 border-b md:border-b-0 md:border-r border-white/20">
              <Search className="w-5 h-5 text-white/60" />
              <input 
                type="text" 
                placeholder="Search by location or property type..." 
                className="bg-transparent border-none outline-none text-white placeholder:text-white/60 w-full text-sm"
              />
            </div>
            <div className="flex-1 flex items-center px-4 gap-3 py-2 md:py-0">
              <MapPin className="w-5 h-5 text-white/60" />
              <select className="bg-transparent border-none outline-none text-white placeholder:text-white/60 w-full text-sm appearance-none cursor-pointer">
                <option value="bekaji" className="bg-white text-gray-900">Bekaji, Jimeta</option>
                <option value="extension" className="bg-white text-gray-900">Bekaji Extension</option>
                <option value="gra" className="bg-white text-gray-900">Bekaji G.R.A</option>
              </select>
            </div>
            <Button className="bg-secondary hover:bg-secondary/90 text-primary font-bold rounded-full px-8 py-6 h-auto shadow-lg hover:scale-105 transition-all">
              Search Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
