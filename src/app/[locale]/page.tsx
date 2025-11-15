import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#00A4E4] via-[#2D3B5F] to-[#E84B7A] text-white pt-20">
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/logo/logo-lg.png"
              alt="La Gran Familia"
              width={400}
              height={760}
              className="w-64 h-auto drop-shadow-2xl"
              priority
            />
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto drop-shadow-md">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#FFD700] hover:bg-[#CCAC00] text-[#2D3B5F] font-semibold text-lg px-8 py-6"
              asChild
            >
              <Link href={`/${locale}/ayudar`}>
                {t('hero.cta1')}
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#00A4E4] transition-all duration-300 bg-transparent font-semibold text-lg px-8 py-6"
              asChild
            >
              <Link href={`/${locale}/quienes-somos`}>
                {t('hero.cta2')}
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2D3B5F]">
              {t('about.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('about.subtitle')}
            </p>
            <p className="text-lg text-gray-700 mb-8">
              {t('about.description')}
            </p>
            <Button
              size="lg"
              className="bg-[#00A4E4] hover:bg-[#0078A8] text-white"
              asChild
            >
              <Link href={`/${locale}/quienes-somos`}>
                {t('common.learnMore')}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2D3B5F]">
              {t('programs.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('programs.subtitle')}
            </p>
            <p className="text-lg text-gray-700 mb-8">
              {t('programs.description')}
            </p>
            <Button
              size="lg"
              className="bg-[#E84B7A] hover:bg-[#C23861] text-white"
              asChild
            >
              <Link href={`/${locale}/que-hacemos`}>
                {t('common.learnMore')}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
