import React from 'react';
import Layout from '../components/layout/Layout';
import { recentArticles } from '../data/mockData';

const TechPage = () => {
  const techArticles = recentArticles.filter(
    article => article.category === 'tech'
  );

  return (
    <Layout>
      <div className="pt-24 pb-16 bg-dark bg-opacity-90">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading text-light mb-6">
            Tecnologia & Música
          </h1>
          <p className="text-xl text-accent mb-12">
            Equipamentos vintage, inovações e debates sobre formatos musicais.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techArticles.map(article => (
              <div key={article.id} className="card hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex gap-2">
                      {article.tags.map(tag => (
                        <span key={tag} className="bg-primary text-light px-2 py-1 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-heading text-light mb-3">{article.title}</h2>
                  <p className="text-gray-400 mb-4">{article.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{article.author}</span>
                    <span>{new Date(article.publishDate).toLocaleDateString('pt-BR')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TechPage;