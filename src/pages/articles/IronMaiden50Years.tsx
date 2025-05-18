import React from 'react';
import Layout from '../../components/layout/Layout';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const IronMaiden50Years = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-dark bg-opacity-90">
        <div className="container-custom">
          {/* Back Button */}
          <Link 
            to="/monthly-highlights" 
            className="inline-flex items-center text-accent hover:text-highlight mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Destaques
          </Link>

          {/* Hero Section */}
          <div className="relative rounded-xl overflow-hidden mb-12">
            <img 
              src="https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Iron Maiden em performance"
              className="w-full h-[60vh] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-light mb-4">
                Iron Maiden: 50 Anos de Heavy Metal
              </h1>
              <p className="text-xl text-accent">
                Como a banda britânica revolucionou o gênero e continua influenciando gerações
              </p>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg prose-invert mx-auto">
            <div className="mb-8 text-gray-400">
              <span className="mr-4">Por Ricardo Caverna</span>
              <span>15 de Maio, 2023</span>
            </div>

            <p className="text-xl text-accent mb-8">
              Em 1975, nas ruas do East End londrino, nascia uma das bandas mais influentes 
              da história do heavy metal. Cinco décadas depois, o Iron Maiden continua sendo 
              sinônimo de excelência musical e shows espetaculares.
            </p>

            <h2 className="text-2xl text-light mb-4">Os Primeiros Anos</h2>
            <p className="text-gray-300 mb-6">
              Fundada pelo baixista Steve Harris, a banda enfrentou diversas mudanças de 
              formação até encontrar sua identidade sonora única. Com a chegada de Paul 
              Di'Anno nos vocais, o grupo lançou seus primeiros álbuns, estabelecendo as 
              bases do que viria a ser seu som característico.
            </p>

            <h2 className="text-2xl text-light mb-4">A Era Bruce Dickinson</h2>
            <p className="text-gray-300 mb-6">
              A entrada de Bruce Dickinson como vocalista em 1981 marcou o início da era de 
              ouro da banda. Álbuns como "The Number of the Beast" (1982), "Piece of Mind" (1983) 
              e "Powerslave" (1984) são considerados obras-primas do heavy metal.
            </p>

            <h2 className="text-2xl text-light mb-4">Legado e Influência</h2>
            <p className="text-gray-300 mb-6">
              O Iron Maiden revolucionou não apenas o som do heavy metal, mas também a forma 
              como as bandas apresentavam sua música ao vivo. Suas turnês mundiais, 
              cenários elaborados e a presença icônica do mascote Eddie estabeleceram 
              novos padrões para shows de rock.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-dark/50 p-6 rounded-lg">
                <h3 className="text-xl text-highlight mb-4">Números Impressionantes</h3>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Mais de 100 milhões de álbuns vendidos</li>
                  <li>17 álbuns de estúdio</li>
                  <li>2.500+ shows realizados</li>
                  <li>Presentes em mais de 60 países</li>
                </ul>
              </div>
              <div className="bg-dark/50 p-6 rounded-lg">
                <h3 className="text-xl text-highlight mb-4">Prêmios e Reconhecimentos</h3>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Grammy Award</li>
                  <li>Ivor Novello Award</li>
                  <li>Rock and Roll Hall of Fame</li>
                  <li>Múltiplos discos de platina</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl text-light mb-4">O Futuro</h2>
            <p className="text-gray-300 mb-6">
              Mesmo após 50 anos, o Iron Maiden continua sendo uma força dominante no 
              heavy metal. A banda segue lançando álbuns aclamados pela crítica e 
              realizando turnês mundiais que atraem múltiplas gerações de fãs.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IronMaiden50Years;