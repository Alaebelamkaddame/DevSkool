import React from 'react';
import { Link } from 'react-router-dom';
import studentImage from '../assets/student.png';
import { FaStar, FaUsers, FaBook, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function DetailsCourse() {
  return (
    <section className="max-w-6xl lg:mx-auto px-6 py-10">
      {/* Header Section */}
      <div className='flex border-b-2 pb-6'>
        <div className='lg:w-2/3'>
          <h3 className='font-extrabold mb-4 text-gray-700'>Courses &gt; Course Name</h3>
          <h1 className='font-extrabold text-5xl'>Course Name</h1>
          <p className='font-bold text-gray-600 pt-5 pb-7'>
            Unlock your coding potential with DevSkool! 🚀 Dive into expert-led courses, hands-on projects, 
            and a vibrant community to accelerate your tech career. Whether you're a beginner or an advanced developer, 
            we’ve got the resources to help you build, innovate, and succeed.
          </p>
          <Link to="/Login">
            <button className='cursor-pointer px-6 py-3 rounded-full font-bold text-white bg-black hover:bg-orange-600 transition duration-300'>
              Enroll now
            </button>
          </Link>
        </div>
        <div className='w-1/3 hidden lg:block'>
          <img src={studentImage} alt="student" width={350} className="rounded-md" />
        </div>
      </div>

      {/* Main Content Grid */}
      <div className='grid lg:grid-cols-4 gap-6 mt-10'>
        {/* Left Side - What will you learn */}
        <div className='w-full lg:col-span-3'>
          <div className='border-2 rounded-md py-5 shadow-lg p-10 h-[450px]'>
            <h1 className='font-bold text-2xl pb-3'>What will you learn</h1>
            <p className='text-lg text-gray-700'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, temporibus possimus! 
              Porro, numquam? Itaque consequatur ex porro. Inventore quod in excepturi asperiores 
              aspernatur ducimus quisquam laudantium, quae sequi voluptatem nisi!
            </p>
          </div>
        </div>

        {/* Right Side - Aside */}
        <aside className="border-2 border-orange-600 rounded-md shadow-lg p-10 lg:p-6">
          <h2 className="text-xl font-bold mb-4">£75</h2>
          <button className='cursor-pointer w-full px-4 py-3 rounded-full font-bold bg-orange-600 text-white mb-3'>
            Add to cart
          </button>
          <button className='cursor-pointer w-full px-4 py-2 rounded-full font-bold text-black bg-white border-double border-4
           border-orange-600  hover:bg-orange-600 hover:text-white hover:border-orange-600 transition duration-300'>
            Buy now
          </button>
          <ul className="space-y-2 pt-4 text-left">
            <li>📅 Start Date: <span className='font-bold'>20/04/2025</span></li>
            <li>👨‍🎓 Enrolled: <span className='font-bold'>100</span></li>
            <li>📚 Lecture: <span className='font-bold'>40</span></li>
            <li>⭐ Skill Level: <span className='font-bold'>Beginner</span></li>
          </ul>
          <h2 className='text-left border-t-2 pt-4 mt-4'>For details call us</h2>
          <button className='w-full px-4 py-3 rounded-full font-bold bg-orange-600 text-white mt-2'>
            +212 649-123993
          </button>
        </aside>
      </div>

      {/* Course Content Section */}
      <div className='border-2 rounded-md shadow-lg p-6 mt-10 text-left'>
        <h1 className='font-bold text-2xl pb-3'>Course Content</h1>
        <details className='p-3 rounded-md'>
          <summary className='cursor-pointer font-semibold pb-2'>1. Intro Course</summary>
          <p className='text-gray-700'>
            DevSkool is designed for beginners to advanced developers looking to build in-demand tech skills.
            Whether you're switching careers, upskilling, or preparing for interviews, our courses adapt to your level.
          </p>
        </details>
        <details className='p-3 rounded-md'>
          <summary className='cursor-pointer font-semibold pb-2'>2. Rest of the course</summary>
          <p className='text-gray-700'>
            DevSkool is designed for beginners to advanced developers looking to build in-demand tech skills.
            Whether you're switching careers, upskilling, or preparing for interviews, our courses adapt to your level.
          </p>
        </details>
      </div>

      {/* Instructor Section */}
      <div className="bg-white shadow-lg border-2 rounded-lg p-6 my-10 text-left">
        <h2 className="text-lg font-bold mb-4">Instructor</h2>
        <div className="flex flex-wrap sm:items-center gap-6">
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
    </section>
  );
}

export default DetailsCourse;
