import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories, properties } from '@/data/properties';
import { PropertyCard } from './PropertyCard';
import { Button } from '@/components/ui/button';

export const ListingsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProperties = activeCategory === 'all' 
    ? properties 
    : properties.filter(p => p.category === activeCategory);

  return (
    <section id="listings" className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-primary mb-4"
          >
            Explore Our Collections
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            From high-yield investments to luxury residential buildings, find the perfect property that suits your needs in Bekaji, Jimeta.
          </motion.p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full px-6 transition-all duration-300 ${
                activeCategory === category.id 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'bg-white/50 backdrop-blur-sm hover:bg-white hover:text-primary border-primary/20'
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No properties found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};
