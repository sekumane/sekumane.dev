import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative z-10 px-4">
      <div className="text-center max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Hi, I'm <span className="text-white">Sekumane</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Software Engineer | Full-Stack Developer | Open Source Contributor
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Developer at <span className="text-white font-semibold">bolt.new</span>, 
            Contributor to <span className="text-white font-semibold">bolt.diy</span>, 
            Ex-CEO of <span className="text-white font-semibold">emergent.sh</span>
          </p>
        </div>

        <div className="animate-fade-in-up-delay flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-all duration-200 transform hover:scale-105">
            View My Work
          </button>
          <button className="border border-white/20 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-200 transform hover:scale-105">
            Get In Touch
          </button>
        </div>

        <div className="animate-fade-in-up-delay-2 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
            <Github size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;