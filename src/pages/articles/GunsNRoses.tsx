import React from 'react';
import Layout from '../../components/layout/Layout';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const GunsNRoses = () => {
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

          <div className="relative rounded-xl overflow-hidden mb-12">
            <img 
              src="https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Guns N' Roses performance"
              className="w-full h-[60vh] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-light mb-4">
                Guns N' Roses: A Explosão do Hard Rock
              </h1>
              <p className="text-xl text-accent">
                Appetite for Destruction completa 35 anos e continua sendo um dos álbuns mais influentes do rock
              </p>
            </div>
          </div>

          <div className="prose prose-lg prose-invert mx-auto">
            <div className="mb-8 text-gray-400">
              <span className="mr-4">Por Mike Stone</span>
              <span>15 de Março, 2023</span>
            </div>

            <p className="text-xl text-accent mb-8">
              Em 1987, uma banda de Los Angeles lançou um álbum que mudaria para sempre 
              a história do hard rock. Appetite for Destruction não era apenas mais um 
              disco - era uma revolução sonora.
            </p>

            <h2 className="text-2xl text-light mb-4">Welcome to the Jungle</h2>
            <p className="text-gray-300 mb-6">
              O primeiro single do álbum capturou perfeitamente a essência crua e 
              energética da banda. A música se tornou um hino instantâneo e ajudou 
              a estabelecer o Guns N' Roses como uma força dominante no cenário musical.
            </p>

            <h2 className="text-2xl text-light mb-4">O Álbum que Mudou Tudo</h2>
            <p className="text-gray-300 mb-6">
              Appetite for Destruction combinou a atitude do punk com a técnica do hard rock, 
              criando um som único que influenciaria gerações de músicos. O álbum vendeu 
              mais de 30 milhões de cópias em todo o mundo.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-dark/50 p-6 rounded-lg">
                <h3 className="text-xl text-highlight mb-4">Faixas Icônicas</h3>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Welcome to the Jungle</li>
                  <li>Paradise City</li>
                  <li>Sweet Child O' Mine</li>
                  <li>Nightrain</li>
                </ul>
              </div>
              <div className="bg-dark/50 p-6 rounded-lg">
                <h3 className="text-xl text-highlight mb-4">Conquistas</h3>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Álbum de estreia mais vendido da história</li>
                  <li>18x Platina nos EUA</li>
                  <li>Nº 1 na Billboard 200</li>
                  <li>Mais de 30 milhões de cópias vendidas</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl text-light mb-4">Legado</h2>
            <p className="text-gray-300 mb-6">
              Mesmo após 35 anos, Appetite for Destruction continua sendo uma referência 
              no hard rock. Sua influência pode ser ouvida em inúmeras bandas modernas, 
              e suas músicas continuam conquistando novas gerações de fãs.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GunsNRoses;