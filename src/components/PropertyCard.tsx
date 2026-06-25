import { motion } from 'framer-motion';
import { Bed, Bath, Move, MapPin } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Button } from '@/components/ui/button';
import { Property, CATEGORY_NAMES } from '@/data/properties';
import { Badge } from '@/components/ui/badge';
import { openWhatsApp } from '@/lib/utils';

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  const handleWhatsApp = () => {
    openWhatsApp(`Hello Apex Realty! I am interested in ${property.title} located in ${property.location}. Can you provide more details?`);
  };

  const isRental = property.category === 'room' || property.category === 'office';
  const listingType = isRental ? 'For Rent' : 'For Sale';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="glass-card rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge className="bg-secondary/90 text-primary border-none backdrop-blur-md font-semibold">
            {listingType}
          </Badge>
          <Badge className="bg-primary/90 text-white border-none backdrop-blur-md">
            {CATEGORY_NAMES[property.category]}
          </Badge>
          {property.category === 'investment' && (
            <Badge className="bg-secondary/90 text-primary border-none backdrop-blur-md">
              High Yield
            </Badge>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-1 text-primary/60 text-xs mb-2">
          <MapPin className="w-3 h-3" />
          <span>{property.location}</span>
        </div>
        <p className="text-muted-foreground text-sm mb-6 line-clamp-2 leading-relaxed">
          {property.description}
        </p>

        {property.features && property.features.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {property.features.slice(0, 3).map((feature) => (
              <span key={feature} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary/5 text-primary/70 border border-primary/10">
                {feature}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-4 border-t border-primary/5 pt-4 mb-6">
          {property.bedrooms && (
            <div className="flex items-center gap-1.5">
              <Bed className="w-4 h-4 text-primary/40" />
              <span className="text-xs font-semibold">{property.bedrooms} Beds</span>
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center gap-1.5">
              <Bath className="w-4 h-4 text-primary/40" />
              <span className="text-xs font-semibold">{property.bathrooms} Baths</span>
            </div>
          )}
          {property.size && (
            <div className="flex items-center gap-1.5">
              <Move className="w-4 h-4 text-primary/40" />
              <span className="text-xs font-semibold">{property.size}</span>
            </div>
          )}
        </div>

        <Button 
          onClick={handleWhatsApp}
          className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-6 h-auto flex items-center justify-center gap-2 group-hover:translate-y-[-4px] transition-all shadow-md active:scale-95 mt-auto"
        >
          <WhatsAppIcon className="w-5 h-5" />
          Inquire on WhatsApp
        </Button>
      </div>
    </motion.div>
  );
};