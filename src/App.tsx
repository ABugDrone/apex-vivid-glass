import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { ServicesSection } from "@/components/ServicesSection";
import { ListingsSection } from "@/components/ListingsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Toaster } from "@/components/ui/sonner";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => { document.documentElement.style.scrollBehavior = ''; };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/10 selection:text-primary scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <ServicesSection />
        <ListingsSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster position="top-center" />
      <WhatsAppFloat />
    </div>
  );
}
export default App;
