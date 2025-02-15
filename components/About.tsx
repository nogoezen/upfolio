'use client'

import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { useTranslations } from 'next-intl'

// About section component
const About = () => {
  const t = useTranslations('about');

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title">{t('title')}</h2>
        <div className="card p-8">
          <TextGenerateEffect words={t('content')} />
        </div>
      </div>
    </section>
  )
}

export default About