import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Card = ({ title, designation,qualification, epx}) => (
  <div className="p-4 bg-white rounded-lg shadow-md">
    <img src="profile-placeholder.webp" alt="" />
    <h3 className="mb-2 text-2xl font-semibold">{title}</h3>
    <p className="text-lg font-semibold text-gray-600">{designation}</p>
    <p className="text-lg font-semibold text-gray-600">{qualification}</p>
    <p className="text-lg font-semibold text-gray-600">{epx}</p>
  </div>
);

const Faculty = () => {
  const cardData = [
    { title: "John Doe", designation: "Principal", qualification: "M.Ed", epx: "20 years of experience in educational administration." },
    { title: "Jane Smith", designation: "Vice Principal", qualification: "M.Sc. in Physics", epx: "15 years of teaching experience." },
    { title: "Emily Johnson", designation: "English Teacher", qualification: "M.A. in English", epx: " 10 years of teaching experience." },
    { title: "Michael Brown", designation: "Mathematics Teacher", qualification: "M.Sc. in Mathematics", epx: "8 years of teaching experience." },
    { title: "Sophia Davis", designation: "Science Teacher", qualification: "M.Sc. in Chemistry", epx: "12 years of teaching experience." },
    { title: "David Wilson", designation: "Computer Science Teacher", qualification: " B.Tech in Computer Science", epx: "5 years of teaching experience." },
  ];

  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <div className="container p-6 mx-auto my-4 mt-10 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center">Our faculties </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cardData.map((card, index) => (
            <Card key={index} title={card.title} designation={card.designation} qualification={card.qualification} epx={card.epx  }/>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faculty;
