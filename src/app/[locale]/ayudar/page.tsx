import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function HelpPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = useTranslations();

  return (
    <div className="bg-white pt-20">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-6 text-[#2D3B5F]">
          {t('nav.help')}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Hay muchas formas de ayudar a La Gran Familia
        </p>
        <div className="space-y-4">
          <Button
            size="lg"
            className="bg-[#00A4E4] hover:bg-[#0078A8] text-white"
            asChild
          >
            <Link href={`/${locale}/donaciones`}>
              {t('nav.donate')}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
