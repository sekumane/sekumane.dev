import React from 'react';
import { Code2, Coffee, GamepadIcon, Heart } from 'lucide-react';

const About: React.FC = () => {
  const interests = [
    { icon: Code2, text: "Learning new technologies" },
    { icon: Coffee, text: "Open-source contributions" },
    { icon: GamepadIcon, text: "Gaming (Open-World, FPS, Adventure)" },
    { icon: Heart, text: "Building innovative solutions" }
  ];

  return (
    <section id="about" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-black/40 backdrop-blur-md border border-white/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">A little more about me...</h3>
              <div className="bg-black/60 rounded-lg p-4 mb-6 font-mono text-sm overflow-x-auto">
                <pre className="text-green-400">
{`const Sekumane = {
  pronouns: "he" | "him",
  code: [
    "Javascript", "Typescript", "HTML", "CSS",
    "Python", "Java", "Kotlin", "Dart", "Lua"
  ],
  tools: [
    "React", "Redux", "Node", "Styled-Components",
    "Jest", "Docker", "Android-Studio", "Flutter", "Figma"
  ]
}`}
                </pre>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate Software Engineer specializing in Discord.JS, Android, iOS, and Web development. 
                My journey spans from leading emergent.sh as CEO to contributing to cutting-edge projects like bolt.new and bolt.diy.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">What I Love</h3>
              <div className="grid gap-4">
                {interests.map((interest, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200">
                    <div className="bg-white/5 p-2 rounded-lg">
                      <interest.icon size={20} className="text-white" />
                    </div>
                    <span className="text-gray-300">{interest.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <div className="bg-black/40 backdrop-blur-md border border-white/5 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Quick Facts</h3>
              <div className="space-y-3 text-gray-300">
                <p>🚀 Currently developing at bolt.new</p>
                <p>🌟 Active open-source contributor</p>
                <p>💼 Former CEO with entrepreneurial experience</p>
                <p>🎮 Gaming enthusiast in spare time</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;