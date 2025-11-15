import { getTranslations } from 'next-intl/server';
import { Target, Eye } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default async function AboutPage() {
  const t = await getTranslations('about');

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

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#2D3B5F]">
            {t('ourStory')}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('storyText1')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('storyText2')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('storyText3')}
              </p>
            </div>

            {/* Image Placeholder */}
            <div className="rounded-lg overflow-hidden shadow-xl">
              <div className="bg-gradient-to-br from-[#00A4E4] to-[#E84B7A] aspect-[4/3] flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <p className="text-2xl font-bold mb-2">Sergio y Deisy</p>
                  <p className="text-lg">Fundadores de La Gran Familia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <Card className="p-8 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#00A4E4]/10 rounded-full">
                  <Target className="w-8 h-8 text-[#00A4E4]" />
                </div>
                <h3 className="text-3xl font-bold text-[#2D3B5F]">
                  {t('mission')}
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('missionText')}
              </p>
            </Card>

            {/* Vision Card */}
            <Card className="p-8 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#E84B7A]/10 rounded-full">
                  <Eye className="w-8 h-8 text-[#E84B7A]" />
                </div>
                <h3 className="text-3xl font-bold text-[#2D3B5F]">
                  {t('vision')}
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('visionText')}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#00A4E4] to-[#2D3B5F] text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Quieres ser parte de nuestra familia?
          </h3>
          <p className="text-xl mb-8">
            Únete a nosotros en esta misión de llevar esperanza a quienes más lo necesitan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`/ayudar`}
              className="inline-block bg-[#FFD700] hover:bg-[#CCAC00] text-[#2D3B5F] font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Quiero Ayudar
            </a>
            <a
              href={`/contacto`}
              className="inline-block bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
