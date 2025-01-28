'use client'

import React from 'react';
import { GithubIcon, ExternalLinkIcon } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
}

const projects: Project[] = [
  {
    title: "Next.js Portfolio",
    description: "A modern portfolio built with Next.js.",
    image: "/images/portfolio.jpg",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    githubLink: "https://github.com/your-username/portfolio",
    liveLink: "https://your-portfolio.com"
  },
  {
    title: "Mada Safari Tour - Laravel",
    description: "Custom e-commerce site developed with Laravel.",
    image: "/images/ecommerce.jpg",
    technologies: ["Laravel", "Javascript", "PHP", "MySQL"],
    githubLink: "https://github.com/your-username/ecommerce-wp",
    liveLink: "https://your-ecommerce.com"
  },
  // Add other projects here
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div
    className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
  >
    <div className="relative">
      <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{project.title}</h3>
    </div>
    <div className="p-6">
      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <span key={tech} className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-200"
        >
          <GithubIcon className="w-5 h-5 mr-2" /> Source code
        </a>
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-200"
        >
          <ExternalLinkIcon className="w-5 h-5 mr-2" /> Live demo
        </a>
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center text-gray-800 dark:text-white">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div key={project.title}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;