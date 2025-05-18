import React from 'react';
import { Download, ExternalLink } from 'lucide-react';
import Button from '../common/Button';
import { MagazineIssue } from '../../types';
import { motion } from 'framer-motion';

interface MagazineShowcaseProps {
  issues: MagazineIssue[];
}

const MagazineShowcase: React.FC<MagazineShowcaseProps> = ({ issues }) => {
  return (
    <section className="py-16 relative bg-dark bg-opacity-85 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/96380/pexels-photo-96380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <h2 className="section-title mb-12">Últimas Edições</h2>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {issues.map((issue, index) => (
            <motion.div
              key={issue.id}
              initial={{ opacity: 0, y: 20, rotateY: -20 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
              className="w-full sm:w-64 md:w-72 relative flex flex-col"
            >
              <div className="perspective-card mb-4 relative group">
                {/* Magazine Cover */}
                <div className="transform transition-transform duration-500 group-hover:rotate-y-5 retro-shadow">
                  <div className="aspect-[3/4] overflow-hidden rounded-lg">
                    <img 
                      src={issue.coverImageUrl} 
                      alt={issue.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-dark bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                  <div className="p-4 text-center">
                    <Button 
                      variant="primary"
                      size="sm"
                      icon={<Download size={16} />}
                      className="mb-2 w-full"
                    >
                      Download PDF
                    </Button>
                    <Button 
                      variant="outline"
                      size="sm"
                      icon={<ExternalLink size={16} />}
                      className="w-full"
                    >
                      Ver Online
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="font-subheading text-light truncate">
                  {issue.title.split(' - ')[0]}
                </h3>
                <p className="text-accent text-sm">
                  {new Date(issue.releaseDate).toLocaleString('pt-BR', { month: 'long', year: 'numeric' })}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            size="lg"
            icon={<ExternalLink size={20} />}
            iconPosition="right"
          >
            Ver Todas as Edições
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MagazineShowcase;