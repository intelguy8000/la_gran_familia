import { useTranslations } from 'next-intl';
import { CONTACT } from '@/lib/constants';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <div className="bg-white pt-20">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-6 text-[#2D3B5F]">
          {t('title')}
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          {t('description')}
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl">
          {/* Email */}
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Mail className="w-12 h-12 mx-auto mb-4 text-[#00A4E4]" />
            <h3 className="font-semibold mb-2 text-[#2D3B5F]">{t('email')}</h3>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-[#00A4E4] hover:underline"
            >
              {CONTACT.email}
            </a>
          </div>

          {/* WhatsApp */}
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Phone className="w-12 h-12 mx-auto mb-4 text-[#25D366]" />
            <h3 className="font-semibold mb-2 text-[#2D3B5F]">{t('whatsapp')}</h3>
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:underline"
            >
              {CONTACT.whatsapp}
            </a>
          </div>

          {/* Location */}
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-[#E84B7A]" />
            <h3 className="font-semibold mb-2 text-[#2D3B5F]">{t('location')}</h3>
            <p className="text-gray-700">{CONTACT.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
