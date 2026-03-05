import type { Metadata } from 'next';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import './globals.css';
import ContactButtons from '@/components/ContactButtons';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Naturale Estética e Skincare | Clínica de Estética em Londrina',
  description: 'Especialista em estética avançada e skincare. Procedimentos faciais, corporais e cursos premium.',
  keywords: ['estética', 'skincare', 'londrina', 'procedimentos estéticos', 'beleza', 'cursos de estética'],
  openGraph: {
    title: 'Naturale Estética e Skincare',
    description: 'Experiência High-Ticket em estética avançada.',
    images: ['https://picsum.photos/1200/630'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body suppressHydrationWarning className="min-h-screen bg-brand-offwhite selection:bg-brand-aqua/30">
        {children}
        <ContactButtons />
      </body>
    </html>
  );
}
