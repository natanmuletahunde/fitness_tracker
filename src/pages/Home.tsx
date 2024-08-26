import React from 'react';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';

interface Blog {
  id: number;
  image: string;  // URL of the image
}

const Home: React.FC = () => {
  // Define an array of blog data with image URLs
  const blogs: Blog[] = [
    { id: 1, image: 'https://thumbs.dreamstime.com/b/power-muscular-bodybuilder-guy-doing-pullups-gym-fitness-man-black-white-image-pumping-up-lats-muscles-91597926.jpg' },
    { id: 2, image: 'https://manofmany.com/wp-content/uploads/2021/01/Fitness-Trends-2021-c.jpg' },
    { id: 3, image: 'https://www.jamesallenphoto.com/uploads/7/8/3/1/78318796/fitness-photography-guys-05-2000-px_orig.jpg' },
    { id: 4, image: 'https://i.ytimg.com/vi/Mg71qKLF9Fk/maxresdefault.jpg' },
    { id: 5, image: 'https://i.ytimg.com/vi/puzd9MrO6yI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDDEtW7_ClozkW2Ng54Uw5PkdiXdQ.jpg' },
    { id: 6, image: 'https://i.ytimg.com/vi/D30ye257-Ng/maxresdefault.jpg' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection />
      <Services /> 
      <h1 className="text-3xl font-bold mb-6 mt-12">Latest Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map(blog => (
          <div key={blog.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={blog.image} className="w-full h-48 object-cover" alt={`Blog Post ${blog.id}`} />
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row mt-12 gap-6">
        <div className="flex-1 bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Images Section</h2>
          <p className="text-gray-700">This section showcases the latest blog post images. You can see a variety of images related to our blog content displayed in a grid above.</p>
        </div>
        <div className="flex-1 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Description Section</h2>
          <p className="text-gray-700">This section provides additional descriptions and insights about our blog posts, including summaries, highlights, and key takeaways from the content.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
