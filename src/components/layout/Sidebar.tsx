import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Radio, Music, Users, Film, MessageSquare, Download, Handshake } from 'lucide-react';
import Logo from '../common/Logo';
import { motion, AnimatePresence } from 'framer-motion';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { 
    label: 'Destaques do Mês',
    icon: <Radio className="w-5 h-5" />,
    path: '/monthly-highlights'
  },
  {
    label: 'Entrevistas & Backstage',
    icon: <Users className="w-5 h-5" />,
    path: '/interviews'
  },
  {
    label: 'Cultura & Retrospectiva',
    icon: <Film className="w-5 h-5" />,
    path: '/culture'
  },
  {
    label: 'Tecnologia & Música',
    icon: <Music className="w-5 h-5" />,
    path: '/tech'
  },
  {
    label: 'Interatividade',
    icon: <MessageSquare className="w-5 h-5" />,
    path: '/interactive'
  },
  {
    label: 'Conteúdo Exclusivo',
    icon: <Download className="w-5 h-5" />,
    path: '/exclusive'
  },
  {
    label: 'Parcerias',
    icon: <Handshake className="w-5 h-5" />,
    path: '/partnerships'
  }
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        className={`fixed lg:static inset-y-0 left-0 w-64 bg-dark/95 border-r border-gray-800 transform z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Logo */}
        <div className="p-4 border-b border-gray-800">
          <Logo size="md" showTagline={true} />
          <button
            className="lg:hidden absolute top-4 right-4 text-gray-400 hover:text-highlight"
            onClick={onClose}
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                location.pathname === item.path
                  ? 'bg-primary text-light'
                  : 'text-gray-400 hover:bg-primary/10 hover:text-highlight'
              }`}
              onClick={() => onClose()}
            >
              {item.icon}
              <span className="font-subheading">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Social Links */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800">
          <div className="flex justify-center space-x-4">
            {/* Add your social media links here */}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;