import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryFilter from '../Component/CategoryFilter';

function SeeCourses() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 16;
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    "Web Development",
    "Data Science",
    "Mobile Development",
    "AI & Machine Learning",
    "Cyber Security",
  ];

  const courses = [
    {
      id: 1,
      title: "Front-end Development",
      level: "Beginner to Advanced",
      image: "https://tolustar.com/wp-content/uploads/2020/02/Front-end-Development.jpeg",
      Instructor: "Alae Belam",
      price: "49",
      rating: "3.5",
      numberOfStudents: "200",
      category: "Web Development"
    },
    {
      id: 2,
      title: "Back-end Development",
      level: "Beginner to Advanced",
      image: "https://ddi-dev.com/uploads/backend-is.png",
      Instructor: "Ali Belam",
      price: "60",
      rating: "4.5",
      numberOfStudents: "120",
      category: "Web Development"
    },
    {
      id: 3,
      title: "SQL Mastery",
      level: "Intermediate",
      image: "https://www.nexustech.je/media/yyaacx1w/sql-1.png",
      Instructor: "Brocode",
      price: "30",
      rating: "4.0",
      numberOfStudents: "89",
      category: "Data Science"
    },
    {
      id: 4,
      title: "DevOps Fundamentals",
      level: "Beginner to Advanced",
      image: "https://devopedia.org/images/article/54/7602.1513404277.png",
      Instructor: "Mosh",
      price: "45",
      rating: "3.0",
      numberOfStudents: "124",
      category: "Web Development"
    },
    {
      id: 5,
      title: "Git and GitHub Complete Guide",
      level: "Beginner",
      image: "https://www.biteinteractive.com/wp-content/uploads/2021/05/git-vs-github.png",
      Instructor: "Alae Belam",
      price: "29",
      rating: "5.0",
      numberOfStudents: "340",
      category: "Web Development"
    },
    {
      id: 6,
      title: "AI for Beginners",
      level: "Beginner",
      image: "https://www.htx.gov.sg/images/default-source/news/2024/ai-article-1-banner-shot-min.jpg",
      Instructor: "Zero Web",
      price: "39",
      rating: "4.5",
      numberOfStudents: "145",
      category: "AI & Machine Learning"
    },
    {
      id: 7,
      title: "React Native Mobile Development",
      level: "Intermediate",
      image: "https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png",
      Instructor: "CodeWithHarry",
      price: "35",
      rating: "4.7",
      numberOfStudents: "210",
      category: "Mobile Development"
    },
    {
      id: 8,
      title: "Python for Data Analysis",
      level: "Beginner",
      image: "https://www.python.org/static/community_logos/python-logo.png",
      Instructor: "Programming Hub",
      price: "25",
      rating: "4.8",
      numberOfStudents: "500",
      category: "Data Science"
    },
    {
      id: 9,
      title: "Machine Learning Basics",
      level: "Intermediate",
      image: "https://www.blumeglobal.com/media/wp-content/uploads/2018/11/shutterstock_344688470-scaled.jpg?width=800&rnd=133498791085430000",
      Instructor: "Data Science Pro",
      price: "55",
      rating: "4.3",
      numberOfStudents: "180",
      category: "AI & Machine Learning"
    },
    {
      id: 10,
      title: "Cybersecurity Essentials",
      level: "Beginner",
      image: "https://www.bitlyft.com/hubfs/Cybersecurity-solutions.jpeg",
      Instructor: "Security Guru",
      price: "65",
      rating: "4.9",
      numberOfStudents: "95",
      category: "Cyber Security"
    },
    {
      id: 11,
      title: "Flutter Mobile Development",
      level: "Advanced",
      image: "https://miro.medium.com/v2/resize:fit:1400/1*5-aoK8IBmXve5whBQM90GA.png",
      Instructor: "Flutter Expert",
      price: "40",
      rating: "4.6",
      numberOfStudents: "150",
      category: "Mobile Development"
    },
    {
      id: 12,
      title: "Big Data Fundamentals",
      level: "Intermediate",
      image: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
      Instructor: "Container Master",
      price: "50",
      rating: "4.4",
      numberOfStudents: "110",
      category: "Data Science"
    },
    {
      id: 13,
      title: "Advanced JavaScript Patterns",
      level: "Advanced",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      Instructor: "JS Wizard",
      price: "45",
      rating: "4.7",
      numberOfStudents: "230",
      category: "Web Development"
    },
    {
      id: 14,
      title: "iOS Development with SwiftUI",
      level: "Beginner",
      image: "https://supersourcing.com/blog/wp-content/uploads/2023/01/Introduction-to-iOS-App-Development-with-SwiftUI_blog-images.png",
      Instructor: "Design Pro",
      price: "35",
      rating: "4.5",
      numberOfStudents: "175",
      category: "Mobile Development"
    },
    {
      id: 15,
      title: "Neural Networks Deep Dive",
      level: "Intermediate",
      image: "https://i.ytimg.com/vi/jan9mE0_Hr4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA6AnIpV4Fk2RjBa-cyWvyYNt_O0w",
      Instructor: "Crypto Expert",
      price: "70",
      rating: "4.2",
      numberOfStudents: "85",
      category: "AI & Machine Learning"
    },
    {
      id: 16,
      title: "Ethical Hacking Advanced",
      level: "Advanced",
      image: "https://miro.medium.com/v2/resize:fit:1400/1*KpDOKMFAgDWaGTQHL0r70g.png",
      Instructor: "CS Professor",
      price: "55",
      rating: "4.9",
      numberOfStudents: "300",
      category: "Cyber Security"
    },
    {
      id: 17,
      title: "Vue.js Masterclass",
      level: "Intermediate",
      image: "https://angular.io/assets/images/logos/angular/angular.png",
      Instructor: "Framework Master",
      price: "40",
      rating: "4.3",
      numberOfStudents: "125",
      category: "Web Development"
    },
    {
      id: 18,
      title: "Data Visualization with Python",
      level: "Beginner to Advanced",
      image: "https://media.geeksforgeeks.org/wp-content/uploads/20240826131231/Python--Data-Visualization-Tutorial.webp",
      Instructor: "Cloud Architect",
      price: "60",
      rating: "4.6",
      numberOfStudents: "190",
      category: "Data Science"
    },
    {
      id: 19,
      title: "Android Kotlin Development",
      level: "Intermediate",
      image: "https://cdn-images-1.medium.com/max/1600/1*99YiKjwB2TliKVA-yGogNQ.png",
      Instructor: "Apple Dev Expert",
      price: "65",
      rating: "4.4",
      numberOfStudents: "140",
      category: "Mobile Development"
    },
    {
      id: 20,
      title: "Penetration Testing",
      level: "Advanced",
      image: "https://www.hurix.com/wp-content/uploads/2022/05/penetration-1.jpg",
      Instructor: "White Hat Hacker",
      price: "75",
      rating: "4.8",
      numberOfStudents: "110",
      category: "Cyber Security"
    }
  ];

  const deleteStudent = () => {
    alert("Student removed");
  };

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = `${course.title} ${course.instructor} ${course.level}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory = activeCategory
      ? course.category === activeCategory
      : true;

    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * coursesPerPage,
    currentPage * coursesPerPage
  );

  return (
    <div className="p-6">
      <h1 className="font-extrabold text-6xl py-5 text-orange-500">Courses list</h1>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search courses..."
        className="mb-6 p-2 border rounded w-full max-w-xl"
      />

      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={(category) => {
          setActiveCategory(category);
          setCurrentPage(1);
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 justify-center">
        {paginatedCourses.map((course) => (
          <Link to={`/courses/${course.id}`} key={course.id}>
            <div className="my-10 max-w-xs h-115 rounded-xl overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-1 font-medium">{course.rating}</span>
                </div>

                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.level}</p>

                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-700">{course.instructor}</span>
                  <span className="font-bold text-lg">${course.price}</span>
                </div>

                <div className="flex justify-between gap-2">
                  <button
                    onClick={deleteStudent}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md text-sm font-semibold"
                  >
                    Delete
                  </button>
                  <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-semibold">
                    Update
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button
          className={`cursor-pointer px-4 py-2 border rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="px-4 py-2 font-bold">{currentPage} / {totalPages}</span>
        <button
          className={`cursor-pointer px-4 py-2 border rounded ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default SeeCourses;
