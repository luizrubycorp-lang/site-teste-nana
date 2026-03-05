import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

import Image from 'next/image';

// This would normally fetch data from a CMS or database
const getProcedimentoData = (slug: string) => {
  const data: Record<string, any> = {
    'limpeza-de-pele': {
      title: 'Limpeza de Pele',
      description: 'Protocolo exclusivo Naturale para uma pele radiante e saudável.',
      content: 'Nossa limpeza de pele vai além do básico. Utilizamos vapor de ozônio, extração minuciosa e máscaras calmantes importadas para garantir que sua pele saia renovada e sem irritações.',
      image: 'https://picsum.photos/1200/800?random=1'
    },
    'peeling-quimico': {
      title: 'Peeling Químico',
      description: 'Renovação celular profunda para tratar manchas e textura.',
      content: 'O peeling químico é um tratamento eficaz para renovar a pele, tratar acne, manchas e linhas finas. Nossos ácidos são selecionados de acordo com seu fototipo e necessidade específica.',
      image: 'https://picsum.photos/1200/800?random=2'
    }
  };
  return data[slug] || { title: 'Procedimento', description: 'Detalhes em breve.', content: 'Estamos preparando o conteúdo desta página.', image: 'https://picsum.photos/1200/800' };
};

export default async function ProcedimentoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getProcedimentoData(slug);

  return (
    <main className="bg-brand-offwhite min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto">
        <Link href="/#procedimentos" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-deepblue/50 hover:text-brand-aqua mb-12 transition-colors">
          <ArrowLeft size={16} /> Voltar para Procedimentos
        </Link>

        <div className="grid grid-cols-1 gap-12">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-serif mb-8">{data.title}</h1>
            <p className="text-xl text-brand-aqua font-medium mb-8 italic">{data.description}</p>
            <div className="prose prose-lg text-brand-deepblue/70 leading-relaxed">
              <p>{data.content}</p>
              <p className="mt-6">
                Agende uma avaliação personalizada para descobrir se este procedimento é o ideal para você.
              </p>
            </div>
            
            <Link 
              href="https://wa.me/5543999687799"
              className="mt-12 inline-block bg-brand-deepblue text-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-brand-aqua transition-all shadow-lg"
            >
              Agendar Avaliação
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
