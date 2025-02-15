'use client'

import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale = useLocale();
  const nextLocale = currentLocale === 'en' ? 'fr' : 'en';
  
  // Remove the current locale prefix and ensure we have a leading slash
  const newPathname = pathname.replace(/^\/(en|fr)/, '') || '/';
  
  return (
    <Link
      href={`/${nextLocale}${newPathname}`}
      className="rounded-md border px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
    >
      {nextLocale.toUpperCase()}
    </Link>
  );
}

export default LanguageSwitcher; 