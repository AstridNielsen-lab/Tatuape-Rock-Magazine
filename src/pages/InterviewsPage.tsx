import React from 'react';
import Layout from '../components/layout/Layout';
import { recentArticles } from '../data/mockData';

const InterviewsPage = () => {
  const interviews = recentArticles.filter(
    article => article.category === 'interviews'
  );

  return (
    <Layout>
      <div className="pt-24 pb-16 bg-dark bg-opacity-90">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading text-light mb-6">
            Entrevistas & Backstage
          </h1>
          <p className="text-xl text-accent mb-12">
            Conversas exclusivas com seus artistas favoritos e histórias dos bastidores.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {interviews.map(article => (
              <div key={article.id} className="card hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5">
                    <div className="aspect-square relative overflow-hidden">
                      <img 
                        src={article.imageUrl} 
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-3/5 p-6">
                    <h2 className="text-2xl font-heading text-light mb-3">{article.title}</h2>
                    <p className="text-gray-400 mb-4">{article.excerpt}</p>
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

export default InterviewsPage;