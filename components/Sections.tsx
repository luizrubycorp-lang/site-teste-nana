
'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const procedimentos = [
  {
    id: 'f2',
    title: 'Bluen Clean',
    slug: 'bluen-clean-2',
    image: 'https://picsum.photos/600/800?random=2',
    description: '',
    fullContent: 'Melasma sinergia de 4 tipos de peelings, entre eles, o mandélico por ser o mais seguro, lasers e ativos despigmentantes para clarear o melasma.'
  },
  {
    id: 'f3',
    title: 'Botox',
    slug: 'botox',
    image: 'https://picsum.photos/600/800?random=3',
    description: '',
    fullContent: 'A aplicação de toxina botulínica (Botox) é o padrão ouro para o tratamento de rugas dinâmicas. Proporciona um aspecto descansado e rejuvenescido, suavizando as linhas de expressão na testa, entre as sobrancelhas e ao redor dos olhos com total naturalidade.'
  },
  {
    id: 'f3',
    title: 'Botox',
    slug: 'botox',
    image: 'https://picsum.photos/600/800?random=3',
    description: '',
    fullContent: 'A aplicação de toxina botulínica (Botox) é o padrão ouro para o tratamento de rugas dinâmicas. Proporciona um aspecto descansado e rejuvenescido, suavizando as linhas de expressão na testa, entre as sobrancelhas e ao redor dos olhos com total naturalidade.'
  },
  {
    id: 'f5',
    title: 'Limpeel',
    slug: 'limpeel',
    image: 'https://picsum.photos/600/800?random=50',
    description: '',
    fullContent: 'Clássico com incrementações, nossa limpeza de pele remove cravos e impurezas, aliamos a um peeling químico exclusivo que traz renovação e clareamento da pele. São usados 6 equipamentos nesse procedimento e mais de 20 ativos cosméticos, tudo para dar mais luminosidade, maciez e hidratação. Um dos ativos utilizados é a glunolactona que promove maciez e efeito iluminador.'
  },
  {
    id: 'f6',
    title: 'Naturale Lifting',
    slug: 'naturale-lifting',
    image: 'https://picsum.photos/600/800?random=51',
    description: '',
    fullContent: 'Uma técnica exclusiva da Naturale que promove um efeito de sustentação facial imediato. Focada na harmonização das formas e no combate aos sinais de cansaço, devolvendo a jovialidade ao rosto.'
  },
  {
    id: 'f7',
    title: 'Prevlifting',
    slug: 'prevlifting',
    image: 'https://picsum.photos/600/800?random=52',
    description: '',
    fullContent: 'A técnica mais gostosa de receber, com manobras precisas e direcionadas traz o relaxamento muscular facial, previne a formação de rugas e traz extremo relaxamento. Associa-se lasers e leds para rejuvenescimento e melhora a qualidade da pele. Ideal após os 18 anos.'
  },
  {
    id: 'f8',
    title: 'Zena',
    slug: 'zena',
    image: 'https://picsum.photos/600/800?random=53',
    description: '',
    fullContent: 'O protocolo Zena é uma experiência de luxo para a pele. Utilizando ativos de alta performance, ele promove uma regeneração profunda, brilho intenso e uma sensação de pele renovada e descansada.'
  }
];

// Map specific procedimento titles to files in public/images/Tratamentos faciais/
// NOTE: directory name has spaces and capitalization: "Tratamentos faciais"
const procedimentoImageMap: Record<string, string> = {
  // normalized keys (lowercase, no extra spaces)
  'prevlifting': 'Logos Tratamentos-12.jpg',
  'blue clean': 'Tratamento Blue Clean.jpg',
  'bluen clean': 'Tratamento Blue Clean.jpg',
  'naturale lifting': 'Tratamento Lifting.jpg',
  'limpeel': 'Tratamento Limpeel.jpg'
};

function getProcedimentoImage(title?: string) {
  if (!title) return null;
  const key = title.trim().toLowerCase();
  const filename = procedimentoImageMap[key];
  if (!filename) return null;
  // base dir matches the actual folder name found in the repo
  const baseDir = '/images/Tratamentos faciais';
  return encodeURI(`${baseDir}/${filename}`);
}

const bodyTreatments = [
  {
    id: 1,
    title: 'Drenagem Linfática',
    description: '',
    fullContent: 'Realizada de forma manual combate a retenção de líquido através do estímulo ao sistema linfático. Melhora a circulação linfática, sanguínea, auxilia na desintoxicação e faz um bem geral à saúde, trazendo bem-estar e leveza.',
    image: 'https://picsum.photos/600/800?random=20'
  },
  {
    id: 2,
    title: 'Estriout',
    description: '',
    fullContent: 'Estrias brancas e vermelhas podem ter seus aspectos atenuados em 60 a 80% com o EStriout que visa a produção de colágeno, melhora da circulação sanguínea e hidratação. São usados 6 recursos de tecnologias e mais de 10 ativos cosméticos, entre eles o barbatimão',
    image: 'https://picsum.photos/600/800?random=21'
  },
  {
    id: 4,
    title: 'Naturale Slim',
    description: '',
    fullContent: 'Gordura localizada em abdômen, costas e flancos? Esse método une a lipo sem cortes e 3 tecnologias que reduzem a gordura localizada e após a queima calórica, dentro de 21 dias e com 5 sessões.',
    image: 'https://picsum.photos/600/800?random=23'
  },
  {
    id: 5,
    title: 'Naturale Firmax',
    description: '',
    fullContent: 'Se você colocou a mão em alguma região do corpo, puxa e sente a pele mais mole é flacidez. Unimos o poder da radiofrequência para firmeza , associamos mais 4 recursos e 10 ativos, entre eles o biosilício. Ideal para pós-parto, pós-cirurgia bariátrica e durante o processo de emagrecimento. Naturale Detox um circuito de 5 etapas para eliminar o inchaço e afinar a cintura em 90 minutos, podendo perder de 300g a 1,5g, através do uso de argilas e um calor submetido a mais de 45 graus.',
    image: 'https://picsum.photos/600/800?random=24'
  },
  {
    id: 6,
    title: 'Naturale Relax',
    description: '',
    fullContent: 'Com manobras em pontos específicos na face, costas, pernas, braços, perna e pés, essa terapia alia óleo essencial de lavanda e massagem para um relaxamento profundo.',
    image: 'https://picsum.photos/600/800?random=25'
  },
  {
    id: 7,
    title: 'Naturale Cell',
    description: '',
    fullContent: 'O nome correto para a celulite é lipodistrofia ginóide uma desordem metabólica que acomete a maioria das mulheres. O efeito “casca de laranja” incomoda e alguns graus mais elevados nódulos e dores surgem. O ultrassom de alta potência mostra-se eficaz nessa queixa, aliado a terapias que visam uma reorganização do tecido conjuntivo e do tecido subcutâneo de neo de gordura.',
    image: 'https://picsum.photos/600/800?random=26'
  },
  {
    id: 8,
    title: 'Pós-operatório',
    description: '',
    fullContent: 'O sucesso da cirurgia plástica depende de um pós-operatório bem realizado. Foi-se o tempo que somente a drenagem linfática era usada. O uso de equipamentos como laser vermelho, microcorrentes e ultrassom melhoram a cicatrização, evita o surgimento de fibroses, aderências e intercorrências na sua cirurgia.',
    image: 'https://picsum.photos/600/800?random=27'
  }
];

// Map body treatments to images in public/images/Tratamentos Corporais/
const bodyImageMap: Record<string, string> = {
  'drenagem linfática': 'Naturale Drenagem Linfática.jpg',
  'estriout': 'Naturale Estriout.jpg',
  'naturale slim': 'Tratamento Slim.jpg',
  'naturale firmax': 'Naturale Firmax.jpg',
  'naturale relax': 'Naturale Relax.jpg',
  'naturale cell': 'Naturale Cell.jpg',
  'pós-operatório': 'Naturale Pós Operatório.jpg',
};

function getBodyImage(title?: string) {
  if (!title) return null;
  const key = title.trim().toLowerCase();
  const filename = bodyImageMap[key];
  if (!filename) return null;
  return encodeURI(`/images/Tratamentos Corporais/${filename}`);
}

export function ProcedimentosSection() {
  const [selectedTreatment, setSelectedTreatment] = React.useState<{
    title: string;
    image?: string;
    beforeImage?: string;
    afterImage?: string;
    description: string;
    fullContent: string;
  } | null>(null);

  return (
    <>
      <section id="procedimentos" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
              Excelência em <br />
              <span className="italic text-brand-aqua">Cuidados Faciais</span>
            </h2>
            <p className="text-brand-deepblue/70 text-lg leading-relaxed">
              Combinamos tecnologia de ponta com protocolos personalizados para realçar sua beleza natural de forma única e sofisticada.
            </p>
          </div>
          <Link href="/procedimentos" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-deepblue">
            Ver todos <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {procedimentos.map((proc, index) => (
            <motion.div
              key={proc.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                {getProcedimentoImage(proc.title) ? (
                  <Image
                    src={getProcedimentoImage(proc.title)!}
                    alt={proc.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  // fallback: elegant off-white placeholder with title
                  <div className="w-full h-full bg-[#f7f5f2] flex items-center justify-center">
                    <span className="text-center text-brand-deepblue/80 font-serif text-lg">{proc.title}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-brand-deepblue/20 group-hover:bg-brand-deepblue/0 transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-serif mb-2">{proc.title}</h3>
              {proc.description && <p className="text-sm text-brand-deepblue/60 leading-relaxed mb-4">{proc.description}</p>}
              <button 
                onClick={() => setSelectedTreatment(proc)}
                className="text-xs font-bold uppercase tracking-widest border-b border-brand-deepblue/20 pb-1 hover:border-brand-aqua hover:text-brand-aqua transition-all"
              >
                Saiba Mais
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cuidados Corporais Section */}
      <section id="corporais" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-brand-deepblue/5">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
            Protocolos <br />
            <span className="italic text-brand-aqua">Corporais</span>
          </h2>
          <p className="text-brand-deepblue/70 text-lg leading-relaxed max-w-2xl">
            Tratamentos exclusivos desenvolvidos com ciência e tecnologia para resultados rápidos e expressivos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {bodyTreatments.map((treatment, index) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                {getBodyImage(treatment.title) ? (
                  <Image
                    src={getBodyImage(treatment.title)!}
                    alt={treatment.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full bg-[#f7f5f2] flex items-center justify-center">
                    <span className="text-center text-brand-deepblue/80 font-serif text-lg">{treatment.title}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-brand-deepblue/20 group-hover:bg-brand-deepblue/0 transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-serif mb-2">{treatment.title}</h3>
              {treatment.description && <p className="text-sm text-brand-deepblue/60 leading-relaxed mb-4 line-clamp-2">{treatment.description}</p>}
              <button 
                onClick={() => setSelectedTreatment(treatment)}
                className="text-xs font-bold uppercase tracking-widest border-b border-brand-deepblue/20 pb-1 hover:border-brand-aqua hover:text-brand-aqua transition-all"
              >
                Saiba Mais
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Treatment Modal */}
      <AnimatePresence>
        {selectedTreatment && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTreatment(null)}
              className="absolute inset-0 bg-brand-deepblue/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl"
            >
              <div className="relative h-64 w-full">
                { (selectedTreatment.beforeImage || selectedTreatment.afterImage) ? (
                  <div className="grid grid-cols-2 gap-2 h-full">
                    <div className="relative w-full h-full overflow-hidden rounded-md">
                      <Image src={selectedTreatment.beforeImage ?? selectedTreatment.image ?? '/images/Nana-foto.jpg'} alt={`${selectedTreatment.title} - antes`} fill className="object-cover" />
                    </div>
                    <div className="relative w-full h-full overflow-hidden rounded-md">
                      <Image src={selectedTreatment.afterImage ?? selectedTreatment.image ?? '/images/Nana-foto.jpg'} alt={`${selectedTreatment.title} - depois`} fill className="object-cover" />
                    </div>
                  </div>
                ) : (
                  <Image 
                    src={selectedTreatment.image ?? '/images/Nana-foto.jpg'}
                    alt={selectedTreatment.title}
                    fill
                    className="object-cover"
                  />
                )}
                <button 
                  onClick={() => setSelectedTreatment(null)}
                  className="absolute top-6 right-6 bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white hover:text-brand-deepblue transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>
              <div className="p-8 md:p-12">
                <h3 className="text-3xl font-serif mb-4">{selectedTreatment.title}</h3>
                <div className="space-y-4 text-brand-deepblue/70 leading-relaxed">
                  <p className="font-medium text-brand-deepblue">{selectedTreatment.description}</p>
                  <p>{selectedTreatment.fullContent}</p>
                </div>
                <div className="mt-10">
                  <Link 
                    href="https://wa.me/5543999687799"
                    target="_blank"
                    className="inline-block bg-brand-aqua text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-lg shadow-brand-aqua/20"
                  >
                    Agendar Avaliação
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

const products = [
  {
    title: 'Naturale Limpeel',
    description: '',
    image: '/images/products/p01-naturale-limpeel.jpg.jpg'
  },
  {
    title: 'Creme Hidratante Facial',
    description: '',
    image: '/images/products/p02-creme-hidratante-facial.jpg.jpg'
  },
  {
    title: 'Protetor Solar FPS 50',
    description: '',
    image: '/images/products/p03-protetor-solar-fps-50.jpg.jpg'
  },
  {
    title: 'Tônico Equilibrante',
    description: '',
    image: '/images/products/p04-tonico-equilibrante.jpg.jpg'
  },
  {
    title: 'Máscara Detox Argila',
    description: '',
    image: '/images/products/p05-mascara-detox-argila.jpg.jpg'
  },
  {
    title: 'Óleo Corporal Relax',
    description: '',
    image: '/images/products/p06-oleo-corporal-relax.jpg.jpg'
  },
  {
    title: 'Sérum Vitamina C',
    description: '',
    image: '/images/products/p07-serum-vitamina-c.jpg.jpg'
  },
  {
    title: 'Esfoliante Suave',
    description: '',
    image: '/images/products/p08-esfoliante-suave.jpg.jpg'
  },
  {
    title: 'Máscara Noturna',
    description: '',
    image: 'https://picsum.photos/600/800?random=38'
  },
  {
    title: 'Creme Contorno de Olhos',
    description: '',
    image: 'https://picsum.photos/600/800?random=39'
  }
];

export function ProductsSection() {
  const whatsappNumber = '5543999687799';
  const [index, setIndex] = React.useState(0);
  const length = products.length;

  // Autoplay interval
  React.useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % length);
    }, 3500);
    return () => clearInterval(id);
  }, [length]);

  // Keep a single centered slide (user wants large centered image)
  const visibleCount = 1;

  return (
    <section id="produtos" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-brand-deepblue/5">
      <div className="text-center mb-12">
        <span className="text-brand-aqua text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Naturale Skincare</span>
        <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">Nossos <span className="italic">Produtos</span></h2>
        <p className="text-brand-deepblue/70 text-lg leading-relaxed max-w-2xl mx-auto">
          Leve a experiência Naturale para sua casa com nossa linha exclusiva de cuidados com a pele.
        </p>
      </div>

      <div className="relative overflow-hidden flex justify-center">
        <motion.div
          className="flex w-full"
          // total width equals number of slides * width of each slide (in %)
          style={{ width: `${length * (100 / visibleCount)}%` }}
          animate={{ x: `-${index * (100 / visibleCount)}%` }}
          transition={{ ease: 'easeInOut', duration: 0.8 }}
        >
          {products.map((product) => (
            <div key={product.title} className="flex-shrink-0 px-4" style={{ width: `${100 / visibleCount}%` }}>
              <div className="max-w-4xl mx-auto">
                <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-3xl mb-6 shadow-sm">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-lg md:text-2xl font-serif mb-2 text-center">{product.title}</h3>
                {product.description && <p className="text-brand-deepblue/60 leading-relaxed mb-6 text-center">{product.description}</p>}
                <div className="text-center">
                  <Link
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre o produto: ${product.title}`)}`}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-aqua hover:text-brand-deepblue transition-colors"
                  >
                    Saiba Mais <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function AcademySection() {
  return (
    <section id="academy" className="py-24 bg-brand-deepblue text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-brand-aqua text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Naturale Academy</span>
          <h2 className="text-4xl md:text-6xl font-serif mb-8">Formação de Especialistas</h2>
          <div className="text-white/70 text-lg leading-relaxed space-y-4">
            <p>Após perceber a carência de resultados expressivos em poucas sessões no mercado, criou seus próprios protocolos e produtos para que fossem mais rápidos os resultados aos clientes que procuravam-a.</p>
            <p>Com muito estudo e ciência desenvolveu 14 tratamentos, sendo 5 faciais e 9 corporais.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Cursos removidos conforme solicitado */}
        </div>
      </div>
    </section>
  );
}
