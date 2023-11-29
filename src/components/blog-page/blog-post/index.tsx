import BlogDetails from '@/components/shared/blog/blog-details';
import Container from '@/components/shared/container';
import React from 'react';

const BLOGPOSTS = [
  {
    id: 0,
    img: 'home-decoration.png',
    title: '10 Effective Strategies to Remove Background from Images',
    text: 'High-quality pictures are not enough, but editing them is also essential for taking good pictures, lighting, angles, and many factors impact.',
    profileImg: 'hasan.png',
    profileName: 'Ksenia Sverku',
  },
  {
    id: 1,
    img: 'chair.png',
    title: '7 Powerful Strategies to Build Stronger Relationships',
    text: 'A passport is an essential travel document confirming identity and citizenship. A passport photo with a plain background is required to ensure that the photo.',
    profileImg: 'sverku.png',
    profileName: 'Ksenia Sverku',
  },
  {
    id: 1,
    img: 'mock.png',
    title: 'Say Goodbye to Background Clutter: 10 Tools for Easy Removal',
    text: 'High-quality pictures are not enough, but editing them is also essential for taking good pictures, lighting, angles, and many factors impact.',
    profileImg: 'hasan.png',
    profileName: 'Ksenia Sverku',
  },
  {
    id: 1,
    img: 'fig.png',
    title: 'Polish Your Photos: 10 Expert Tips for Background Removal',
    text: 'A passport is an essential travel document confirming identity and citizenship. A passport photo with a plain background is required to ensure that the photo.',
    profileImg: 'sverku.png',
    profileName: 'Ksenia Sverku',
  },
];

function BlogPost() {
  return (
    <Container>
      <ul className='mb-16 mt-14 grid grid-cols-2 place-items-center justify-between gap-x-7 gap-y-14 md:flex-row'>
        {BLOGPOSTS.map((details) => (
          <BlogDetails key={details.id} details={details} />
        ))}
      </ul>
    </Container>
  );
}

export default BlogPost;
