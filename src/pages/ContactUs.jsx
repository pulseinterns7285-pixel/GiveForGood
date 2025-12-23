import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import emailjs from '@emailjs/browser';

export default function ContactUs() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(
      (result) => {
        console.log("EmailJS success:", result.text);
        alert("Message sent successfully!");
        formRef.current.reset();
      },
      (error) => {
        console.error("EmailJS error:", error);
        alert("Failed to send message. Please check console and try again.");
      }
    );
  };

  return (
    <div className="font-sans bg-gray-100 text-gray-900 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center h-20">
          <Link to="/" className="text-2xl font-bold mr-12 text-gray-900">
            Give For Good Foundation
          </Link>
          <div className="hidden md:flex items-center space-x-8 flex-1">
            <Link to="/education" className="text-lg hover:text-black transition">Education & Research</Link>
            <Link to="/community" className="text-lg hover:text-black transition">Community Development</Link>
            <Link to="/women" className="text-lg hover:text-black transition">Women Empowerment</Link>
            <Link to="/history" className="text-lg hover:text-black transition">Our History</Link>
          </div>
          <div className="hidden md:flex">
            <Link to="/contact" className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">Contact Us</Link>
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
              <Link to="/education" onClick={toggleMenu} className="text-lg">Education & Research</Link>
              <Link to="/community" onClick={toggleMenu} className="text-lg">Community Development</Link>
              <Link to="/women" onClick={toggleMenu} className="text-lg">Women Empowerment</Link>
              <Link to="/history" onClick={toggleMenu} className="text-lg">Our History</Link>
              <Link to="/contact" onClick={toggleMenu} className="text-lg font-semibold">Contact Us</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Contact Form */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center py-16 px-6 gap-12 max-w-7xl mx-auto">
        <div className="md:w-1/2 bg-gradient-to-br from-gray-200 via-white to-gray-100 rounded-3xl p-12 shadow-xl">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-700 text-lg mb-4">
            Reach out with questions, ideas, or ways to get involved.
          </p>
          <p className="text-gray-600">
            Or email us directly at <span className="font-semibold text-black">giveforgoodfoundation@gmail.com</span>
          </p>
        </div>

        <div className="md:w-1/2">
          <form ref={formRef} onSubmit={sendEmail} className="w-full bg-white p-10 rounded-3xl shadow-xl space-y-5">
            <input type="text" name="from_name" placeholder="Your Name" required className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black" />
            <input type="email" name="from_email" placeholder="Your Email" required className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black" />
            <textarea name="message" placeholder="Your Message" rows="5" required className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black" />
            <button type="submit" className="w-full px-6 py-3 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}
