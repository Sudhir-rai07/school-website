import React, { Fragment } from "react";
import { motion } from "framer-motion";

const TeachingMethod = ({ data }) => {
  return (
    <Fragment>
      {data.map((data, idx) => {
        const oddIdx = idx % 2 == 0;
        return (
          <div
            key={idx}
            className={`container text-lg flex ${
              oddIdx ? "md:flex-row-reverse" : " md:flex-row"
            } w-full  mx-auto my-4 justify-evenly flex-col`}
          >
            <motion.div
              className="p-4 md:w-1/3"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.9 }}
            >
              <img
                src={data?.imgURL}
                alt="School Vision"
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              className="p-4 md:w-1/2"
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="mb-4 text-3xl font-bold text-green-500">
                {idx+1}.&nbsp;{data?.method}
              </h2>
              <p className="mb-4 text-lg text-gray-700">{data?.text}</p>

              <ul className="flex flex-col px-4 list-disc md:px-0 ">
                {data?.keyPoints.map((point, idx) => (
                  <li key={idx}>{point.point}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default TeachingMethod;
