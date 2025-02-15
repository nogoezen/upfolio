import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { getRequestConfig } from 'next-intl/server';
import { locales } from '@/config';

export default getRequestConfig(async ({ locale }) => {
  const messages = (await import(`../messages/${locale}.json`)).default;
  
  return {
    locale,
    messages,
    timeZone: 'America/New_York'
  };
});

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales }); 