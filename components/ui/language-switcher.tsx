'use client'

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from './button';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  
  const handleLocaleChange = () => {
    const nextLocale = currentLocale === 'en' ? 'fr' : 'en';
    const newPathname = pathname.replace(/^\/(en|fr)/, '');
    const path = newPathname || '/';
    router.push(`/${nextLocale}${path}`);
  };
  
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleLocaleChange}
      className="font-medium"
      title={currentLocale === 'en' ? 'Changer en français' : 'Switch to English'}
    >
      {currentLocale === 'en' ? 'FR' : 'EN'}
    </Button>
  );
} 