import React from 'react';
import { Link } from 'react-router-dom';
import { Disc, Users, Film, Radio, MessageSquare, DownloadCloud, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Destaques do Mês',
    description: 'Os clássicos, descobertas e raridades que marcaram o mês no mundo do rock.',
    icon: <Disc className="w-10 h-10" />,
    color: 'from-primary to-secondary',
    path: '/monthly-highlights'
  },
  {
    title: 'Entrevistas & Backstage',
    description: 'Conversas exclusivas com seus artistas favoritos e histórias dos bastidores.',
    icon: <Users className="w-10 h-10" />,
    color: 'from-secondary to-accent',
    path: '/interviews'
  },
  {
    title: 'Cultura & Retrospectiva',
    description: 'Moda, filmes e curiosidades que moldaram as décadas do rock.',
    icon: <Film className="w-10 h-10" />,
    color: 'from-accent to-highlight',
    path: '/culture'
  },
  {
    title: 'Tecnologia & Música',
    description: 'Equipamentos vintage, inovações e debates sobre formatos musicais.',
    icon: <Radio className="w-10 h-10" />,
    color: 'from-highlight to-primary',
    path: '/tech'
  },
  {
    title: 'Interatividade',
    description: 'Votações, playlists dos ouvintes, memes e quizzes temáticos.',
    icon: <MessageSquare className="w-10 h-10" />,
    color: 'from-primary to-highlight',
    path: '/interactive'
  },
  {
    title: 'Conteúdo Exclusivo',
    description: 'Podcasts, vídeos e playlists cuidadosamente preparadas pela equipe.',
    icon: <DownloadCloud className="w-10 h-10" />,
    color: 'from-secondary to-accent',
    path: '/exclusive'
  },
  {
    title: 'Parcerias & Patrocínios',
    description: 'Parceiros que acreditam na cultura rock e apoiam nosso trabalho.',
    icon: <Handshake className="w-10 h-10" />,
    color: 'from-accent to-primary',
    path: '/partnerships'
  }
];

const CategorySection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-dark to-dark/80">
      <div className="container-custom">
        <h2 className="section-title mb-12">Explore por Categorias</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={category.path}>
                <div className="group h-full bg-dark bg-opacity-80 border border-gray-800 rounded-lg overflow-hidden hover:border-primary transition-all duration-300 flex flex-col">
                  {/* Icon */}
                  <div className={`p-6 bg-gradient-to-r ${category.color} group-hover:scale-105 transition-transform duration-300`}>
                    <div className="w-16 h-16 mx-auto flex items-center justify-center bg-dark bg-opacity-30 text-light rounded-full">
                      {category.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex-grow">
                    <h3 className="font-subheading text-xl text-light mb-2 group-hover:text-highlight transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;