import React from "react";
import { motion } from "framer-motion";
const MessageFromHead = () => {
  return (
    <motion.div 
    initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.5, delay: 0.1}}  className="container w-full px-6 mx-auto my-16 space-y-16">
      <div className="text-2xl font-bold text-center text-red-700">
        A heartly message from our respected principal to our loved children ❤️
      </div>
      <div className="flex flex-col w-full h-full md:gap-4 md:flex-row">
        <div className="overflow-hidden rounded-md w-96 h-96">
          <figure>
          <img
            src="principal.webp"
            alt=""
            className="object-cover md:w-96 md:h-96 w-72"
          />
          </figure>
          <figcaption>Principal</figcaption>
        </div>
        <div className="flex ml-auto md:w-1/2">
          <p className="mb-4 text-lg font-semibold text-green-700">
          At Springdale, we believe in nurturing the potential of every
          student and guiding them towards a successful future.
            <br />
            <span className="text-lg font-semibold">~ Principal</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default MessageFromHead;
