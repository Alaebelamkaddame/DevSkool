import {Routes, Route} from 'react-router-dom'
import HomePage from './Component/HomePage'
import Courses from './Component/Courses'
import ContactUs from './Component/ContactUs'
import Blog from './Component/Blog'
import Instructor from './Component/Instructor'
import Login from './Component/Login'
import Register from './Component/Register'
import DetailsCourse from './Component/DetailsCourse'
import DetailsBlog from './Component/DetailsBlog'
import Dashboard from './Dashboard/Dashboard'
import LoginD from './Dashboard/loginD'
import MainLayout from "./layouts/MainLayout"
import DashboardLayout from "./layouts/DashboardLayout"
import SeeInstructors from './Dashboard/SeeInstructors'
import SeeStudent from './Dashboard/SeeStudent'
import AddInstructor from './Dashboard/AddInstructor'
import RemoveStudent from './Dashboard/RemoveStudent'
import SeeCourses from './Dashboard/SeeCourses'
import AddCourseForm from './Dashboard/AddCourseForm'
import CategoryFilter from './Component/CategoryFilter'

function App() {

  

  return (
  <>
    <Routes>
      {/* Layout with Navbar + Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<div className="container overflow-x-hidden scroll-mx-0 mx-auto px-6 lg:px-8"><HomePage /></div>} />
        <Route path="/Courses" element={<div className="container overflow-x-hidden mx-auto px-4 sm:px-6 lg:px-8"><Courses /></div>} />
        <Route path="/ContactUs" element={<div className="container mx-auto px-4 overflow-x-hidden sm:px-6 lg:px-8"><ContactUs /></div>} />
        <Route path="/Instructor" element={<div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden"><Instructor /></div>} />
        <Route path="/Login" element={<div className="container overflow-x-hidden  mx-auto px-4 sm:px-6 lg:px-8"><Login /></div>} />
        <Route path="/Register" element={<div className="container overflow-x-hidden mx-auto px-4 sm:px-6 lg:px-8"><Register /></div>} />
        <Route path="/Courses/:id" element={<div className="w-full overflow-x-hidden mx-auto px-4 sm:px-6 lg:px-8"><DetailsCourse /></div>} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Blog/:id" element={<div className="container mx-auto px-6"><DetailsBlog /></div>} />
      </Route>

      {/* Layout without Navbar/Footer */}
      <Route path="/Dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="loginD" element={<LoginD />} />
        <Route path="SeeInstructors" element={<SeeInstructors />} />
        <Route path="SeeStudent" element={<SeeStudent />} />
        <Route path="AddInstructor" element={<AddInstructor />} />
        <Route path="RemoveStudent" element={<RemoveStudent />} />
        <Route path="SeeCourses" element={<SeeCourses />} />
        <Route path="AddCourseForm" element={<AddCourseForm />} />
      </Route>
    </Routes>
  </>
  )
}

export default App
