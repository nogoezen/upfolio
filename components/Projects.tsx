'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, ExternalLinkIcon } from 'lucide-react';
import Image from 'next/image';

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
    description: "A modern and animated portfolio built with Next.js and Framer Motion.",
    image: "/assets/img/portfolio.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/nogoezen/upfolio",
    liveLink: "https://upfolio.vercel.app/"
  },
  {
    title: "Monitory CMS - Not another CMS",
    description: "Custom e-commerce site developed with Symfony and React.",
    image: "/assets/img/ecommerce.jpg",
    technologies: ["Symgony", "Javascript", "PHP", "MySQL"],
    githubLink: "https://github.com/your-username/ecommerce-wp",
    liveLink: "https://your-ecommerce.com"
  },
  // Add other projects here
  {
    title: "Upmovie - A IMDb clone written in next.js",
    description: "A IMDb clone written in next.js and using the TMDB API.",
    image: "/assets/img/upmovie.png",
    technologies: ["Next.js", "API", "Tailwind CSS"],
    githubLink: "https://github.com/nogoezen/upmovie",
    liveLink: "https://upmovie.vercel.app/"
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <motion.div
    className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.3 }}
  >
    <div className="relative h-64">
      <Image 
        src={project.image} 
        alt={project.title} 
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
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
        <motion.a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
        >
          <GithubIcon className="w-5 h-5 mr-2" /> Source code
        </motion.a>
        <motion.a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
        >
          <ExternalLinkIcon className="w-5 h-5 mr-2" /> Live demo
        </motion.a>
      </div>
    </div>
  </motion.div>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-16 text-center text-gray-800 dark:text-white"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;