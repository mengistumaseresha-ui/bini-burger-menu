import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Footer from './components/Footer';
import { Toaster } from 'sonner';
import { Phone } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-orange-100 selection:text-orange-900">
      <Navbar />
      <main>
        <Hero />
        <Menu />
      </main>
      <Footer />
      
      {/* Floating Call Button for Mobile */}
      <a 
        href="tel:+251911123456" 
        className="fixed bottom-6 right-6 z-40 bg-orange-600 text-white p-4 rounded-full shadow-2xl md:hidden hover:scale-110 transition-transform active:scale-95"
      >
        <Phone size={24} />
      </a>

      <Toaster position="top-center" expand={true} richColors />
    </div>
  );
}

export default App;