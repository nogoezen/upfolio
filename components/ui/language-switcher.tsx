'use client'

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from './button';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    // If we're on English, switch to French, and vice versa
    const newLocale = pathname.includes('/fr') ? 'en' : 'fr';
    // Remove the current locale from the pathname
    const newPathname = pathname.replace(/^\/(en|fr)/, '');
    // Ensure we have a leading slash and construct the new path
    const path = newPathname || '/';
    router.push(`/${newLocale}${path}`);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLocale}
      className="font-medium"
      title={pathname.includes('/fr') ? 'Switch to English' : 'Changer en français'}
    >
      {pathname.includes('/fr') ? 'EN' : 'FR'}
    </Button>
  )
} 