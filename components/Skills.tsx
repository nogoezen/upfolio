'use client'

import React from 'react'
import { Code, Globe, Server } from 'lucide-react'
import { motion } from 'framer-motion'

interface Skill {
  category: string;
  icon: React.ReactNode;
  technologies: Array<{
    name: string;
    proficiency: number;
  }>;
  color: string;
}

const skills: Skill[] = [
  {
    category: "Frontend Development",
    icon: <Code className="w-8 h-8" />,
    technologies: [
      { name: "React", proficiency: 90 },
      { name: "Next.js", proficiency: 85 },
      { name: "TypeScript", proficiency: 80 },
      { name: "Tailwind CSS", proficiency: 95 },
      { name: "Framer Motion", proficiency: 75 }
    ],
    color: "from-blue-400 to-blue-600"
  },
  {
    category: "Backend Development",
    icon: <Globe className="w-8 h-8" />,
    technologies: [
      { name: "PHP", proficiency: 85 },
      { name: "Node.js", proficiency: 80 },
      { name: "Symfony", proficiency: 85 },
      { name: "CodeIgniter", proficiency: 75 },
      { name: "Redux", proficiency: 80 }
    ],
    color: "from-green-400 to-green-600"
  },
  {
    category: "Other Skills",
    icon: <Server className="w-8 h-8" />,
    technologies: [
      { name: "Git", proficiency: 90 },
      { name: "Figma", proficiency: 75 },
      { name: "Responsive Design", proficiency: 95 },
      { name: "SEO", proficiency: 80 },
      { name: "Performance Optimization", proficiency: 85 }
    ],
    color: "from-purple-400 to-purple-600"
  }
]

const SkillCard: React.FC<Skill> = ({ category, icon, technologies, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
  >
    <div className={`flex items-center mb-6`}>
      <div className={`bg-gradient-to-br ${color} rounded-xl p-3 mr-4`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        {category}
      </h3>
    </div>
    <div className="space-y-4">
      {technologies.map((tech) => (
        <div key={tech.name} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {tech.name}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {tech.proficiency}%
            </span>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${tech.proficiency}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className={`h-full bg-gradient-to-r ${color} rounded-full`}
            />
          </div>
        </div>
      ))}
    </div>
  </motion.div>
)

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            My Skills
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels in various technologies.
          </p>
        </motion.div>
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