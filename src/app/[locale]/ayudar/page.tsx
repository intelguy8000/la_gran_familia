'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Users, DollarSign, Share2, Briefcase, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CONTACT, ROUTES } from '@/lib/constants';

export default function HelpPage() {
  const t = useTranslations('help');
  const tContact = useTranslations('contact');

  const volunteerAreas = [
    t('volunteer.area1'),
    t('volunteer.area2'),
    t('volunteer.area3'),
    t('volunteer.area4'),
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-r from-[#00A4E4] to-[#2D3B5F] text-white pt-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 container mx-auto px-4 text-center py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[#2D3B5F] mb-6">
            {t('bePartOfChange')}
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            {t('intro')}
          </p>
        </div>
      </section>

      {/* 4 Ways to Help Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Volunteer Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full bg-[#00A4E4]/10 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-[#00A4E4]" />
              </div>
              <h3 className="text-2xl font-bold text-[#2D3B5F] mb-4">
                {t('volunteer.title')}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('volunteer.description')}
              </p>
              <div className="mb-6">
                <p className="font-semibold text-[#2D3B5F] mb-3">
                  {t('volunteer.areas')}
                </p>
                <ul className="space-y-2">
                  {volunteerAreas.map((area, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00A4E4] mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                asChild
                className="w-full bg-[#00A4E4] hover:bg-[#0078A8] text-white"
              >
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t('volunteer.button')}
                >
                  {t('volunteer.button')}
                </a>
              </Button>
            </div>

            {/* Donations Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full bg-[#E84B7A]/10 flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-[#E84B7A]" />
              </div>
              <h3 className="text-2xl font-bold text-[#2D3B5F] mb-4">
                {t('donations.title')}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('donations.description')}
              </p>
              <Button
                asChild
                className="w-full bg-[#E84B7A] hover:bg-[#C73B5F] text-white mt-auto"
              >
                <Link href={ROUTES.donate} aria-label={t('donations.button')}>
                  {t('donations.button')}
                </Link>
              </Button>
            </div>

            {/* Spread the Message Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full bg-[#FFD700]/10 flex items-center justify-center mb-6">
                <Share2 className="w-8 h-8 text-[#FFD700]" />
              </div>
              <h3 className="text-2xl font-bold text-[#2D3B5F] mb-4">
                {t('spread.title')}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('spread.description')}
              </p>
              <div className="mb-6">
                <p className="font-semibold text-[#2D3B5F] mb-3">
                  {t('spread.social')}
                </p>
                <div className="flex gap-3">
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="flex-1"
                  >
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.origin : '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on Facebook"
                    >
                      Facebook
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="flex-1"
                  >
                    <a
                      href={`https://api.whatsapp.com/send?text=${encodeURIComponent('Conoce La Gran Familia')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on WhatsApp"
                    >
                      WhatsApp
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="flex-1"
                  >
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Conoce La Gran Familia')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on Twitter"
                    >
                      Twitter
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Corporate Sponsorship Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full bg-[#00A4E4]/10 flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-[#00A4E4]" />
              </div>
              <h3 className="text-2xl font-bold text-[#2D3B5F] mb-4">
                {t('sponsor.title')}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('sponsor.description')}
              </p>
              <Button
                asChild
                className="w-full bg-[#2D3B5F] hover:bg-[#1E2A42] text-white mt-auto"
              >
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t('sponsor.button')}
                >
                  {t('sponsor.button')}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#2D3B5F] mb-8 text-center">
            {t('contactInfo.title')}
          </h2>
          <div className="bg-gradient-to-br from-[#00A4E4]/10 to-[#E84B7A]/10 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-[#00A4E4]" />
                <div>
                  <p className="font-semibold text-[#2D3B5F]">{tContact('whatsapp')}</p>
                  <a
                    href={CONTACT.whatsappUrl}
                    className="text-gray-700 hover:text-[#00A4E4]"
                  >
                    {CONTACT.whatsapp}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-[#E84B7A]" />
                <div>
                  <p className="font-semibold text-[#2D3B5F]">{tContact('email')}</p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-gray-700 hover:text-[#E84B7A] break-all"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-[#FFD700]" />
                <div>
                  <p className="font-semibold text-[#2D3B5F]">{tContact('location')}</p>
                  <p className="text-gray-700">{CONTACT.location}</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="bg-[#00A4E4] hover:bg-[#0078A8] text-white text-lg px-8 py-6"
              >
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t('contactInfo.button')}
                >
                  {t('contactInfo.button')}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
