export interface Article {
  id: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  content?: string;
  imageUrl: string;
  category: ArticleCategory;
  tags: string[];
  publishDate: string;
  author: string;
  featured?: boolean;
}

export type ArticleCategory = 
  | 'monthly-highlights'
  | 'interviews'
  | 'culture'
  | 'tech'
  | 'interactive'
  | 'exclusive'
  | 'partnerships';

export interface MagazineIssue {
  id: string;
  title: string;
  coverImageUrl: string;
  releaseDate: string;
  description: string;
  pdfUrl: string;
  featured?: boolean;
}

export interface SocialMediaLink {
  platform: 'instagram' | 'facebook' | 'youtube' | 'spotify' | 'twitter';
  url: string;
  icon: string;
}