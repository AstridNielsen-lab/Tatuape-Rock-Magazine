import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Instagram, 
  Facebook, 
  Youtube, 
  Music2, 
  Twitter, 
  Mail, 
  Radio 
} from 'lucide-react';
import Logo from '../common/Logo';
import { socialLinks } from '../../data/mockData';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Magazine',
      links: [
        { label: 'Últimas Edições', path: '/issues' },
        { label: 'Arquivo', path: '/archive' },
        { label: 'Download PDF', path: '/downloads' },
        { label: 'Assinar Newsletter', path: '/newsletter' },
      ]
    },
    {
      title: 'Conteúdo',
      links: [
        { label: 'Destaques do Mês', path: '/monthly-highlights' },
        { label: 'Entrevistas', path: '/interviews' },
        { label: 'Cultura & Retrospectiva', path: '/culture' },
        { label: 'Tecnologia & Música', path: '/tech' },
      ]
    },
    {
      title: 'Sobre Nós',
      links: [
        { label: 'História', path: '/about' },
        { label: 'Equipe', path: '/team' },
        { label: 'Anuncie', path: '/advertise' },
        { label: 'Contato', path: '/contact' },
      ]
    }
  ];

  const socialIcons = {
    instagram: <Instagram size={20} />,
    facebook: <Facebook size={20} />,
    youtube: <Youtube size={20} />,
    spotify: <Music2 size={20} />,
    twitter: <Twitter size={20} />
  };

  return (
    <footer className="bg-dark bg-opacity-95 pt-12 pb-6 border-t border-gray-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div className="lg:col-span-1">
            <Logo size="lg" showTagline={true} className="mb-4" />
            <p className="text-gray-400 mb-4">
              A revista oficial da Rádio Tatuapé FM, trazendo o melhor do rock clássico, 
              hard rock e heavy metal dos anos 70, 80 e 90.
            </p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map(link => (
                <a 
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-highlight transition-colors"
                  aria-label={`Visite nosso ${link.platform}`}
                >
                  {socialIcons[link.platform as keyof typeof socialIcons]}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h4 className="text-xl font-subheading text-primary mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map(link => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-highlight transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Revista Tatuapé FM. Todos os direitos reservados.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/privacy" className="text-gray-400 hover:text-highlight text-sm">
                Privacidade
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-highlight text-sm">
                Termos
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-highlight text-sm">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 bg-black bg-opacity-50 py-2">
        <div className="container-custom">
          <div className="flex justify-center items-center text-center">
            <Radio className="text-primary mr-2" size={16} />
            <span className="text-gray-400 text-xs">
              A Revista Tatuapé FM é um projeto da Rádio Tatuapé FM | 
              <a href="https://radiotatuapefm.com.br" className="text-accent hover:text-highlight ml-1">
                radiotatuapefm.com.br
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;