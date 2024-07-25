import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; // Optional, if you want to use auto-table for table formatting
import Navbar from '../Navbar';
import Footer from '../Footer';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    parentGuardianName: '',
    contactNumber: '',
    email: '',
    previousSchool: '',
    gradeAppliedFor: '',
    additionalNotes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
    setFormData({
      firstName: '',
      lastName: '',
      dob: '',
      gender: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
      parentGuardianName: '',
      contactNumber: '',
      email: '',
      previousSchool: '',
      gradeAppliedFor: '',
      additionalNotes: '',
    });
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('Admission Form', 20, 20);
    
    doc.setFontSize(14);
    doc.text('Personal Information', 20, 40);
    
    let yOffset = 50;
    Object.keys(formData).forEach((key) => {
      doc.setFontSize(12);
      doc.text(`${formatLabel(key)}: ${formData[key]}`, 20, yOffset);
      yOffset += 10;
    });

    doc.save('admission_form.pdf');
  };

  const formatLabel = (key) => {
    switch (key) {
      case 'firstName': return 'First Name';
      case 'lastName': return 'Last Name';
      case 'dob': return 'Date of Birth';
      case 'gender': return 'Gender';
      case 'address': return 'Address';
      case 'city': return 'City';
      case 'state': return 'State';
      case 'zipCode': return 'Zip Code';
      case 'country': return 'Country';
      case 'parentGuardianName': return 'Parent/Guardian Name';
      case 'contactNumber': return 'Contact Number';
      case 'email': return 'Email';
      case 'previousSchool': return 'Previous School';
      case 'gradeAppliedFor': return 'Grade Applied For';
      case 'additionalNotes': return 'Additional Notes';
      default: return key;
    }
  };

  return (
    <div className='w-full'>
    <Navbar />

<div className="container w-full mx-auto">
<div className="flex flex-col items-center justify-center p-6">
      <div className="w-full p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-center">Admission Form</h2>
        <form onSubmit={handleSubmit} className='grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          <div className="mb-4">
            <label htmlFor="firstName" className="block mb-2 font-bold text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block mb-2 font-bold text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dob" className="block mb-2 font-bold text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block mb-2 font-bold text-gray-700">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block mb-2 font-bold text-gray-700">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block mb-2 font-bold text-gray-700">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="state" className="block mb-2 font-bold text-gray-700">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="zipCode" className="block mb-2 font-bold text-gray-700">
              Zip Code
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Zip Code"
              value={formData.zipCode}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="country" className="block mb-2 font-bold text-gray-700">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="parentGuardianName" className="block mb-2 font-bold text-gray-700">
              Parent/Guardian Name
            </label>
            <input
              type="text"
              id="parentGuardianName"
              name="parentGuardianName"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Parent/Guardian Name"
              value={formData.parentGuardianName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contactNumber" className="block mb-2 font-bold text-gray-700">
              Contact Number
            </label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Contact Number"
              value={formData.contactNumber}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-bold text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="previousSchool" className="block mb-2 font-bold text-gray-700">
              Previous School
            </label>
            <input
              type="text"
              id="previousSchool"
              name="previousSchool"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Previous School"
              value={formData.previousSchool}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="gradeAppliedFor" className="block mb-2 font-bold text-gray-700">
              Grade Applied For
            </label>
            <input
              type="text"
              id="gradeAppliedFor"
              name="gradeAppliedFor"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Grade Applied For"
              value={formData.gradeAppliedFor}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="additionalNotes" className="block mb-2 font-bold text-gray-700">
              Additional Notes
            </label>
            <textarea
              id="additionalNotes"
              name="additionalNotes"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Additional Notes"
              rows="4"
              value={formData.additionalNotes}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mb-4 text-center">
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="w-full text-center">
          <button
            onClick={generatePDF}
            className="px-4 py-2 font-bold text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Download as PDF
          </button>
        </div>
      </div>
    </div>
</div>
<Footer />
    </div>
    
  );
};

export default AdmissionForm;
