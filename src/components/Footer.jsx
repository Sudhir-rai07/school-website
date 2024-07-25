import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-6 text-white bg-gray-800">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-between">
          {/* School Logo and Description */}
          <div className="w-full mb-4 md:w-1/3 md:mb-0">
            <h2 className="mb-2 text-2xl font-bold">Springdale Public School</h2>
            <p className="text-gray-400">Providing quality education and holistic development.</p>
          </div>
          {/* Navigation Links */}
          <div className="w-full mb-4 md:w-1/3 md:mb-0">
            <h3 className="mb-2 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/student-life" className="text-gray-400 hover:text-white">Student life</Link>
              </li>
              <li>
                <Link to="/admission" className="text-gray-400 hover:text-white">Admissions</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link>
              </li>
            </ul>
          </div>
          {/* Contact Information */}
          <div className="w-full mb-4 md:w-1/3 md:mb-0">
            <h3 className="mb-2 text-lg font-semibold">Contact Us</h3>
            <p className="mb-2 text-gray-400">
              123 School Street<br />
              City, State, ZIP Code
            </p>
            <p className="mb-2 text-gray-400">
              Phone: (123) 456-7890
            </p>
            <p className="text-gray-400">
              Email: info@schoolname.com
            </p>
          </div>
        </div>
        <div className="pt-4 mt-6 text-center border-t border-gray-700">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Springdale Public School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
