import { getTranslations } from 'next-intl/server';
import { Heart, Users, Home, HandHeart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

export default async function ProgramsPage() {
  const t = await getTranslations('programs');

  const programs = [
    {
      icon: Heart,
      title: t('hospital.title'),
      description: t('hospital.description'),
      color: 'text-[#00A4E4]',
      bgColor: 'bg-[#00A4E4]/10',
      image: '/images/programs/visitas-hospitalarias.jpg',
      imageAlt: 'Equipo de La Gran Familia en visita al Hospital Infantil San Vicente Fundación',
    },
    {
      icon: Users,
      title: t('retreats.title'),
      description: t('retreats.description'),
      color: 'text-[#E84B7A]',
      bgColor: 'bg-[#E84B7A]/10',
      image: '/images/programs/retiros-espirituales.jpg',
      imageAlt: 'Retiro espiritual de La Gran Familia con la comunidad',
    },
    {
      icon: Home,
      title: t('family.title'),
      description: t('family.description'),
      color: 'text-[#FFD700]',
      bgColor: 'bg-[#FFD700]/10',
      image: '/images/programs/apoyo-familiar.jpg',
      imageAlt: 'Consagración familiar celebrada por La Gran Familia',
    },
    {
      icon: HandHeart,
      title: t('community.title'),
      description: t('community.description'),
      color: 'text-[#00A4E4]',
      bgColor: 'bg-[#00A4E4]/10',
      image: '/images/programs/trabajo-comunitario.jpg',
      imageAlt: 'Encuentro comunitario de La Gran Familia',
    },
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

      {/* Programs Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {t('description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card
                  key={index}
                  className="p-8 bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 ${program.bgColor} rounded-full`}>
                      <Icon className={`w-10 h-10 ${program.color}`} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#2D3B5F]">
                      {program.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Program Image */}
                  <div className="mt-6 rounded-lg overflow-hidden shadow-md">
                    <div className="relative aspect-video">
                      <Image
                        src={program.image}
                        alt={program.imageAlt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-4xl font-bold text-center text-[#2D3B5F] mb-12">
            Nuestro Impacto
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl font-bold text-[#00A4E4] mb-2">4+</div>
              <p className="text-lg text-gray-700">Años de Servicio</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-[#E84B7A] mb-2">100+</div>
              <p className="text-lg text-gray-700">Familias Impactadas</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-[#FFD700] mb-2">50+</div>
              <p className="text-lg text-gray-700">Niños Atendidos</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-[#2D3B5F] mb-2">∞</div>
              <p className="text-lg text-gray-700">Esperanza Compartida</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#E84B7A] to-[#2D3B5F] text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Quieres apoyar nuestros programas?
          </h3>
          <p className="text-xl mb-8">
            Tu donación nos ayuda a seguir llevando esperanza a más personas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`/donaciones`}
              className="inline-block bg-[#FFD700] hover:bg-[#CCAC00] text-[#2D3B5F] font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Hacer una Donación
            </a>
            <a
              href={`/ayudar`}
              className="inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#E84B7A] font-semibold px-8 py-4 rounded-lg transition-all duration-300 text-lg"
            >
              Quiero Ayudar
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
