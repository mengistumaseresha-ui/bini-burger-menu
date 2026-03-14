import React from 'react';
import { motion } from 'framer-motion';
import { menuItems, MenuItem } from '../lib/data';
import { Plus, ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';

const MenuCard = ({ item, index }: { item: MenuItem; index: number }) => {
  const addToCart = () => {
    toast.success(`${item.amharicName} ወደ ቅርጫት ተጨምሯል!`, {
      description: `${item.name} added to cart.`,
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur shadow-sm rounded-full text-[10px] font-bold uppercase tracking-wider text-orange-600">
            {item.category}
          </span>
        </div>
        <button 
          onClick={addToCart}
          className="absolute bottom-4 right-4 w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
        >
          <Plus size={20} />
        </button>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-stone-900">{item.amharicName}</h3>
            <p className="text-sm text-stone-500 font-medium">{item.name}</p>
          </div>
          <p className="text-orange-600 font-black text-xl">{item.price} ETB</p>
        </div>
        <p className="text-stone-600 text-sm leading-relaxed mt-4 line-clamp-2">
          {item.description}
        </p>
        
        <div className="mt-6 pt-6 border-t border-stone-100 flex items-center justify-between">
          <div className="flex items-center gap-1 text-stone-400">
            <span className="text-xs">Coca-Cola Included</span>
          </div>
          <button 
            onClick={addToCart}
            className="flex items-center gap-2 text-stone-900 font-bold text-sm hover:text-orange-600 transition-colors"
          >
            አሁኑኑ እዘዝ <Plus size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Menu = () => {
  return (
    <section id="menu" className="py-24 bg-stone-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">የእኛ ሜኑ</h2>
          <h3 className="text-4xl md:text-5xl font-black text-stone-900 mb-6">ቢኒ በርገር ሜኑ</h3>
          <p className="text-stone-600">
            የእኛ ምርጥ የሆኑ 5 በርገሮች ከቀዝቃዛ ኮካ ኮላ ጋር ለእርስዎ ተዘጋጅተዋል። ዛሬውኑ ይሞክሯቸው!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <MenuCard key={item.id} item={item} index={index} />
          ))}
          
          {/* Coca Cola Highlight Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-red-600 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mt-12 overflow-hidden relative"
          >
            <div className="relative z-10 flex-1">
              <h4 className="text-white font-black text-3xl md:text-5xl mb-4 italic">ከእያንዳንዱ በርገር ጋር</h4>
              <p className="text-red-100 text-xl md:text-2xl mb-8 max-w-md">ቀዝቃዛ ኮካ ኮላ በነፃ ያግኙ!</p>
              <button className="px-8 py-3 bg-white text-red-600 font-bold rounded-xl hover:bg-stone-100 transition-colors">
                ዝርዝሩን ይመልከቱ
              </button>
            </div>
            <div className="flex-1 relative">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/ae310898-4d3e-46ec-ae6a-1f326ba1eb31/hero-burger-with-coke-a353409a-1773526719050.webp" 
                alt="Coke and Burger" 
                className="w-full h-64 object-cover rounded-2xl shadow-2xl rotate-3"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-700 rounded-full flex items-center justify-center text-white font-black text-xl border-4 border-white">
                FREE
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Menu;