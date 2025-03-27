import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    const icons = [
        <svg key="x" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
        <svg key="youtube" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42A2.78 2.78 0 0 0 20.77 4.8C18.88 4.5 12 4.5 12 4.5s-6.88 0-8.77.3A2.78 2.78 0 0 0 1.46 6.42 29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.77 1.62c1.89.3 8.77.3 8.77.3s6.88 0 8.77-.3a2.78 2.78 0 0 0 1.77-1.62A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98"/></svg>,
        <svg key="facebook" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
        <svg key="dribbble" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8.56 8.56c2.5 2.5 3.63 5.5 3.63 8.94m2.66-11.6a9 9 0 0 1 3.15 3.15M3.94 13.74a9 9 0 0 0 5.63 5.63m5.12-1.27A9 9 0 0 0 19 12c0-.17 0-.33-.01-.5M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2 2 6.48 2 12Z"/></svg>
      ];
  return (
    <footer className="bg-orange-500 py-7">
    <div className="container max-w-7xl mx-auto px-6 pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
            <h1 className="text-black text-3xl font-extrabold py-5">DevSkool.</h1>
            <p className="text-white font-bold pb-2">
                We're always in search of talented and motivated people. Don't be shy; introduce yourself. Subscribe to our Blog.
            </p>
            <h2 className="pt-3 font-bold">Social Media</h2>
            <div className="flex gap-2 py-5">
                {icons.map((icon, i) => (
                <button
                    key={i}
                    className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer 
                    ${i === 0 ? "bg-white text-orange-600 border font-extrabold" : "bg-white text-gray-600 border font-extrabold"}`}
                >
                    {icon}
                </button>
                ))}
            </div>
        </div>
        <div>
            <h2 className="text-black text-xl font-bold py-5">Company Info</h2>
            <ul className="text-white font-semibold space-y-2">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Courses">Courses</Link></li>
                <li><Link to="/">Instructor</Link></li>
                <li><Link to="/Instructor">Become Instructor</Link></li>
                <li><Link to="/ContactUs">Contact Us</Link></li>
            </ul>
        </div>
        <div>
            <h2 className="text-black text-xl font-bold py-5">Top Categories</h2>
            <ul className="text-white font-semibold space-y-2">
                <li><Link to="/">Web Development</Link></li>
                <li><Link to="/Courses">Mobile Development</Link></li>
                <li><Link to="/">AI and ML</Link></li>
                <li><Link to="/Instructor">Data Science</Link></li>
                <li><Link to="/ContactUs">Game Development</Link></li>
            </ul>
        </div>
        <div>
            <h2 className="text-black text-xl font-bold py-5">Download Our App</h2>
            <p className="text-white font-bold pb-2">
                Join our community and download our app to get the latest news and updates.
            </p>
            <p className='text-white font-bold'>Phone Number: +212 649-1233993</p>
            <p className='text-white font-bold'>Email: alaebelamkaddame@gmail.com</p>
            </div>
        </div>
        <div className="text-center border-t-2 pt-5 font-bold">
            © 2023 DevSkool. All rights reserved.
        </div>
        </footer>

  )
}

export default Footer