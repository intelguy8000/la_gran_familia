'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CONTACT } from '@/lib/constants';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
  type: z.string().min(1, 'Por favor selecciona un tipo de consulta'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const t = useTranslations('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Por ahora solo console.log, integración con email después
      console.log('Form data:', data);

      // Simular delay de envío
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSubmitStatus('success');
      reset();

      // Reset status después de 5 segundos
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white pt-20">
      <div className="container mx-auto px-4 py-20 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-[#2D3B5F]">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8 bg-gradient-to-br from-[#00A4E4]/5 to-[#E84B7A]/5">
              <h2 className="text-2xl font-bold text-[#2D3B5F] mb-6">
                Información de Contacto
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-start gap-4 text-gray-700 hover:text-[#00A4E4] transition-colors group"
                >
                  <div className="p-3 bg-[#00A4E4]/10 rounded-full group-hover:bg-[#00A4E4]/20 transition-colors">
                    <Mail className="w-6 h-6 text-[#00A4E4]" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">{t('email')}</p>
                    <p className="text-lg">{CONTACT.email}</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 text-gray-700 hover:text-[#25D366] transition-colors group"
                >
                  <div className="p-3 bg-[#25D366]/10 rounded-full group-hover:bg-[#25D366]/20 transition-colors">
                    <Phone className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">{t('whatsapp')}</p>
                    <p className="text-lg">{CONTACT.whatsapp}</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 text-gray-700">
                  <div className="p-3 bg-[#E84B7A]/10 rounded-full">
                    <MapPin className="w-6 h-6 text-[#E84B7A]" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">{t('location')}</p>
                    <p className="text-lg">{CONTACT.location}</p>
                  </div>
                </div>

                {/* Schedule */}
                <div className="flex items-start gap-4 text-gray-700">
                  <div className="p-3 bg-[#FFD700]/10 rounded-full">
                    <Clock className="w-6 h-6 text-[#FFD700]" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Horario</p>
                    <p className="text-lg">{t('schedule')}</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Additional Info */}
            <div className="p-6 bg-[#00A4E4]/5 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                {t('description')}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-[#2D3B5F] mb-6">
              Envíanos un Mensaje
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('form.name')} *
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  placeholder={t('form.namePlaceholder')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A4E4] focus:border-transparent transition-all"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('form.email')} *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  placeholder={t('form.emailPlaceholder')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A4E4] focus:border-transparent transition-all"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('form.phone')}
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  id="phone"
                  placeholder={t('form.phonePlaceholder')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A4E4] focus:border-transparent transition-all"
                />
              </div>

              {/* Type of Inquiry */}
              <div>
                <label htmlFor="type" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('form.type')} *
                </label>
                <select
                  {...register('type')}
                  id="type"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A4E4] focus:border-transparent transition-all"
                >
                  <option value="">{t('form.typePlaceholder')}</option>
                  <option value="volunteer">{t('form.typeVolunteer')}</option>
                  <option value="donation">{t('form.typeDonation')}</option>
                  <option value="info">{t('form.typeInfo')}</option>
                  <option value="support">{t('form.typeSupport')}</option>
                  <option value="other">{t('form.typeOther')}</option>
                </select>
                {errors.type && (
                  <p className="mt-1 text-sm text-red-600">{errors.type.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('form.message')} *
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={5}
                  placeholder={t('form.messagePlaceholder')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A4E4] focus:border-transparent transition-all resize-none"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#E84B7A] hover:bg-[#C23861] text-white font-semibold py-4 text-lg"
              >
                {isSubmitting ? t('form.sending') : t('form.submit')}
              </Button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-center font-semibold">
                    {t('form.success')}
                  </p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-center font-semibold">
                    {t('form.error')}
                  </p>
                </div>
              )}
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
