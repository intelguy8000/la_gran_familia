import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL('https://la-gran-familia.vercel.app'),
  title: "La Gran Familia - Un Abrazo de Esperanza",
  description: "Fundación en Medellín que lleva amor, fe y esperanza de Dios a personas en situaciones difíciles. Visitas hospitalarias, retiros espirituales y apoyo comunitario.",
  keywords: [
    "fundación",
    "Medellín",
    "Colombia",
    "esperanza",
    "fe",
    "amor",
    "Dios",
    "ayuda social",
    "voluntariado",
    "donaciones",
    "hospital San Vicente",
    "retiros espirituales",
    "apoyo familiar",
    "comunidad",
    "niños hospitalizados",
    "obra social",
    "caridad",
    "Antioquia",
  ],
  authors: [{ name: "La Gran Familia" }],
  creator: "La Gran Familia",
  publisher: "La Gran Familia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://la-gran-familia.vercel.app",
    siteName: "La Gran Familia",
    title: "La Gran Familia - Un Abrazo de Esperanza",
    description: "Llevando amor, fe y esperanza de Dios a personas en Medellín y Antioquia",
    images: [
      {
        url: "/images/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "La Gran Familia Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Gran Familia - Un Abrazo de Esperanza",
    description: "Llevando amor, fe y esperanza de Dios a personas en Medellín",
    images: ["/images/logo/logo.png"],
  },
  verification: {
    google: "google-site-verification-placeholder",
  },
};

const locales = ['es', 'en'];

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
