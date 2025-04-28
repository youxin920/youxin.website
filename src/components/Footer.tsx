
import React from 'react';
import Logo from './Logo';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-youxin-darkgray text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-gray-400 mb-6">
              בניית אתרים מקצועיים ואחסון מהיר ואמין לעסקים בכל גודל.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-youxin-purple transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">קישורים מהירים</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">אודות</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">שירותים</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">צור קשר</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">פרטי התקשרות</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail size={20} className="text-youxin-purple ml-2" />
                <a href="mailto:info@youxin.website" className="text-gray-400 hover:text-white transition-colors">
                  info@youxin.website
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-youxin-purple ml-2" />
                <a href="tel:+972123456789" className="text-gray-400 hover:text-white transition-colors">
                  072-1234567
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          <p>© 2025 Youxin – כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
