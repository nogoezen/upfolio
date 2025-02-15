'use client'

import { useState, useEffect } from 'react'
import { Home, User, Code, Briefcase, Mail } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { LanguageSwitcher } from '@/components/ui/language-switcher'
import { useTranslations } from 'next-intl'

// Header component with navigation
const Header = () => {
  const [activeItem, setActiveItem] = useState('Home')
  const [isScrolled, setIsScrolled] = useState(false)
  const t = useTranslations('navigation')

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Navigation items
  const menuItems = [
    { name: t('home'), icon: Home, href: '#home' },
    { name: t('about'), icon: User, href: '#about' },
    { name: t('skills'), icon: Code, href: '#skills' },
    { name: t('projects'), icon: Briefcase, href: '#projects' },
    { name: t('contact'), icon: Mail, href: '#contact' },
  ]

  return (
    <header className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300`}>
      <nav className={`py-2 px-4 rounded-full ${isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm'}`}>
        <div className="flex items-center space-x-4">
          <ul className="flex space-x-1">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                    activeItem === item.name
                      ? 'bg-primary text-white scale-110'
                      : 'hover:bg-gray-200/50 text-gray-600 dark:text-gray-300 hover:scale-105'
                  }`}
                  onClick={() => setActiveItem(item.name)}
                >
                  <item.icon className="w-5 h-5" />
                </a>
              </li>
            ))}
          </ul>
          <div className="border-l border-gray-300 dark:border-gray-600 h-8" />
          <ThemeToggle />
          <div className="border-l border-gray-300 dark:border-gray-600 h-8" />
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  )
}

export default Header