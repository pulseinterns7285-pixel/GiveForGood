import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import communityHero from "../assets/communityhero.jpg";
import clothesDrive from "../assets/community1.png"; // Use valid image file
import deviceDrive from "../assets/community2.png"; // Use valid image file

export default function Community() {
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
          <h1 className="text-4xl font-bold mb-4">Community Development</h1>
          <p className="text-lg text-gray-700">
            Our mission is to empower communities, bridge gaps, and maximize the impact of every donation, making the world a little brighter, one initiative at a time.
          </p>
        </div>

        {/* Hero Section */}
        <section className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
          <img 
            src={communityHero} 
            alt="Community Development" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
              Building Bridges, Empowering Lives
            </h2>
          </div>
        </section>
{/* Clothing Drive Section (image on right, focus on face) */}
<section className="bg-white shadow-lg rounded-xl p-8 md:p-12 space-y-6 flex flex-col md:flex-row-reverse items-center md:space-x-8">
  <img 
    src={clothesDrive} 
    alt="Clothing Drive" 
    className="w-full md:w-1/2 h-64 md:h-80 object-cover object-top rounded-xl shadow-md mb-6 md:mb-0"
  />
  <div className="md:w-1/2 space-y-4">
    <h3 className="text-2xl font-bold text-blue-800">Clothing Drives That Go the Distance</h3>
    <p className="text-gray-700 text-lg leading-relaxed">
      In the age of fast fashion, many of us discard clothes without a second thought. In rural parts of India, however, every piece of fabric tells a story and gets used to its fullest. Our <strong>clothing drives</strong> collect gently used apparel and ensure these items reach communities that need them most, maximizing sustainability and impact.
    </p>
    <p className="text-gray-700 text-lg leading-relaxed">
      From winter jackets to everyday shirts, each donation carries warmth, care, and the promise of prolonging utility. We believe every thread matters.
    </p>
  </div>
</section>

{/* Device Drive Section (image on left, focus on face) */}
<section className="bg-white shadow-lg rounded-xl p-8 md:p-12 space-y-6 flex flex-col md:flex-row items-center md:space-x-8">
  <img 
    src={deviceDrive} 
    alt="Device Drive" 
    className="w-full md:w-1/2 h-64 md:h-80 object-cover object-top rounded-xl shadow-md mb-6 md:mb-0"
  />
  <div className="md:w-1/2 space-y-4">
    <h3 className="text-2xl font-bold text-blue-800">Technology That Transforms</h3>
    <p className="text-gray-700 text-lg leading-relaxed">
      Old phones, laptops, and headphones may seem obsolete, but to a student in rural India, they are gateways to education, opportunity, and connection. Through our <strong>device drives</strong>, we collect electronics that still have life in them and distribute them to communities where they can create the greatest impact.
    </p>
    <p className="text-gray-700 text-lg leading-relaxed">
      Each device is carefully inspected, refurbished if necessary, and delivered with the knowledge that it will be used to its fullest potential—amplifying learning, communication, and empowerment for those who need it most.
    </p>
  </div>
</section>



        {/* Placeholder for future content */}
        <div className="flex items-center justify-center min-h-[40vh]">
        </div>
      </main>
    </div>
  );
}
