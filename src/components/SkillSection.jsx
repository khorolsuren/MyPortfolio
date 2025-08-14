import { useState, useEffect } from "react";
import { 
  Globe, Zap, Code, FileText, Palette, Gamepad,
  Circle, Server, Database, BarChart3, GitBranch,
  Container, Figma, Monitor,
  Snowflake
} from "lucide-react";

const skills = [
  // Frontend
  { name: "HTML/CSS", category: "frontend", icon: Globe, color: "text-orange-400" },
  { name: "JavaScript", category: "frontend", icon: Zap, color: "text-yellow-400" },
  { name: "React", category: "frontend", icon: Code, color: "text-blue-400" },
  { name: "TypeScript", category: "frontend", icon: FileText, color: "text-blue-500" },
  { name: "Tailwind CSS", category: "frontend", icon: Palette, color: "text-teal-400" },
  { name: "Python", category: "frontend", icon: Gamepad, color: "text-gray-300" },

  // Backend
  { name: "Node.js", category: "backend", icon: Circle, color: "text-green-400" },
  { name: "Snowflake", category: "backend", icon: Snowflake, color: "text-gray-400" },
  { name: "MongoDB", category: "backend", icon: Database, color: "text-green-500" },
  { name: "PostgreSQL", category: "backend", icon: Database, color: "text-blue-600" },
  { name: "GraphQL", category: "backend", icon: BarChart3, color: "text-pink-400" },

  // Tools
  { name: "Git/GitHub", category: "tools", icon: GitBranch, color: "text-purple-400" },
  { name: "Docker", category: "tools", icon: Container, color: "text-blue-400" },
  { name: "Figma", category: "tools", icon: Figma, color: "text-red-400" },
  { name: "VS Code", category: "tools", icon: Monitor, color: "text-blue-500" },
  { name: "Kubernetes", category: "tools", icon: Server, color: "text-blue-500" },
];

const experiences = [
  {
    title: "Database Analyst",
    company: "GE Healthcare / Novo Nordisk / Nissan – Japan",
    icon: "🗄️",
    period: "Jan 2024 – Aug 2025",
    bullets: [
      "Designed & implemented automated data pipelines using Python & DBT",
      "Optimized Snowflake queries by 30% via schema improvements",
      "Maintained secure, scalable data infrastructure across departments"
    ]
  },
  {
    title: "Front-End Engineer",
    company: "Fullout / TechnoPro – Japan",
    icon: "🎨",
    period: "2020 – 2023",
    bullets: [
      "Improved system maintainability, reducing debugging time by 20%",
      "Led UI enhancements & modernization of internal tools"
    ]
  },
  {
    title: "Cybersecurity Trainee",
    company: "Ministry of Justice – Korea",
    icon: "🔒",
    period: "Jun 2019 – 2020",
    bullets: [
      "Participated in cybersecurity training & incident response drills",
      "Assisted in detecting & mitigating vulnerabilities in legacy systems"
    ]
  },
  {
    title: "Software Developer",
    company: "Mongolian Immigration Agency – Mongolia",
    icon: "🖥️",
    period: "2017 – 2019",
    bullets: [
      "Built & managed Apache & Postfix servers on Linux",
      "Maintained databases & mail servers ensuring 99.9% uptime"
    ]
  }
];

export const SkillSection = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Core Skills */}
        <h2 className="text-center text-4xl font-extrabold mb-12">
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Core Skills
          </span>
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mb-20">
          {skills.map((skill, idx) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center p-5 rounded-xl
                bg-gray-800/40 backdrop-blur-md border border-gray-700 shadow-lg
                hover:scale-105 hover:shadow-indigo-500/20 transition-all duration-300"
              >
                <IconComponent className={`w-8 h-8 mb-3 ${skill.color}`} />
                <span className="text-gray-200 font-semibold text-sm">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Experience */}
        <h2 className="text-center text-4xl font-extrabold mb-12">
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        {/* Timeline Style */}
        <div className="relative border-l border-gray-700 pl-6 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              <span className="absolute -left-3 w-6 h-6 bg-indigo-500 rounded-full border-4 border-gray-900"></span>
              <div className="bg-gray-800/40 p-6 rounded-xl border border-gray-700 hover:bg-gray-800/70 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    {exp.icon} {exp.title}
                  </h3>
                  <span className="text-sm text-gray-400">{exp.period}</span>
                </div>
                <p className="text-gray-400 font-medium mb-2">📍 {exp.company}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 pl-2">
                  {exp.bullets.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};