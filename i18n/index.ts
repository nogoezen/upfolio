import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { getRequestConfig } from 'next-intl/server';
import { locales } from '@/config';

export default getRequestConfig(async () => {
  return {
    messages: (await import(`../messages/en.json`)).default,
    timeZone: 'America/New_York'
  };
});

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales }); 