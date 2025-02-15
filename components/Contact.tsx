'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Github, Facebook, Dribbble } from 'lucide-react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'envoi du formulaire
    console.log('Formulaire soumis', { name, email, message });
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-16 text-center text-gray-800 dark:text-white"
        >
          Contactez-moi
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Envoyez-moi un message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nom</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-blue-600 transition duration-300"
              >
                <Send className="w-5 h-5" />
                <span>Envoyer</span>
              </motion.button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Informations de contact</h3>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-blue-500" />
              <span className="text-gray-600 dark:text-gray-300">ninokirisan@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-blue-500" />
              <span className="text-gray-600 dark:text-gray-300">+1 (819) 979-2306 </span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-blue-500" />
              <span className="text-gray-600 dark:text-gray-300">Trois-Rivières, Canada</span>
            </div>
            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Suivez-moi</h4>
              <div className="flex space-x-4">
                <motion.a
                  href="https://facebook.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-blue-500 hover:text-blue-600 transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://github.com/nogoezen"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-blue-500 hover:text-blue-600 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://dribbble.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-blue-500 hover:text-blue-600 transition-colors"
                >
                  <Dribbble className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;