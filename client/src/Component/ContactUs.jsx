import React, { useState } from 'react';
import { X, Youtube, Facebook } from "lucide-react";
import emailjs from 'emailjs-com';

function ContactUs() {
  const icons = [
    <X key="x" size={20} strokeWidth={2} />,
    <Youtube key="youtube" size={20} strokeWidth={2} />,
    <Facebook key="facebook" size={20} strokeWidth={2} />,
  ];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      alert("Missing EmailJS configuration. Check your .env.local file.");
      return;
    }

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message
    };

    if (!serviceId || !templateId || !publicKey) {
      alert("Missing EmailJS configuration. Please check your .env.local file.");
      return;
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email successfully sent:', response);
        alert('Message sent successfully! ✅');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
      }, (err) => {
        console.error('Failed to send email:', err);
        alert('Something went wrong ❌');
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-5">
      {/* Contact Form Box */}
      <div className="bg-white shadow-2xl rounded-xl p-10 lg:p-25 lg:w-[900px] lg:h-auto">
        <h1 className="text-5xl font-extrabold text-center pb-3">Get in Touch</h1>
        <p className="text-gray-500 text-center mb-6">Contact us or send a message</p>
        <form onSubmit={handleSubmit}>
          {/* Two-Column Layout for Name Inputs */}
          <div className="grid lg:grid-cols-2 lg:gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold text-gray-600">FIRST NAME</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Please enter first name..."
                className="w-full p-2 border rounded mt-1"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold text-gray-600">LAST NAME</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Please enter last name..."
                className="w-full p-2 border rounded mt-1"
                required
              />
            </div>
          </div>

          {/* Two-Column Layout for Email & Phone */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-600">EMAIL</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Please enter email..."
                className="w-full p-2 border rounded mt-1"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-600">PHONE NUMBER</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Please enter phone number..."
                className="w-full p-2 border rounded mt-1"
              />
            </div>
          </div>

          {/* Message Box */}
          <div className="mt-4">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-600">WHAT DO YOU HAVE IN MIND</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Please enter query..."
              className="w-full p-2 border rounded mt-1"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-bold py-3 rounded mt-6 hover:bg-orange-600 transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Social Icons */}
      <div className="flex gap-2 p-4">
        {icons.map((icon, i) => (
          <button
            key={i}
            className={`cursor-pointer w-10 h-10 rounded-full flex items-center justify-center hover:scale-125 transition-transform
              ${i === 0 ? "bg-orange-500 text-white" : "bg-orange-500 text-white border"}`}
          >
            {icon}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ContactUs;