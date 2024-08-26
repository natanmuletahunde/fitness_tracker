import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ name, email, message });
  };

  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full p-3 border border-gray-300 rounded"
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Send</button>
      </form>
    </section>
  );
};

export default ContactForm;
