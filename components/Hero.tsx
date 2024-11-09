'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

// Hero section component
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
      <div className="text-center max-w-3xl mx-auto px-4">
        <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-fade-in-down">
          Haritiana Randria
        </h1>
        <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 animate-fade-in-up">
          Next.js Frontend Developer | Laravel Developer
        </p>
        <div className="animate-fade-in flex justify-center space-x-4">
          <Button size="lg" className="group bg-primary hover:bg-primary/90">
            View my projects
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="group">
            Contact me
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero