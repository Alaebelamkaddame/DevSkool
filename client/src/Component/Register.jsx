import React from 'react'
import LoginFoto from '../assets/Login.jpg'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-[1050px] bg-white shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row">
            {/* Image Section - Top on mobile, right on desktop */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <img 
                    src={LoginFoto} 
                    alt="Login" 
                    className="w-full h-full object-cover object-center"
                />
                <Link to="/Login">
                    <button className="absolute top-5 right-5 font-extrabold bg-transparent text-white border border-white px-4 py-2 rounded-md shadow-md hover:bg-orange-500 hover:border-orange-600 hover:text-white transition">
                        Login
                    </button>
                </Link>
            </div>

            {/* Form Section - Bottom on mobile, left on desktop */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                <h2 className="text-4xl font-extrabold mb-6 text-center">Register</h2>
                
                <div className="space-y-4">
                    <div>
                        <label htmlFor="Firstname" className="block font-bold text-lg mb-1">First Name:</label>
                        <input 
                            type="text" 
                            id="Firstname"
                            placeholder="Firstname" 
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="lastname" className="block font-bold text-lg mb-1">Last Name:</label>
                        <input 
                            type="text" 
                            id="lastname"
                            placeholder="Lastname" 
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="Email" className="block font-bold text-lg mb-1">Email:</label>
                        <input 
                            type="email" 
                            id="Email"
                            placeholder="Email" 
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="Password" className="block font-bold text-lg mb-1">Password:</label>
                        <input 
                            type="password" 
                            id="Password"
                            placeholder="Password" 
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-md transition duration-200 mt-4">
                        Register
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register