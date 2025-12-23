import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function History() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="font-sans bg-gray-100 text-gray-900 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
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
      <section className="max-w-6xl mx-auto px-6 sm:px-8 py-20">
        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-900 drop-shadow-md">
            Our History
          </h1>
          <p className="text-lg text-gray-600">
            Give For Good Foundation was built on a simple belief: that dignity,
            opportunity, and education should never be denied because of
            circumstance.
          </p>
        </div>

        {/* Story */}
        <div className="space-y-12 text-gray-700 leading-relaxed text-lg">
          <p>
            In many parts of India, children with disabilities are still pushed
            to the margins of society. Limited access to education, social
            stigma, and a lack of resources often leave these children isolated
            from the opportunities they deserve.
          </p>

          <p>
            Give For Good Foundation was created to challenge that reality. Our
            work began with a focus on education as the most powerful tool for
            inclusion—because when a child is given the ability to learn, they
            are given the ability to participate fully in the world.
          </p>

          <p>
            One of our earliest and most impactful initiatives supported the
            Lion’s School for the Speech and Hearing Impaired and orthopaedic
            students in Kopargaon, Maharashtra. For many of these children,
            school is more than a classroom—it is a safe space where they are
            seen, supported, and believed in.
          </p>

          <p>
            At Lion’s School, it takes just <strong>$150 USD</strong> to educate
            a student for an entire year. That single year provides specialized
            instruction, essential learning materials, and the confidence these
            children need to stand on equal footing with their peers.
          </p>

          <p>
            Through the generosity of our supporters, Give For Good Foundation
            raised <strong>$5,000</strong> to sponsor schooling and supplies for
            students at the school—directly impacting the lives of dozens of
            children and their families.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 text-center">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-4xl font-bold mb-2">$150</h3>
            <p className="text-gray-600">
              Educates one student for a full year
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-4xl font-bold mb-2">$5,000</h3>
            <p className="text-gray-600">
              Raised to support disabled students
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-4xl font-bold mb-2">100%</h3>
            <p className="text-gray-600">
              Direct impact on education & supplies
            </p>
          </div>
        </div>

        {/* Closing */}
        <div className="max-w-4xl mx-auto mt-20 text-center">
          <p className="text-lg text-gray-700">
            Our history is still being written. With every student supported and
            every community strengthened, we move closer to a future where no
            child is defined by limitation—only by possibility.
          </p>
        </div>
      </section>
    </div>
  );
}
