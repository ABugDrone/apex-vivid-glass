import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { toast } from 'sonner';
import { openWhatsApp, formatInquiryMessage } from '@/lib/utils';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Investment Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = formatInquiryMessage(formData);
    openWhatsApp(whatsappMessage);
    toast.success('Redirecting to WhatsApp...');
  };

  return (
    <section id="contact" className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              Get in Touch <br />
              <span className="text-secondary">With Our Experts</span>
            </h2>
            <p className="text-muted-foreground mb-10 text-lg">
              Have questions about investment opportunities or need a property valuation? 
              Our team in Bekaji is ready to assist you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Office Location</h4>
                  <p className="text-muted-foreground">Plot 14, Main Road, Bekaji, Jimeta, Adamawa State.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Phone Number</h4>
                  <p className="text-muted-foreground">+234 800 123 4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Email Address</h4>
                  <p className="text-muted-foreground">contact@apexrealty.com</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 rounded-[2.5rem] shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary/70 ml-1">Full Name</label>
                  <Input 
                    required
                    placeholder="John Doe" 
                    className="bg-white/50 border-primary/10 focus:border-primary/30 rounded-xl h-12"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary/70 ml-1">Email Address</label>
                  <Input 
                    required
                    type="email"
                    placeholder="john@example.com" 
                    className="bg-white/50 border-primary/10 focus:border-primary/30 rounded-xl h-12"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary/70 ml-1">Subject</label>
                <select 
                  className="w-full bg-white/50 border border-primary/10 focus:border-primary/30 rounded-xl h-12 px-3 text-sm outline-none appearance-none"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                >
                  <option>Investment Inquiry</option>
                  <option>Property Valuation</option>
                  <option>Land Purchase</option>
                  <option>Rent/Lease Request</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary/70 ml-1">Message</label>
                <Textarea 
                  required
                  placeholder="How can we help you today?" 
                  className="bg-white/50 border-primary/10 focus:border-primary/30 rounded-xl min-h-[150px] resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-7 h-auto text-lg font-bold shadow-xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98]">
                <WhatsAppIcon className="w-6 h-6" />
                Send via WhatsApp
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};