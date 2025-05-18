import React from 'react';
import Layout from '../../components/layout/Layout';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const MotleyCrue = () => {
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
              Mötley Crüe: Os Bad Boys do Sunset Strip
            </h1>

            <div className="aspect-video mb-8 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg"
                alt="Mötley Crüe em performance"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <p className="text-xl text-accent mb-6">
                  Nascidos na Sunset Strip de Los Angeles, o Mötley Crüe personificou o espírito 
                  selvagem e hedonista do glam metal dos anos 80.
                </p>

                <h2 className="text-2xl font-heading text-light mb-4">O Início na Sunset Strip</h2>
                <p className="text-gray-300 mb-6">
                  Formado em 1981, o Mötley Crüe rapidamente se tornou a banda mais notória da cena 
                  de Los Angeles, misturando heavy metal com uma imagem glam provocativa.
                </p>

                <h2 className="text-2xl font-heading text-light mb-4">Shout at the Devil</h2>
                <p className="text-gray-300 mb-6">
                  O álbum "Shout at the Devil" de 1983 estabeleceu a banda como uma força do metal, 
                  com sua mistura única de riffs pesados e melodias cativantes.
                </p>

                <h2 className="text-2xl font-heading text-light mb-4">Theatre of Pain e Girls, Girls, Girls</h2>
                <p className="text-gray-300 mb-6">
                  Com estes álbuns, a banda refinou sua sonoridade glam metal e produziu hits como 
                  "Home Sweet Home" e "Girls, Girls, Girls", que definiram uma era.
                </p>

                <h2 className="text-2xl font-heading text-light mb-4">Dr. Feelgood: O Ápice</h2>
                <p className="text-gray-300 mb-6">
                  "Dr. Feelgood" (1989) representou o auge comercial e artístico da banda, com 
                  produção cristalina de Bob Rock e composições mais maduras.
                </p>

                <h2 className="text-2xl font-heading text-light mb-4">Legado e Influência</h2>
                <p className="text-gray-300 mb-6">
                  O Mötley Crüe não apenas ajudou a definir o som e a estética do glam metal, mas 
                  também influenciou gerações de músicos com sua atitude rebelde e shows espetaculares.
                </p>
              </div>

              <div className="lg:col-span-1">
                <div className="card p-6 mb-6">
                  <h3 className="text-xl font-heading text-light mb-4">Formação Clássica</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>Vince Neil - Vocal</li>
                    <li>Mick Mars - Guitarra</li>
                    <li>Nikki Sixx - Baixo</li>
                    <li>Tommy Lee - Bateria</li>
                  </ul>
                </div>

                <div className="card p-6 mb-6">
                  <h3 className="text-xl font-heading text-light mb-4">Álbuns Essenciais</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>Too Fast for Love (1981)</li>
                    <li>Shout at the Devil (1983)</li>
                    <li>Theatre of Pain (1985)</li>
                    <li>Girls, Girls, Girls (1987)</li>
                    <li>Dr. Feelgood (1989)</li>
                  </ul>
                </div>

                <div className="card p-6">
                  <h3 className="text-xl font-heading text-light mb-4">Curiosidades</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>O nome da banda foi inspirado por uma cerveja alemã</li>
                    <li>Nikki Sixx foi declarado clinicamente morto por overdose em 1987</li>
                    <li>A biografia "The Dirt" virou filme na Netflix</li>
                    <li>Tommy Lee ficou famoso por sua bateria giratória</li>
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

export default MotleyCrue;