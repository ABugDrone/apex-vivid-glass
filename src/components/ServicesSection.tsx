import { motion } from 'framer-motion';
import { TrendingUp, Building2, Map, Briefcase, Home, DoorOpen } from 'lucide-react';

const services = [
  {
    icon: TrendingUp,
    title: 'Investment Opportunities',
    description: 'High-yield real estate investments with guaranteed returns and professional asset management.',
    color: 'bg-primary',
  },
  {
    icon: Building2,
    title: 'Asset Management',
    description: 'Expert property valuation and management services for residential and commercial assets.',
    color: 'bg-secondary',
  },
  {
    icon: Map,
    title: 'Land Plots Sales',
    description: 'Prime land plots in Bekaji with proper documentation and C of O available.',
    color: 'bg-primary',
  },
  {
    icon: Briefcase,
    title: 'Office Spaces',
    description: 'Modern office spaces for rent and lease with full amenities and security.',
    color: 'bg-secondary',
  },
  {
    icon: Home,
    title: 'Houses & Buildings',
    description: 'Luxury homes and buildings for sale or rent in prime locations across Jimeta.',
    color: 'bg-primary',
  },
  {
    icon: DoorOpen,
    title: 'Rooms for Rent',
    description: 'Affordable and comfortable rooms for rent in secure, well-maintained compounds.',
    color: 'bg-secondary',
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-4 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 text-primary font-semibold text-xs uppercase tracking-wider"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-primary mb-4"
          >
            What We Offer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Comprehensive real estate solutions tailored for the growing market in Adamawa State.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/60 backdrop-blur-lg border border-white/40 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
