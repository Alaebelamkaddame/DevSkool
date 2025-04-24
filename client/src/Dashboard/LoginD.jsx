import React from 'react'
import login from "../assets/LoginD.png"

function LoginD() {
  return (
    <>
        <div className="fixed top-0 left-0 w-screen h-screen z-0 overflow-hidden">
            <img
                src={login}
                alt="Background"
                className="w-full h-full object-cover"
            />
        </div>
        <div className="fixed top-0 left-0 w-screen h-screen z-10 flex items-center justify-center">
            <div className="bg-white shadow-2xl rounded-xl p-6 mx-2 lg:p-12 w-full max-w-md h-auto">
                <h2 className="text-4xl font-extrabold mb-6 text-center">Login</h2>

                <div className="mb-4">
                <label htmlFor="Email" className="font-bold text-xl block">Email:</label>
                <input
                    type="text"
                    placeholder="Username"
                    className="w-full py-3 px-5 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 mb-3"
                />
                </div>

                <div className="mb-6">
                <label htmlFor="Password" className="font-bold text-xl block">Password:</label>
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full py-3 px-5 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 mb-3"
                />
                </div>

                <button className="cursor-pointer w-full bg-orange-500 rounded-md text-white py-3 mt-3 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300">
                Login
                </button>
            </div>
        </div>
    </>
  )
}

export default LoginD