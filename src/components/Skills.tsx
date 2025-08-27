import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Styled Components", "Redux", "Angular"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "NestJS", "Python", "Java", "GraphQL", "REST APIs", "MongoDB", "PostgreSQL"]
    },
    {
      title: "Mobile",
      skills: ["Flutter", "Dart", "Android Studio", "Kotlin", "iOS Development", "React Native"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "Git", "GitHub Actions", "Google Cloud", "Heroku", "Webpack", "Rollup", "Jest"]
    },
    {
      title: "Design & Others",
      skills: ["Figma", "D3.js", "Discord.js", "RxJS", "Apollo GraphQL", "Prettier", "ESLint"]
    }
  ];

  const techBadges = [
    "https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white",
    "https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white",
    "https://img.shields.io/badge/-Docker-46a2f1?style=flat-square&logo=docker&logoColor=white",
    "https://img.shields.io/badge/-Node.js-43853d?style=flat-square&logo=Node.js&logoColor=white",
    "https://img.shields.io/badge/-MongoDB-13aa52?style=flat-square&logo=mongodb&logoColor=white",
    "https://img.shields.io/badge/-GraphQL-E10098?style=flat-square&logo=graphql&logoColor=white",
    "https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=redux&logoColor=white",
    "https://img.shields.io/badge/-Styled_Components-db7092?style=flat-square&logo=styled-components&logoColor=white",
    "https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white",
    "https://img.shields.io/badge/-Angular-DD0031?style=flat-square&logo=angular&logoColor=white",
    "https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white",
    "https://img.shields.io/badge/-Sass-CC6699?style=flat-square&logo=sass&logoColor=white"
  ];

  return (
    <section id="skills" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of development experience across multiple platforms and technologies.
          </p>
        </div>

        {/* Tech Badges */}
        <div className="mb-16 bg-black/40 backdrop-blur-md border border-white/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {techBadges.map((badge, index) => (
              <img
                key={index}
                src={badge}
                alt="Tech badge"
                className="transition-transform duration-200 hover:scale-110"
              />
            ))}
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-black/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-white/5 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-white/10 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;