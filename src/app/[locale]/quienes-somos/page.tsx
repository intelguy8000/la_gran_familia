import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <div className="bg-white pt-20">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-6 text-[#2D3B5F]">
          {t('title')}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {t('subtitle')}
        </p>
        <p className="text-lg text-gray-700">
          {t('description')}
        </p>
      </div>
    </div>
  );
}
