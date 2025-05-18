import React from 'react';
import Layout from '../components/layout/Layout';
import { MessageSquare, ThumbsUp, Award } from 'lucide-react';

const InteractivePage = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-dark bg-opacity-90">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading text-light mb-6">
            Interatividade
          </h1>
          <p className="text-xl text-accent mb-12">
            Votações, playlists dos ouvintes, memes e quizzes temáticos.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6 hover:transform hover:-translate-y-2 transition-all duration-300">
              <MessageSquare className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-heading text-light mb-3">Fórum de Discussão</h2>
              <p className="text-gray-400">
                Participe de debates sobre seus álbuns e bandas favoritas com outros fãs.
              </p>
            </div>
            
            <div className="card p-6 hover:transform hover:-translate-y-2 transition-all duration-300">
              <ThumbsUp className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-heading text-light mb-3">Votação do Mês</h2>
              <p className="text-gray-400">
                Vote no melhor álbum, música ou artista do mês e veja os resultados em tempo real.
              </p>
            </div>
            
            <div className="card p-6 hover:transform hover:-translate-y-2 transition-all duration-300">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-heading text-light mb-3">Quiz Rock</h2>
              <p className="text-gray-400">
                Teste seus conhecimentos sobre rock e concorra a prêmios exclusivos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InteractivePage;