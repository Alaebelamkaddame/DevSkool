import React from 'react'
import { FaStar, FaUsers, FaBook, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function SeeInstructors() {
  const deleteStudent = () => {
    alert("Student removed")
  }

  return (
    <>
      <h1 className='font-extrabold text-6xl py-5 text-orange-500'>Instructor List </h1>
      {Array.from({ length: 6 }, (_, i) => (
        <div className="bg-white shadow-lg border-2 rounded-lg p-6 my-10 text-left relative">
          <h2 className="text-lg font-bold mb-4">Instructor</h2>

          <div className="flex gap-6 items-start">
            {/* Instructor Info */}
            <div className="flex items-center gap-6">
              <img 
                src="https://via.placeholder.com/100" 
                alt="Instructor" 
                className="w-24 h-24 rounded-full border-2 border-gray-300"
              />
              <div>
                <h3 className="text-xl font-semibold cursor-pointer">B.M. Rafekul Islam</h3>
                <p className="text-gray-600">Advanced Educator</p>
                <div className="lg:flex items-center gap-3 text-gray-600 mt-2">
                  <span className="flex items-center gap-1"><FaStar className="text-yellow-500" /> 75,264 Reviews</span>
                  <span className="flex items-center gap-1"><FaUsers /> 158,657 Students</span>
                  <span className="flex items-center gap-1"><FaBook /> 20 Courses</span>
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-semibold" onClick={deleteStudent} >
                Delete
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-semibold">
                Update
              </button>
            </div>
         </div>
          <p className="text-gray-600 mt-4">
            John is a brilliant educator, whose life was spent for computer science and love of nature.
          </p>
          <div className="flex gap-4 mt-4">
            <FaFacebook className="text-gray-500 cursor-pointer hover:text-orange-600" size={20} />
            <FaTwitter className="text-gray-500 cursor-pointer hover:text-orange-600" size={20} />
            <FaInstagram className="text-gray-500 cursor-pointer hover:text-orange-500" size={20} />
            <FaLinkedin className="text-gray-500 cursor-pointer hover:text-orange-600" size={20} />
          </div>
      </div>
      ))}
    </>
  )
}

export default SeeInstructors