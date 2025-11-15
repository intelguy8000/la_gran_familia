'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  // Get current locale from pathname
  const currentLocale = pathname.split('/')[1];

  const switchLocale = (locale: string) => {
    // Remove current locale from pathname and add new one
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '');
    const newPath = `/${locale}${pathWithoutLocale}`;
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-[#2D3B5F]" />
      <div className="flex items-center gap-1 bg-gray-100 rounded-md p-1">
        <button
          onClick={() => switchLocale('es')}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
            currentLocale === 'es'
              ? 'bg-white text-[#00A4E4] shadow-sm'
              : 'text-gray-600 hover:text-[#00A4E4]'
          }`}
          aria-label="Cambiar a español"
        >
          ES
        </button>
        <button
          onClick={() => switchLocale('en')}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
            currentLocale === 'en'
              ? 'bg-white text-[#00A4E4] shadow-sm'
              : 'text-gray-600 hover:text-[#00A4E4]'
          }`}
          aria-label="Switch to English"
        >
          EN
        </button>
      </div>
    </div>
  );
}
