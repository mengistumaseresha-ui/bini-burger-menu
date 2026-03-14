import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Flame } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/ae310898-4d3e-46ec-ae6a-1f326ba1eb31/hero-burger-with-coke-a353409a-1773526719050.webp" 
          alt="Bini Burger Hero" 
          className="w-full h-full object-cover brightness-[0.4]"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-orange-600/20 border border-orange-600/30 rounded-full mb-6"
          >
            <Flame size={16} className="text-orange-500 fill-orange-500" />
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">ምርጥ ጣዕም • Best Taste</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white leading-tight mb-6"
          >
            ቢኒ በርገር <br />
            <span className="text-orange-500">በጣም ጣፋጭ</span> የሆኑ በርገሮች
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-300 mb-10 max-w-lg leading-relaxed"
          >
            ትኩስ እና ጥራት ያላቸውን ግብአቶች በመጠቀም የተዘጋጁ ጣፋጭ በርገሮች ከቀዝቃዛ ኮካ ኮላ ጋር።
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#menu" 
              className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group"
            >
              አሁኑኑ ይዘዙ
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#menu" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-xl border border-white/20 transition-all text-center"
            >
              ሜኑን ይመልከቱ
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;