import React from 'react'
import { Link } from 'react-router-dom'
import studentImage from '../assets/student.png';
import studentImage2 from '../assets/student2.png'

function HomePage() {
  const count = 6
  return (
    <>
      <section className='pt-27 flex' id='Hero Section'>
        <div className='mt-15'>
          <h3 className='font-extrabold '>E-LEARNING PLATFORM</h3>
          <h1 className='font-extrabold text-6xl'>Smart Learning <br/> for <span className='text-orange-600'>Everyone</span> 
          <br /> from <span className='text-orange-600'>anywhere</span></h1>
          <p className='font-bold text-gray-600 pt-7 pb-7'>Unlock your coding potential with DevSkool! 🚀 Dive into expert-led courses,<br/> hands-on projects,
            and a vibrant community to accelerate your tech career.<br/> Whether you're a beginner or an advanced developer,<br/>
            we’ve got the resources to help you build, innovate, and succeed.</p>
          <div>
            <Link to="/ContactUs">
              <button className='px-4 py-3 rounded-full font-bold text-white bg-black hover:bg-orange-600 hover:border-none transition duration-300 cursor-pointer'>
                  Join Us
              </button>
            </Link>
            <button className="ml-2 px-4 py-2 rounded-full font-bold text-black bg-white border-double border-4 border-orange-600  hover:bg-orange-600 hover:text-white hover:border-orange-600 transition duration-300">
                Download our coding guide
            </button>
          </div>
        </div>
        <div className='rounded-md'>
          <img src={studentImage} alt="student" width={600} /> 
        </div>
      </section>
      <section className='text-center' id='About Us'>
        <h1 className='font-extrabold text-6xl pt-20'>About <span className='text-orange-600'>Us</span></h1>
        <p className='font-bold text-xl pt-10'>At DevSkool. we’re on a mission to democratize tech education. 
          🚀 Founded by a team of passionate developers and educators, we bridge the gap between learning and 
          real-world success. Our hands-on courses, industry-aligned curriculum, and mentorship-driven community 
          empower learners to build in-demand skills, launch careers, and thrive in the digital age. 
          Whether you're taking your first coding steps or upskilling to mastery, we’re here to make your journey smarter, 
          faster, and more impactful.</p>
          <Link to="/ContactUs">
            <button className="ml-2 my-10 px-4 py-2 rounded-full font-bold cursor-pointer text-black bg-white border-double border-4 border-orange-600  hover:bg-orange-600 hover:text-white hover:border-orange-600 transition duration-300">
                  Sign Up Now
            </button>
          </Link>
      </section>
      <section id='Explore Courses'>
        <div className='flex justify-between '>
          <div>
            <h3 className='font-extrabold text-gray-500'>COURSES</h3>
            <h1 className='font-extrabold text-6xl mb-8'>Explore Our <span className='text-orange-600'><br/>Courses</span></h1> 
          </div>
          <div>
            <div className='relative max-w-2xl mx-auto mt-15'>
              <input
                type='text'
                placeholder='Search courses...'
                className='w-full py-4 px-6 pr-14 rounded-full border-2 border-gray-300 focus:border-orange-600 focus:outline-none shadow-sm text-lg'
              />
              <button className='absolute right-3 top-[20%] bg-orange-600 text-white p-2 rounded-full hover:bg-orange-700 transition'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap gap-8 justify-center'>
          {Array.from({length: count}, (_, i) => (
            <Link to="Courses">
              <div className="my-10 max-w-xs rounded-xl overflow-hidden shadow-lg bg-white 
                  hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Course Image</span>
                </div>
                <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {/* Star icon */}
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span className="ml-1 font-medium">4.5</span>
                  </div>
                  <span className="text-gray-500 ml-2">(120)</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Learn Figma to DevSkill Cms</h3>
                <p className="text-gray-600 mb-4">Beginner to Advanced</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Salful Talukdar</span>
                  <span className="font-bold text-lg">$49.69</span>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>
        <div className='text-center'>
            <button className="ml-2 my-10 px-4 py-2 rounded-full font-bold text-black bg-white border-double border-4 border-orange-600  hover:bg-orange-600 hover:text-white hover:border-orange-600 transition duration-300">
                see all courses
            </button>
        </div>
      </section>
      <section id='Best Categorie' className='pb-10'>
        <h1 className='font-extrabold text-6xl py-20'>Our <span className='text-orange-600'>Catégories</span></h1>
        <div className='grid grid-rows-2 grid-cols-2 gap-4'>
            {Array.from({length: 4}, (_, i) => (
                <div className='rounded-md bg-orange-600 text-white p-7'>
                  <br />
                  <span></span>
                  <h3 className='font-extrabold text-5xl pb-5 '>Web <br/>Developpement</h3>
                  <p className='font-bold text-2xl'>This Course is for student with little to no english</p>
                  <Link to="/Courses">              
                    <button className="ml-2 my-10 px-3 py-3 rounded-full font-bold text-black bg-white border-double border-4 border-orange-600
                      transition duration-300 cursor-pointer hover:scale-110">+4 Courses</button>
                  </Link>
                </div>
              
            ))}
        </div>
          {/*  */}
      </section>
      <section id='Why Us'>
        <h1 className='font-extrabold text-6xl pt-14'>Why <span className='text-orange-600'>Us</span>?
        </h1>
        <div className='mt-15 flex gap-7 pb-10'>
            <div className='rounded-md'>
              <img src={studentImage2} alt="student" width={700} /> 
            </div>
            <div className='text-center pt-20'>
              <h2 className='font-extrabold text-5xl'>WHY SHOULD <span className='text-orange-600'>DEV</span>SKOOL.?</h2>
              <p className='font-bold text-gray-600 pt-14 pb-10 text-xl'>Unlock your coding potential with DevSkool!
                🚀 <br/>Dive into expert-led courses,hands-on projects, <br/> and a vibrant community to accelerate your tech career. 
                <br/>Whether you're a beginner or an advanced developer, 
                <br/>we’ve got the resources to help you build, innovate, 
                <br/>and succeed with industry-relevant skills and real-world guidance.</p>
                <Link to="/Courses">
                  <button className="cursor-pointer ml-2 px-4 py-2 rounded-full font-bold text-black bg-white border-double border-4 border-orange-600  hover:bg-orange-600 hover:text-white hover:border-orange-600 transition duration-300">
                    Browse courses
                  </button>
                </Link>
            </div>
        </div>
      </section>
      <section id="Q&A" className='py-20'>
          <h1 className='font-extrabold text-5xl pb-10'>Frequently Asked <br/> 
            <span className='text-orange-600'>Questions</span>
          </h1>
          <details className='p-5 rounded-3xl border-2 '>
            <summary className='pb-3'>1. Who is DevSkool for?</summary>
            <p className='border-t-2 p-3'>DevSkool is designed for beginners to advanced developers looking to build in-demand tech skills.
               Whether you're switching careers, upskilling, or preparing for interviews, our courses adapt to your level.</p>
          </details>
          <details className='p-5 mt-5 rounded-3xl border-2 '>
            <summary className='pb-3'>2. How are your courses different?</summary>
            <p className='border-t-2 p-3'>
              We focus on project-based learning—you’ll build real apps and tools, not just watch tutorials.
              Plus, you get mentorship from industry professionals and peer code reviews.
            </p>
          </details>
          <details className='p-5 mt-5 rounded-3xl border-2 '>
            <summary className='pb-3'>3. Do you offer certificates?</summary>
            <p className='border-t-2 p-3'>
              Yes! Earn a verified certificate upon course completion to showcase on LinkedIn or resumes. 
              Our certificates are recognized by hiring partners.
            </p>
          </details>
          <details className='p-5 mt-5 rounded-3xl border-2 '>
            <summary className='pb-3'>4. What if I get stuck?</summary>
            <p className='border-t-2 p-3'>
              Access 24/7 community support on Discord, live Q&A sessions, and 1:1 mentor office hours. 
              We’re here to unblock you.
            </p>
          </details>
          <details className='p-5 mt-5 rounded-3xl border-2 '>
            <summary className=''>5. Can I try before committing?</summary>
            <p className='border-t-2 p-3'>
              Absolutely! Start with our free introductory modules or a 7-day trial for premium courses.
              No credit card required.
            </p>
          </details>

      </section>
    </>
  )
}

export default HomePage
