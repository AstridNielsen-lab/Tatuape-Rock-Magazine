import React from 'react';
import Layout from '../components/layout/Layout';
import { featuredArticles } from '../data/mockData';

const MonthlyHighlightsPage = () => {
  const monthlyHighlights = featuredArticles.filter(
    article => article.category === 'monthly-highlights'
  );

  return (
    <Layout>
      <div className="pt-24 pb-16 bg-dark bg-opacity-90">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading text-light mb-6">
            Destaques do Mês
          </h1>
          <p className="text-xl text-accent mb-12">
            Os clássicos, descobertas e raridades que marcaram o mês no mundo do rock.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {monthlyHighlights.map(article => (
              <div key={article.id} className="card hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
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

export default MonthlyHighlightsPage;