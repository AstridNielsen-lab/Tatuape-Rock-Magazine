import React from 'react';
import { ArrowRight, Download, Music } from 'lucide-react';
import Button from '../common/Button';
import { motion } from 'framer-motion';
import { MagazineIssue } from '../../types';

interface HeroSectionProps {
  featuredIssue: MagazineIssue;
}

const HeroSection: React.FC<HeroSectionProps> = ({ featuredIssue }) => {
  const handleListenClick = () => {
    window.open('https://radiotatuapefm.radiostream321.com/', '_blank');
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-dark bg-opacity-80">
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Column - Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-light mb-4">
                <span className="gradient-text glow">Revista Tatuapé FM</span>
              </h1>
              <p className="text-lg md:text-xl font-subheading text-accent mb-6">
                O melhor do rock clássico, hard rock e heavy metal
              </p>
              <p className="text-base text-gray-300 mb-8 max-w-xl">
                Mergulhe no universo do rock com nossa revista mensal. 
                Entrevistas exclusivas, análises de discos clássicos e 
                tudo sobre a cultura que transformou gerações.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="primary"
                  size="lg"
                  icon={<Download size={20} />}
                  className="sm:mr-4"
                >
                  Baixar Última Edição
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  icon={<Music size={20} />}
                  onClick={handleListenClick}
                >
                  Ouvir a Rádio
                </Button>
              </div>
            </motion.div>
          </div>
          
          {/* Right Column - Magazine Cover */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative group">
                {/* Magazine Cover */}
                <div className="relative z-10 perspective-card retro-shadow bg-gray-900 rounded-xl overflow-hidden">
                  <div className="relative w-64 md:w-72 lg:w-80 aspect-[3/4]">
                    <img 
                      src={featuredIssue.coverImageUrl}
                      alt={featuredIssue.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <h3 className="text-light font-subheading text-lg leading-tight">
                        {featuredIssue.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {new Date(featuredIssue.releaseDate).toLocaleString('pt-BR', { month: 'long', year: 'numeric' })}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Vinyl Record Behind */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 record vinyl-spin">
                </div>
              </div>

              {/* Label */}
              <div className="absolute -top-4 -right-4 z-20 bg-highlight text-dark py-1 px-3 rotate-6 font-heading text-sm retro-shadow rounded-xl">
                Nova Edição!
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-dark to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-20 bg-[url('https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
    </section>
  );
};

export default HeroSection;