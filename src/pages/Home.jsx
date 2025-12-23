import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpeg";
import image6 from "../assets/image6.png";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div id="home" className="font-sans bg-paper text-ink"> {/* Added id="home" */}

      {/* ================== Navbar ================== */}
      <nav className="bg-paper shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center h-20">
          {/* Logo */}
          <a href="" className="text-2xl font-bold mr-12">
            Give For Good Foundation
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 flex-1">
            <a href="/education" className="text-lg relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-ink after:transition-all hover:after:w-full">Education & Research</a>
            <a href="/community" className="text-lg relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-ink after:transition-all hover:after:w-full">Community Development</a>
            <a href="/women" className="text-lg relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-ink after:transition-all hover:after:w-full">Women Empowerment</a>
            <a href="/history" className="text-lg relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-ink after:transition-all hover:after:w-full">Our History</a>
          </div>

          {/* Contact Us button on desktop */}
          <div className="hidden md:flex">
            <a 
              href="/contact" 
              className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center ml-auto">
            <button onClick={toggleMenu} className="p-2 rounded-md focus:outline-none">
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-paper border-t border-gray-200">
            <div className="flex flex-col px-4 py-4 space-y-2">
              <a href="#" onClick={toggleMenu} className="text-lg">Education & Research</a>
              <a href="#featured" onClick={toggleMenu} className="text-lg">Community Development</a>
              <a href="#community" onClick={toggleMenu} className="text-lg">Women Empowerment</a>
              <a href="#join" onClick={toggleMenu} className="text-lg">Our History</a>
              <a href="#contact" onClick={toggleMenu} className="text-lg font-semibold">Contact Us</a>
            </div>
          </div>
        )}
      </nav>

      {/* ================== Hero Section ================== */}
      <section 
        className="relative w-full h-[80vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Women & Children
            <span className="block mt-2">Need Your Help</span>
          </h1>
          <div className="flex justify-center gap-4 flex-wrap">
            <a 
              href="#join" 
              className="px-6 py-3 bg-[#1f1f1f] text-white font-semibold rounded-md hover:bg-[#333333] transition"
            >
              Get Involved
            </a>
            <a 
              href="#featured" 
              className="px-6 py-3 bg-[#3b3b3b] text-white font-semibold rounded-md hover:bg-[#555555] transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ================== Featured Cases ================== */}
      <section id="featured" className="py-24 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 border border-gray-200 rounded-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Education & Research</h3>
            <img src={image2} alt="Education & Research" className="w-full h-96 object-cover rounded-md" />
          </div>
          <div className="p-6 border border-gray-200 rounded-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Women Empowerment</h3>
            <img src={image3} alt="Women Empowerment" className="w-full h-96 object-cover rounded-md" />
          </div>
          <div className="p-6 border border-gray-200 rounded-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Community Development</h3>
            <img src={image4} alt="Community Development" className="w-full h-96 object-cover rounded-md" />
          </div>
        </div>
      </section>

      {/* ================== About Us ================== */}
      <section id="community" className="py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-3/4">
            <img src={image5} alt="About Us" className="w-full h-96 object-cover rounded-md shadow-lg" />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-10">About Us</h2>
            <p className="text-muted text-lg">
              Founded in 2012, the Give for Good Foundation is based on the idea of one organization serving humanity one mission at a time.
            </p>
          </div>
        </div>
      </section>

      {/* ================== Join Us ================== */}
      <section 
        id="join" 
        className="relative w-full h-80 flex items-center justify-center text-center bg-cover rounded-md shadow-lg"
        style={{ backgroundImage: `url(${image6})`, backgroundPosition: 'center 40%', backgroundSize: 'cover' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20 rounded-md"></div>
        <div className="relative z-10 px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Us</h2>
          <p className="text-white text-lg mb-6">Be part of our mission to make a difference today!</p>
          <a href="#donate" className="px-6 py-3 bg-[#1f1f1f] text-white font-semibold rounded-md hover:bg-[#333333] transition">Donate</a>
        </div>
      </section>

      {/* ================== Follow Us on Instagram ================== */}
      <section id="instagram" className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Follow Us on Instagram</h2>
        <p className="text-muted mb-8">Stay updated with our latest activities and stories.</p>
        <a href="https://www.instagram.com/giveforgood/" target="_blank" className="px-6 py-3 bg-pink-500 text-paper rounded-md hover:bg-pink-600 transition">Instagram</a>
      </section>

        

      {/* ================== Footer ================== */}
      <footer className="py-12 px-6 border-t border-gray-200 text-center text-muted">
        &copy; {new Date().getFullYear()} Give For Good Foundation. All rights reserved.
      </footer>
    </div>
  );
}
