import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLink = () => {
    setShowLinks((prev) => !prev);
  };

  const data = [
    { name: "Home", url: "/" },
    { name: "Faculty", url: "/faculty" },
    { name: "Student life", url: "/student-life" },
    { name: "Admission", url: "/admission" },
    { name: "Gallery", url: "/gallery" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between w-full h-16 text-white bg-teal-500 felx-row md:relative ">
      <div className="flex items-center justify-between w-full px-4">
        <div className="flex items-center text-3xl font-bold font-play-write">
          <Link to={"/"} className="flex items-center gap-2"> 
          <img src="https://placehold.co/500" alt="" className="object-cover w-12 h-12 rounded-full" /> <span className="text-xl md:text-xl lg:text-3xl">Springdale Public School</span></Link>
        </div>
        <span className="z-50 block cursor-pointer md:hidden">
          <FaBars onClick={handleShowLink} />
        </span>
      </div>

      <motion.ul
        className={`flex  md:px-4 md:gap-3 text-2xl flex-col md:flex-row items-center absolute p-0 md:bg-transparent bg-teal-500 md:relative ${
          showLinks ? "top-[60px] w-full" : "-top-[200px] w-full"
        } md:top-0 md:w-auto transition-all duration-200`}
        initial="hidden"
        animate="visible"
      >
        {data.map((item, idx) => (
          <motion.li
            className="transition-all duration-200 cursor-pointer text-nowrap hover:underline"
            key={idx}
          >
            <a href={`${item.url}`}>{item.name}</a>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default Navbar;
