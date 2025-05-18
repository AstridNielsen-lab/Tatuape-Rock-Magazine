import React from 'react';
import Layout from '../../components/layout/Layout';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BandasBrasileiras = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-dark bg-opacity-90">
        <div className="container-custom">
          {/* Back Button */}
          <Link 
            to="/monthly-highlights" 
            className="inline-flex items-center text-accent hover:text-highlight mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Destaques
          </Link>

          {/* Hero Section */}
          <div className="relative rounded-xl overflow-hidden mb-12">
            <img 
              src="https://images.pexels.com/photos/144428/pexels-photo-144428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Show de rock brasileiro"
              className="w-full h-[60vh] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-light mb-4">
                Bandas Brasileiras que Fizeram História
              </h1>
              <p className="text-xl text-accent">
                De Sepultura a Raimundos: conheça as bandas nacionais que conquistaram o mundo
              </p>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg prose-invert mx-auto">
            <div className="mb-8 text-gray-400">
              <span className="mr-4">Por Claudio Tsunami</span>
              <span>2 de Junho, 2023</span>
            </div>

            <p className="text-xl text-accent mb-8">
              O rock brasileiro tem uma história rica e diversificada, com bandas que não 
              apenas dominaram o cenário nacional, mas também conquistaram reconhecimento 
              internacional, provando que o rock não tem fronteiras.
            </p>

            <h2 className="text-2xl text-light mb-4">Sepultura: O Gigante do Metal</h2>
            <p className="text-gray-300 mb-6">
              Formado em Belo Horizonte em 1984, o Sepultura é o maior exemplo de sucesso 
              internacional do rock brasileiro. A banda revolucionou o metal mundial ao 
              incorporar elementos da música brasileira ao seu som pesado, criando uma 
              identidade única que influenciou bandas em todo o mundo.
            </p>

            <h2 className="text-2xl text-light mb-4">Os Mutantes: Vanguarda do Rock</h2>
            <p className="text-gray-300 mb-6">
              Pioneiros do rock psicodélico no Brasil, Os Mutantes misturaram elementos do 
              rock com a tropicália, criando um som revolucionário que continua influenciando 
              artistas até hoje. Seu legado transcende gerações e fronteiras.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-dark/50 p-6 rounded-lg">
                <h3 className="text-xl text-highlight mb-4">Marcos Históricos</h3>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Primeiro disco de ouro do Sepultura nos EUA</li>
                  <li>Participação dos Mutantes no Rock in Rio</li>
                  <li>Turnê mundial do Raimundos</li>
                  <li>Reconhecimento internacional do Angra</li>
                </ul>
              </div>
              <div className="bg-dark/50 p-6 rounded-lg">
                <h3 className="text-xl text-highlight mb-4">Influência Global</h3>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Covers por bandas internacionais</li>
                  <li>Parcerias com artistas globais</li>
                  <li>Presença em festivais mundiais</li>
                  <li>Reconhecimento da crítica especializada</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl text-light mb-4">Raimundos: Hardcore à Brasileira</h2>
            <p className="text-gray-300 mb-6">
              Misturando hardcore com forró, o Raimundos criou uma sonoridade única que 
              conquistou o Brasil nos anos 90. A banda provou que era possível fazer um 
              rock pesado com identidade brasileira sem perder a essência.
            </p>

            <h2 className="text-2xl text-light mb-4">Angra: Power Metal Mundial</h2>
            <p className="text-gray-300 mb-6">
              O Angra elevou o power metal brasileiro ao status internacional, com 
              composições complexas e técnica impecável. A banda se tornou referência 
              no gênero e abriu portas para muitas outras bandas brasileiras.
            </p>

            <h2 className="text-2xl text-light mb-4">Legado e Futuro</h2>
            <p className="text-gray-300 mb-6">
              Estas bandas não apenas fizeram história, mas continuam influenciando 
              novas gerações de músicos. Seu legado é uma prova do potencial criativo 
              e da qualidade técnica do rock brasileiro, que segue forte e relevante 
              no cenário mundial.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BandasBrasileiras;