import React from "react";
import Navbar from "../Navbar";
import CarouselComponent from "../Home/CarouselComponent";
import { studentLifeSlides } from "../../data/slides01";
import Footer from "../Footer";

const StudentLife = () => {
  const cardData = [
    { name: "John Smith", achievement: "National Level Math Olympiad Winner" },
    {
      name: "Sarah Lee",
      achievement: "Gold Medalist in State Swimming Championship",
    },
    {
      name: "Tech Innovators Club",
      achievement: "Winners of Inter-School Robotics Competition",
    },
  ];
  
  const councilData = [
    { name: "Amy Parker, Grade 12", achievement: "President" },
    {
      name: "Rajiv Mehta, Grade 11",
      achievement: "Vice President",
    },
    {
      name: "Lisa Wong, Grade 10",
      achievement: "Secretary",
    },
  ];
  return (
    <div className="w-full ">
      <Navbar />

      <div className="container px-4 mx-auto mt-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-700">
            Extracurricular activities play a crucial role in the overall
            development of students by complementing the academic curriculum.
            They provide students with opportunities to explore their interests,
            develop new skills, and foster a sense of community and teamwork.
          </h2>
        </div>
        <CarouselComponent slides={studentLifeSlides} />

        <div className="">
          <h2 className="mx-auto text-3xl font-semibold text-gray-700">
            Achievements of our students
            <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {cardData.map((data, idx) => (
                <StudentCard
                  name={data.name}
                  achievement={data.achievement}
                  key={idx}
                />
              ))}
            </div>
          </h2>
        </div>


        <div className="py-8">
          <h2 className="mx-auto text-3xl font-semibold text-gray-700">
          Student Council of our school
            <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {councilData.map((data, idx) => (
                <StudentCard
                  name={data.name}
                  achievement={data.achievement}
                  key={idx}
                />
              ))}
            </div>
          </h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StudentLife;

const StudentCard = ({ name, achievement }) => (
  <div className="p-4 bg-white rounded-lg shadow-md">
    <img src="profile-placeholder.webp" alt="" />
    <h3 className="mb-2 text-2xl font-semibold text-teal-400">{name}</h3>
    <p className="text-lg font-semibold text-gray-600">{achievement}</p>
  </div>
);
