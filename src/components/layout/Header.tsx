import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Music, Headphones } from 'lucide-react';
import Logo from '../common/Logo';
import Button from '../common/Button';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Destaques do Mês', path: '/monthly-highlights' },
  { label: 'Entrevistas & Backstage', path: '/interviews' },
  { label: 'Cultura & Retrospectiva', path: '/culture' },
  { label: 'Tecnologia & Música', path: '/tech' },
  { label: 'Interatividade', path: '/interactive' },
  { label: 'Conteúdo Exclusivo', path: '/exclusive' },
  { label: 'Parcerias', path: '/partnerships' }
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleListenClick = () => {
    window.open('https://radiotatuapefm.radiostream321.com/', '_blank');
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <header className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-dark bg-opacity-95 shadow-lg' : 'bg-transparent'}`}>
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="z-50">
            <Logo showTagline={true} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map(item => (
              <Link 
                key={item.path}
                to={item.path}
                className="font-subheading text-light hover:text-highlight transition-colors relative group text-sm"
              >
                {item.label}
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-highlight scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Search and Mobile Menu Buttons */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              icon={<Search className="w-4 h-4" />} 
              className="hidden sm:flex rounded-xl"
            >
              Buscar
            </Button>

            <Button 
              variant="primary" 
              size="sm" 
              icon={<Headphones className="w-4 h-4" />}
              className="hidden sm:flex rounded-xl"
              onClick={handleListenClick}
            >
              Ouça Agora
            </Button>

            <button 
              className="lg:hidden text-light hover:text-highlight focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div 
          className="lg:hidden overflow-hidden"
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          variants={menuVariants}
        >
          <div className="py-6 space-y-6 bg-dark bg-opacity-95 backdrop-blur-sm rounded-xl">
            <nav className="flex flex-col space-y-4">
              {navItems.map(item => (
                <motion.div key={item.path} variants={itemVariants}>
                  <Link 
                    to={item.path}
                    className="block py-2 px-4 font-subheading text-light hover:bg-primary/20 hover:text-highlight transition-colors text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <motion.div className="flex flex-col space-y-2 px-4" variants={itemVariants}>
              <Button 
                variant="outline" 
                size="md" 
                fullWidth
                icon={<Search className="w-4 h-4" />}
                className="rounded-xl"
              >
                Buscar
              </Button>
              <Button 
                variant="primary" 
                size="md" 
                fullWidth
                icon={<Headphones className="w-4 h-4" />}
                className="rounded-xl"
                onClick={handleListenClick}
              >
                Ouça Agora
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;