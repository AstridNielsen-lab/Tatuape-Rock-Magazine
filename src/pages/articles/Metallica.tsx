import React from 'react';
import Layout from '../../components/layout/Layout';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Metallica = () => {
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
              Metallica: Masters of Thrash
            </h1>

            <div className="aspect-video mb-8 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg"
                alt="Metallica em performance"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <p className="text-xl text-accent mb-6">
                  Dos clubes underground de São Francisco para o topo do mundo, o Metallica redefiniu 
                  os limites do thrash metal e se tornou uma das maiores bandas de todos os tempos.
                </p>

                <h2 className="text-2xl font-heading text-light mb-4">A Origem do Trovão</h2>
                <p className="text-gray-300 mb-6">
                  Formado em 1981 por Lars Ulrich e James Hetfield, o Metallica emergiu da cena thrash 
                  metal da Bay Area com uma proposta que combinava a velocidade do punk com a 
                  complexidade do heavy metal tradicional.
                </p>

                <h2 className="text-2xl font-heading text-light mb-4">Kill 'Em All e Ride the Lightning</h2>
                <p className="text-gray-300 mb-6">
                  Com o lançamento de "Kill 'Em All" em 1983, a banda estabeleceu as bases do thrash 
                  metal. "Ride the Lightning", lançado no ano seguinte, expandiu seus horizontes 
                  musicais com composições mais elaboradas.
                </p>

                <h2 className="text-2xl font-heading text-light mb-4">Master of Puppets: A Obra-Prima</h2>
                <p className="text-gray-300 mb-6">
                  1986 viu o lançamento de "Master of Puppets", considerado por muitos o melhor álbum 
                  de metal já feito. A complexidade das composições e a produção impecável elevaram o 
                  status da banda a um novo patamar.
                </p>

                <h2 className="text-2xl font-heading text-light mb-4">Tragédia e Transformação</h2>
                <p className="text-gray-300 mb-6">
                  A morte do baixista Cliff Burton em um acidente de ônibus em 1986 marcou um ponto de 
                  virada. Com Jason Newsted, a banda lançou "...And Justice for All" em 1988, 
                  mostrando uma direção ainda mais progressiva.
                </p>

                <h2 className="text-2xl font-heading text-light mb-4">O Álbum Negro e o Mainstream</h2>
                <p className="text-gray-300 mb-6">
                  O álbum homônimo de 1991, conhecido como "Black Album", catapultou o Metallica ao 
                  estrelato mainstream com hits como "Enter Sandman" e "Nothing Else Matters", 
                  vendendo mais de 30 milhões de cópias mundialmente.
                </p>
              </div>

              <div className="lg:col-span-1">
                <div className="card p-6 mb-6">
                  <h3 className="text-xl font-heading text-light mb-4">Formação Clássica</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>James Hetfield - Vocal e Guitarra</li>
                    <li>Lars Ulrich - Bateria</li>
                    <li>Kirk Hammett - Guitarra Solo</li>
                    <li>Cliff Burton - Baixo (1982-1986)</li>
                  </ul>
                </div>

                <div className="card p-6 mb-6">
                  <h3 className="text-xl font-heading text-light mb-4">Álbuns Essenciais</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>Kill 'Em All (1983)</li>
                    <li>Ride the Lightning (1984)</li>
                    <li>Master of Puppets (1986)</li>
                    <li>...And Justice for All (1988)</li>
                    <li>Metallica (1991)</li>
                  </ul>
                </div>

                <div className="card p-6">
                  <h3 className="text-xl font-heading text-light mb-4">Curiosidades</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>O nome da banda foi sugerido por Lars Ulrich, inspirado em uma revista de metal</li>
                    <li>Kirk Hammett era originalmente membro do Exodus</li>
                    <li>"Master of Puppets" foi o último álbum com Cliff Burton</li>
                    <li>O "Black Album" levou quase um ano para ser gravado</li>
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

export default Metallica;