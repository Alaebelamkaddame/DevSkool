import React from 'react'

function RemoveStudent() {
    const deleteStudent = () => {
        alert("Student removed")
    }
    
  return (
    <>
        <h1 className='font-extrabold text-6xl py-5 text-orange-500'>Remove student </h1>
        {Array.from({ length: 6 }, (_, i) => (
            <div className="bg-white shadow-md border rounded-lg p-6 my-4 text-left flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-lg font-bold">Student</h2>
              <span className="text-gray-500 text-sm">ID: #STU1245</span>
            </div>
            
            <div className="flex gap-6 items-start mb-4">
              <img 
                src="https://via.placeholder.com/100" 
                alt="Student" 
                className="w-20 h-20 rounded-full border-2 border-gray-200"
              />
              <div>
                <h3 className="text-xl font-semibold cursor-pointer hover:text-blue-600">Student Name</h3>
                <p className="text-gray-600">Course Name</p>
                <div className="mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '56%'}}></div>
                  </div>
                  <span className="text-sm text-gray-500 mt-1">Progress: 56%</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 border-t pt-4">
              John is a brilliant student, showing great potential in computer science and love of nature.
            </p>
            
            <div className="mt-auto flex justify-end">
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-medium text-sm flex items-center gap-1" onClick={deleteStudent}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Remove Student
              </button>
            </div>
          </div>
        ))}
    </>
  )
}

export default RemoveStudent