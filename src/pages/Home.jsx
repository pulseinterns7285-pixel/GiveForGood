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
    <div id="home" className="font-sans bg-paper text-ink">

      {/* ================== Navbar ================== */}
      <nav className="bg-paper shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center h-20">
          <a href="/" className="text-2xl font-bold mr-12">
            Give For Good Foundation
          </a>

          <div className="hidden md:flex items-center space-x-8 flex-1">
            <a href="/education" className="text-lg hover:underline">Education & Research</a>
            <a href="/community" className="text-lg hover:underline">Community Development</a>
            <a href="/women" className="text-lg hover:underline">Women Empowerment</a>
            <a href="/history" className="text-lg hover:underline">Our History</a>
          </div>

          <div className="hidden md:flex">
            <a
              href="/contact"
              className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
            >
              Contact Us
            </a>
          </div>

          <div className="md:hidden ml-auto">
            <button onClick={toggleMenu}>
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* ================== Hero ================== */}
      <section
        className="relative w-full h-[80vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Women & Children
            <span className="block">Need Your Help</span>
          </h1>
          <div className="flex justify-center gap-4">
            <a href="#join" className="px-6 py-3 bg-black text-white rounded-md">
              Get Involved
            </a>
            <a href="#featured" className="px-6 py-3 bg-gray-700 text-white rounded-md">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ================== Featured ================== */}
      <section id="featured" className="py-24 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <img src={image2} className="rounded-md h-96 object-cover" />
          <img src={image3} className="rounded-md h-96 object-cover" />
          <img src={image4} className="rounded-md h-96 object-cover" />
        </div>
      </section>

      {/* ================== About ================== */}
      <section id="community" className="py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <img src={image5} className="w-full md:w-1/2 h-96 object-cover rounded-md" />
          <div>
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-lg">
              Founded in 2012, Give for Good Foundation exists to serve humanity
              one mission at a time.
            </p>
          </div>
        </div>
      </section>

      {/* ================== JOIN / DONATE ================== */}
      <section
        id="join"
        className="relative w-full h-80 flex items-center justify-center text-center bg-cover rounded-md"
        style={{ backgroundImage: `url(${image6})`, backgroundPosition: "center 40%" }}
      >
        <div className="absolute inset-0 bg-black/30 rounded-md"></div>
        <div className="relative z-10 px-6">
          <h2 className="text-4xl font-bold text-white mb-4">Join Us</h2>
          <p className="text-white mb-6">Be part of our mission today.</p>

          {/* ✅ PAYPAL DONATE BUTTON */}
          <a
            href="https://www.paypal.com/donate/?hosted_button_id=GE2WNYQZ37DXN"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition"
          >
            Donate
          </a>
        </div>
      </section>

      {/* ================== Footer ================== */}
      <footer className="py-12 text-center border-t">
        &copy; {new Date().getFullYear()} Give For Good Foundation
      </footer>
    </div>
  );
}
