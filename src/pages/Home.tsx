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
   <div className="text-center mt-12">
        <h1 className="text-3xl font-bold mb-6">Latest Blog Posts</h1>
      </div>
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
          <p className="text-gray-700 mb-4">This section showcases a featured image related to our blog content.</p>
          <div className="relative w-full h-80">
            <img
              src="https://publish.purewow.net/wp-content/uploads/sites/2/2022/04/evolveyou-lower-body-workout-cat.jpg?resize=720%2C524.jpg"
              alt="Featured Image"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-1 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Description Section</h2>
          <p className="text-gray-700">This section provides additional descriptions and insights about our blog posts, including summaries, highlights, and key takeaways from the content.</p>
        </div>
      </div>
      
      <Services /> 
    </div>
    
  );
};

export default Home;
