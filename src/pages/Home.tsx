import React from 'react';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';

interface Blog {
  id: number;
  title: string;
  summary: string;
}

const Home: React.FC = () => {
  // Define an array of blog data
  const blogs: Blog[] = [
    { id: 1, title: 'Blog Post 1', summary: 'Summary of blog post 1' },
    { id: 2, title: 'Blog Post 2', summary: 'Summary of blog post 2' },
    { id: 3, title: 'Blog Post 3', summary: 'Summary of blog post 3' },
    { id: 4, title: 'Blog Post 4', summary: 'Summary of blog post 4' },
    { id: 5, title: 'Blog Post 5', summary: 'Summary of blog post 5' },
    { id: 6, title: 'Blog Post 6', summary: 'Summary of blog post 6' },
    { id: 7, title: 'Blog Post 7', summary: 'Summary of blog post 7' },
    { id: 8, title: 'Blog Post 8', summary: 'Summary of blog post 8' },
    { id: 9, title: 'Blog Post 9', summary: 'Summary of blog post 9' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection /> {/* Include the HeroSection component */}
      <Services /> {/* Include the Services component */}
      <h1 className="text-3xl font-bold mb-6 mt-12">Latest Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map(blog => (
          <div key={blog.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600">{blog.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
