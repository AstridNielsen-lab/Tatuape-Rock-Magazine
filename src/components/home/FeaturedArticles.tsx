import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import Card from '../common/Card';
import { Article } from '../../types';
import { motion } from 'framer-motion';

interface FeaturedArticlesProps {
  articles: Article[];
}

const FeaturedArticles: React.FC<FeaturedArticlesProps> = ({ articles }) => {
  return (
    <section className="py-16 bg-dark bg-opacity-90">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-12">
          <h2 className="section-title">Destaque do Mês</h2>
          <Link to="/monthly-highlights">
            <Button 
              variant="outline" 
              size="sm" 
              icon={<ArrowRight size={16} />}
              iconPosition="right"
            >
              Ver Todos
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                variant={index === 0 ? 'highlight' : 'default'}
                className={index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}
                onClick={() => console.log(`Navigate to article: ${article.id}`)}
              >
                <div className="relative">
                  {/* Article Image */}
                  <div className={`relative overflow-hidden ${index === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                    <img 
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-70"></div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-light px-3 py-1 text-sm font-subheading uppercase tracking-wider rounded">
                      {article.category === 'monthly-highlights' 
                        ? 'Destaque' 
                        : article.category === 'interviews'
                          ? 'Entrevista'
                          : article.category === 'culture'
                            ? 'Cultura'
                            : article.category === 'tech'
                              ? 'Tecnologia'
                              : 'Exclusivo'}
                    </span>
                  </div>
                </div>
                
                {/* Article Content */}
                <div className="p-6">
                  <h3 className={`font-heading ${index === 0 ? 'text-2xl' : 'text-xl'} mb-2 text-light hover:text-highlight transition-colors`}>
                    {article.title}
                  </h3>
                  
                  {article.subtitle && index === 0 && (
                    <p className="text-accent mb-3 font-subheading">{article.subtitle}</p>
                  )}
                  
                  <p className="text-gray-400 mb-4">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      Por {article.author}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(article.publishDate).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;