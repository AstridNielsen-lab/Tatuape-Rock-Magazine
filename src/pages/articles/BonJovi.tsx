import React from 'react';
import Layout from '../../components/layout/Layout';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BonJovi = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-dark bg-opacity-90">
        <div className="container-custom">
          <Link 
            to="/monthly-highlights" 
            className="inline-flex items-center text-accent hover:text-highlight mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Destaques
          </Link>

          <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl md:text-5xl font-heading text-light mb-6">
              Bon Jovi: Do Underground ao Mainstream
            </h1>

            <div className="aspect-video mb-8 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg"
                alt="Bon Jovi em performance"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <p className="text-xl text-accent mb-6">
                  De Nova Jersey para o mundo, Bon Jovi conquistou gerações com seu rock melódico e 
                  letras que falam direto ao coração.
                </p>

                <h2 className="text-2xl font-heading text-light mb-4">Os Primeiros Anos</h2>
                <p className="text-gray-300 mb-6">
                  Formada em 1983 em Nova Jersey, a banda começou tocando em clubes locais. Jon Bon 
                  Jovi trabalhou como zelador em um estúdio de gravação, onde produziu sua primeira 
                  demo, "Runaway".
                </p>

                <h2 className="text-2xl font-heading text-light mb-4">Slippery When Wet: O Álbum que Mudou Tudo</h2>
                <p className="text-gray-300 mb-6">
                  Em 1986, "Slippery When Wet" transformou Bon Jovi em um fenômeno global. Hits como 
                  "Livin' on a Prayer" e "You Give Love a Bad Name" definiram uma era do rock.
                </p>

                <h2 className="text-2xl font-heading text-light mb-4">New Jersey e o Auge do Sucesso</h2>
                <p className="text-gray-300 mb-6">
                  O álbum "New Jersey" de 1988 consolidou a banda no topo, com cinco singles no Top 10, 
                  incluindo "Bad Medicine" e "I'll Be There for You".
                </p>

                <h2 className="text-2xl font-heading text-light mb-4">Reinvenção e Longevidade</h2>
                <p className="text-gray-300 mb-6">
                  Nos anos 90, a banda se reinventou com "Keep the Faith" e "These Days", mostrando 
                  maturidade musical e mantendo sua relevância em um cenário musical em mudança.
                </p>

                <h2 className="text-2xl font-heading text-light mb-4">Legado e Influência</h2>
                <p className="text-gray-300 mb-6">
                  Bon Jovi transcendeu o rótulo de "hair band" dos anos 80, construindo uma carreira 
                  duradoura baseada em composições sólidas e performances energéticas.
                </p>
              </div>

              <div className="lg:col-span-1">
                <div className="card p-6 mb-6">
                  <h3 className="text-xl font-heading text-light mb-4">Formação Clássica</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>Jon Bon Jovi - Vocal</li>
                    <li>Richie Sambora - Guitarra</li>
                    <li>David Bryan - Teclados</li>
                    <li>Tico Torres - Bateria</li>
                    <li>Alec John Such - Baixo</li>
                  </ul>
                </div>

                <div className="card p-6 mb-6">
                  <h3 className="text-xl font-heading text-light mb-4">Álbuns Essenciais</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>Bon Jovi (1984)</li>
                    <li>Slippery When Wet (1986)</li>
                    <li>New Jersey (1988)</li>
                    <li>Keep the Faith (1992)</li>
                    <li>These Days (1995)</li>
                  </ul>
                </div>

                <div className="card p-6">
                  <h3 className="text-xl font-heading text-light mb-4">Curiosidades</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>"Livin' on a Prayer" foi quase deixada fora do álbum</li>
                    <li>A banda já vendeu mais de 130 milhões de álbuns</li>
                    <li>Jon Bon Jovi é dono do time de arena football Philadelphia Soul</li>
                    <li>Entraram para o Rock and Roll Hall of Fame em 2018</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default BonJovi;