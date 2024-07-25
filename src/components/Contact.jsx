import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", { name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="w-full">
      <Navbar />
      <div className="container w-full pt-6 mx-auto">
        <h2 className="text-3xl font-semibold">Contact us</h2>

        <div>
          <div className="my-4">
            <p className="text-2xl font-semibold text-blue-500">Address:</p>
            <p className="text-lg font-semibold">
              Springdale Public School, 123 Education Lane, Cityville, State,
              ZIP Code
            </p>
          </div>

          <p className="text-lg font-semibold">
            <span className="text-2xl font-semibold text-blue-500">Phone</span>{" "}
            +1 (123) 456-7890
          </p>
          <p className="text-lg font-semibold">
            <span className="text-2xl font-semibold text-blue-500">Email</span>{" "}
            info@springdale.edu
          </p>

          <div className="flex flex-col justify-center p-6 md:flex-col lg:justify-evenly lg:flex-row ">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-center">
                Contact Us
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block mb-2 font-bold text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 font-bold text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block mb-2 font-bold text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Message"
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0194512584313!2d144.96305831531553!3d-37.81421797975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5e67893af1%3A0xa7891d8e1465466b!2sMelbourne%20CBD%2C%20Melbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1614331942090!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
