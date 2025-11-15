'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ShoppingBag, Check, Construction } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/constants';

export default function ShopPage() {
  const t = useTranslations('shop');
  const tButtons = useTranslations('buttons');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const features = [
    t('features.purpose'),
    t('features.benefit'),
    t('features.exclusive'),
    t('features.impact'),
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement email subscription
    console.log('Email subscription:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Coming Soon */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
        <div className="container mx-auto px-4 text-center py-20">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-[#00A4E4]/10 flex items-center justify-center">
                <ShoppingBag className="w-12 h-12 text-[#00A4E4]" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-[#FFD700] flex items-center justify-center">
                <Construction className="w-5 h-5 text-[#2D3B5F]" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#2D3B5F]">
            {t('title')}
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            {t('subtitle')}
          </p>

          {/* Coming Soon Badge */}
          <div className="inline-block mb-8">
            <div className="bg-gradient-to-r from-[#00A4E4] to-[#E84B7A] text-white px-8 py-3 rounded-full text-lg font-bold">
              {t('comingSoon')}
            </div>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              {t('message')}
            </p>
            <p className="text-lg text-gray-600 font-semibold">
              {t('tagline')}
            </p>
          </div>

          {/* Features Grid */}
          <div className="max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-[#2D3B5F] mb-6">
              {t('features.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm"
                >
                  <div className="w-6 h-6 rounded-full bg-[#00A4E4] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Email Subscription Form */}
          <div className="max-w-md mx-auto mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#2D3B5F] mb-4">
                {t('notify.title')}
              </h3>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 font-medium">
                    {t('notify.success')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('notify.placeholder')}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A4E4] focus:border-transparent"
                    aria-label={t('notify.title')}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-[#00A4E4] hover:bg-[#0078A8] text-white py-6 text-lg"
                  >
                    {t('notify.button')}
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Meanwhile Section */}
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-600 mb-6 font-semibold">
              {t('meanwhile')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#E84B7A] hover:bg-[#C73B5F] text-white"
              >
                <Link href={ROUTES.donate} aria-label={tButtons('donateNow')}>
                  {tButtons('donateNow')}
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#00A4E4] text-[#00A4E4] hover:bg-[#00A4E4] hover:text-white"
              >
                <Link href={ROUTES.gallery} aria-label={t('viewGallery')}>
                  {t('viewGallery')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
