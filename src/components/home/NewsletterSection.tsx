import React, { useState } from 'react';
import { Mail, AlertCircle, CheckCircle2 } from 'lucide-react';
import Button from '../common/Button';
import { motion } from 'framer-motion';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      setStatus('error');
      setMessage('Por favor, insira um email válido.');
      return;
    }
    
    // Simulate success (in a real app, this would call an API)
    setStatus('success');
    setMessage('Obrigado! Você foi inscrito na nossa newsletter.');
    setEmail('');
    
    // Reset after 5 seconds
    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 5000);
  };

  return (
    <section className="py-16 bg-dark bg-opacity-95">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl p-6 md:p-8 border border-gray-800"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Left Icon */}
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="w-32 h-32 flex items-center justify-center rounded-full bg-primary/20 border-2 border-primary">
                    <Mail size={64} className="text-highlight" />
                  </div>
                  <div className="absolute -right-4 -bottom-4 w-12 h-12 flex items-center justify-center rounded-full bg-highlight text-dark">
                    <Mail size={24} className="text-dark" />
                  </div>
                </div>
              </div>
              
              {/* Right Content */}
              <div className="w-full md:w-2/3">
                <h2 className="font-heading text-3xl text-light mb-2">
                  Inscreva-se na nossa Newsletter
                </h2>
                <p className="text-gray-300 mb-6">
                  Receba as últimas notícias, artigos exclusivos e informações sobre o lançamento de 
                  novas edições da Revista Tatuapé FM diretamente na sua caixa de entrada.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Seu melhor email"
                      className="w-full bg-dark bg-opacity-50 border border-gray-700 rounded-lg py-3 px-4 text-light placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-highlight focus:border-transparent"
                    />
                    
                    <Button 
                      type="submit" 
                      variant="primary"
                      className="mt-2 w-full sm:w-auto sm:mt-0 sm:absolute sm:right-0.5 sm:top-0.5 sm:bottom-0.5"
                    >
                      Inscrever-se
                    </Button>
                  </div>
                  
                  {status !== 'idle' && (
                    <div className={`flex items-center ${status === 'success' ? 'text-success' : 'text-error'} text-sm`}>
                      {status === 'success' ? <CheckCircle2 size={16} className="mr-1" /> : <AlertCircle size={16} className="mr-1" />} 
                      {message}
                    </div>
                  )}
                  
                  <p className="text-gray-500 text-xs">
                    Ao se inscrever, você concorda com nossa <a href="/terms" className="underline hover:text-accent">Política de Privacidade</a>.
                    Enviamos emails mensalmente e você pode cancelar a inscrição a qualquer momento.
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;