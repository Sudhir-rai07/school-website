import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const QickLinks = () => {
  const Links = [
    { name: "iLink1", url: "" },
    { name: "iLink2", url: "" },
    { name: "iLink3", url: "" },
    { name: "iLink4", url: "" },
  ];
  return (
    <div className=" container items-center w-[90%] mx-auto px-4 bg-white text-black  rounded-lg py-4 mt-6">
    <div className="text-xl">Some useful Links</div>
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center w-full h-full gap-2 text-xl md:flex-row justify-evenly "
      >
        {Links.map((link, idx) => (
          <motion.li
            key={idx}
            className="text-blue-500 transition-colors duration-300 hover:text-blue-600"
          >
            <Link to={``}>{link.name}</Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default QickLinks;
