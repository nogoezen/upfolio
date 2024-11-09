'use client'

import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

// About section component
const About = () => {
  const words = `I'm a passionate frontend developer specializing in Next.js. 
  With experience in WordPress from 2018 to 2019, I've evolved towards modern 
  frontend technologies since 2022. I obtained the Meta Frontend certification 
  in September 2024, strengthening my skills in the field.`

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title">About Me</h2>
        <div className="card p-8">
          <TextGenerateEffect words={words} />
        </div>
      </div>
    </section>
  )
}

export default About