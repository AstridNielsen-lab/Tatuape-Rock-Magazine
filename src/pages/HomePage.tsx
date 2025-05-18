import React from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/home/HeroSection';
import FeaturedArticles from '../components/home/FeaturedArticles';
import RecentArticles from '../components/home/RecentArticles';
import MagazineShowcase from '../components/home/MagazineShowcase';
import NewsletterSection from '../components/home/NewsletterSection';
import CategorySection from '../components/home/CategorySection';
import { featuredArticles, recentArticles, magazineIssues } from '../data/mockData';

const HomePage = () => {
  return (
    <Layout>
      <HeroSection featuredIssue={magazineIssues[0]} />
      <FeaturedArticles articles={featuredArticles} />
      <CategorySection />
      <RecentArticles articles={recentArticles} />
      <MagazineShowcase issues={magazineIssues} />
      <NewsletterSection />
    </Layout>
  );
};

export default HomePage;