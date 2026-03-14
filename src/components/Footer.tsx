import React from 'react';
import { Utensils, Facebook, Instagram, Twitter, Phone, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                <Utensils size={24} />
              </div>
              <h1 className="text-xl font-bold tracking-tight">ቢኒ በርገር</h1>
            </div>
            <p className="text-stone-400 leading-relaxed">
              በአዲስ አበባ ምርጥ ጣዕም ያላቸውን በርገሮች እናቀርባለን። ጥራት የእኛ መለያ ነው።
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">ፈጣን ሊንኮች</h4>
            <ul className="space-y-4 text-stone-400">
              <li><a href="#home" className="hover:text-white transition-colors">ቤት</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">ሜኑ</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">ስለ እኛ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">አድራሻ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">የስራ ሰዓት</h4>
            <ul className="space-y-4 text-stone-400">
              <li className="flex justify-between">
                <span>ሰኞ - አርብ</span>
                <span>8:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>ቅዳሜ - እሁድ</span>
                <span>10:00 AM - 11:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">አግኙን</h4>
            <ul className="space-y-4 text-stone-400">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-orange-600 shrink-0" />
                <span>ቦሌ፣ አዲስ አበባ፣ ኢትዮጵያ</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-orange-600 shrink-0" />
                <span>+251 911 123 456</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-orange-600 shrink-0" />
                <span>info@biniburger.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-stone-500 text-sm">
          <p>© {new Date().getFullYear()} ቢኒ በርገር (Bini Burger). መብቱ በህግ የተጠበቀ ነው።</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;