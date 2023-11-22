import React from 'react';
import { BLOG_DATA } from '@/lib/data';
import Container from '@/components/shared/container';
import Button from '@/components/shared/button';
import BlogDetails from './blog-details';

function Blog() {
  return (
    <section className='my-24'>
      <Container classNames='text-center'>
        <h1 className='wrap text-center text-4xl font-semibold lg:text-7xl'>
          Latest Articles
        </h1>
        <ul className='mb-16 mt-14 flex flex-col justify-between gap-10 md:flex-row'>
          {BLOG_DATA.map((details) => (
            <BlogDetails key={details.id} details={details} />
          ))}
        </ul>

        <Button variant='blue'>See All Posts</Button>
      </Container>
    </section>
  );
}

export default Blog;
