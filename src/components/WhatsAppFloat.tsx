import { WhatsAppIcon } from './WhatsAppIcon';
import { motion } from 'framer-motion';
import { openWhatsApp } from '@/lib/utils';

export const WhatsAppFloat = () => {
  const handleClick = () => {
    openWhatsApp('Hello Apex Realty! I would like to inquire about your properties.');
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 group"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7" />
      <span className="absolute -top-10 right-0 bg-white text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat with us
      </span>
    </motion.button>
  );
};
