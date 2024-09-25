'use client'

import Header from './components/Header';
import Footer from './components/Footer';
import EventHighlights from './components/EventHighlights';
import { useState } from 'react';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-10 pt-28"> {/* Adjust padding for fixed header */}
        {/* About Section */}
        <section id="about" className="text-center">
          <h1 className="text-5xl font-extrabold mb-6 text-blue-700">
            Web Development Conference 2024
          </h1>
          <p className="text-xl mb-8 text-gray-700">
            Join us for an immersive experience on the future of web development, featuring keynotes, workshops, and networking sessions.
          </p>
          <button id="register" onClick={toggleModal} className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-lg hover:bg-blue-700 transition">
            Register Now
          </button>
        </section>

        {/* Event Highlights */}
        <EventHighlights />

        {/* Schedule Section */}
        <section id="schedule" className="mt-12 py-12">
          <h2 className="text-center text-4xl font-bold mb-8 text-gray-800">Event Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-2xl font-semibold mb-2 text-black">Day 1: Keynote Speakers</h3>
              <p className="text-gray-700">Be inspired by industry leaders like John Doe, Jane Smith, and more.</p>
              <p className="mt-4 text-gray-500">Time: 9:00 AM - 12:00 PM</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-2xl font-semibold mb-2 text-black">Day 2: Interactive Workshops</h3>
              <p className="text-gray-700">Workshops on JavaScript, React, and Next.js led by experts.</p>
              <p className="mt-4 text-gray-500">Time: 1:00 PM - 5:00 PM</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-2xl font-semibold mb-2 text-black">Day 3: Networking Events</h3>
              <p className="text-gray-700">Opportunities to connect with other developers from all around the world.</p>
              <p className="mt-4 text-gray-500">Time: 3:00 PM - 6:00 PM</p>
            </div>
          </div>
        </section>

        {/* Register Section */}
          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h3 className="text-2xl font-semibold mb-4 text-black">Event Registration</h3>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                      style={{ height: 50 }}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      style={{ height: 50 }}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="ticket" className="block text-sm font-medium text-gray-700">
                      Ticket Type
                    </label>
                    <select
                      id="ticket"
                      className="text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      style={{ height: 50 }}
                    >
                      <option>General Admission</option>
                      <option>VIP Admission</option>
                      <option>Student Admission</option>
                    </select>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={toggleModal}
                      className="mr-4 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-lg hover:bg-blue-700 transition"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
