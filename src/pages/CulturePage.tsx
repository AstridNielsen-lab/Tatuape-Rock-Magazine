import React from 'react';
import Layout from '../components/layout/Layout';
import { recentArticles } from '../data/mockData';

const CulturePage = () => {
  const cultureArticles = recentArticles.filter(
    article => article.category === 'culture'
  );

  return (
    <Layout>
      <div className="pt-24 pb-16 bg-dark bg-opacity-90">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading text-light mb-6">
            Cultura & Retrospectiva
          </h1>
          <p className="text-xl text-accent mb-12">
            Moda, filmes e curiosidades que moldaram as décadas do rock.
          </p>
          
          <div className="grid grid-cols-1 gap-8">
            {cultureArticles.map(article => (
              <div key={article.id} className="card hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/3">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={article.imageUrl} 
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h2 className="text-2xl font-heading text-light mb-3">{article.title}</h2>
                    <p className="text-gray-400 mb-4">{article.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map(tag => (
                        <span key={tag} className="bg-primary/20 text-light px-2 py-1 text-sm rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{article.author}</span>
                      <span>{new Date(article.publishDate).toLocaleDateString('pt-BR')}</span>
                    </div>
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

export default CulturePage;