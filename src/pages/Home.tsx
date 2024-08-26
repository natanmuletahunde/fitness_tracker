import React from 'react';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';

interface Blog {
  id: number;
  title: string;
  summary: string;
  image: string;  // URL of the image
}

const Home: React.FC = () => {
  // Define an array of blog data with image URLs
  const blogs: Blog[] = [
    { id: 1, title: 'Blog Post 1', summary: 'Summary of blog post 1', image: 'https://thumbs.dreamstime.com/b/power-muscular-bodybuilder-guy-doing-pullups-gym-fitness-man-black-white-image-pumping-up-lats-muscles-91597926.jpg' },
    { id: 2, title: 'Blog Post 2', summary: 'Summary of blog post 2', image: 'https://manofmany.com/wp-content/uploads/2021/01/Fitness-Trends-2021-c.jpg' },
    { id: 3, title: 'Blog Post 3', summary: 'Summary of blog post 3', image: 'https://www.jamesallenphoto.com/uploads/7/8/3/1/78318796/fitness-photography-guys-05-2000-px_orig.jpg' },
    { id: 4, title: 'Blog Post 4', summary: 'Summary of blog post 4', image: 'https://i.ytimg.com/vi/Mg71qKLF9Fk/maxresdefault.jpg' },
    { id: 5, title: 'Blog Post 5', summary: 'Summary of blog post 5', image: 'https://i.ytimg.com/vi/puzd9MrO6yI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDDEtW7_ClozkW2Ng54Uw5PkdiXdQ.jpg' },
    { id: 6, title: 'Blog Post 6', summary: 'Summary of blog post 6', image: 'https://i.ytimg.com/vi/D30ye257-Ng/maxresdefault.jpg' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection />
      <Services /> 
      <h1 className="text-3xl font-bold mb-6 mt-12">Latest Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map(blog => (
          <div key={blog.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative w-full h-48">
              <img src={blog.image} alt={blog.title} className="absolute inset-0 w-full h-full object-contain" />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600">{blog.summary}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gray-100 p-8 mt-12 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Big Container Section</h2>
        <p className="text-gray-700">This is a big container section that you can use for additional content, such as a call-to-action, newsletter signup, or featured content.</p>
      </div>
    </div>
  );
};

export default Home;
