import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import communityHero from "../assets/communityhero.png";
import clothesDrive from "../assets/community1.png";
import deviceDrive from "../assets/community2.png";

export default function Community() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="font-sans bg-gray-100 text-gray-900 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center h-20">
          <a href="/" className="text-2xl font-bold mr-12 hover:text-blue-800 transition duration-300">
            Give For Good Foundation
          </a>
          <div className="hidden md:flex items-center space-x-8 flex-1">
            <a href="/education" className="text-lg hover:text-blue-800 transition duration-300">Education & Research</a>
            <a href="/community" className="text-lg hover:text-blue-800 transition duration-300">Community Development</a>
            <a href="/women" className="text-lg hover:text-blue-800 transition duration-300">Women Empowerment</a>
            <a href="/history" className="text-lg hover:text-blue-800 transition duration-300">Our History</a>
          </div>
          <div className="hidden md:flex">
            <a href="/contact" className="px-6 py-2 bg-black text-white rounded-md hover:bg-blue-900 transition duration-300">
              Contact Us
            </a>
          </div>
          <div className="md:hidden flex items-center ml-auto">
            <button onClick={toggleMenu} className="p-2 rounded-md focus:outline-none">
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 sm:px-8 py-12 space-y-16">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-900">
            Community Development
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Our mission is to empower communities, bridge gaps, and maximize the impact of every donation.
          </p>
        </div>

        {/* Hero */}
        <section className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
          <img src={communityHero} alt="Community" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center px-6">
              Building Bridges, Empowering Lives
            </h2>
          </div>
        </section>

        {/* Clothing Drive — FIXED */}
        <section className="bg-white shadow-2xl rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            
            {/* Image */}
            <div className="w-full md:w-1/2 h-72 md:h-80 overflow-hidden rounded-3xl shadow-md">
              <img
                src={clothesDrive}
                alt="Clothing Drive"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Text Card */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="max-w-md bg-white/95 backdrop-blur p-6 md:p-7 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  Clothing Drives That Go the Distance
                </h3>
                <p className="text-gray-800 text-sm md:text-base leading-relaxed mb-3">
                  In the age of fast fashion, many of us discard clothes without a second thought.
                  In rural parts of India, every piece of fabric tells a story and gets used to its fullest.
                  Our <strong>clothing drives</strong> ensure apparel reaches communities that need it most.
                </p>
                <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                  From winter jackets to everyday shirts, each donation carries warmth, care,
                  and the promise of prolonged utility.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Device Drive (unchanged, already good) */}
        <section className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 h-72 md:h-80 overflow-hidden rounded-3xl shadow-md">
            <img src={deviceDrive} alt="Device Drive" className="w-full h-full object-cover object-top" />
          </div>
          <div className="w-full md:w-1/2 max-w-md bg-white/95 p-6 md:p-7 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-3">
              Technology That Transforms
            </h3>
            <p className="text-sm md:text-base leading-relaxed mb-3">
              Old phones and laptops may seem obsolete, but to students in rural India,
              they are gateways to education and opportunity.
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              Each device is inspected, refurbished, and delivered with purpose.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
