import React from 'react'

function SeeStudent() {
  return (
    <>
        <h1 className='font-extrabold text-6xl py-5 text-orange-500'>Student List </h1>
        {Array.from({ length: 6 }, (_, i) => (
            <div className="bg-white shadow-lg border-2 rounded-lg p-6 my-10 text-left relative">
              <h2 className="text-lg font-bold mb-4">Student</h2>
    
              <div className="flex gap-6 items-start">
                {/* Instructor Info */}
                <div className="flex items-center gap-6">
                  <img 
                    src="https://via.placeholder.com/100" 
                    alt="Instructor" 
                    className="w-24 h-24 rounded-full border-2 border-gray-300"
                  />
                  <div>
                    <h3 className="text-xl font-semibold cursor-pointer">Student Name</h3>
                    <p className="text-gray-600">Course Name</p>
                    <p>Progress: 56%</p>
                  </div>
                </div>
             </div>
              <p className="text-gray-600 mt-4">
                John is a brilliant educator, whose life was spent for computer science and love of nature.
              </p>

          </div>
        ))}
    </>
  )
}

export default SeeStudent