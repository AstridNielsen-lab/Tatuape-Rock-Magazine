import { Article, MagazineIssue, SocialMediaLink } from '../types';

export const featuredArticles: Article[] = [
  {
    id: '1',
    title: 'Iron Maiden: 50 Anos de Heavy Metal',
    subtitle: 'Como a banda britânica revolucionou o gênero e continua influenciando gerações',
    excerpt: 'Celebrando cinco décadas de uma das bandas mais importantes do heavy metal mundial, mergulhamos na história épica do Iron Maiden.',
    imageUrl: 'https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'monthly-highlights',
    tags: ['iron maiden', 'heavy metal', 'bruce dickinson', 'clássico do mês'],
    publishDate: '2023-05-15',
    author: 'Ricardo Caverna',
    featured: true
  },
  {
    id: '2',
    title: 'O Renascimento do Rock dos Anos 80',
    excerpt: 'Como o som, a moda e a atitude das bandas dos anos 80 estão voltando com tudo nas novas gerações.',
    imageUrl: 'https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'culture',
    tags: ['anos 80', 'revival', 'new wave', 'hair metal'],
    publishDate: '2023-04-28',
    author: 'Sandra Oliveira',
    featured: true
  },
  {
    id: '3',
    title: 'Bandas Brasileiras que Fizeram História',
    excerpt: 'De Sepultura a Raimundos: conheça as bandas nacionais que conquistaram o mundo e abriram portas para o rock brasileiro.',
    imageUrl: 'https://images.pexels.com/photos/144428/pexels-photo-144428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'monthly-highlights',
    tags: ['rock nacional', 'sepultura', 'raimundos', 'descobertas'],
    publishDate: '2023-06-02',
    author: 'Claudio Tsunami',
    featured: true
  },
  {
    id: '4',
    title: 'Guns N\' Roses: A Explosão do Hard Rock',
    excerpt: 'Appetite for Destruction completa 35 anos e continua sendo um dos álbuns mais influentes do rock.',
    imageUrl: 'https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'monthly-highlights',
    tags: ['guns n roses', 'hard rock', 'anos 80', 'appetite for destruction'],
    publishDate: '2023-03-15',
    author: 'Mike Stone',
    featured: true
  },
  {
    id: '5',
    title: 'Metallica: Masters of Thrash',
    excerpt: 'Como Master of Puppets redefiniu os limites do thrash metal e se tornou um clássico instantâneo.',
    imageUrl: 'https://images.pexels.com/photos/165971/pexels-photo-165971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'monthly-highlights',
    tags: ['metallica', 'thrash metal', 'anos 80', 'master of puppets'],
    publishDate: '2023-02-10',
    author: 'John Thunder',
    featured: true
  },
  {
    id: '6',
    title: 'Bon Jovi: Do Underground ao Mainstream',
    excerpt: 'A trajetória da banda que conquistou o mundo com sua mistura única de hard rock e pop.',
    imageUrl: 'https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'monthly-highlights',
    tags: ['bon jovi', 'hard rock', 'anos 80', 'slippery when wet'],
    publishDate: '2023-01-20',
    author: 'Lisa Rock',
    featured: true
  },
  {
    id: '7',
    title: 'Mötley Crüe: Os Bad Boys do Sunset Strip',
    excerpt: 'A história da banda que personificou o espírito selvagem do hair metal dos anos 80.',
    imageUrl: 'https://images.pexels.com/photos/2747446/pexels-photo-2747446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'monthly-highlights',
    tags: ['motley crue', 'hair metal', 'anos 80', 'dr feelgood'],
    publishDate: '2022-12-05',
    author: 'Tommy Thunder',
    featured: true
  }
];

export const recentArticles: Article[] = [
  {
    id: '8',
    title: 'Vinil vs. Streaming: A Batalha pelo Futuro da Música',
    excerpt: 'Analisamos as vantagens e desvantagens de cada formato e como eles estão moldando o consumo de música.',
    imageUrl: 'https://images.pexels.com/photos/1374557/pexels-photo-1374557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'tech',
    tags: ['vinil', 'streaming', 'formatos', 'tecnologia'],
    publishDate: '2023-05-30',
    author: 'Mariana Grooves'
  },
  {
    id: '9',
    title: 'Entrevista Exclusiva: O Retorno de Angra',
    excerpt: 'Conversamos com Rafael Bittencourt sobre o novo álbum e a turnê mundial da banda.',
    imageUrl: 'https://images.pexels.com/photos/5191631/pexels-photo-5191631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'interviews',
    tags: ['angra', 'entrevista', 'power metal', 'exclusivo'],
    publishDate: '2023-05-25',
    author: 'Pedro Marshall'
  },
  {
    id: '10',
    title: 'Pedaleiras Vintage: Vale a Pena o Investimento?',
    excerpt: 'Especialistas analisam o mercado de equipamentos antigos e se o som justifica os preços elevados.',
    imageUrl: 'https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'tech',
    tags: ['pedais', 'equipamentos', 'vintage', 'guitarra'],
    publishDate: '2023-05-20',
    author: 'Fernando Distortion'
  },
  {
    id: '11',
    title: 'Os Filmes que Definiram a Estética do Rock',
    excerpt: 'De "The Wall" a "This Is Spinal Tap": como o cinema influenciou e foi influenciado pelo rock.',
    imageUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'culture',
    tags: ['cinema', 'filmes', 'pink floyd', 'cultura pop'],
    publishDate: '2023-05-18',
    author: 'Luiza Celluloid'
  }
];

export const magazineIssues: MagazineIssue[] = [
  {
    id: '1',
    title: 'Edição #01 - Especial Iron Maiden: 50 Anos de Heavy Metal',
    coverImageUrl: 'https://images.pexels.com/photos/96380/pexels-photo-96380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    releaseDate: '2023-05-01',
    description: 'Nossa edição de lançamento traz uma retrospectiva completa da carreira do Iron Maiden, entrevistas exclusivas e um pôster colecionável.',
    pdfUrl: '#',
    featured: true
  },
  {
    id: '2',
    title: 'Edição #02 - O Renascimento do Rock dos Anos 80',
    coverImageUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    releaseDate: '2023-06-01',
    description: 'Uma análise profunda sobre o revival do som e da estética oitentista no cenário musical contemporâneo.',
    pdfUrl: '#',
    featured: true
  },
  {
    id: '3',
    title: 'Edição #03 - Bandas Brasileiras que Fizeram História',
    coverImageUrl: 'https://images.pexels.com/photos/165971/pexels-photo-165971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    releaseDate: '2023-07-01',
    description: 'Um tributo às bandas nacionais que elevaram o rock brasileiro ao status mundial.',
    pdfUrl: '#',
    featured: true
  }
];

export const socialLinks: SocialMediaLink[] = [
  {
    platform: 'instagram',
    url: 'https://instagram.com/radiotatuapefm',
    icon: 'instagram'
  },
  {
    platform: 'facebook',
    url: 'https://facebook.com/radiotatuapefm',
    icon: 'facebook'
  },
  {
    platform: 'youtube',
    url: 'https://youtube.com/radiotatuapefm',
    icon: 'youtube'
  },
  {
    platform: 'spotify',
    url: 'https://open.spotify.com/user/radiotatuapefm',
    icon: 'spotify'
  },
  {
    platform: 'twitter',
    url: 'https://twitter.com/radiotatuapefm',
    icon: 'twitter'
  }
];