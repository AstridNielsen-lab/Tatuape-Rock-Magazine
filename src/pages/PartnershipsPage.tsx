import React from 'react';
import Layout from '../components/layout/Layout';
import { Handshake, Mail } from 'lucide-react';

const PartnershipsPage = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-dark bg-opacity-90">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading text-light mb-6">
            Parcerias & Patrocínios
          </h1>
          <p className="text-xl text-accent mb-12">
            Parceiros que acreditam na cultura rock e apoiam nosso trabalho.
          </p>
          
          <div className="grid grid-cols-1 gap-12">
            <div className="card p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3 flex justify-center">
                  <Handshake className="w-32 h-32 text-primary" />
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-heading text-light mb-4">Seja um Parceiro</h2>
                  <p className="text-gray-400 mb-6">
                    Junte-se a nós na missão de manter viva a cultura do rock. Oferecemos diversas 
                    modalidades de parceria para empresas e marcas que compartilham nossos valores.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="btn btn-primary">
                      <Mail className="w-5 h-5 mr-2" />
                      Fale Conosco
                    </button>
                    <button className="btn btn-outline">Ver Media Kit</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Placeholder partner cards */}
              {[1, 2, 3, 4, 5, 6].map((partner) => (
                <div key={partner} className="card p-6 hover:transform hover:-translate-y-2 transition-all duration-300">
                  <div className="aspect-video bg-gray-800 rounded flex items-center justify-center mb-4">
                    <span className="text-gray-600 text-lg">Logo Parceiro</span>
                  </div>
                  <h3 className="text-xl font-heading text-light mb-2">Parceiro {partner}</h3>
                  <p className="text-gray-400 text-sm">
                    Descrição breve sobre o parceiro e sua relação com a Revista Tatuapé FM.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PartnershipsPage;