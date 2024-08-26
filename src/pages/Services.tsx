import React from 'react';
import Services from '../components/Services';

const ServicesPage = () => {
  return (
    <div className="bg-gray-100 p-10">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          We offer a wide range of services to help you achieve your goals. Explore our offerings below and find the perfect solution for your needs.
        </p>
      </header>

      {/* Services Section */}
      <section className="mb-12">
        <Services />
      </section>

      {/* Testimonials Section */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">What Our Clients Say</h2>
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-gray-700 italic">"The service was outstanding and truly exceeded our expectations!"</p>
            <p className="text-gray-600 mt-4">- Emily S.</p>
          </div>
          <div className="text-center">
            <p className="text-gray-700 italic">"Professional, reliable, and results-driven. Highly recommend!"</p>
            <p className="text-gray-600 mt-4">- John D.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-indigo-600 text-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-6">Contact us today to learn more about how our services can help you achieve your goals.</p>
        <a href="/contact" className="bg-white text-indigo-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300">
          Contact Us
        </a>
      </section>

      {/* Contact Information Section */}
      <section className="bg-white p-8 rounded-lg shadow-lg text-center mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-gray-700">Have questions about our services? Feel free to reach out via phone or email, or visit our office during business hours.</p>
        <div className="mt-6">
          <p className="text-gray-600">Phone: 0900357560</p>
          <p className="text-gray-600">Email: natanmuleta911@gmail.com</p>
          <p className="text-gray-600">Address: 123 Service Lane, AMERICA</p>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
