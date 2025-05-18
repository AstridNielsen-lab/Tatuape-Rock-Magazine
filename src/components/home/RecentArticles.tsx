import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';
import Card from '../common/Card';
import Button from '../common/Button';
import { Article } from '../../types';
import { motion } from 'framer-motion';

interface RecentArticlesProps {
  articles: Article[];
}

const RecentArticles: React.FC<RecentArticlesProps> = ({ articles }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 bg-dark">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-12">
          <h2 className="section-title">Artigos Recentes</h2>
          <Link to="/articles">
            <Button 
              variant="outline" 
              size="sm" 
              icon={<ArrowRight size={16} />}
              iconPosition="right"
            >
              Todos os Artigos
            </Button>
          </Link>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {articles.map(article => (
            <motion.div key={article.id} variants={item}>
              <Card 
                className="h-full flex flex-col"
                onClick={() => console.log(`Navigate to article: ${article.id}`)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-primary/90 text-light px-2 py-1 text-xs font-subheading uppercase tracking-wide rounded">
                      {article.category === 'monthly-highlights' 
                        ? 'Destaque' 
                        : article.category === 'interviews'
                          ? 'Entrevista'
                          : article.category === 'culture'
                            ? 'Cultura'
                            : article.category === 'tech'
                              ? 'Tecnologia'
                              : article.category}
                    </span>
                  </div>
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-heading text-lg text-light hover:text-highlight transition-colors mb-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center text-xs text-gray-500 mt-auto">
                    <div className="flex items-center mr-4">
                      <User size={12} className="mr-1" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={12} className="mr-1" />
                      {new Date(article.publishDate).toLocaleDateString('pt-BR')}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RecentArticles;