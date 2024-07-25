import React from "react";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div className="px-4 mt-2">
      {/* <h2 className="text-3xl font-bold font-play-write">Our vision</h2> */}
      
      <motion.div className="w-[90%] mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-sans text-xl"
        >
          Welcome to
          <span className="px-1 font-semibold tracking-wide text-blue-500">
             Springdale Public School

          </span>
          , where education meets excellence! Our institution is dedicated to
          nurturing young minds, fostering creativity, and promoting a passion
          for lifelong learning. With a rich tradition of academic excellence
          and a commitment to holistic development,
          <span className="px-1 font-semibold tracking-wide text-blue-500">
             Springdale Public School

          </span>
          provides a supportive and stimulating environment for students to
          thrive. <span className="hidden md:inline"> At  Springdale Public School
, we believe in the power of education
          to transform lives. Our experienced and dedicated faculty work
          tirelessly to create engaging and challenging curricula that inspire
          students to reach their full potential. We offer a wide range of
          programs and extracurricular activities designed to cater to diverse
          interests and talents, ensuring that every student finds their niche
          and flourishes. Our state-of-the-art facilities and innovative
          teaching methods empower students to explore, experiment, and excel.</span>
          We prioritize a well-rounded education that not only focuses on
          academic achievement but also on character development, leadership
          skills, and community involvement. Join us at
          <span className="px-1 font-semibold tracking-wide text-blue-500">
             Springdale Public School

          </span>
          and become part of a vibrant learning community that values curiosity,
          integrity, and excellence. Together, we can shape a brighter future
          for our students and our world. <br /> Welcome to
          <span className="px-1 text-xl font-semibold tracking-wide text-green-600">
             Springdale Public School
 – where we nurture young minds for
 a brighter future.
          </span>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Intro;
