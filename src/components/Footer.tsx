import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-4 relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-300">
              © 2025 Sekumane. Built with{' '}
              <Heart size={16} className="inline text-red-400 mx-1" />
              using React & TypeScript
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/sekumane"
              className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:enqryptedd@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-gray-400 text-sm">
            Developer at bolt.new • Contributor to bolt.diy • Ex-CEO of emergent.sh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;