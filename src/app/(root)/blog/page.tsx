import Banner from '@/components/blog-page/banner';
import BlogPost from '@/components/blog-page/blog-post';
import TrendingPost from '@/components/blog-page/trending';
import React from 'react';

function BlogPage() {
  return (
    <main className='mt-10'>
      <Banner />
      <BlogPost />
      <TrendingPost />
    </main>
  );
}

export default BlogPage;
