import React from 'react';
import Layout from '../components/layout/Layout';
import { Headphones, Video, Download } from 'lucide-react';

const ExclusivePage = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-dark bg-opacity-90">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading text-light mb-6">
            Conteúdo Exclusivo
          </h1>
          <p className="text-xl text-accent mb-12">
            Podcasts, vídeos e playlists cuidadosamente preparadas pela equipe.
          </p>
          
          <div className="grid grid-cols-1 gap-8">
            <div className="card p-8 hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/4 flex justify-center">
                  <Headphones className="w-24 h-24 text-primary" />
                </div>
                <div className="md:w-3/4">
                  <h2 className="text-2xl font-heading text-light mb-3">Podcast Tatuapé Rock Show</h2>
                  <p className="text-gray-400 mb-4">
                    Todas as quintas-feiras, um novo episódio com entrevistas, análises e histórias do rock.
                  </p>
                  <button className="btn btn-primary">Ouvir Agora</button>
                </div>
              </div>
            </div>

            <div className="card p-8 hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/4 flex justify-center">
                  <Video className="w-24 h-24 text-primary" />
                </div>
                <div className="md:w-3/4">
                  <h2 className="text-2xl font-heading text-light mb-3">Vídeos Exclusivos</h2>
                  <p className="text-gray-400 mb-4">
                    Documentários, shows completos e bastidores das maiores bandas de rock.
                  </p>
                  <button className="btn btn-primary">Assistir</button>
                </div>
              </div>
            </div>

            <div className="card p-8 hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/4 flex justify-center">
                  <Download className="w-24 h-24 text-primary" />
                </div>
                <div className="md:w-3/4">
                  <h2 className="text-2xl font-heading text-light mb-3">Downloads</h2>
                  <p className="text-gray-400 mb-4">
                    Wallpapers, playlists e outros conteúdos exclusivos para nossos leitores.
                  </p>
                  <button className="btn btn-primary">Baixar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ExclusivePage;