import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import tedImage from "../assets/ted.png"; // Make sure this path is correct

export default function Education() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="font-sans bg-gray-100 text-gray-900 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center h-20">
          <a href="/" className="text-2xl font-bold mr-12">Give For Good Foundation</a>
          <div className="hidden md:flex items-center space-x-8 flex-1">
            <a href="/education" className="text-lg hover:underline">Education & Research</a>
            <a href="/community" className="text-lg hover:underline">Community Development</a>
            <a href="/women" className="text-lg hover:underline">Women Empowerment</a>
            <a href="/history" className="text-lg hover:underline">Our History</a>
          </div>
          <div className="hidden md:flex">
            <a href="/contact" className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">Contact Us</a>
          </div>
          <div className="md:hidden flex items-center ml-auto">
            <button onClick={toggleMenu} className="p-2 rounded-md focus:outline-none">
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="flex flex-col px-4 py-4 space-y-2">
              <a href="/education" onClick={toggleMenu} className="text-lg">Education & Research</a>
              <a href="/community" onClick={toggleMenu} className="text-lg">Community Development</a>
              <a href="/women" onClick={toggleMenu} className="text-lg">Women Empowerment</a>
              <a href="/history" onClick={toggleMenu} className="text-lg">Our History</a>
              <a href="/contact" onClick={toggleMenu} className="text-lg font-semibold">Contact Us</a>
            </div>
          </div>
        )}
      </nav>

      <main className="max-w-7xl mx-auto px-6 sm:px-8 py-12 space-y-12">
        {/* Page header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Education & Research</h1>
          <p className="text-lg text-gray-700">
            At Give For Good Foundation, we are committed to fostering knowledge, innovation, and community impact.
          </p>
        </div>

        {/* Hero Section */}
        <section className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
          <img 
            src={tedImage} 
            alt="TED Vascular Congress" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
              TED Congress AZ
            </h2>
          </div>
        </section>

        {/* TED Vascular Congress Sponsorship Section */}
        <section className="bg-white shadow-lg rounded-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-center text-blue-800">
            Proud Sponsor of The TED Vascular Congress 2023
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We are thrilled to announce that <strong>Give For Good Foundation</strong> was an official sponsor of the <strong>TED Vascular Congress 2023</strong>, happening from <strong>March 19-21, 2023</strong> at the luxurious <strong>The Phoenician in Scottsdale, Arizona</strong>.  
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            This prestigious event brings together world-class vascular specialists, medical innovators, and thought leaders to share breakthroughs, discuss best practices, and inspire meaningful collaboration in the field of vascular medicine. By supporting this congress, we aim to further our mission of advancing education and research while fostering impactful community initiatives.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Attendees can look forward to a packed agenda of insightful lectures, interactive workshops, and networking opportunities designed to empower medical professionals with the knowledge and tools they need to make a difference.
          </p>
          <div className="text-center">
            <a 
              href="https://tedconferenceaz.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-3 bg-blue-800 text-white rounded-md text-lg font-semibold hover:bg-blue-700 transition"
            >
              Learn More About TED Vascular Congress
            </a>
          </div>
        </section>

        {/* Placeholder for future content */}
        <div className="flex items-center justify-center min-h-[40vh]">
        </div>
      </main>
    </div>
  );
}
