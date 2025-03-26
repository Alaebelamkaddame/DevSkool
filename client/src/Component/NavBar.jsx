import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
        <div className='flex items-center justify-between py-4'>
            <h1 className='font-extrabold text-3xl'>
                <span className='text-orange-600'>Dev</span>Skool.
            </h1>
            <ul className='flex items-center gap-6 font-medium'>
                <li className='hover:text-orange-600 transition duration-300'>
                    <Link to="/">Home</Link>
                </li>
                <li className='hover:text-orange-600 transition duration-300'>
                    <Link to="/Categorie">Catégorie</Link>
                </li>
                <li className='hover:text-orange-600 transition duration-300'>
                    <Link to="/ContactUs">Contact Us</Link>
                </li>
                <li className='hover:text-orange-600 transition duration-300'>
                    <Link to="/Blog">Blog</Link>
                </li>
            </ul>
            <button className='px-4 py-2 rounded-full font-bold text-white bg-black hover:bg-orange-600 transition duration-300'>
                Join Us
            </button>
        </div>
    </nav>
  )
}

export default NavBar
