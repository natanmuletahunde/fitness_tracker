import React from 'react';

const Services = () => {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold">Personal Training</h3>
          <p>One-on-one sessions with expert trainers to meet your fitness goals.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold">Group Classes</h3>
          <p>Join group classes for various fitness activities and have fun while working out.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold">Nutrition Counseling</h3>
          <p>Get personalized nutrition plans and advice to complement your fitness journey.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
