import React from 'react'

function AddInstructor() {
  return (
    <>
        <h1 className='font-extrabold text-6xl py-5 text-orange-500'>Add Instructor </h1>
        <form>
            {/* ID Field */}
            <div className="mb-4">
            <label className="block text-orange-500 text-sm font-bold mb-2" htmlFor="id">
                User ID
            </label>
            <input
                type="text"
                id="id"
                name="id"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="user_abc123"
            />
            </div>

            {/* Name Field */}
            <div className="mb-4">
            <label className="block text-orange-500 text-sm font-bold mb-2" htmlFor="name">
                Name
            </label>
            <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="John Doe"
            />
            </div>

            {/* Bio Field */}
            <div className="mb-4">
            <label className="block text-orange-500 text-sm font-bold mb-2" htmlFor="bio">
                Bio
            </label>
            <textarea
                id="bio"
                name="bio"
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Senior Frontend Engineer"
            />
            </div>

            {/* Avatar URL Field */}
            <div className="mb-4">
            <label className="block text-orange-500 text-sm font-bold mb-2" htmlFor="avatarUrl">
                Avatar URL
            </label>
            <input
                type="url"
                id="avatarUrl"
                name="avatarUrl"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="https://example.com/avatar.jpg"
            />
            </div>

            {/* Courses Field - Select Input */}
            <div className="mb-6">
            <label className="block text-orange-500 text-sm font-bold mb-2" htmlFor="courses">
                Courses
            </label>
            <select
                id="courses"
                name="courses"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
            >
                <option value="course1" className='hover:bg-orange-500'>Introduction to React</option>
                <option value="course2" className='hover:bg-orange-500'>Advanced JavaScript</option>
                <option value="course3" className='hover:bg-orange-500'>Tailwind CSS Fundamentals</option>
                <option value="course4" className='hover:bg-orange-500'>Node.js Basics</option>
                <option value="course5" className='hover:bg-orange-500'>Database Design</option>
            </select>
            </div>

            {/* Submit Button */}
            <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md"
            >
            Save Profile
            </button>
        </form>
    </>
  )
}

export default AddInstructor