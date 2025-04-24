import React from 'react'
import LoginFoto from '../assets/Login.jpg'
import {Link} from 'react-router-dom'

function Login() {
  return (
    <>
        <div className="flex items-center justify-center h-screen">
            <div className="w-full max-w-[1050px] h-auto md:h-[700px] bg-white shadow-lg rounded-xl flex flex-col md:flex-row">
            {/* Image Section - Now on top for mobile */}
            <div className="w-full md:w-1/2 relative">
            <img src={LoginFoto} alt="Login" className="w-full h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none" />
            <Link to="/Register">
                <button className="absolute top-5 left-5 font-extrabold bg-transparent text-white border border-white px-4 py-2 rounded-md shadow-md hover:bg-orange-500 hover:border-orange-600 hover:text-white transition">
                    Register
                </button>
            </Link>
            </div>
        
            {/* Form Section - Now below image on mobile */}
            <div className="w-full md:w-1/2 flex flex-col justify-center p-6">
            <h2 className="text-4xl font-extrabold mb-4 text-center">Login</h2>
            <label htmlFor="Email" className='font-bold text-xl'>Email:</label>
            <input type="text" placeholder="Username" className="w-full p-2 border rounded mb-3" />
            <label htmlFor="Password" className='font-bold text-xl'>Password:</label>
            <input type="password" placeholder="Password" className="w-full p-2 border rounded mb-3" />
            <button className="cursor-pointer w-full bg-orange-500 rounded-md text-white p-2 hover:bg-orange-600 transition">
                Login
            </button>
            </div>
            </div>
        </div>
    </>
  )
}

export default Login