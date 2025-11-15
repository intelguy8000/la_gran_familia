import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  // Get the locale from the request
  let locale = await requestLocale;

  // Ensure we have a valid locale
  if (!locale || !['es', 'en'].includes(locale)) {
    locale = 'es';
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
