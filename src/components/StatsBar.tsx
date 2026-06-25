import { motion } from 'framer-motion';

const stats = [
  { value: '500+', label: 'Properties Sold' },
  { value: '1,200+', label: 'Happy Clients' },
  { value: '10+', label: 'Years Experience' },
  { value: '₦2B+', label: 'Assets Managed' },
];

export const StatsBar = () => {
  return (
    <section className="relative z-30 -mt-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
