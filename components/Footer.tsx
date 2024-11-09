'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ChevronUp } from 'lucide-react';

const socialLinks = [
  { icon: <Github className="w-5 h-5" />, url: 'https://github.com/nogoezen', label: 'GitHub' },
  { icon: <Linkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/in/your-profile', label: 'LinkedIn' },
  { icon: <Twitter className="w-5 h-5" />, url: 'https://twitter.com/your-account', label: 'Twitter' },
  { icon: <Mail className="w-5 h-5" />, url: 'mailto:ninokiritoo@gmail.com', label: 'Email' },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Haritiana Randria</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Next.js Frontend Developer</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <p className="text-sm text-gray-600 dark:text-gray-300">
              &copy; {currentYear} Haritiana Randria
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              All rights reserved
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Designed with passion using{' '}
            <span className="text-blue-500 dark:text-blue-400">Next.js</span> and{' '}
            <span className="text-blue-500 dark:text-blue-400">Tailwind CSS</span>
          </p>
        </motion.div>
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            aria-label="Back to top"
          >
            <ChevronUp className="w-6 h-6 text-blue-500 dark:text-blue-400" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;