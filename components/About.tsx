'use client'

import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

// About section component
const About = () => {
  const words = `I'm a versatile professional with expertise in frontend development and a strong background in marketing and communication. 
  As a frontend developer specializing in Next.js, I bring technical prowess and creative problem-solving skills. 
  With experience in WordPress from 2018 to 2019, I've evolved towards modern frontend technologies since 2022. 
  I obtained the Meta Frontend certification in September 2024, strengthening my technical skills.

  Beyond coding, I excel in digital marketing, content writing, and brand communication. 
  My skills span social media strategy, copywriting, and creating compelling narratives that resonate with audiences. 
  I bridge the gap between technical implementation and strategic communication, delivering holistic solutions 
  that combine cutting-edge development with impactful messaging.`

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