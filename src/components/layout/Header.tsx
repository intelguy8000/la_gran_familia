'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import LanguageSwitcher from './LanguageSwitcher';
import { ROUTES } from '@/lib/constants';

export default function Header() {
  const t = useTranslations();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Get current locale from pathname
  const currentLocale = pathname.split('/')[1] || 'es';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', href: ROUTES.home, label: t('nav.home') },
    { key: 'about', href: ROUTES.about, label: t('nav.about') },
    { key: 'programs', href: ROUTES.programs, label: t('nav.programs') },
    { key: 'gallery', href: ROUTES.gallery, label: t('nav.gallery') },
    { key: 'help', href: ROUTES.help, label: t('nav.help') },
    { key: 'donate', href: ROUTES.donate, label: t('nav.donate') },
    { key: 'shop', href: ROUTES.shop, label: t('nav.shop') },
    { key: 'contact', href: ROUTES.contact, label: t('nav.contact') },
  ];

  const isActive = (href: string) => {
    if (href === ROUTES.home) {
      return pathname === `/${currentLocale}` || pathname === `/${currentLocale}/`;
    }
    return pathname === `/${currentLocale}${href}`;
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md'
          : 'bg-white shadow-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 lg:h-20">
          {/* Logo */}
          <Link
            href={`/${currentLocale}`}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/images/logo/logo-md.png"
              alt="La Gran Familia"
              width={200}
              height={380}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={`/${currentLocale}${item.href}`}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-[#00A4E4] bg-[#00A4E4]/10'
                    : 'text-[#2D3B5F] hover:text-[#5CC4F0] hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher />
            <Button
              asChild
              className="bg-[#E84B7A] hover:bg-[#C23861] text-white font-semibold"
            >
              <Link href={`/${currentLocale}${ROUTES.donate}`}>
                {t('buttons.donateNow')}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-[#2D3B5F]"
                  aria-label={t('buttons.menu')}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 sm:w-96">
                <SheetHeader>
                  <SheetTitle className="flex items-center justify-center mb-6">
                    <Image
                      src="/images/logo/logo-md.png"
                      alt="La Gran Familia"
                      width={200}
                      height={380}
                      className="h-16 w-auto"
                    />
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-2 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.key}
                      href={`/${currentLocale}${item.href}`}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        isActive(item.href)
                          ? 'text-[#00A4E4] bg-[#00A4E4]/10'
                          : 'text-[#2D3B5F] hover:text-[#5CC4F0] hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-8 space-y-4">
                  <div className="flex justify-center">
                    <LanguageSwitcher />
                  </div>
                  <Button
                    asChild
                    className="w-full bg-[#E84B7A] hover:bg-[#C23861] text-white font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href={`/${currentLocale}${ROUTES.donate}`}>
                      {t('buttons.donateNow')}
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
