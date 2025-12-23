import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import candlemaking from "../assets/candlemaking.png";
import scrubhatmaking from "../assets/scrubhat.png";
import sewingclasses from "../assets/sewingclass.png";
import yogaforwellness from "../assets/yoga.png";
import economics from "../assets/economics.png";
import ginger from "../assets/ginger.png";

export default function Women() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const programs = [
    {
      title: "Scrub Hat Making",
      desc: "Creating medical scrub hats that support both healthcare workers and local income opportunities.",
      image: scrubhatmaking,
    },
    {
      title: "Sewing Classes",
      desc: "Teaching practical sewing skills that foster creativity and confidence.",
      image: sewingclasses,
    },
    {
      title: "Yoga for Wellness",
      desc: "Promoting physical health, mental clarity, and emotional balance through guided yoga and mindfulness practices.",
      image: yogaforwellness,
    },
    {
      title: "Economic Independence",
      desc: "Equipping women with financial literacy, entrepreneurship skills, and resources to build long-term independence.",
      image: economics,
    },
    {
      title: "Organic Farming",
      desc: "Neer Village has ideal conditions to grow superfoods like ginger, garlic and turmeric organically. With the holy Ganges river bringing rich alluvial soil that promotes amazing harvests, giveforgood recognizes this gift and has empowered and connected the women of this village with local buyers.",
      image: ginger,
    },
    {
      title: "Candle Making",
      desc: "Providing creative craft opportunities that allow women to generate income through locally made products.",
      image: candlemaking,
    },
  ];

  return (
    <div className="font-sans bg-gray-100 text-gray-900 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center h-20">
          <a href="/" className="text-2xl font-bold mr-12">
            Give For Good Foundation
          </a>

          <div className="hidden md:flex items-center space-x-8 flex-1">
            <a href="/education" className="text-lg hover:underline">
              Education & Research
            </a>
            <a href="/community" className="text-lg hover:underline">
              Community Development
            </a>
            <a href="/women" className="text-lg hover:underline">
              Women Empowerment
            </a>
            <a href="/history" className="text-lg hover:underline">
              Our History
            </a>
          </div>

          <div className="hidden md:flex">
            <a
              href="/contact"
              className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
            >
              Contact Us
            </a>
          </div>

          <div className="md:hidden flex items-center ml-auto">
            <button onClick={toggleMenu} className="p-2 rounded-md">
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="flex flex-col px-4 py-4 space-y-2">
              <a href="/education" onClick={toggleMenu} className="text-lg">
                Education & Research
              </a>
              <a href="/community" onClick={toggleMenu} className="text-lg">
                Community Development
              </a>
              <a href="/women" onClick={toggleMenu} className="text-lg">
                Women Empowerment
              </a>
              <a href="/history" onClick={toggleMenu} className="text-lg">
                Our History
              </a>
              <a
                href="/contact"
                onClick={toggleMenu}
                className="text-lg font-semibold"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-900 drop-shadow-md0">
            Empowering Women, Transforming Communities
          </h1>
          <p className="text-lg text-gray-700">
            We believe empowering women is the foundation of sustainable change.
            Through skill-building, wellness, and economic opportunity, we help
            women unlock their potential and lead stronger communities.
          </p>
        </div>

        {/* Program Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {programs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 overflow-hidden"
            >
              {/* Image */}
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover ${
                    item.title === "Economic Independence"
                      ? "object-center"
                      : "object-top"
                  }`}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
