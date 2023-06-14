import React from 'react';
import BlogPost from './BlogPost';

const Blog = () => {
  const blogPosts = [
    {
      title: 'My First Blog Post',
      image: '/path/to/image1.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: 'John Doe',
      date: 'June 1, 2023'
    },
    {
      title: 'Another Blog Post',
      image: '/path/to/image2.jpg',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      author: 'Jane Smith',
      date: 'June 5, 2023'
    }
  ];

  return (
    <div  className="blog-page">
      <h1>Blog</h1>
      {blogPosts.map((post, index) => (
        <BlogPost
          key={index}
          title={post.title}
          image={post.image}
          content={post.content}
          author={post.author}
          date={post.date}
        />
      ))}
    </div>
  );
};

export default Blog;
