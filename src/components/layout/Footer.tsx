'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { CONTACT, ROUTES, SOCIAL_MEDIA } from '@/lib/constants';

export default function Footer() {
  const t = useTranslations();
  const pathname = usePathname();

  // Get current locale from pathname
  const currentLocale = pathname.split('/')[1] || 'es';

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

  return (
    <footer className="bg-[#2D3B5F] text-white/90">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Column 1 - Branding */}
          <div className="space-y-4">
            <Link
              href={`/${currentLocale}`}
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/logo/logo-sm.png"
                alt="La Gran Familia"
                width={100}
                height={190}
                className="h-20 w-auto"
              />
            </Link>
            <h3 className="text-xl font-bold text-white">
              {t('footer.tagline')}
            </h3>
            <p className="text-white/70 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Column 2 - Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">
              {t('footer.navigation')}
            </h3>
            <nav className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={`/${currentLocale}${item.href}`}
                  className="text-white/70 hover:text-[#5CC4F0] transition-colors text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 - Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">
              {t('footer.contact')}
            </h3>
            <div className="space-y-3">
              {/* Email */}
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 text-white/70 hover:text-[#5CC4F0] transition-colors group"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm group-hover:underline">
                  {CONTACT.email}
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-[#25D366] transition-colors group"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm group-hover:underline">
                  {CONTACT.whatsapp}
                </span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">{CONTACT.location}</span>
              </div>
            </div>

            {/* Social Media - Placeholder */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-white mb-3">
                {t('footer.socialMedia')}
              </h4>
              <div className="flex gap-3">
                <button
                  disabled
                  className="p-2 rounded-full bg-white/10 text-white/30 cursor-not-allowed"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </button>
                <button
                  disabled
                  className="p-2 rounded-full bg-white/10 text-white/30 cursor-not-allowed"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </button>
                <button
                  disabled
                  className="p-2 rounded-full bg-white/10 text-white/30 cursor-not-allowed"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </button>
                <button
                  disabled
                  className="p-2 rounded-full bg-white/10 text-white/30 cursor-not-allowed"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-white/60 text-sm">
            © {new Date().getFullYear()} La Gran Familia.{' '}
            {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
}
