import type { Metadata } from 'next';
import { Manrope, Oswald } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  variable: '--font-body',
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
});

const oswald = Oswald({
  variable: '--font-display',
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Fitness Pride — школа обучения фитнесу',
  description:
    'Подготовка фитнес-тренеров и специалистов через профессиональные знания и практические навыки.',
  icons: {
    icon: '/brand/fitness-pride-logo-512.jpg',
  },
  openGraph: {
    title: 'Fitness Pride — школа обучения фитнесу',
    description: 'Профессиональные знания. Практические навыки.',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Fitness Pride — школа обучения фитнесу',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fitness Pride — школа обучения фитнесу',
    description: 'Профессиональные знания. Практические навыки.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} ${oswald.variable}`}>
        {children}
      </body>
    </html>
  );
}
