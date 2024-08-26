import React from 'react';

const About = () => {
  return (
    <section className="p-10 bg-gray-100">
      {/* Header Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">About Us</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          We are dedicated to helping you achieve your fitness goals with personalized plans and expert guidance. Our team of professionals is here to support you on your journey to a healthier, stronger you.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
        <p className="text-gray-700">
          Our mission is to empower individuals to lead healthier lives through fitness and wellness. We believe that fitness should be accessible to everyone, and we strive to provide the tools, resources, and support needed to achieve lasting results.
        </p>
      </div>

      {/* Company History Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Our History</h3>
        <p className="text-gray-700">
          Founded in 2010, our company started as a small group of fitness enthusiasts with a shared passion for health and wellness. Over the years, we have grown into a leading provider of fitness services, helping thousands of clients transform their lives.
        </p>
      </div>

      {/* Team Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Meet Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 1"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-800">John Doe</h4>
            <p className="text-gray-600">Lead Trainer</p>
          </div>
          {/* Team Member 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 2"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-800">Jane Smith</h4>
            <p className="text-gray-600">Nutrition Specialist</p>
          </div>
          {/* Team Member 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 3"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-800">Michael Johnson</h4>
            <p className="text-gray-600">Fitness Coach</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">What Our Clients Say</h3>
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-gray-700 italic">"This fitness program changed my life. I've never felt stronger or more confident!"</p>
            <p className="text-gray-600 mt-4">- Alex R.</p>
          </div>
          <div className="text-center">
            <p className="text-gray-700 italic">"The trainers are amazing, and the results speak for themselves."</p>
            <p className="text-gray-600 mt-4">- Sarah K.</p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-indigo-600 text-white p-8 rounded-lg shadow-lg text-center">
        <h3 className="text-2xl font-bold mb-4">Join Us Today!</h3>
        <p className="mb-6">Take the first step toward a healthier you. Contact us to learn more about our fitness programs and how we can help you achieve your goals.</p>
        <a href="/contact" className="bg-white text-indigo-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default About;
