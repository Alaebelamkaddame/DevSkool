import React from 'react'
import { Link } from 'react-router-dom';

function DashobardSideBar() {
  return (
    <>
        <div className="bg-orange-600 text-white w-64 flex-shrink-0 transition-transform duration-300 transform">
          <div className="p-6">
            <h2 className="text-4xl font-bold">Dashboard</h2>
          </div>
          <ul className="mt-6 space-y-4 px-2">
            <li>
              <Link to="/Dashboard" className="block px-4 py-2 hover:bg-orange-500 rounded-md text-2xl font-bold">Main</Link>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 cursor-default rounded-md text-2xl font-bold">Courses</a>
              <ul>
                <li className='block px-6 py-2 hover:bg-orange-500 rounded-md'><Link to="SeeCourses">See courses</Link></li>
              </ul>
              <ul>
                <li className='block px-6 py-2 hover:bg-orange-500 rounded-md'><Link to="AddCourseForm">Add courses</Link></li>
              </ul>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 cursor-default rounded-md text-2xl font-bold">Instructors</a>
              <ul>
                <li className='block px-6 py-2 hover:bg-orange-500 rounded-md'>
                  <Link  to="/Dashboard/SeeInstructors">See instructors</Link></li>
              </ul>
              <ul>
                <li className='block px-6 py-2 hover:bg-orange-500 rounded-md'><Link to="/Dashboard/AddInstructor">Add insctructors</Link></li>
              </ul>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 cursor-default rounded-md text-2xl font-bold">Student</a>
              <ul>
                <li className='block px-6 py-2 hover:bg-orange-500 rounded-md'><Link to="/Dashboard/SeeStudent">See student</Link></li>
              </ul>
              <ul>
                <li className='block px-6 py-2 hover:bg-orange-500 rounded-md'><Link to="/Dashboard/RemoveStudent">Remove student</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/Dashboard/loginD" className="block px-4 py-2 hover:bg-orange-500 rounded-md text-2xl font-bold">
                Logout
              </Link>
            </li>
          </ul>
        </div>
    </>
  )
}

export default DashobardSideBar