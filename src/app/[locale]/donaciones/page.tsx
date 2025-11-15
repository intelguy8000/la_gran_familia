'use client';

import { useTranslations } from 'next-intl';
import { Heart, Calendar, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CONTACT } from '@/lib/constants';

export default function DonationsPage() {
  const t = useTranslations('donate');

  const donationWays = [
    {
      icon: Heart,
      title: t('ways.single.title'),
      description: t('ways.single.description'),
      button: t('ways.single.button'),
      color: 'text-[#E84B7A]',
      bgColor: 'bg-[#E84B7A]/10',
    },
    {
      icon: Calendar,
      title: t('ways.monthly.title'),
      description: t('ways.monthly.description'),
      button: t('ways.monthly.button'),
      color: 'text-[#00A4E4]',
      bgColor: 'bg-[#00A4E4]/10',
    },
    {
      icon: Gift,
      title: t('ways.inkind.title'),
      description: t('ways.inkind.description'),
      button: t('ways.inkind.button'),
      color: 'text-[#FFD700]',
      bgColor: 'bg-[#FFD700]/10',
    },
  ];

  const transformItems = [
    t('transform.items.materials'),
    t('transform.items.resources'),
    t('transform.items.support'),
    t('transform.items.expansion'),
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-r from-[#E84B7A] to-[#2D3B5F] text-white pt-20">
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

      {/* Transform Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-[#2D3B5F] mb-8 text-center">
            {t('transform.title')}
          </h2>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <p className="text-xl text-gray-700 mb-6">
              {t('transform.intro')}
            </p>
            <ul className="space-y-4 mb-8">
              {transformItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#E84B7A] mt-2 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-600 italic border-l-4 border-[#00A4E4] pl-6">
              {t('transform.transparency')}
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Donate */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#2D3B5F] mb-12 text-center">
            {t('ways.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {donationWays.map((way, index) => {
              const Icon = way.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`w-16 h-16 rounded-full ${way.bgColor} flex items-center justify-center mb-6`}>
                    <Icon className={`w-8 h-8 ${way.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2D3B5F] mb-4">
                    {way.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {way.description}
                  </p>
                  <Button
                    asChild
                    className="w-full bg-[#00A4E4] hover:bg-[#0078A8] text-white"
                  >
                    <a
                      href={CONTACT.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={way.button}
                    >
                      {way.button}
                    </a>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Testimonials Placeholder */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-[#2D3B5F] mb-4 text-center">
            {t('impact.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            {t('impact.subtitle')}
          </p>
          <div className="bg-gradient-to-br from-[#00A4E4]/10 to-[#E84B7A]/10 rounded-2xl p-12 text-center">
            <p className="text-lg text-gray-700 italic">
              {t('impact.placeholder')}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00A4E4] to-[#2D3B5F] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            {t('cta.title')}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#E84B7A] hover:bg-[#C73B5F] text-white text-lg px-8 py-6"
            >
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('cta.donate')}
              >
                {t('cta.donate')}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-[#2D3B5F] hover:bg-gray-100 text-lg px-8 py-6"
            >
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('cta.contact')}
              >
                {t('cta.contact')}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
