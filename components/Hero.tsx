'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

// Hero section component
const Hero = () => {
  const t = useTranslations('hero');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
      <div className="text-center max-w-3xl mx-auto px-4">
        <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-fade-in-down">
          {t('title')}
        </h1>
        <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 animate-fade-in-up">
          {t('subtitle')}
        </p>
        <div className="animate-fade-in flex justify-center space-x-4">
          <Button 
            size="lg" 
            className="group bg-primary hover:bg-primary/90"
            onClick={() => scrollToSection('projects')}
          >
            {t('cta.projects')}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="group"
            onClick={() => scrollToSection('contact')}
          >
            {t('cta.contact')}
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero