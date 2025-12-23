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
