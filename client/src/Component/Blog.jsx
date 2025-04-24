import React, {useState} from 'react'
import { Eye, MessageCircle, Heart } from "lucide-react";
import { Link } from 'react-router-dom'
import emailjs from 'emailjs-com';

function Blog() {
  const [email, setEmail] = useState('');

  const handleSendEmail = () => {
    if (!email) {
      alert("Please enter an email address.");
      return;
    }
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      alert("Missing EmailJS configuration. Check your .env.local file.");
      return;
    }

    const templateParams = {
      user_email: email, // This must match your EmailJS template variable name
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent:', response);
        alert('Confirmation email sent to ' + email + ' ✅');
        setEmail('');
      })
      .catch((error) => {
        console.error('Email failed:', error);
        alert('Something went wrong. ❌');
      });
  };


  return (
        <>
        <section className="relative h-screen flex items-center justify-center" id="HeroSection-Blog">
        {/* Background Image */}
          <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center"></div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 z-0"></div>

          {/* Content */}
          <div className="relative text-center text-white px-4 z-10">
            <h1 className="text-5xl font-extrabold">Subscribe to our newsletter</h1>
            <p className="text-lg mt-4 font-bold py-5">Enter your email</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Please enter email..."
              className="w-full p-2 border rounded mt-1 text-white border-white"
              required
            />
            <button
              onClick={handleSendEmail}
              className="mt-6 cursor-pointer px-6 py-3 bg-transparent border-2 border-orange-600 text-orange-500 rounded-md hover:bg-orange-600 hover:text-white transition"
              >
              Get Started
            </button>
          </div>
        </section>

        {/* Blog Section */}
        <section className="container mx-auto px-10 py-10">
          <h1 className='font-extrabold text-6xl pb-10'>Blog</h1>

          {/* Grid Container */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {Array.from({ length: 6 }, (_, i) => (
                <Link to="/Blog/:id" key={i}> 
                  <div key={i} className="cursor-pointer overflow-hidden shadow-lg bg-white">
                    {/* Image Placeholder */}
                    <div className="w-full h-48 bg-gray-300"></div>

                    {/* Content */}
                    <div className="p-4">
                      {/* Author Info */}
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                        <div>
                          <p className="font-semibold">Admin</p>
                          <p>Mar 21, 2023 • 1 min read</p>
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-lg font-bold mt-2">
                        5 qualities of successful project managers
                      </h2>

                      {/* Interaction Buttons */}
                      <div className="flex justify-between items-center mt-4 text-gray-600">
                        <div className="flex items-center gap-2">
                          <Eye size={18} />
                          <span>0</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MessageCircle size={18} />
                          <span>0</span>
                        </div>
                        <div className="flex items-center gap-2 text-red-500">
                          <Heart size={18} />
                          <span>20</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </>
  )
}

export default Blog;
