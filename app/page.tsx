// Force re-bundle to fix manifest errors
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { ProcedimentosSection, AcademySection, ProductsSection } from '@/components/Sections';
import Link from 'next/link';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      
      <div className="relative z-10 bg-brand-offwhite">
        <ProcedimentosSection />
        
        {/* About Section */}
        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/Nana-foto.jpg"
                alt="Especialista Naturale"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-brand-aqua text-xs font-bold uppercase tracking-[0.4em] mb-4 block">A Especialista</span>
              <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Ciência e Arte em <br /><span className="italic">Sintonia</span></h2>
              <div className="text-brand-deepblue/70 text-lg leading-relaxed mb-8 space-y-4">
                <p>Criadora da marca Naturale e idealizadora de procedimentos e produtos.</p>
                <p>Formada em estética e cosmética (Unopar), pós-graduada em estética avançada (Unoeste), pós-graduada em pré e pós procedimentos médicos pela Anhembi-Morumbi, pós-graduada em saúde estética pela Unoeste.</p>
                <p>Mais de 100 cursos livres de estética e cosmética, incluindo 2 internacionais.</p>
              </div>
              <div className="grid grid-cols-1 gap-8 mb-12">
                <div>
                  <h4 className="text-3xl font-serif text-brand-aqua mb-2">10+</h4>
                  <p className="text-xs uppercase tracking-widest font-bold opacity-60">Anos de Experiência</p>
                </div>
              </div>
              <Link 
                href="https://wa.me/5543999687799"
                target="_blank"
                className="inline-block bg-brand-deepblue text-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-brand-aqua transition-all shadow-lg hover:shadow-brand-aqua/20"
              >
                Agendar Consulta
              </Link>
            </div>
          </div>
        </section>

        <AcademySection />
        <ProductsSection />

        {/* Footer */}
        <footer id="contato" className="py-20 px-6 md:px-12 bg-brand-offwhite border-t border-brand-deepblue/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
            <div className="max-w-xs">
              <Link href="/" className="flex flex-col mb-6">
                <span className="font-serif text-2xl font-bold tracking-widest text-brand-deepblue">NATURALE</span>
                <span className="text-[10px] uppercase tracking-[0.3em] -mt-1 opacity-70">Estética e Skincare</span>
              </Link>
              <p className="text-brand-deepblue/60 text-sm leading-relaxed">
                R. Mal. Castelo Branco, 916 <br />
                Jardim Sao Joao, Porecatu - PR <br />
                86160-000 <br />
                <span className="font-bold">Phone: (43) 3623-1920</span>
              </p>
            </div>
            
            <div className="flex-1 max-w-sm h-48 rounded-2xl overflow-hidden shadow-inner border border-brand-deepblue/10">
              <iframe
                src="https://maps.google.com/maps?q=R.%20Mal.%20Castelo%20Branco,%20916%20-%20Jardim%20Sao%20Joao,%20Porecatu%20-%20PR,%2086160-000&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-2 gap-12">
              <div>
                <h5 className="text-xs font-bold uppercase tracking-widest mb-6 opacity-40">Menu</h5>
                <ul className="flex flex-col gap-4 text-sm font-medium">
                  <li><Link href="#procedimentos" className="hover:text-brand-aqua transition-colors">Procedimentos</Link></li>
                  <li><Link href="#academy" className="hover:text-brand-aqua transition-colors">Academy</Link></li>
                  <li><Link href="#produtos" className="hover:text-brand-aqua transition-colors">Produtos</Link></li>
                  <li><Link href="#contato" className="hover:text-brand-aqua transition-colors">Contato</Link></li>
                </ul>
              </div>
              <div>
                <h5 className="text-xs font-bold uppercase tracking-widest mb-6 opacity-40">Social</h5>
                <ul className="flex flex-col gap-4 text-sm font-medium">
                  <li><Link href="https://instagram.com/esteticanaturale" className="hover:text-brand-aqua transition-colors">Instagram</Link></li>
                  <li><Link href="#" className="hover:text-brand-aqua transition-colors">Facebook</Link></li>
                  <li><Link href="#" className="hover:text-brand-aqua transition-colors">LinkedIn</Link></li>
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h5 className="text-xs font-bold uppercase tracking-widest mb-6 opacity-40">Horários</h5>
                <p className="text-sm font-medium">Segunda a Sexta: 09h às 19h</p>
                <p className="text-sm font-medium">Sábado: 09h às 13h</p>
              </div>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-brand-deepblue/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-bold opacity-40">
            <p>© 2024 Naturale Estética e Skincare. Todos os direitos reservados.</p>
            <p>Desenvolvido por AI Studio</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
