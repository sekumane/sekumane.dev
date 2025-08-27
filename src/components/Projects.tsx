import React from 'react';
import { ExternalLink, Github, Building, Code, Users } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "bolt.new",
      role: "Developer",
      description: "Working as a developer on bolt.new, StackBlitz's revolutionary AI-powered full-stack web development platform that enables instant coding in the browser.",
      technologies: ["TypeScript", "React", "Node.js", "AI Integration", "WebContainers"],
      icon: Code,
      type: "Professional",
      status: "Current",
      color: "from-gray-600 to-gray-800"
    },
    {
      title: "bolt.diy",
      role: "Open Source Contributor",
      description: "Contributing to the open-source version of Bolt, helping build and improve the community-driven web development platform with AI assistance.",
      technologies: ["TypeScript", "React", "Open Source", "Community Development"],
      icon: Users,
      type: "Open Source",
      status: "Active",
      color: "from-gray-700 to-gray-900"
    },
    {
      title: "emergent.sh",
      role: "Ex-CEO & Founder",
      description: "Founded and led emergent.sh as CEO, building innovative solutions and leading a team to create cutting-edge technology products in the developer tools space.",
      technologies: ["Leadership", "Strategy", "Product Development", "Team Management"],
      icon: Building,
      type: "Entrepreneurial",
      status: "Former",
      color: "from-gray-800 to-black"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Professional Experience</h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            From founding and leading companies to contributing to cutting-edge AI development platforms, 
            here's my professional journey in tech.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-black/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex items-center mb-4 lg:mb-0">
                  <div className={`bg-gradient-to-r ${project.color} p-3 rounded-lg mr-4`}>
                    <project.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <p className="text-gray-300 font-medium">{project.role}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Current' ? 'bg-white/20 text-white' :
                    project.status === 'Active' ? 'bg-white/15 text-gray-200' :
                    'bg-white/10 text-gray-300'
                  }`}>
                    {project.status}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-gray-300">
                    {project.type}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-white/5 text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.title === 'bolt.new' && (
                <div className="flex gap-4">
                  <a 
                    href="https://bolt.new" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Visit Platform
                  </a>
                </div>
              )}

              {project.title === 'bolt.diy' && (
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/stackblitz/bolt.new" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
                  >
                    <Github size={16} className="mr-2" />
                    View Repository
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;