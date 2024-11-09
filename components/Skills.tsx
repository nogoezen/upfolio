'use client'

import React from 'react'
import { Code, Globe, Server } from 'lucide-react'

interface Skill {
  category: string;
  icon: React.ReactNode;
  technologies: string[];
  color: string;
}

const skills: Skill[] = [
  {
    category: "Frontend Development",
    icon: <Code className="w-8 h-8" />,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "from-blue-400 to-blue-600"
  },
  {
    category: "Backend Development",
    icon: <Globe className="w-8 h-8" />,
    technologies: ["PHP", "Node.js", "Laravel", "Drupal", "Redux"],
    color: "from-green-400 to-green-600"
  },
  {
    category: "Other Skills",
    icon: <Server className="w-8 h-8" />,
    technologies: ["Git", "Figma", "Responsive Design", "SEO", "Performance Optimization"],
    color: "from-purple-400 to-purple-600"
  }
]

const SkillCard: React.FC<Skill> = ({ category, icon, technologies, color }) => (
  <div className={`bg-gradient-to-br ${color} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
    <div className="flex items-center mb-4">
      <div className="bg-white/20 rounded-full p-3 mr-4">
        {icon}
      </div>
      <h3 className="text-2xl font-bold">{category}</h3>
    </div>
    <ul className="space-y-2">
      {technologies.map((tech) => (
        <li key={tech} className="flex items-center">
          <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
          {tech}
        </li>
      ))}
    </ul>
  </div>
)

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <SkillCard key={skill.category} {...skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills